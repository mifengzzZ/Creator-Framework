import ViewManager from "../core/manager/ViewManager";
import { ViewConfig } from "../config/ViewConfig";
import ViewInfo from "../core/package/ViewInfo";
import EntryBase from "../core/external/EntryBase";
import { BundleResCfg } from "../config/ResConfig";

export default class LoginEntry extends EntryBase {

    private static _ins: LoginEntry = null;

    static getInstance(): LoginEntry {
        if (!this._ins) {
            this._ins = new LoginEntry();
        }
        return this._ins;
    }

    init() {
        // tips
        ViewManager.getInstance().registerCreator(ViewConfig.MESSAGE, new ViewInfo("MessageView", BundleResCfg.messageview));

        // login
        ViewManager.getInstance().registerCreator(ViewConfig.LOGINVIEW, new ViewInfo("LoginView", BundleResCfg.loginview));
    }

}
