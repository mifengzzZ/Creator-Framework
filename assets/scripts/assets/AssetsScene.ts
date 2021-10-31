import { AppConfig } from "../AppConfig";
import { ConstConfig } from "../config/ConstConfig";
import { ResScene } from "../config/ResConfig";
import { SceneConfig } from "../config/SceneConfig";
import SceneBase from "../core/external/SceneBase";
import SceneInfo from "../core/package/SceneInfo";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AssetsScene extends SceneBase {

    @property(cc.Asset)
    manifestUrl = null;

    _storagePath: string = "";
    _am: any = null;
    _updateListener: any = null;
    _updating: boolean = false;
    _canRetry: boolean = false;
    _progress: number = 0;

    _tips: cc.Node = null;
    _updatePanel: cc.Node = null;
    _updatePanelTxBg: cc.Node = null;
    _upPanelTx: cc.Label = null;
    _upPanelProgressBar: cc.ProgressBar = null;
    _upPanel_progressTx: cc.Label = null;

    init() {
        this.sceneManager.registerCreator(SceneConfig.LOGIN, new SceneInfo("LoginScene", ResScene.LOGINSCENE));

        this._tips = this.toolUtils.getNodeByName(this.node, "tips");
        this._tips.active = false;

        this._updatePanel = this.toolUtils.getNodeByName(this.node, "updatePanel");
        this._updatePanelTxBg = this.toolUtils.getNodeByName(this.node, "upPanel_txbg");
        this._upPanelTx = this.toolUtils.getNodeByName(this.node, "upPanel_tx");
        let progress = this.toolUtils.getNodeByName(this.node, "upPanel_Progressbar");
        this._upPanel_progressTx = this.toolUtils.getNodeByName(this.node, "upPanel_progressTx").getComponent(cc.Label);;
        this._upPanelProgressBar = progress.getComponent(cc.ProgressBar);
        this._upPanelProgressBar.progress = 0;

        if (!AppConfig.isNotUpdate) {
            this.jumpToLoginScene();
        } else {
            if (AppConfig.whiteUpSwitch) {
                let aid = cc.sys.localStorage.getItem(ConstConfig.USERAID_STORAGE);
                if (aid && typeof aid === "string") {
                    let isNotPlayer = false;
                    for (let index = 0; index < AppConfig.whitePlayerList.length; index++) {
                        const id = AppConfig.whitePlayerList[index];
                        if (id === Number(aid)) {
                            isNotPlayer = true;
                            break;
                        }
                    }
                    if (isNotPlayer) {
                        console.log("测试人员白名单热更新");
                        this.startHotUpdate();
                    } else {
                        if (jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "/remote-asset/version.manifest")) {
                            cc.log("本地有热更版本,可以游戏!");
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
                console.log("正常热更新");
                this.startHotUpdate();
            }
        }
    }

    /**
     * 开始检测热更
     */
    startHotUpdate() {
        if (!cc.sys.isNative) {
            this.jumpToLoginScene();
            return;
        }

        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset");
        cc.log("Storage path for remote asset : " + this._storagePath);

        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);
        this._am.setVerifyCallback((path: any, asset: any) => {
            let compressed = asset.compressed;
            let expectedMD5 = asset.md5;
            let relativePath = asset.path;
            let size = asset.size;
            if (compressed) {
                return true;
            } else {
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
    versionCompareHandle(versionA: any, versionB: any) {
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
    updateCb(event: any) {
        let needRestart = false;
        let failed = false;
        let failedType = "";
        switch (event.getEventCode()) {
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
                cc.log("更新失败 : ", event.getMessage());
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
    showTips(content: string, continueCall?: any, cancelCall?: any) {
        let tx = this.toolUtils.getNodeByName(this._tips, "content");
        tx.getComponent(cc.Label).string = content;
        let cancelBtn = this.toolUtils.getNodeByName(this._tips, "cancel");
        let continueBtn = this.toolUtils.getNodeByName(this._tips, "continue");
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

    jumpToLoginScene() {
        this.sceneManager.replaceScene(SceneConfig.LOGIN);
    }

    onDestroy() {
        if (this._updateListener) {
            this._am.setEventCallback(null);
            this._updateListener = null;
        }
    }

}
