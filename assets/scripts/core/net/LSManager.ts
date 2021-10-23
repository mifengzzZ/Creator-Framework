
import SocketBase from "./base/SocketBase";
import DataParser from "../utils/DataParser";
import StringUtils from "../utils/StringUtils";
import { AppConfig } from "../../AppConfig";
import WsSocket from "./base/WsSocket";
import LSCmdDelayManager from "./LSCmdDelayManager";
import LoadingManager from "../manager/LoadingManager";
import LSProcesser from "../../lib/LSProcesser";
import LSReader from "../../lib/LSReader";
import LSWriter from "../../lib/LSWriter";
import LSListener from "../../lib/LSListener";
import NativeManager from "../manager/NativeManager";

export default class LSManager extends SocketBase {

    connectFlag : any = 0;
    _socket : any = null;
    _heartBeatTimeOutTimer : any = null;
    _heartBeatTimeOut : any = 10000;
    _heartBeatInterval : any = 10000;
    _currentBeatInterval : any = 10000;
    _dataParser : any = null;
    canHeartbeat : any = true;
    _heartBeat : any = 0;
    _connectType : string = "LS";
    _listener : any = null;

    _ip : any = null;
    _port : any = null;

    private static _ins : LSManager = null;

    static getInstance () : LSManager {
        if (!this._ins) {
            this._ins = new LSManager();
        }
        return this._ins;
    }

    constructor () {
        super();
        this._dataParser = new DataParser(this.onParseMsg);

        this.canHeartbeat = true;

        this._heartBeat = 0;
        this._heartBeatTimeOut = 10000;
        this._currentBeatInterval = this._heartBeatTimeOut;
    }

    /**
     * 初始化连接Socket配置
     */
    connectLoginSocket () {
        let lsProcesser = new LSProcesser();
        let lsReader = new LSReader();
        let lsWriter = new LSWriter();
        this.addSocketProcesser(lsProcesser);
        this.addSocketReader(lsReader);
        this.addSocketWriter(lsWriter);
        this._listener = new LSListener();
        this.startConnectLoginSocket();
    }

    /**
     * 连接Socket
     */
    startConnectLoginSocket () {
        this.connect(AppConfig.loginServerIP, AppConfig.loginServerPort);
    }

    /**
     * 断开连接
     */
    closeLoginSocket () {
        this.close();
        this.clearCacheEvent();
        LSCmdDelayManager.getInstance().clearDelayCmd();
        LoadingManager.getInstance().clearLoadingView();
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
        let info = this.readPacket(pack);
        let cmd = info.cmd;
        this.receivePacket(cmd, info);
    }

    onClose ( evt:any ) {
        cc.log("[LSManager] socket close by server");
        this._stopHeartbeat();
        this._clearLoading();
        clearInterval(this._heartBeatTimeOutTimer);
        setTimeout(() => {
            cc.log("是否点击重连");
        }, 200);
    }

    onError ( evt:any ) {
        cc.log("[LSManager] socket connect error");
        this._stopHeartbeat();
        this._clearLoading();
        clearInterval(this._heartBeatTimeOutTimer);
        // 检查网络是否可用
        let mark = NativeManager.getInstance().isNetWorkAvailable();
        if (mark) {
            cc.log("您当前网络不稳定,请重连");
        }else {
            cc.log("您当前网络环境不稳定,请检查网络是否打开");
        }
    }

    onMessage ( evt:any ) {
        this._dataParser(evt.data);
    }

    onOpen ( evt:any ) {
        this._stopHeartbeat();
        this.canHeartbeat = true;
        this._hidePreloading();
        clearInterval(this._heartBeatTimeOutTimer);
        cc.log('[LSManager] socket connect success');
        cc.log("可以发送协议了");
    }

    connect ( ip:any, port:any ) {
        this._ip = ip;
        this._port = port;
        this._sendSeq = 0;
        this._reciveSeq = 0;
        this.connectFlag += 1;
        cc.log("[LSManager] connect : ", this.getSocketUrl());
        this._socket = new WsSocket(this, true, this.connectFlag, this._connectType);
        this._socket.connect(this.getSocketUrl());
    }

    reconnect () {
        let connectUrl = this.getSocketUrl;
        this._stopHeartbeat();
        if (connectUrl) {
            cc.log("[LSManager] start reconnect");
            this.close();
            this.connect(this._ip, this._port);
        }
    }

    close () {
        cc.log("[LSManager] socket close by client");
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
        
    }

    _showLoading () {
       
    }

    _clearLoading  () {
        
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
            cc.log("[LSManager] send heart beat");
            this._heartBeatTimeOutTimer = setTimeout(this.heartBeatTimeout.bind(this), this._heartBeatTimeOut);
            this.sendMsg(this._commonProcesser._command.HEARTBEAT, {});
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
        cc.log("[LSManager] heart beat time out");
        this.errorClose();
    }

    onHeartBeatResponse ( data:any ) {
        cc.log("[LSManager] heart response");
        clearInterval(this._heartBeatTimeOutTimer);
    }
    
}