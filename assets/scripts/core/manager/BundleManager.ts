import { AppConfig } from "../../AppConfig";
import LogManager from "./LogManager";

export default class BundleManager {

    private static _ins : BundleManager = null;

    private _bundleMap : any = {};
    
    private _bundleResMap : any = {};

    private _logUtil : LogManager = LogManager.getInstance();

    static getInstance () : BundleManager {
        if (!this._ins) {
            this._ins = new BundleManager();
        }
        return this._ins;
    }

    /**
     * 通过url缓存bundle资源,并保存
     */
    loadBundleByUrl ( folderPath:string, callback?:any ) {
        cc.assetManager.loadRemote(AppConfig.bundleUrl + folderPath, (err:any, bundle:cc.AssetManager.Bundle) => {
            if (err) {
                return cc.log("[BundleManager] load " + folderPath + " bundle faild.");
            } else {
                cc.log("[BundleManager] load " + folderPath + " bundle success.")
                if (callback) {
                    callback(bundle);
                }
            }
        });
    }

    /**
     * 保存bundle
     */
    saveBundleByName ( bundle:cc.AssetManager.Bundle, bundleName:string ) {
        if (!this._bundleMap[bundleName]) {
            this._bundleMap[bundleName] = bundle;
            this._bundleResMap[bundleName] = {};
        } else {
            cc.log("[BundleManager] error : cur " + bundleName + " exist; Need to reset please first remove");
        }
    }

    /**
     * 获取bundle
     */
    getBundleByName ( bundleName:string ) : cc.AssetManager.Bundle {
        if (!this._bundleMap[bundleName]) {
            cc.log("[BundleManager] not found " + bundleName + " bundle.");
            return null;
        }
        return this._bundleMap[bundleName];
    }

    /**
     * 获取Bundle所对应的资源对象列表
     * @param bundleName
     */
    getBundleResByName ( bundleName:string ) : any {
        if (!this._bundleResMap[bundleName]) {
            cc.log("[BundleManager] not found " + bundleName + " bundleRes.");
            return null;
        }
        return this._bundleResMap[bundleName];
    }

    /**
     * 释放bundle
     */
    removeBundleByName ( bundleName:string ) {
        if (!this._bundleMap[bundleName]) {
            cc.log("[BundleManager] remove faild, because the not found " + bundleName + " bundle.");
        } else {
            this._bundleMap[bundleName].releaseAll();
            cc.assetManager.removeBundle(this._bundleMap[bundleName]);
            this._bundleMap[bundleName] = null;
            this._bundleResMap[bundleName] = {};
            cc.log("[BundleManager] remove " + bundleName + " bundle success.");
        }
    }
    
    /**
     * 缓存bundle索引的资源
     */
    cacheBundleResources ( bundleName:string, resList:any, callback?:Function ) {
        for (let index = 0; index < resList.length; index++) {
            const element = resList[index];
            for (const key in element) {
                this._bundleMap[bundleName].load(element[key].path, element[key].ex, (err, asset) => {
                    this._logUtil.log("element[key].path : " + element[key].path);
                    cc.log("asset : ", asset);
                    this._bundleResMap[bundleName][key] = asset;
                    if (element[key].ex === cc.Prefab || element[key].ex === cc.AudioClip || element[key].ex === sp.SkeletonData || element[key].ex === cc.SpriteAtlas) {
                        asset.addRef(); 
                    }
                    callback();
                });
            }
        }
    }

    /**
     * 通过Bundle获取缓存资源
     */
    getCacheRes ( bundleName:string, res:string ) {
        return this._bundleResMap[bundleName][res];
    }
    
}
