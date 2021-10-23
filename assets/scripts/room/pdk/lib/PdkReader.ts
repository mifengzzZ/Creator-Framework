import BaseSocketReader from "../../../core/net/base/BaseSocketReader";
import { PdkCommand } from "./PdkCommand";
import { protoPaodekuai } from "./protoPaodekuai";

export default class PdkReader extends BaseSocketReader {

    initFuncMap () {
        this.bindMethodToCmd(PdkCommand.HEARTBEAT, this.readHeartBeat.bind(this));
        this.bindMethodToCmd(PdkCommand.ENTER_ROOM, this.readEnterRoom.bind(this));
    }

    readHeartBeat ( pack:any ) {
        var info = {};
        return info;
    }

    readEnterRoom ( pack:any ) {
        let result = protoPaodekuai.EnterRoomResponse.decode(pack);
        return result;
    }
    
}