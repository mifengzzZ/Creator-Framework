/*
 * @Descripttion: 跑得快协议数据获取
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-10-09 13:07:12
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import BaseSocketReader from "../../../core/net/base/BaseSocketReader";
import { PdkCommand } from "./PdkCommand";
import { protoPaodekuai } from "./protoPaodekuai";

//------------------------------------------------------------------------------------

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