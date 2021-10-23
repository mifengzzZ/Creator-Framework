/*
 * @Descripttion: 大厅注册模块注册
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-13 09:54:59
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import { SceneConfig } from "../config/SceneConfig";
import { ResScene } from "../config/ResConfig";
import SceneInfo from "../core/package/SceneInfo";
import SceneManager from "../core/manager/SceneManager";
import ViewManager from "../core/manager/ViewManager";
import { ViewConfig } from "../config/ViewConfig";
import ViewInfo from "../core/package/ViewInfo";
import EntryBase from "../core/external/EntryBase";

//------------------------------------------------------------------------------------

export default class HallEntry extends EntryBase {

    private static _ins : HallEntry = null;

    static getInstance () : HallEntry {
        if (!this._ins) {
            this._ins = new HallEntry();
        }
        return this._ins;
    }

    init () {
        SceneManager.getInstance().registerCreator(SceneConfig.HALL, new SceneInfo("HallScene", ResScene.HALLSCENE));

        ViewManager.getInstance().registerCreator(ViewConfig.HALLVIEW, new ViewInfo("HallView", this.bodyBundleRes["bd_hallview"]));
        ViewManager.getInstance().registerCreator(ViewConfig.GUIDEVIEW, new ViewInfo("GuideView", this.bodyBundleRes["bd_guideview"]));
    }

}