import JsonRemoteProxy from "./JsonRemoteProxy";
import HttpLoginProto from "./HttpLoginProto";
import { HttpConfig } from "../../config/HttpConfig";

export default class HttpMessageHelp {

    _loginServerUrl : string = null;

    _HTTP_TIME_OUT_MS : number = 20000;

    _webClient : JsonRemoteProxy = null;

    _loginProto : HttpLoginProto  = null;

    _cmdProtoMap : any = {};

    _serverType : any = {
        ST_LOGIN : "Login",
    };

    private static _ins : HttpMessageHelp = null;

    static getInstance () : HttpMessageHelp {
        if (!this._ins) {
            this._ins = new HttpMessageHelp();
        }
        return this._ins;
    }

    constructor () {
        this._webClient = new JsonRemoteProxy(this._HTTP_TIME_OUT_MS);

        this._init();
    }

    registerRequest (serverType:any, cmd:any, sProto:any, rProto) {
        if (serverType && cmd && sProto && rProto) {
            this._cmdProtoMap[cmd] = {
                _serverType : serverType,
                _sProto : sProto,
                _rProto : rProto
            };
        }else {
            cc.log("ERROR : register Request fail!");
        }
    }

    sendMessage (cmd:any, data:any) {
        if (cmd === undefined) {
            cc.log("ERROR : invaild cmd");
            return;
        }

        let reqInfo = this._cmdProtoMap[cmd];
        if (!reqInfo) {
            cc.log("ERROR : undefined http cmd = ", cmd);
            return;
        }

        let serverUrl = this.getServerUrlByType(reqInfo._serverType);
        let bytes = reqInfo._sProto(data);
        this._webClient.sendMessage(serverUrl, cmd, bytes, ( data:any ) => {
            reqInfo._rProto(data);
        });
    }


    _init () {
        this._loginProto = new HttpLoginProto();
        
        this.registerRequest(
            this._serverType.ST_LOGIN,
            HttpConfig.LOGIN_GAME,
            this._loginProto.loginRequest.bind(this._loginProto),
            this._loginProto.loginResponse.bind(this._loginProto)
        );

        this.registerRequest(
            this._serverType.ST_LOGIN,
            HttpConfig.LOGIN_CREATEROOM,
            this._loginProto.createRoomRequest.bind(this._loginProto),
            this._loginProto.createRoomResponse.bind(this._loginProto)
        );
    }

    setLoginServerUrl ( loginUrl:string ) {
        if (this._loginServerUrl !== loginUrl) {
            this._loginServerUrl = loginUrl;
        }
    }

    getServerUrlByType ( type:string ) {
        if (this._serverType.ST_LOGIN === type) {
            return this._loginServerUrl;
        }else {
            cc.log("ERROR : invaild server url type = ", type);
        }
    }
    
}
