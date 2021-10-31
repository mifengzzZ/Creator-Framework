import { SceneConfig } from "../config/SceneConfig";
import { ResScene } from "../config/ResConfig";
import SceneInfo from "../core/package/SceneInfo";
import SceneManager from "../core/manager/SceneManager";
import ViewManager from "../core/manager/ViewManager";
import { ViewConfig } from "../config/ViewConfig";
import ViewInfo from "../core/package/ViewInfo";
import EntryBase from "../core/external/EntryBase";

export default class HallEntry extends EntryBase {

    private static _ins: HallEntry = null;

    static getInstance(): HallEntry {
        if (!this._ins) {
            this._ins = new HallEntry();
        }
        return this._ins;
    }

    init() {
        SceneManager.getInstance().registerCreator(SceneConfig.HALL, new SceneInfo("HallScene", ResScene.HALLSCENE));

        // ViewManager.getInstance().registerCreator(ViewConfig.HALLVIEW, new ViewInfo("HallView", this.bodyBundleRes["bd_hallview"]));
        // ViewManager.getInstance().registerCreator(ViewConfig.GUIDEVIEW, new ViewInfo("GuideView", this.bodyBundleRes["bd_guideview"]));
    }

}
