import SceneManager from "../core/manager/SceneManager";
import { SceneConfig } from "../config/SceneConfig";
import SceneInfo from "../core/package/SceneInfo";
import ViewManager from "../core/manager/ViewManager";
import { ViewConfig } from "../config/ViewConfig";
import ViewInfo from "../core/package/ViewInfo";
import { ResScene } from "../config/ResConfig";
import EntryBase from "../core/external/EntryBase";

export default class LoginEntry extends EntryBase {

    private static _ins: LoginEntry = null;

    static getInstance(): LoginEntry {
        if (!this._ins) {
            this._ins = new LoginEntry();
        }
        return this._ins;
    }

    init() {
        SceneManager.getInstance().registerCreator(SceneConfig.LOGIN, new SceneInfo("LoginScene", ResScene.LOGINSCENE));

        // tips
        ViewManager.getInstance().registerCreator(ViewConfig.MESSAGE, new ViewInfo("MessageView", this.bodyBundleRes["bd_messageview"]));

        // login
        ViewManager.getInstance().registerCreator(ViewConfig.LOGINVIEW, new ViewInfo("LoginView", this.bodyBundleRes["bd_loginview"]));

    }

}
