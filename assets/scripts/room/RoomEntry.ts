import SceneManager from "../core/manager/SceneManager";
import {SceneConfig} from "../config/SceneConfig";
import SceneInfo from "../core/package/SceneInfo";
import ViewManager from "../core/manager/ViewManager";
import {ViewConfig} from "../config/ViewConfig";
import ViewInfo from "../core/package/ViewInfo";
import {ResScene} from "../config/ResConfig";
import EntryBase from "../core/external/EntryBase";

export default class RoomEntry extends EntryBase {

    private static _ins : RoomEntry = null;

    static getInstance () : RoomEntry {
        if (!this._ins) {
            this._ins = new RoomEntry();
        }
        return this._ins;
    }

    init () {
        SceneManager.getInstance().registerCreator(SceneConfig.ROOM, new SceneInfo("RoomScene", ResScene.ROOMSCENE));
        
        ViewManager.getInstance().registerCreator(ViewConfig.DOWNLOADGAMEVIEW, new ViewInfo("DownloadGameView", this.bodyBundleRes["bd_downloadgameview"]));
    }

}
