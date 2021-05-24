/*
 * @Descripttion: 如果在这里注册,则listener处理不到
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-10-09 13:07:12
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import BaseSocketProcesser from "../../../core/net/base/BaseSocketProcesser";
import { PdkCommand } from "./PdkCommand";
import LoadingManager from "../../../core/manager/LoadingManager";
import GSManager from "../../net/GSManager";
import GSCmdDelayManager from "../../net/GSCmdDelayManager";
import SceneManager from "../../../core/manager/SceneManager";
import { SceneConfig } from "../../../config/SceneConfig";
import GameLoaderManager from "../../GameLoaderManager";

//------------------------------------------------------------------------------------

export default class PdkProcesser extends BaseSocketProcesser {

    initFuncMap () {
        this.initCmdDelayManager(GSCmdDelayManager.getInstance());

        this.bindMethodToCmd(PdkCommand.HEARTBEAT, this.onHeartBeat.bind(this));
        this.bindMethodToCmd(PdkCommand.ENTER_ROOM, this.onEnterRoom.bind(this));
    }

    onHeartBeat ( data:any ) {
        GSManager.getInstance().onHeartBeatResponse(data);
    }

    onEnterRoom ( data:any ) {
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
