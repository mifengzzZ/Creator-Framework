import { PdkConstant } from "../config/PdkConstant";
import { GameMapConfig } from "../../config/GameMapConfig";
import ModelCenter from "../../../data/ModelCenter";
import BundleManager from "../../../core/manager/BundleManager";

export default class PdkGameData {

    // 游戏ID
    _gameId: number = 0;
    // 房间状态
    _status: number = PdkConstant.GameStatus.wait;
    // 房间玩家列表
    _roomPlayerList: any = {};
    // 房间局数
    _curBoard: number = 0;
    // 房间规则
    _roomInfo: any = null;
    // 房主uuid
    _roomOwnerUid: string = "";
    // 房主信息
    _roomOwnerInfo: any = null;
    // 房间ID
    _roomID: number = 0;
    // 客户端本地游戏配置-GameMapConfig
    _gameConfig: any = null;
    // 远程资源清单
    _bundleRes: any = null;

    initData(data: any): boolean {
        cc.log("数据 : ", data);
        this._status = data.roomState;
        this._roomOwnerInfo = JSON.parse(data.roomOwnerInfo);
        this._curBoard = data.gameRools;
        this._roomOwnerUid = data.roomOwner;
        this._roomInfo = JSON.parse(data.roomKwargs);
        this._roomID = data.roomId;
        this._gameId = this._roomInfo.game_type;
        this._gameConfig = ModelCenter.getInstance().gameConfigInfo.getGameInfoByGameID(this._gameId);
        this._bundleRes = BundleManager.getInstance().getBundleResByName(this._gameConfig.bundleName);
        for (let index = 0; index < data.player.length; index++) {
            const element = data.player[index];
            this._roomPlayerList[element.player] = element;
        }

        return true;
    }

    reset() {

    }

}
