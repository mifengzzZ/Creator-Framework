import BaseSocketWriter from "../../../core/net/base/BaseSocketWriter";
import { PdkCommand } from "./PdkCommand";
import { protoPaodekuai } from "./protoPaodekuai";
import ModelCenter from "../../../data/ModelCenter";

export default class PdkWriter extends BaseSocketWriter {

    initFuncMap() {
        this.bindMethodToCmd(PdkCommand.ENTER_ROOM, this.writeEnterRoom.bind(this));
    }

    writeEnterRoom(info: any) {
        let msg = protoPaodekuai.EnterRoomRequest.create();
        msg.roomId = info.roomId;
        msg.player = ModelCenter.getInstance().userInfo._uid;
        msg.info = JSON.stringify(ModelCenter.getInstance().userInfo.getUserInfo());
        return protoPaodekuai.EnterRoomRequest.encode(msg).finish();
    }

}
