import SocketBase from "../../core/net/base/SocketBase";
import DataParser from "../../core/utils/DataParser";
import StringUtils from "../../core/utils/StringUtils";
import { AppConfig } from "../../AppConfig";
import WsSocket from "../../core/net/base/WsSocket";
import NativeManager from "../../core/manager/NativeManager";
import ModelCenter from "../../data/ModelCenter";
import ViewManager from "../../core/manager/ViewManager";
import { ViewConfig } from "../../config/ViewConfig";
import { TipsConfig } from "../../config/TipsConfig";
import LoadingManager from "../../core/manager/LoadingManager";

export default class GSManager extends SocketBase {

    connectFlag : any = 0;
    _socket : any = null;
    _heartBeatTimeOutTimer : any = null;
    _heartBeatTimeOut : any = 10000;
    _heartBeatInterval : any = 10000;
    _currentBeatInterval : any = 10000;
    _dataParser : any = null;
    canHeartbeat : any = true;
    _heartBeat : any = 0;
    _connectType : string = "GS";
    _listener : any = null;

    _ip : any = null;
    _port : any = null;

    private static _ins : GSManager = null;

    static getInstance () : GSManager {
        if (!this._ins) {
            this._ins = new GSManager();
        }
        return this._ins;
    }

    constructor () {
        super();
        this._dataParser = new DataParser(this.onParseMsg.bind(this));

        this.canHeartbeat = true;

        this._heartBeat = 0;
        this._heartBeatTimeOut = 10000;
        this._currentBeatInterval = this._heartBeatTimeOut;
    }

//------------------------------------------------------------------------------------

    addSocketProcesser ( socketProcesser:any ) {
        this._commonProcesser = socketProcesser;
    }

    addSocketReader ( socketReader:any ) {
        this._commonReader = socketReader;
    }

    addSocketWriter ( socketWriter:any ) {
        this._commonWriter = socketWriter;
    }

//------------------------------------------------------------------------------------
//事件分发
    dispatchCacheEvent () {
        this._commonProcesser.dispatchCacheEvent();
    }

    cacheEvent () {
        this._commonProcesser.cacheEvent();
    }

    clearCacheEvent () {
        this._commonProcesser.clearCacheEvent();
    }

//------------------------------------------------------------------------------------

    isConnect () : any {
        if (this._socket) {
            return this._socket.isConnect();
        }
        return false;
    }

    sendMsg (cmd:any, info:any) {
        if (this.isConnect()) {
            super.sendMsg(cmd, info);
        }
    }

    onParseMsg ( pack:any ) {
        cc.log("this : ", this);
        let info = this.readPacket(pack);
        let cmd = info.cmd;
        this.receivePacket(cmd, info);
    }

    onClose ( evt:any ) {
        cc.log("[GSManager] socket close by server");
        this._stopHeartbeat();
        this._clearLoading();
        clearInterval(this._heartBeatTimeOutTimer);
        setTimeout(() => {
            ViewManager.getInstance().showView(ViewConfig.MESSAGE, {
                content : TipsConfig.common_sys_tips_004,
                continueCallBack : () => {
                    this.reconnect();
                }
            });
        }, 200);
    }

    onError ( evt:any ) {
        cc.log("[GSManager] socket connect error");
        this._stopHeartbeat();
        this._clearLoading();
        clearInterval(this._heartBeatTimeOutTimer);
        // 检查网络是否可用
        let mark = NativeManager.getInstance().isNetWorkAvailable();
        if (mark) {
            setTimeout(() => {
                ViewManager.getInstance().showView(ViewConfig.MESSAGE, {
                    content : TipsConfig.common_sys_tips_004,
                    continueCallBack : () => {
                        this.reconnect();
                    }
                });
            }, 200);
        }else {
            cc.log("您当前网络环境不稳定,请检查网络是否打开");
            setTimeout(() => {
                ViewManager.getInstance().showView(ViewConfig.MESSAGE, {
                    content : TipsConfig.common_sys_tips_005,
                    continueCallBack : () => {
                        this.reconnect();
                    }
                });
            }, 200);
        }
    }

    onMessage ( evt:any ) {
        this._dataParser.parse(evt.data);
    }

    onOpen ( evt:any ) {
        this._stopHeartbeat();
        this.canHeartbeat = true;
        this._hidePreloading();
        clearInterval(this._heartBeatTimeOutTimer);
        cc.log('[GSManager] socket connect success');
        this.sendMsg(0x0051, {roomId : ModelCenter.getInstance().reconnectionInfo.roomId});
    }

    connect ( ip:any, port:any ) {
        this._ip = ip;
        this._port = port;
        this._sendSeq = 0;
        this._reciveSeq = 0;
        this.connectFlag += 1;
        cc.log("[GSManager] connect : ", this.getSocketUrl());
        this._socket = new WsSocket(this, true, this.connectFlag, this._connectType);
        this._socket.connect(this.getSocketUrl());
    }

    reconnect () {
        let connectUrl = this.getSocketUrl;
        this._stopHeartbeat();
        if (connectUrl) {
            cc.log("[GSManager] start reconnect");
            this.close();
            LoadingManager.getInstance().showLoadingView();
            this.connect(this._ip, this._port);
        }
    }

    close () {
        cc.log("[GSManager] socket close by client");
        if (this._socket) {
            clearInterval(this._heartBeatTimeOutTimer);
            this._stopHeartbeat();
            this.connectFlag += 1;
            this._socket.close();
            this._socket = null;
        }
    }

    errorClose () {
        this.close();
        setTimeout(() => {
            this.reconnect();
        }, 200);
    }

    getSocketUrl () {
        if (!this._ip || !this._port) {
            return null;
        }else {
            return StringUtils.getInstance().substitute(AppConfig.wwsValue + "://{0}:{1}/ws", [this._ip, this._port]);
        }
    }

//------------------------------------------------------------------------------------

    _hidePreloading () {
        LoadingManager.getInstance().hideLoadingView();
    }

    _showLoading () {
       LoadingManager.getInstance().showLoadingView();
    }

    _clearLoading  () {
        LoadingManager.getInstance().clearLoadingView();
    }

//------------------------------------------------------------------------------------

    _startHeartbeat () {
        if (this.canHeartbeat) {
            this._sendHeartbeat();
            this._heartBeat = setTimeout(this._startHeartbeat.bind(this), this._currentBeatInterval);
        }
    }

    _sendHeartbeat () {
        if (this.canHeartbeat) {
            cc.log("[GSManager] send heart beat");
            this._heartBeatTimeOutTimer = setTimeout(this.heartBeatTimeout.bind(this), this._heartBeatTimeOut);
            this.sendMsg(0x005C, {});
        }
    }

    _stopHeartbeat () {
        this.canHeartbeat = false;
        if (this._heartBeat) {
            clearInterval(this._heartBeat);
            this._heartBeat = 0;
        }
    }

    heartBeatTimeout () {
        cc.log("[GSManager] heart beat time out");
        this.errorClose();
    }

    onHeartBeatResponse ( data:any ) {
        cc.log("[GSManager] heart response");
        clearInterval(this._heartBeatTimeOutTimer);
    }
    
}