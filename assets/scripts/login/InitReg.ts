/*
 * @Descripttion: 注册
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-13 16:12:44
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import LoginEntry from "../login/LoginEntry"
import HallEntry from "../hall/HallEntry"
import RoomEntry from "../room/RoomEntry";

//------------------------------------------------------------------------------------

export default class InitReg  {

    private static _ins : InitReg = null;

    static getInstance () : InitReg {
        if (!this._ins) {
            this._ins = new InitReg();
        }
        return this._ins;
    }

    init () {
        LoginEntry.getInstance().init();
        HallEntry.getInstance().init();
        RoomEntry.getInstance().init();
    }

}
