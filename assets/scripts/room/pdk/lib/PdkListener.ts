/*
 * @Descripttion: 跑得快协议监听-处理界面
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-10-09 13:07:12
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import GSCmdDelayManager from "../../net/GSCmdDelayManager";
import GSManager from "../../net/GSManager";

//------------------------------------------------------------------------------------

export default class PdkListener {

    _saveCmdEventFuncMap : any = {};
    _roomLayer : any = null;

    constructor ( roomLayer:any ) {
        this._roomLayer = roomLayer;
        this._saveCmdEventFuncMap = {};
        this.init();
        GSCmdDelayManager.getInstance().registerCmdCallback(this._onDelayCmdCallBack.bind(this));
        GSManager.getInstance().dispatchCacheEvent();
    }

    _onDelayCmdCallBack ( cmd:any, data:any ) {
        if (this._saveCmdEventFuncMap[cmd]) {
            this._saveCmdEventFuncMap[cmd](data);
        }
    }

    bindMethodToCmd ( cmd:any, func:any, delay:any ) {
        GSCmdDelayManager.getInstance().addTimeToDelayMap(cmd, delay);
        this._saveCmdEventFuncMap[cmd] = func.bind(this);
    }

    init () {
        
    }

}
