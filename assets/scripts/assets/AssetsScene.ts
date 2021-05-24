/*
 * @Descripttion: 热更新场景
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-05 23:36:31
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import { AppConfig } from "../AppConfig";
//------------------------------------------------------------------------------------

const {ccclass, property} = cc._decorator;

@ccclass
export default class AssetsScene extends cc.Component {

    @property(cc.Asset)
    manifestUrl = null;

    _storagePath : string = "";
    _am : any = null;
    _updateListener : any = null;
    _updating : boolean = false;
    _canRetry : boolean = false;
    _progress : number = 0;

    _tips : cc.Node = null;
    _updatePanel : cc.Node = null;
    _updatePanelTxBg : cc.Node = null;
    _upPanelTx : cc.Label = null;
    _upPanelProgressBar : cc.ProgressBar = null;
    _upPanel_progressTx : cc.Label = null;

    getChildNodeByName (root:any, name:string) : any {
        if (!root) {
            return null;
        }
        if (root.name === name) {
            return root;
        }
        for (let index = 0; index < root.childrenCount; index++) {
            const element = root.children[index];
            let res = this.getChildNodeByName(element, name);
            if (res !== null) {
                return res;
            }
        }
        return null;
    }

    start () {

        let bg = this.getChildNodeByName(this.node, "bg");
        this.scaleBackgroundBG(bg);

        this._tips = this.getChildNodeByName(this.node, "tips");
        this._tips.active = false;

        this._updatePanel = this.getChildNodeByName(this.node, "updatePanel");
        this._updatePanelTxBg = this.getChildNodeByName(this.node, "upPanel_txbg");
        this._upPanelTx = this.getChildNodeByName(this.node, "upPanel_tx");
        let progress = this.getChildNodeByName(this.node, "upPanel_Progressbar");
        this._upPanel_progressTx = this.getChildNodeByName(this.node, "upPanel_progressTx").getComponent(cc.Label);;
        this._upPanelProgressBar = progress.getComponent(cc.ProgressBar);
        this._upPanelProgressBar.progress = 0;

        this.getLoginServerConfig();
    }

    /**
     * 获取登陆服务器配置
     */
    getLoginServerConfig () {
        // 请求之前还欠缺网络是否可用,不可用弹出提示,让用户检查网络
        let req = new XMLHttpRequest();
        req.open("GET", AppConfig.loginConfigUrl, true);
        req.onreadystatechange = () => {
            cc.log("req.readyState : ", req.readyState);
            cc.log("req.status : ", req.status);
            if (req.readyState === 4 && (req.status >= 200 && req.status < 400)) {
                let json = JSON.parse(req.responseText);
                cc.log("req.responseText : ", req.responseText);
                let g_server = json[AppConfig.appName];
                if (g_server) {
                    if (AppConfig.EvnType === AppConfig.EvnEnum.publish) {
                        AppConfig.webServerUrl = g_server.webUrl;
                        AppConfig.loginServerIP = g_server.loginIp;
                        AppConfig.loginServerPort = g_server.loginPort;
                        AppConfig.bundleUrl = g_server.bundleUrl;
                        AppConfig.whitePlayerList = g_server.whitePlayerList;
                    }
                    if (!AppConfig.isNotUpdate) {
                        this.jumpToLoginScene();
                    } else {
                        if (g_server.whiteUpSwitch) {
                            let aid = cc.sys.localStorage.getItem("userAid");
                            if (aid && typeof aid === "string") {
                                let isNotPlayer = false;
                                for (let index = 0; index < g_server.whitePlayerList.length; index++) {
                                    const id = g_server.whitePlayerList[index];
                                    if (id === Number(aid)) {
                                        isNotPlayer = true;
                                        break;
                                    }
                                }
                                if (isNotPlayer) {
                                    cc.log("测试人员白名单热更新");
                                    this.startHotUpdate();
                                } else {
                                    if (jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "/remote-asset/version.manifest")) {
                                        cc.log("本地有热更新版本,可以游戏!");
                                        this.jumpToLoginScene();
                                    } else {
                                        cc.log("重置更新与新用户可以更新到发布版本");
                                        this.startHotUpdate();
                                    }
                                }
                            } else {
                                cc.log("白名单热更新");
                                this.startHotUpdate();
                            }
                        } else {
                            cc.log("正常热更新");
                            this.startHotUpdate();
                        }
                    } 
                } else {
                    this.showTips("获取远程服务器配置信息失败,请重试!", () => {
                        this.getLoginServerConfig();
                    });
                }
            }
        };
        req.send();
    }

    /**
     * 开始检测热更
     */
    startHotUpdate () {
        if (!cc.sys.isNative) {
            this.jumpToLoginScene();
            return;
        }

        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset");
        cc.log("Storage path for remote asset : " + this._storagePath);

        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);
        this._am.setVerifyCallback((path:any, asset:any) => {
            let compressed = asset.compressed;
            let expectedMD5 = asset.md5;
            let relativePath = asset.path;
            let size = asset.size;
            if (compressed) {
                return true;
            }else {
                return true;
            }
        });

        // 如果是安卓设备,当并发任务过多时(某些设备),可能会减慢下载过程
        // 该值根据游戏多次调试可找出最适合的并发数值
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            this._am.setMaxConcurrentTask(2);
        }

        if (this._am && !this._updating) {
            this._am.setEventCallback(this.updateCb.bind(this));
            this._updateListener = true;
            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                let url = this.manifestUrl.nativeUrl;
                this._am.loadLocalManifest(url);
            }
            this._am.update();
            this._updating = true;
        }
    }

    /**
     * 版本对比函数
     */
    versionCompareHandle (versionA:any, versionB:any) {
        cc.log("JS Custom Version Compare : version A is " + versionA + ", version B is " + versionB);
        let vA = versionA.split('.');
        let vB = versionB.split('.');
        for (let i = 0; i < vA.length; i++) {
            let a = parseInt(vA[i]);
            let b = parseInt(vB[i] || 0);
            if (a === b) {
                continue;
            } else {
                return a - b;
            }
        }
        if (vB.length > vA.length) {
            return -1;
        } else {
            return 0;
        }
    }

    /**
     * 热更新回调
     */
    updateCb ( event:any ) {
        let needRestart = false;
        let failed = false;
        let failedType = "";
        switch (event.getEventCode())
        {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                cc.log("缺少本地热更新配置文件 Manifest");
                failed = true;
                failedType = "缺少本地热更新配置文件 Manifest";
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                this._upPanelProgressBar.progress = event.getPercent();
                const downloadedMegabyte = event.getDownloadedBytes() / (1024 * 1024);
                const totalMegabyte = event.getTotalBytes() / (1024 * 1024);
                let progressTx = downloadedMegabyte.toFixed(2) + "MB / " + totalMegabyte.toFixed(2) + "MB";
                cc.log("更新 : ", progressTx);
                this._upPanel_progressTx.string = progressTx;
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                cc.log("下载配置文件失败");
                failedType = "下载配置文件失败,点击确定重试!";
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                cc.log("解析配置文件失败");
                failed = true;
                failedType = "解析配置文件失败";
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                cc.log("当前为最新版本");
                this.jumpToLoginScene();
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                cc.log("更新完成");
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                cc.log("更新失败 : " , event.getMessage());
                this._updating = false;
                this._canRetry = true;
                failedType = "更新失败,点击确定重试!";
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                cc.log("下载异常 : ", event.getAssetId() + ", " + event.getMessage());
                failedType = "下载异常";
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                cc.log("解压失败");
                failedType = "解压失败";
                this._updating = false;
                this._canRetry = true;
                break;
            default:
                break;
        }

        if (failed) {
            this._am.setEventCallback(null);
            this._updateListener = null;
            this._updating = false;
            this.showTips(failedType);
        }

        if (needRestart) {
            this._am.setEventCallback(null);
            this._updateListener = null;
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            cc.log("----------------- >>> ", JSON.stringify(newPaths));
            cc.log("----------------- >>> ", this._updating);
            cc.log("----------------- >>> ", this._canRetry);
            cc.log("----------------- >>> ", failed);
            Array.prototype.unshift.apply(searchPaths, newPaths);
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            cc.audioEngine.stopAll();
            cc.log("重启");
            cc.game.restart();
        }

        if (!this._updating && this._canRetry) {
            this.showTips(failedType, () => {
                this._canRetry = false;
                this._am.downloadFailedAssets();       
            });
        }
    }

    /**
     * 显示提示文本
     */
    showTips (content:string, continueCall?:any, cancelCall?:any) {
        let tx = this.getChildNodeByName(this._tips, "content");
        tx.getComponent(cc.Label).string = content;
        let cancelBtn = this.getChildNodeByName(this._tips, "cancel");
        let continueBtn = this.getChildNodeByName(this._tips, "continue");
        if (cancelCall) {
            cancelBtn.active = false;
            continueBtn.x = 0;
        } else {
            cancelBtn.active = true;
            cancelBtn.x = -100;
            continueBtn.x = 100;
        }
        if (continueCall) {
            continueBtn.active = false;
        }
        continueBtn.on("click", () => {
            this._tips.active = false;
            continueCall();
        });
        cancelBtn.on("click", () => {
            this._tips.active = false;
            cancelCall();
        });
        this._tips.active = true;
    }

    jumpToLoginScene ( ) {
        cc.director.loadScene("LoginScene", (err:any, scene:any) => {
            let container = scene.children[0];
            let script = container.addComponent("LoginScene");
            //@ts-ignore
            script.setSceneType("login");
        });
    }

    onDestroy () {
        if (this._updateListener) {
            this._am.setEventCallback(null);
            this._updateListener = null;
        }
    }

    scaleBackgroundBG ( node:cc.Node ) {
        let showAll = Math.min(cc.view.getCanvasSize().width / node.width, cc.view.getCanvasSize().height / node.height);
        let realWidth = node.width * showAll;
        let realHeight = node.height * showAll;
        node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
    }

}
