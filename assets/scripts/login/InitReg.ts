import LoginEntry from "../login/LoginEntry"
import HallEntry from "../hall/HallEntry"
import RoomEntry from "../room/RoomEntry";

export default class InitReg {

    private static _ins: InitReg = null;

    static getInstance(): InitReg {
        if (!this._ins) {
            this._ins = new InitReg();
        }
        return this._ins;
    }

    init() {
        LoginEntry.getInstance().init();
        HallEntry.getInstance().init();
        // RoomEntry.getInstance().init();
    }

}
