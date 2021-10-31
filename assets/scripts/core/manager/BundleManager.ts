import { AppConfig } from "../../AppConfig";
import LogManager from "./LogManager";

export default class BundleManager {

    private _version: "1.0.0";

    private static _ins: BundleManager = null;

    private _bundleMap: Map<string, cc.AssetManager.Bundle> = new Map();

    private _bundleResMap: any = {};

    static getInstance(): BundleManager {
        if (!this._ins) {
            this._ins = new BundleManager();
        }
        return this._ins;
    }

    getVersion() {
        return this._version;
    }

    private load(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            cc.assetManager.loadBundle(AppConfig.bundleUrl, (err: any, bundle: cc.AssetManager.Bundle) => {
                if (err) {
                    LogManager.getInstance().log("[BundleManager] init bundle res faild.");
                } else {
                    console.log("[BundleManager] bundle : ", bundle);
                    LogManager.getInstance().log("[BundleManager] init bundle res success.");
                    BundleManager.getInstance().saveBundleByName(bundle, AppConfig.bundleUrl);
                    resolve(true);
                }
            });
        });
    }

    async loadBundle() {
        if (AppConfig.EvnType === AppConfig.EvnEnum.publish) {
            AppConfig.bundleUrl = AppConfig.bundleUrl + this._version + "/" + "res/";
        }
        console.log("[BundleManager] AppConfig.bundleUrl : ", AppConfig.bundleUrl);
        return await this.load();
    }

    /**
     * 保存bundle
     */
    saveBundleByName(bundle: cc.AssetManager.Bundle, bundleName: string) {
        if (!this._bundleMap[bundleName]) {
            this._bundleMap[bundleName] = bundle;
            this._bundleResMap[bundleName] = {};
        } else {
            console.log("[BundleManager] error : cur " + bundleName + " exist; Need to reset please first remove");
        }
    }

    /**
     * 获取bundle
     */
    getBundleByName(bundleName: string): cc.AssetManager.Bundle {
        if (!this._bundleMap[bundleName]) {
            console.log("[BundleManager] not found " + bundleName + " bundle.");
            return null;
        }
        return this._bundleMap[bundleName];
    }

    /**
     * 获取Bundle所对应的资源对象列表
     * @param bundleName
     */
    getBundleResListByName(bundleName: string) {
        if (!this._bundleResMap[bundleName]) {
            console.log("[BundleManager] not found " + bundleName + " bundleRes.");
            return null;
        }
        return this._bundleResMap[bundleName];
    }

    /**
     * 获取Bundle对应资源列表中的单个资源
     */
    getBundleSignByName(bundleName: string, signName: string) {
        let reslist = this.getBundleResListByName(bundleName);
        if (reslist && reslist[signName]) {
            return reslist[signName];
        }
        return null;
    }

    /**
     * 根据BundleName加载单个资源
     */
    loadSignResByBundleName(bundleName: string, res: ss.LOAD_RES_STRUCT) {
        return new Promise((resolve, reject) => {
            let bundle: cc.AssetManager.Bundle = this._bundleMap[bundleName];
            if (bundle) {
                if (this.getBundleSignByName(bundleName, res.path)) {
                    resolve(this.getBundleSignByName(bundleName, res.path));
                }
                let resType = null;
                if (res.ex === "cc.Prefab") {   // 预制体
                    resType = cc.Prefab;
                } else if (res.ex === "cc.AudioClip") { // 声音
                    resType = cc.AudioClip;
                } else if (res.ex === "cc.SpriteFrame") { // 图片
                    resType = cc.SpriteFrame;
                } else if (res.ex === "sp.SkeletonData") { // 骨骼
                    resType = sp.SkeletonData;
                } else if (res.ex === "cc.SpriteAtlas") { // 图集
                    resType = cc.SpriteAtlas;
                }
                if (resType) {
                    bundle.load(res.path, resType, (err, asset) => {
                        if (!err) {
                            this._bundleResMap[bundleName][res.path] = asset;
                            resolve(asset);
                        }
                    });
                }
            };
        });
    }

    /**
     * 根据BundleName加载列表资源
     */
    cacheBundleResList(bundleName: string, resList: Array<ss.LOAD_RES_STRUCT>, callback?: Function) {
        let bundle: cc.AssetManager.Bundle = this._bundleMap[bundleName];
        if (bundle) {
            for (let index = 0; index < resList.length; index++) {
                const element = resList[index];
                if (this.getBundleSignByName(bundleName, element.path)) {
                    callback();
                    continue;
                }
                let resType = null;
                if (element.ex === "cc.Prefab") {   // 预制体
                    resType = cc.Prefab;
                } else if (element.ex === "cc.AudioClip") { // 声音
                    resType = cc.AudioClip;
                } else if (element.ex === "cc.SpriteFrame") { // 图片
                    resType = cc.SpriteFrame;
                } else if (element.ex === "sp.SkeletonData") { // 骨骼
                    resType = sp.SkeletonData;
                } else if (element.ex === "cc.SpriteAtlas") { // 图集
                    resType = cc.SpriteAtlas;
                }
                if (resType) {
                    bundle.load(element.path, resType, (err, asset) => {
                        if (!err) {
                            this._bundleResMap[bundleName][element.path] = asset;
                            callback();
                        }
                    });
                }
            }
        }
    }


    /**
     * 释放bundle加载的所有资源
     */
    releaseBundleByName(bundleName: string) {
        if (!this._bundleMap[bundleName]) {
            console.log("[BundleManager] releaseBundleByName faild, because the not found " + bundleName + " bundle.");
        } else {
            this._bundleMap[bundleName].releaseAll();
            cc.assetManager.removeBundle(this._bundleMap[bundleName]);
            this._bundleMap[bundleName] = null;
            this._bundleResMap[bundleName] = {};
            console.log("[BundleManager] remove " + bundleName + " bundle success.");
        }
    }

    /**
     * 释放bundle加载的单个资源
     */
    releaseBundleSignResByName(bundleName: string, res: ss.LOAD_RES_STRUCT) {
        if (!this._bundleMap[bundleName]) {
            console.log("[BundleManager] releaseBundleSignResByName faild, because the not found " + bundleName + " bundle.");
        } else {
            let bundle: cc.AssetManager.Bundle = this._bundleMap[bundleName];
            bundle.release(res.path);
            this._bundleResMap[bundleName][res.path] = null;
            console.log("[BundleManager] releaseBundleSignResByName " + res.path + " success.");
        }
    }

    /**
     * 释放bundle加载的资源列表
     */
    releaseBundleReslistByName(bundleName: string, resList: Array<ss.LOAD_RES_STRUCT>) {
        if (!this._bundleMap[bundleName]) {
            console.log("[BundleManager] releaseBundleReslistByName faild, because the not found " + bundleName + " bundle.");
        } else {
            let bundle: cc.AssetManager.Bundle = this._bundleMap[bundleName];
            for (let index = 0; index < resList.length; index++) {
                const element = resList[index];
                bundle.release(element.path);
                this._bundleResMap[bundleName][element.path] = null;
                console.log("[BundleManager] releaseBundleSignResByName " + element.path + " success.");
            }
        }
    }

}
