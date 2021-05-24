/*
 * @Descripttion: HTTP 协议组织类
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-05 23:36:31
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import { HttpConfig } from "../../config/HttpConfig";
import NativeManager from "../manager/NativeManager";
import ViewManager from "../manager/ViewManager";
import LoadingManager from "../manager/LoadingManager";
import { TipsConfig } from "../../config/TipsConfig";
import { ViewConfig } from "../../config/ViewConfig";

//------------------------------------------------------------------------------------

export default class JsonRemoteProxy {

    _msgId : any = null;
    _reqHttpList : any[] = [];
    _isReqHttpIng : any = null;
    _showLoading : any = null;
    _timeOutInterval : any = null;
    _timeOutNum : any = null;

    constructor ( timeOut:any ) {
        this._timeOutNum = timeOut || 10000;
    }

    setTimeOutNum ( ms:any ) {
        this._timeOutNum = ms;
    }

    sendMessage (serverUrl:any, msgId:any, reqData:any, cbHandler:any, hideLoading?:any) {
        hideLoading = hideLoading || false;
        if (msgId !== HttpConfig.HEART_BEAT_LABBY && !NativeManager.getInstance().isNetWorkAvailable()) {
            ViewManager.getInstance().showView(ViewConfig.MESSAGE, {data : TipsConfig.common_sys_tips_002});
        }
        if (!hideLoading) {
            this.showHttpLoadingView();
        }
        this._sendHttpMessage(serverUrl, reqData, msgId, cbHandler);
    }

    _sendHttpMessage (serverUrl:any, data:any, msgId:any, cbHandler:any) {
        if (this._isReqHttpIng) {
            if (msgId === HttpConfig.HEART_BEAT_LABBY) {
                return;
            }
            
            this._reqHttpList.push({
                url : serverUrl,
                data : data,
                msgId : msgId,
                cbHandler : cbHandler
            });
            return;
        }

        this._msgId = msgId;
        if (msgId !== HttpConfig.HEART_BEAT_LABBY) {
            this._isReqHttpIng = true;
        }

        let url = this._checkUrl(serverUrl) + msgId;
        cc.log("Send Http Req = ", url);
        let req = new XMLHttpRequest();
        req.open("POST", url, true);
        req.onreadystatechange = () => {
            if (req.readyState === 4 && (req.status >= 200 && req.status < 400)) {
                if (msgId !== HttpConfig.HEART_BEAT_LABBY) {
                    this.hideHttpLoadingView();
                }

                this._endReqTimeOut();

                this._isReqHttpIng = false;
                if (0 < this._reqHttpList.length) {
                    let reqData = this._reqHttpList[0];
                    this._reqHttpList.shift();
                    this._sendHttpMessage(
                        reqData.url,
                        reqData.data,
                        reqData.msgId,
                        reqData.cbHandler
                    );
                }

                if (cbHandler) {
                    cbHandler(req.responseText);
                }
            }
        };
        
        if (msgId !== HttpConfig.HEART_BEAT_LABBY) {
            this._startReqTimeOut();
        }

        req.send(data);
    }

    _checkUrl ( serverUrl:string ) : string {
        if (serverUrl[serverUrl.length - 1] === '/') {
            return serverUrl;
        }else {
            return serverUrl + '/';
        }
    }

    _startReqTimeOut () {
        if (this._timeOutInterval !== null) {
            return;
        }
        this._timeOutInterval = setTimeout(() => {
            if (this._timeOutInterval !== null) {
                this.hideHttpLoadingView();
                this._isReqHttpIng = false;
                this._endReqTimeOut();
                if (0 < this._reqHttpList.length) {
                    this._reqHttpList.shift();
                }
                this._showTimeOutMessage();
            }
        }, this._timeOutNum);
    }

    _endReqTimeOut () {
        clearTimeout(this._timeOutInterval);
        this._timeOutInterval = null;
    }

    _showTimeOutMessage () {
        ViewManager.getInstance().showView(ViewConfig.MESSAGE, {data : TipsConfig.common_sys_tips_001});
    }

    showHttpLoadingView () {
        LoadingManager.getInstance().showLoadingView();
    }

    hideHttpLoadingView () {
        LoadingManager.getInstance().hideLoadingView();
    }

}
