import LSCmdDelayManager from "../core/net/LSCmdDelayManager";
import LSManager from "../core/net/LSManager";

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
