import ViewBase from "../core/external/ViewBase";
import { AppConfig } from "../AppConfig";
import ModelCenter from "../data/ModelCenter";
import GameLoaderManager from "./GameLoaderManager";
import BundleManager from "../core/manager/BundleManager";
import { BdnmAppConfig, BdnmConfig, BdnmMinGameConfig } from "../config/ResConfig";
import { GmCmConfig } from "./config/GameCommonConfig";
import { ViewConfig } from "../config/ViewConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DownLoadGameView extends ViewBase {

    _tips : cc.Node = null;

    _curLoadCount : number = 0;
    _sumLoadCount : number = 0;

    _gmData : any = null;
    
    start () {
        this.initView();
        cc.log("开始下载游戏");
        this._tips = this.toolUtils.getNodeByName(this.node, "tips");
        this._gmData = ModelCenter.getInstance().gameConfigInfo.getGameInfoByGameID(ModelCenter.getInstance().reconnectionInfo.gameId);
        this.getCommonBundleRes();
    }

    getCommonBundleRes () {
        // game common res
        let resCmSumArr = [];
        for (let index = 0; index < GmCmConfig.length; index++) {
            resCmSumArr.push(GmCmConfig[index]);
        }
        this.logUtil.log("游戏公共资源长度 : " + resCmSumArr.length);
        this.logUtil.log("游戏私有资源长度 : " + this._gmData.resConfig.length);
        this._sumLoadCount = resCmSumArr.length + this._gmData.resConfig.length;
        this._tips.getComponent(cc.Label).string = "正在加载游戏资源(此过程不消耗流量):" + this._curLoadCount + "/" + this._sumLoadCount;
        if (AppConfig.platform === 1) {
            this.loadAppBundleCheck(resCmSumArr, AppConfig.bundleUrl + "appgame/remote/" + BdnmAppConfig.common.path + "/" + BdnmAppConfig.common.version + "/" + BdnmAppConfig.common.path);
        } else if (AppConfig.platform === 2) {
            this.loadBundle(resCmSumArr, AppConfig.bundleUrl + "mingame/" + BdnmMinGameConfig.common.path + "/" +  BdnmMinGameConfig.common.version + "/" + BdnmMinGameConfig.common.path);
        }
    }

    /**
     * load bundle
     * @param arr 
     * @param url 
     */
    loadBundleGameCommon (arr:any[], url:string, callfunc:Function) {
        cc.assetManager.loadBundle(url, {onFileProgress: (resData:any) => { this.logUtil.log("onFileProgress : " + resData); }}, (err:any, bundle:cc.AssetManager.Bundle) => {
            if (err) {
                return console.log("[DownloadGameView] load bundle res faild.");
            } else {
                console.log("[DownloadGameView] load bundle res success.");
                BundleManager.getInstance().saveBundleByName(bundle, BdnmConfig.common);
                BundleManager.getInstance().cacheBundleResources(BdnmConfig.common, arr, () => {
                    this._curLoadCount += 1;
                    this.logUtil.log("this._curLoadCount : " + this._curLoadCount);
                    this._tips.getComponent(cc.Label).string = "正在加载游戏资源(此过程不消耗流量):" + this._curLoadCount + "/" + arr.length;
                    if (this._curLoadCount === arr.length) {
                        callfunc();
                    }
                });
            }
        });
    }

    /**
     * 加载私有游戏资源
     */
    loadGameRes () {
        let gameUrl = "";
        if (AppConfig.platform === 1) {
            gameUrl = AppConfig.bundleUrl + "appgame/remote/" + this._gmData.bundleName + "/" +  this._gmData.appBdVer + "/" + this._gmData.bundleName;
        } else if (AppConfig.platform === 2) {
            gameUrl = AppConfig.bundleUrl + "mingame/" + this._gmData.bundleName + "/" +  this._gmData.minGameBdVer + "/" + this._gmData.bundleName;
        }
        cc.assetManager.loadBundle(gameUrl, {onFileProgress: (resData:any) => { cc.log("onFileProgress : ", resData); }}, (err:any, bundle:cc.AssetManager.Bundle) => {
            if (err) {
                return console.log("[DownloadGameView] load bundle res faild.");
            } else {
                console.log("[DownloadGameView] load bundle res success.");
                BundleManager.getInstance().saveBundleByName(bundle, this._gmData.bundleName);
                BundleManager.getInstance().cacheBundleResources(this._gmData.bundleName, this._gmData.resConfig, () => {
                    this._curLoadCount += 1;
                    this.logUtil.log("this._curLoadCount : " + this._curLoadCount);
                    this._tips.getComponent(cc.Label).string = "正在加载游戏资源(此过程不消耗流量):" + this._curLoadCount + "/" + this._sumLoadCount;
                    if (this._curLoadCount === this._sumLoadCount) {
                        this.logUtil.log("所有游戏加载资源完成");
                        let cmBundle = BundleManager.getInstance().getBundleResByName(BdnmConfig.common);
                        let gmBundle = BundleManager.getInstance().getBundleResByName(this._gmData.bundleName);
                        GameLoaderManager.getInstance().connectGameSocket();
                    }
                });
            }    
        });
    }

    /**
     * App 加载 bundle 之前检测发布状态
     * @param arr 
     * @param url 
     */
    loadAppBundleCheck ( arr:any[], url:string ) {
        this.toolUtils.sendHttpRequest("GET", AppConfig.loginConfigUrl, (req) => {
            this.logUtil.log("req.responseText : " + req.responseText);
            let json = JSON.parse(req.responseText);
            json = json[AppConfig.appName];
            if (json.scriptVersion !== AppConfig.version) {
                if (json.whiteUpSwitch) {
                    // 如果是测试人员,则需要更新到最新版本
                    let aid = cc.sys.localStorage.getItem("userAid");
                    if (aid && typeof aid === "string") {
                        let isNotPlayer = false;
                        for (let index = 0; index < AppConfig.whitePlayerList.length; index++) {
                            const id = AppConfig.whitePlayerList[index];
                            if (id === Number(aid)) {
                                isNotPlayer = true;
                                break;
                            }
                        }
                        if (isNotPlayer)
                            this.reset();
                        else
                            this.loadBundle(arr, url);
                    }
                }
            } else {
                this.loadBundle(arr, url);
            }
        });
    }

    loadBundle ( arr:any[], url:string ) {
        // 公共资源是否存在
        if (this.bundleManager.getBundleByName(BdnmConfig.common) !== null) {
            this.logUtil.log("公共Bundle资源已经存在,加载游戏私有部分资源");
            this.loadGameRes();
        } else {
            this.loadBundleGameCommon(arr, url, () => {
                this.logUtil.log("公共Bundle资源加载完成,开始加载游戏私有部分资源");
                this.loadGameRes();
            });
        }
    }

    /**
     * 重启更新
     */
    reset () {
        this.viewManager.showView(ViewConfig.MESSAGE, {
            content : "检测到有新版本更新",
            continueCallBack : () => {
                this.logUtil.log("重启更新");
                cc.game.restart();
            }
        });
    }

}
