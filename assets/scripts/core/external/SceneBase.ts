/*
 * @Descripttion: 场景基类
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-13 20:08:55
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
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

const {ccclass, property} = cc._decorator;

@ccclass
export default class SceneBase extends cc.Component {

    // 当前场景类型
    _sceneType : string = null;

    // 跳转场景时携带参数
    _userData : any = null;

    toolUtils : ToolUtils = ToolUtils.getInstance();
    viewManager : ViewManager = ViewManager.getInstance();
    eventManager : EventManager = EventManager.getInstance();
    soundManager : SoundManager = SoundManager.getInstance();
    nativeManager : NativeManager = NativeManager.getInstance();
    sResources : Object = ResourcesManager.getInstance().getGlobResources();
    bundleManager : BundleManager = BundleManager.getInstance();
    logUtil : LogManager = LogManager.getInstance();
    bodyBundleRes : any = BundleManager.getInstance().getBundleResByName(BdnmConfig.body);

    setSceneType ( type:string ) {
        cc.log("Cur scene type : ", type);
        this._sceneType = type;
    }

    getSceneType () : string {
        return this._sceneType;
    }

    setUserData ( data:any ) {
        cc.log("Cur jump scene user data : ", data);
        this._userData = data;
    }

    getUserData () : any {
        return this._userData;
    }

}
