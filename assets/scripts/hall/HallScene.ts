import SceneBase from "../core/external/SceneBase";
import ViewManager from "../core/manager/ViewManager";
import { ViewConfig } from "../config/ViewConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallScene extends SceneBase {

    start () {

        let bg = new cc.Node();
        this.node.addChild(bg);
        bg.addComponent(cc.Sprite).spriteFrame = this.bodyBundleRes["bd_texture_hallBg"];
        this.toolUtils.scaleBackgroundBG(bg);

        this.viewManager.showView(ViewConfig.HALLVIEW, null, null, true);
    }

}
