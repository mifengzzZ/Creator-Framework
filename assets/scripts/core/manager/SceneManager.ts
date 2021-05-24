/*
 * @Descripttion: 场景管理器
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-05 23:36:31
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import SceneInfo from "../package/SceneInfo";
import EventManager from "./EventManager";
import EventInfo from "../package/EventInfo";
import { EventConfig } from "../../config/EventConfig";

//------------------------------------------------------------------------------------

export default class SceneManager {

    private static _ins : SceneManager = null;

    private _curSceneType : string = "";

    _createList : any = {};
    
    static getInstance () : SceneManager {
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
    registerCreator (SceneType:string, sceneInfo:SceneInfo) {
        if (!this._createList[SceneType]) {
            this._createList[SceneType] = sceneInfo;
        }
    }

    /**
     * 切场景
     */
    replaceScene (sceneType:string, userData?:any) {
        if (sceneType && this._createList[sceneType]) {
            let info = this._createList[sceneType];
            // 清理所有弹窗
            EventManager.getInstance().dispatchEvent(new EventInfo(EventConfig.SCENE_CHANGE));
            cc.director.loadScene(info.firePath, (err:any, scene:any) => {
                // 绑定组件脚本
                let container = scene.children[0];
                let script = container.addComponent(info.tsPath);
                this._curSceneType = sceneType;
                //@ts-ignore
                script.setSceneType(sceneType);
                if (userData) {
                    //@ts-ignore
                    script.setUserData(userData);   
                }
            });
        }else {
            cc.log("ERROR: invaild scene type = ", sceneType);
        }
    }
    
    /**
     * 获取当前场景类型
     */
    getCurSceneType () : string {
        return this._curSceneType;
    }

    /**
     * 设置当前场景类型
     */
    setCurSceneType ( sceneType:string ) {
        this._curSceneType = sceneType;
    }

}
