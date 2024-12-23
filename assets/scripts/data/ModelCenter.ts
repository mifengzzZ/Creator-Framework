import StaCnfInfo from "./StaCnfInfo";
import UserInfo from "./UserInfo";
import ReconnectionInfo from "./ReconnectionInfo";
import GameConfigInfo from "./GameConfigInfo";
import { GameMapConfig } from "../room/config/GameMapConfig";

export default class ModelCenter {

    private static _ins : ModelCenter = null;
    
    // 静态信息
    staCnfInf : StaCnfInfo = null;
    // 用户数据
    userInfo : UserInfo = null;
    // 重连信息
    reconnectionInfo : ReconnectionInfo = null;
    // 游戏信息
    gameConfigInfo : GameConfigInfo = null;

    static getInstance () : ModelCenter {
        if (!this._ins) {
            this._ins = new ModelCenter();
        }
        return this._ins;
    }

    constructor () {
        this.staCnfInf = new StaCnfInfo();
        this.userInfo = new UserInfo();
        this.reconnectionInfo = new ReconnectionInfo();
        this.gameConfigInfo = new GameConfigInfo(GameMapConfig);
    }

}
