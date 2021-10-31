import SceneBase from "../core/external/SceneBase";
import { ViewConfig } from "../config/ViewConfig";
import { AppConfig } from "../AppConfig";
import BundleManager from "../core/manager/BundleManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallScene extends SceneBase {

    init() {

        let ver: cc.Label = this.toolUtils.getNodeByName(this.node, "version");
        ver.string = AppConfig.version + "." + BundleManager.getInstance().getVersion();

        // this.viewManager.showView(ViewConfig.HALLVIEW, null, null, true);
    }

}
