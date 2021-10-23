import { ErrorCodeConfig } from "../../../config/ErrorCodeConfig";

export default class BaseSocketProcesser {

    s_saveCmdEventFuncMap: any = null;
    eventCache = [];
    stopDispatch: boolean = false;
    _cmdDelayMgr: any = null;

    constructor() {
        this.s_saveCmdEventFuncMap = {};
        this.eventCache = [];
        this.stopDispatch = false;
        // @ts-ignore
        this.initFuncMap();
    }

    bindMethodToCmd(cmd: any, func: any) {
        this.s_saveCmdEventFuncMap[cmd] = func;
    }

    initCmdDelayManager(mgr: any) {
        this._cmdDelayMgr = mgr;
    }

    checkResponseCode(data: any): boolean {
        cc.log("------ 收到服务器消息进行错误码检测 ------ ", data);
        if (data && data.code && 1 !== data.code) {
            if (5001 === data.code) {
                cc.log("房间不存在");
            } else if (5009 === data.code) {
                cc.log("房间开始后禁止中途进入");
            } else {
                cc.log("请求错误码 : ", ErrorCodeConfig[data.code]);
            }
            return false
        }
        return true;
    }

    dispatchEvent(info: any) {
        if (!this.checkResponseCode(info.data)) {
            return;
        }
        cc.log("dispatch cmd : 0x", info.cmd.toString(16));
        this._cmdDelayMgr.getInstance().addCmd(info.cmd, info.data);
    }

    onReceivePacket(cmd: any, info: any) {
        if (this.s_saveCmdEventFuncMap[cmd]) {
            this.s_saveCmdEventFuncMap[cmd](info, cmd);
        } else {
            if (!this.stopDispatch) {
                this.dispatchEvent(info);
            } else {
                this.addToEventCache(info);
            }
        }
    }

    cacheEvent() {
        cc.log("start cache event");
        this.stopDispatch = true;
    }

    addToEventCache(info: any) {
        cc.log("cache event ", info.cmd.toString(16));
        this.eventCache.push(info);
    }

    dispatchCacheEvent() {
        cc.log("start dispatch cache event");
        this.stopDispatch = false;
        for (let i = 0; i < this.eventCache.length; i++) {
            let data = this.eventCache[i];
            this.dispatchEvent(data);
        }
        cc.log("dispatch cache event end");
        this.eventCache = [];
    }

    clearCacheEvent() {
        this.eventCache = [];
        cc.log("clear cache event");
    }

}
