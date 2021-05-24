/*
 * @Descripttion: 跑得快协议写入数据
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-10-09 13:07:12
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import BaseSocketWriter from "../../../core/net/base/BaseSocketWriter";
import { PdkCommand } from "./PdkCommand";
import { protoPaodekuai } from "./protoPaodekuai";
import ModelCenter from "../../../data/ModelCenter";

//------------------------------------------------------------------------------------

export default class PdkWriter extends BaseSocketWriter {
    
    initFuncMap () {
        this.bindMethodToCmd(PdkCommand.ENTER_ROOM, this.writeEnterRoom.bind(this));
    }

    writeEnterRoom ( info:any ) {
        let msg = protoPaodekuai.EnterRoomRequest.create();
        msg.roomId = info.roomId;
        msg.player = ModelCenter.getInstance().userInfo._uid;
        msg.info = JSON.stringify(ModelCenter.getInstance().userInfo.getUserInfo());
        return protoPaodekuai.EnterRoomRequest.encode(msg).finish();
    }

}
