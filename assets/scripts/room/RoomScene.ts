/*
 * @Descripttion: 房间场景
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-06 13:07:12
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import SceneBase from "../core/external/SceneBase";
import GameLoaderManager from "./GameLoaderManager";
import ViewManager from "../core/manager/ViewManager";
import BundleManager from "../core/manager/BundleManager";
import ModelCenter from "../data/ModelCenter";
import { ViewConfig } from "../config/ViewConfig";
import { BdnmConfig, BdResConfig } from "../config/ResConfig";

//------------------------------------------------------------------------------------

const {ccclass, property} = cc._decorator;

@ccclass
export default class RoomScene extends SceneBase {

    _gmConfig : any = null;

    start () {
        cc.log("进入游戏场景 : ", JSON.parse(this._userData.roomKwargs).game_type);
        this._gmConfig = ModelCenter.getInstance().gameConfigInfo.getGameInfoByGameID(JSON.parse(this._userData.roomKwargs).game_type);
        let gmBundle = BundleManager.getInstance().getBundleResByName(this._gmConfig.bundleName);
        GameLoaderManager.getInstance().getGmLoader().registerView(gmBundle, this.bundleManager.getBundleResByName(BdnmConfig.common));
        ViewManager.getInstance().showView(ViewConfig.ROOMLAYER, this._userData, false, true);
    }

    onDestroy () {
        GameLoaderManager.getInstance().getGmLoader().unRegisterView();
        BundleManager.getInstance().removeBundleByName(this._gmConfig.bundleName);
        GameLoaderManager.getInstance().exitRoomScene();
    }

}
