/*
 * @Descripttion: 大厅协议监听-处理界面
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-06 13:07:12
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import LSCmdDelayManager from "../core/net/LSCmdDelayManager";
import LSManager from "../core/net/LSManager";

//------------------------------------------------------------------------------------

export default class LSListener {

    _saveCmdEventFuncMap : any = {};

    constructor () {
        this._saveCmdEventFuncMap = {};
        this.init();
        LSCmdDelayManager.getInstance().registerCmdCallback(this._onDelayCmdCallBack.bind(this));
        LSManager.getInstance().dispatchCacheEvent();
    }

    _onDelayCmdCallBack ( cmd:any, data:any ) {
        if (this._saveCmdEventFuncMap[cmd]) {
            this._saveCmdEventFuncMap[cmd](data);
        }
    }

    bindMethodToCmd ( cmd:any, func:any, delay:any ) {
        LSCmdDelayManager.getInstance().addTimeToDelayMap(cmd, delay);
        this._saveCmdEventFuncMap[cmd] = func.bind(this);
    }

    init () {
        
    }

}
