/*
 * @Descripttion: WebSocket
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-06 13:29:21
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import { AppConfig } from "../../../AppConfig";
import ModelCenter from "../../../data/ModelCenter";

//------------------------------------------------------------------------------------

export default class WsSocket {

    _handler : any;
    _socket : any;
    _url : any;
    _isBinary : any;
    _connectFlag : any;
    _connectType : string = "";

    constructor (handler:any, isBinary:any, connectFlag:any, connectType:string) {
        this._handler = handler;
        this._socket = null;
        this._url = "";
        this._isBinary = isBinary;
        this._connectFlag = connectFlag;
        this._connectType = connectType;
    }

    connect ( url:any ) {
        this._url = url;
        this._startConnect();
    }

    _startConnect () {
        if (this._socket) {
            if (this._socket.readyState === WebSocket.OPEN) {
                cc.log('WsSocket is open with no need for connect repeat');
                return;
            }
            this.close();
        }
        let connecttionData = "app_id=" + AppConfig.appId + "&uuid=" + ModelCenter.getInstance().userInfo._uid;
        if (this._connectType === "GS") {
            connecttionData = connecttionData + "&game_id=" + ModelCenter.getInstance().reconnectionInfo.gameId + "&room_id=" + ModelCenter.getInstance().reconnectionInfo.roomId;
        }
        cc.log("connecttionData : ", connecttionData);
        let url = this._url + "?" + connecttionData;
        this._socket = new WebSocket(url, []);
        cc.log(url);
        if (this._isBinary) {
            this._socket.binaryType = 'arraybuffer';
        }
        cc.log("------[WsSocket] connect");
        this._socket.onopen = this._onOpen.bind(this);
        this._socket.onmessage = this._onMessage.bind(this);
        this._socket.onerror = this._onError.bind(this);
        this._socket.onclose = this._onClose.bind(this);
    }

    _onOpen ( evt:any ) {
        cc.log("------[WsSocket] onOpen");
        if (this._handler && (this._handler.connectFlag === this._connectFlag)) {
            this._handler.onOpen(evt);
        }
    }

    _onMessage ( evt:any ) {
        if (this._handler && (this._handler.connectFlag === this._connectFlag)) {
            this._handler.onMessage(evt);
        }
    }

    _onError ( evt:any ) {
        cc.log('------[WsSocket] onError connectFlag:', this._handler.connectFlag);
        if (this._handler && (this._handler.connectFlag === this._connectFlag)) {
            this._handler.onError(evt);
        }
    }

    _onClose ( evt:any ) {
        cc.log('------[WsSocket] onClose handlerconnectFlag:', this._handler.connectFlag);
        cc.log('------[WsSocket] onClose connectFlag:', this._connectFlag);
        if (this._handler && (this._handler.connectFlag === this._connectFlag)) {
            this._handler.onClose(evt);
        }

        if (this._socket) {
            if(this._socket.readyState === WebSocket.CONNECTING  || this._socket.readyState === WebSocket.OPEN ) {
                return;
            }
            this.close();    
        }
    }

    close () {
        if (this._socket) {
            if (this._socket.readyState === WebSocket.OPEN) {
                cc.log('------[WsSocket] close socket');
                this._socket.close();
            }else {
                cc.log('------[WsSocket] socket not run');
            }
            this._socket = null;
        }
    }

    sendData ( data:any ) {
        if (!this._socket) {
            cc.log('------[WsSocket] socket:is null, socket maybe can not connect');
            return;
        }
        if (this._socket.readyState === WebSocket.OPEN) {
            this._socket.send(data);
        }else {
            if (this._handler && (this._handler.connectFlag === this._connectFlag)) {
                this._handler.onError();
            }
        }
    }

    reconnect () {
        this._startConnect();
    }

    isConnect () {
        if (this._socket && this._socket.readyState === WebSocket.OPEN) return true;
        return false;
    }
}
