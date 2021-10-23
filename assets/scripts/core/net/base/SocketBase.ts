import { AppConfig } from "../../../AppConfig";
import ByteArray from "../../utils/ByteArray";
import ArrayUtils from "../../utils/ArrayUtils";

export default class SocketBase {

    _socket : any;
    _packReader : any;
    _packWriter : any;
    _packProcesser : any;

    _sendSeq : any;
    _reciveSeq : any;
    _v1 : any;
    _v2 : any;
    _v3 : any;

    _commonWriter : any;
    _commonReader : any;
    _commonProcesser : any;

    _tokenCodes : any;

    constructor () {
        this._sendSeq = 0;
        this._reciveSeq = 0;
        let versionStrs = AppConfig.version.split('.');
        this._v1 = parseInt(versionStrs[0]);
        this._v2 = parseInt(versionStrs[1]);
        this._v3 = parseInt(versionStrs[2]);
    }

    onClose ( evt:any) {
    }

    oError ( evt:any ) {
    }

    onMessage ( evt:any ) {
    }

    onOpen ( evt:any ) {
    }

    sendMsg (cmd:any, info:any) {
        let beginPacket = this.writeBegin(cmd);
        let bodyPacket = this.writePacket(info, cmd);
        this.writeEnd(cmd, bodyPacket);
    }

    writeBegin ( cmd:any) : any {
        let pack = new ByteArray();
        pack.writeInt(cmd);
        pack.writeInt(AppConfig.appId);
        return pack;
    }

    writePacket (info:any, cmd:any) : any {
        return this._commonWriter.writePacket(cmd, info);
    }

    writeEnd (cmd:any, protoPack:any) {
        let bodyBuff = null;
        let bodySize = 0;
        
        if (protoPack) {
            bodyBuff = protoPack;
            bodySize = bodyBuff.length;
        }

        let beginPack = new ByteArray();
        beginPack.writeInt(bodySize + 8);
        beginPack.writeInt(cmd);
        let headerBuff = beginPack.getbytes();
        let sendBuff = headerBuff;
        cc.log("headerBuff : ", headerBuff);
        cc.log("bodyBuff : ", bodyBuff);
        if (bodyBuff) {
            sendBuff = ArrayUtils.getInstance().mergeArrayBuffer(headerBuff, bodyBuff);
        }
        cc.log("sendBuff : ", sendBuff);
        this._socket.sendData(sendBuff);
    }
    
    readPacket ( pack:any ) : any {
        let info = {};
        cc.log("------[readPacket] cmd:0x" + pack.cmd.toString(16));
        cc.log("[socket] revice sequence " + this._reciveSeq);
        info["cmd"] = pack.cmd;
        let uint8View = (pack.data) ? new Uint8Array(pack.data) : null;
        info["data"] = this._commonReader.readPacket(pack.cmd, uint8View);
        if (!info["data"]) {
            cc.log("------[readPacket] cannot find match parser:0x" + pack.cmd.toString(16));
        }
        return info;
    }

    receivePacket (cmd:any, info:any) {
        if (typeof info === "undefined") {
            // dt.AplarmTips.play("0x", cmd.toString(16), "数组异常(server)");
        }else {
            this._commonProcesser.onReceivePacket(cmd, info);
        }
    }
}
