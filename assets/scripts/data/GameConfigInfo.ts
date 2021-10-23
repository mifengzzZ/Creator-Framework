export default class GameConfigInfo {

    // 游戏列表信息
    _gameListInfo: any = {};

    constructor(gmData: any) {
        for (const iterator of gmData) {
            this._gameListInfo[iterator.gameid] = iterator;
        }
    }

    /**
     * 通过gameId返回游戏配置信息
     */
    getGameInfoByGameID(gameID: number): any {
        if (!this._gameListInfo[gameID]) {
            cc.log("error : not found game info ", gameID);
            return;
        }
        return this._gameListInfo[gameID];
    }

}
