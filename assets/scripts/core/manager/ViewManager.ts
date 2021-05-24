/*
 * @Descripttion: 视图管理器
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-08-23 18:33:12
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import {EventConfig} from "../../config/EventConfig";
import ViewInfo from "../package/ViewInfo";
import EventManager from "./EventManager";
import ResourcesManager from "./ResourcesManager";

//------------------------------------------------------------------------------------

export default class ViewManager {

/**
 * private
 */
    // 需要创建的视图配置表
    private _createList : any = {};
    // 视图栈
    _viewScriptStack : any[] = [];

    // 视图脚本组件对象列表
    _scriptObjectList : any = {};

    private static _ins : ViewManager = null;

    static getInstance () : ViewManager {
        if (!this._ins) {
            this._ins = new ViewManager();
            EventManager.getInstance().registerListener(this._ins);
        }
        return this._ins;
    }
    
    /**
     * 在_createList添加注册视图
     * @param viewType 
     * @param View 
     */
    registerCreator (viewType:any, viewInfo:ViewInfo) {
        if (!this._createList[viewType]) {
            this._createList[viewType] = viewInfo;
        }
    }

    /**
     * 注销视图
     * @param viewType
     */
    unRegisterCreator (viewType:any) {
        if (!this._createList[viewType]) {
            this._createList[viewType] = null;
        }
    }

    /**
     * 获取视图实例
     * @param viewType
     */
    getView (viewType:any) {
        return (viewType !== null) ? this._scriptObjectList[viewType] : null;
    }

    /**
     * 显示视图
     * @param viewType 
     * @param userData 
     * @param closeTop 
     * @param closeShowAnimation 
     */
    showView (viewType:any, userData?:any, closeTop?:any, closeShowAnimation?:any) {
        cc.log("viewType : ", viewType);

        if (!viewType) {
            cc.log("ERROR : invaild view type = ", viewType);
            return null;
        }

        if (this._scriptObjectList[viewType]) {
            return this._scriptObjectList[viewType];
        }

        if (!this._createList[viewType].prefab) {
            cc.log("ERROR : unvaild prefab");
            return;
        }

        let tsPath = this._createList[viewType].tsPath;
        let zOrder = this._createList[viewType].zOrder;

        let view = cc.instantiate(this._createList[viewType].prefab);
        let script = view.addComponent(tsPath);
        //@ts-ignore
        script.setType(viewType);
        if (userData) {
            //@ts-ignore
            script.setUserData(userData);   
        }

        if (closeShowAnimation) {
            //@ts-ignore
            script.closeShowAnimation();
        }

        //@ts-ignore
        script.hideByOther = false;
        this._scriptObjectList[viewType] = script;

        if (closeTop) {
            let topViewScript = this._viewScriptStack[this._viewScriptStack.length - 1];
            // @ts-ignore
            cc.log("hide top view " + topViewScript._guiType);
            // @ts-ignore
            topViewScript.hide();
            // @ts-ignore
            topViewScript.hideByOther = true;
        }

        if (closeShowAnimation) {
            this._viewScriptStack.push(script);
        }

        cc.Canvas.instance.node.addChild(view, zOrder);
        cc.log("VIEWMANAGER : show viewType : ", viewType);
    }

    /**
     * load完成之后的处理
     */
    load (  info:any, callback:any ) {
        if (info.bundle) {
            info.bundle.load(info.prefab, cc.Prefab, (err:any, prefab:cc.Prefab) => {
                callback(err, prefab);
            });
        } else {
            callback(false, ResourcesManager.getInstance().s_resources[info.prefab]);
        }
    }

    /**
     * 移除视图
     * @param viewType 
     */
    removeView (viewType:any) {
        if (viewType && this._scriptObjectList[viewType]) {
            cc.log("remove view viewtype : ", viewType);
            let i = this._viewScriptStack.indexOf(this._scriptObjectList[viewType]);
            this._viewScriptStack.splice(i, 1);
            this._scriptObjectList[viewType].node.destroy();
            this.clearView(viewType);
        }
    }

    /**
     * 从_objectList中清除保存的视图脚本组件对象,置null
     */
    clearView (viewType:any) {
        if (this._scriptObjectList[viewType]) {
            this._scriptObjectList[viewType] = null;
        }
    }

    /**
     * 移除最顶层的视图
     */
    removeTopView () {
        let topViewScript = this._viewScriptStack.pop();
        cc.log("remove top view " + topViewScript._guiType);
        if (this._viewScriptStack.length > 1) {
            let topViewScript = this._viewScriptStack[this._viewScriptStack.length - 1];
            if (topViewScript.hideByOther) {
                cc.log("ReShow Top View " + topViewScript._guiType);
                topViewScript.node.setVisible(true);
                topViewScript.show();
                topViewScript.hideByOther = false;
            }
        }
    }

    /**
     * 清空_viewStack视图脚本组件栈列表
     */
    clearViewScriptStack () {
        this._viewScriptStack = [];
        cc.log("clear view script stack");
    }

    /**
     * 获取最顶层的视图脚本组件对象
     */
    getTopView () {
        if (this._viewScriptStack.length > 0) {
            return this._viewScriptStack[this._viewScriptStack.length - 1];
        }
    }

    /**
     * 清空所有弹出层
     */
    clearAllView () {
        for (const type in this._scriptObjectList) {
            if (this._scriptObjectList[type]) {
                this._scriptObjectList[type].node.destroy();
                this._scriptObjectList[type] = null;
            }
        }
        this.clearViewScriptStack();
    }

    /**
     * 事件分发中转(切换场景,需要清空视图栈)
     * @param event 
     */
    onEvent (event:any) {
        if (event.getName() === EventConfig.SCENE_CHANGE) {
            this.clearAllView();
        }
        for (const viewType in this._scriptObjectList) {
            var target = this._scriptObjectList[viewType];
            if (target && target.onEvent) {
                target.onEvent(event);
            }
        }
    }

 }