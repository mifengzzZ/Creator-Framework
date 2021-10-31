import { AppConfig } from "../../AppConfig";
import { BundleResCfg } from "../../config/ResConfig";
import BundleManager from "./BundleManager";
import DonotTouchManager from "./DonotTouchManager";
import LogManager from "./LogManager";
import SceneManager from "./SceneManager";

export default class LoadingManager {

    private _loadingView: any = null;
    private _timeOut: number = 20;
    private _timer: any = null;
    private _loadingCount: number = 0;
    private _bundleRes: BundleManager = BundleManager.getInstance();

    private static _ins: LoadingManager = null;

    static getInstance(): LoadingManager {
        if (!this._ins) {
            this._ins = new LoadingManager();
        }
        return this._ins;
    }

    /**
     * 显示正在加载界面
     */
    async showLoadingView() {
        if (!this._loadingView) {
            let prefab = this._bundleRes.getBundleSignByName(AppConfig.bundleUrl, BundleResCfg.loadingview.path)
            if (!prefab) {
                DonotTouchManager.getInstance().showDonotTouchView();
            }
            prefab = await BundleManager.getInstance().loadSignResByBundleName(AppConfig.bundleUrl, BundleResCfg.loadingview);
            this._loadingView = cc.instantiate(prefab);
            let anim: cc.Animation = this._loadingView.getComponent(cc.Animation);
            let animState = anim.play("loading_animation_zhuan");
            animState.wrapMode = cc.WrapMode.Loop;
            SceneManager.getInstance().curSceneScript.popNode.addChild(this._loadingView, 999);
            this._timer = setTimeout(() => {
                this.clearLoadingView();
            }, this._timeOut * 1000);
            DonotTouchManager.getInstance().hideDonotTouchView();
        }
        this._loadingCount += 1;
        cc.log("LoadingView count ++ " + this._loadingCount);
    }

    /**
     * 隐藏一次正在加载界面
     */
    hideLoadingView() {
        if (this._loadingView) {
            this._loadingCount--;
            if (this._loadingCount <= 0) {
                this._loadingView.destroy();
                this._loadingView = null;
                if (this._timer !== null) {
                    clearTimeout(this._timer);
                }
                this._timer = null;
            }
            cc.log("LoadingView count -- " + this._loadingCount);
        }
    }

    /**
     * 清空所有正在加载界面
     */
    clearLoadingView() {
        if (this._loadingView) {
            this._loadingCount = 0;
            this._loadingView.destroy();
            this._loadingView = null;
            if (this._timer !== null) {
                clearTimeout(this._timer);
            }
            this._timer = null;
        }
    }

}
