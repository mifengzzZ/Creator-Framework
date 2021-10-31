import SceneManager from "./SceneManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DonotTouchManager {

    private _notClickView: cc.Node = null;

    private static _ins: DonotTouchManager = null;

    static getInstance(): DonotTouchManager {
        if (!this._ins) {
            this._ins = new DonotTouchManager();
        }
        return this._ins;
    }

    showDonotTouchView() {
        if (!this._notClickView) {
            this._notClickView = new cc.Node();
            this._notClickView.setContentSize(cc.winSize);
            this._notClickView.on('click', () => { });
            SceneManager.getInstance().curSceneScript.loadNode.addChild(this._notClickView);
        } else {
            if (!this._notClickView.active) {
                this._notClickView.active = true;
                setTimeout(this.hideDonotTouchView, 10);
            }
        }
    }

    hideDonotTouchView() {
        if (cc.isValid(this._notClickView)) {
            this._notClickView.active = false;
        } else {
            this._notClickView = null;
        }
    }

}
