/*
 * @Descripttion: 游戏协议分发管理
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-08-24 22:06:09
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入

//------------------------------------------------------------------------------------

export default class GSCmdDelayManager {
    
    private static _ins : GSCmdDelayManager;

    _cmdDataMap : any = [];
    _cmdDelayMap : any = [];
    _callback : any = null;
    _cmdTimeId : any = null;
    _isStopCmd : boolean = false;
    _timerId : any = null;
    _delayIng : boolean = false;

    static getInstance () : GSCmdDelayManager {
        if (!this._ins) {
            this._ins = new GSCmdDelayManager();
        }
        return this._ins;
    }

    constructor () {
        this._clearTimer();
        this._delayIng = false;
        this._isStopCmd = false;
    }

    registerCmdCallback ( callback:any ) {
        this._callback = callback;
    }

    addCmd (cmd:any, data:any) {
        cc.log("[GSCmdDelayManager] cmd : 0x", cmd.toString(16));
        this._cmdDataMap.push({cmd:cmd, data:data});
        if (this._delayIng || this._isStopCmd) {
            return;
        }
        if (this._cmdDataMap.length > 0) {
            this._playCmd();
        }
    }

    addTimeToDelayMap (cmd:any, time:any) {
        this._cmdDelayMap[cmd] = time;
    }

    clean () {
        this._callback = null;
        this._cmdDataMap = [];
    }

    _nextCmd () {
        this._clearTimer();
        this._delayIng = false;

        if (0 < this._cmdDataMap.length) {
            let temp = this._cmdDataMap[0];
            this._cmdDataMap.shift();
            
            if (this._callback) {
                cc.log("GSCmdDelayManager excute cmd = ", temp.cmd.toString(16));
                this._callback(temp.cmd, temp.data);
            }
            cc.log("[GSCmdDelayManager] play cmd ", temp.cmd.toString(16), " cmd queue length " + this._cmdDataMap.length);            
            this._playCmd();
        }
    }

    _playCmd () {
        if (this._cmdDataMap.length <= 0) {
            return;
        }
        
        this._delayIng = true;
        var temp = this._cmdDataMap[0];
        let time = this._getCmdDelayTime(temp.cmd);

        if (time) {
            this._timerId = setTimeout(this._nextCmd.bind(this), time*1000);
            cc.log("[GSCmdDelayManager] cmd : 0x", temp.cmd.toString(16), " delay : ", time*1000);
        }else {
            this._nextCmd();
        }
    }

    _getCmdDelayTime ( cmd:any ) {
        let reTimes = this._cmdDelayMap[cmd];
        return reTimes;
    }

    _clearTimer () {
        if (this._timerId != null) {
            clearTimeout(this._timerId);
            this._timerId = null;
        }
    }

    _setStop ( stop:any ) {
        this._isStopCmd = stop;
    }

    pauseCmd () {
        cc.log("pause GSCmdDelayManager");
        this._isStopCmd = true;
        this._clearTimer();
    }

    resumeCmd () {
        cc.log("resume GSCmdDelayManager");
        this._isStopCmd = false;
        this._setStop(false);
        if (0 < this._cmdDataMap.length) {
            this._playCmd();
        }
    }

    clearDelayCmd () {
        cc.log("[GSCmdDelayManager] clear delay cmd");
        this._clearTimer();
        this._delayIng = false;
        this._isStopCmd = false;
        this._setStop(false);
        this._cmdDataMap = [];
    }

}
