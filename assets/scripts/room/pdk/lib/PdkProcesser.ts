import BaseSocketProcesser from "../../../core/net/base/BaseSocketProcesser";
import { PdkCommand } from "./PdkCommand";
import LoadingManager from "../../../core/manager/LoadingManager";
import GSManager from "../../net/GSManager";
import GSCmdDelayManager from "../../net/GSCmdDelayManager";
import SceneManager from "../../../core/manager/SceneManager";
import { SceneConfig } from "../../../config/SceneConfig";
import GameLoaderManager from "../../GameLoaderManager";

export default class PdkProcesser extends BaseSocketProcesser {

    initFuncMap() {
        this.initCmdDelayManager(GSCmdDelayManager.getInstance());

        this.bindMethodToCmd(PdkCommand.HEARTBEAT, this.onHeartBeat.bind(this));
        this.bindMethodToCmd(PdkCommand.ENTER_ROOM, this.onEnterRoom.bind(this));
    }

    onHeartBeat(data: any) {
        GSManager.getInstance().onHeartBeatResponse(data);
    }

    onEnterRoom(data: any) {
        if (!this.checkResponseCode(data.data)) {
            LoadingManager.getInstance().clearLoadingView();
            GSManager.getInstance().close();
            return;
        }
        GSCmdDelayManager.getInstance().clearDelayCmd();
        GSManager.getInstance()._startHeartbeat();
        if (SceneManager.getInstance().getCurSceneType() !== SceneConfig.ROOM) {
            GSManager.getInstance().clearCacheEvent();
            GSManager.getInstance().cacheEvent();
            GameLoaderManager.getInstance().enterRoomScene(data.data, false);
        }
    }

}
