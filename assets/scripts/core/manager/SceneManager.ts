import SceneInfo from "../package/SceneInfo";
import EventManager from "./EventManager";
import EventInfo from "../package/EventInfo";
import { EventConfig } from "../../config/EventConfig";
import SceneBase from "../external/SceneBase";
import DonotTouchManager from "./DonotTouchManager";
import BundleManager from "./BundleManager";
import { AppConfig } from "../../AppConfig";

export default class SceneManager {

    private static _ins: SceneManager = null;

    private _curSceneType: string = "";

    private _curSceneScript: SceneBase = null;

    _createList: any = {};

    static getInstance(): SceneManager {
        if (!this._ins) {
            this._ins = new SceneManager();
        }
        return this._ins;
    }

    /**
     * 注册场景
     * @param SceneType 
     * @param sceneInfo 
     */
    registerCreator(SceneType: string, sceneInfo: SceneInfo) {
        if (!this._createList[SceneType]) {
            this._createList[SceneType] = sceneInfo;
        }
    }

    /**
     * 切场景
     */
    replaceScene(sceneType: string, userData?: any) {
        if (sceneType && this._createList[sceneType]) {
            DonotTouchManager.getInstance().showDonotTouchView();
            let info: SceneInfo = this._createList[sceneType];
            // 清理所有弹窗
            EventManager.getInstance().dispatchEvent(new EventInfo(EventConfig.SCENE_CHANGE));
            let bd: cc.AssetManager.Bundle = BundleManager.getInstance().getBundleByName(AppConfig.bundleUrl);
            if (bd) {
                bd.loadScene(info.firePath, (err: Error, asset: cc.SceneAsset) => {
                    DonotTouchManager.getInstance().hideDonotTouchView();
                    let scene = asset.scene;
                    // 绑定组件脚本
                    let container = scene.children[0];
                    let script = container.addComponent(info.tsPath);
                    this._curSceneType = sceneType;
                    this._curSceneScript = script;
                    //@ts-ignore
                    script.setSceneType(sceneType);
                    if (userData) {
                        //@ts-ignore
                        script.setUserData(userData);
                    }
                    cc.director.runScene(scene);
                })
            }
        } else {
            cc.log("ERROR: invaild scene type = ", sceneType);
        }
    }

    /**
     * 获取当前场景类型
     */
    getCurSceneType(): string {
        return this._curSceneType;
    }

    /**
     * 设置当前场景类型
     */
    setCurSceneType(sceneType: string) {
        this._curSceneType = sceneType;
    }


    public set curSceneScript(v: SceneBase) {
        this._curSceneScript = v;
    }

    public get curSceneScript(): SceneBase {
        return this._curSceneScript;
    }

}