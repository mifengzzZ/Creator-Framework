/*
 * @Author: your name
 * @Date: 2021-02-22 08:22:41
 * @LastEditTime: 2021-10-23 16:08:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \TsBasicFrame\assets\scripts\core\external\SceneBase.ts
 */
import { BdnmConfig } from "../../config/ResConfig";
import BundleManager from "../manager/BundleManager";
import EventManager from "../manager/EventManager";
import LogManager from "../manager/LogManager";
import NativeManager from "../manager/NativeManager";
import ResourcesManager from "../manager/ResourcesManager";
import SoundManager from "../manager/SoundManager";
import ViewManager from "../manager/ViewManager";
import ToolUtils from "../utils/ToolUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SceneBase extends cc.Component {

    // 当前场景类型
    _sceneType: string = null;

    // 跳转场景时携带参数
    _userData: any = null;

    toolUtils: ToolUtils = ToolUtils.getInstance();
    viewManager: ViewManager = ViewManager.getInstance();
    eventManager: EventManager = EventManager.getInstance();
    soundManager: SoundManager = SoundManager.getInstance();
    nativeManager: NativeManager = NativeManager.getInstance();
    sResources: Object = ResourcesManager.getInstance().getGlobResources();
    bundleManager: BundleManager = BundleManager.getInstance();
    logUtil: LogManager = LogManager.getInstance();
    bodyBundleRes: any = BundleManager.getInstance().getBundleResByName(BdnmConfig.body);

    setSceneType(type: string) {
        cc.log("Cur scene type : ", type);
        this._sceneType = type;
    }

    getSceneType(): string {
        return this._sceneType;
    }

    setUserData(data: any) {
        cc.log("Cur jump scene user data : ", data);
        this._userData = data;
    }

    getUserData(): any {
        return this._userData;
    }

}
