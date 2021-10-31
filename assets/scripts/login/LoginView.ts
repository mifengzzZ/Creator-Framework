import ViewBase from "../core/external/ViewBase";
import ToolUtils from "../core/utils/ToolUtils";
import { EventConfig } from "../config/EventConfig";
import HttpMessageHelp from "../core/http/HttpMessageHelp";
import { HttpConfig } from "../config/HttpConfig";
import SceneManager from "../core/manager/SceneManager";
import { SceneConfig } from "../config/SceneConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginView extends ViewBase {

    _loginEditBox: any = null;
    _accountNumStr: string = null;

    init() {
        this._loginEditBox = ToolUtils.getInstance().getNodeByName(this.node, "loginEditBox");
        this._loginEditBox.on("editing-did-began", this.loginEditBeganCallBack, this);
        this._loginEditBox.on("editing-did-ended", this.loginEditEndedCallBack, this);

        let _loginBtn = ToolUtils.getInstance().getNodeByName(this.node, "loginBtn");
        _loginBtn.on("click", this.loginBtnCallback, this);
    }

    loginEditBeganCallBack(editbox: any) {
    }

    loginEditEndedCallBack(editbox: any) {
        cc.log("登陆账号 : ", editbox.string);
        this._accountNumStr = editbox.string;
    }

    loginBtnCallback() {
        HttpMessageHelp.getInstance().sendMessage(HttpConfig.LOGIN_GAME, { openId: this._accountNumStr });
    }

    onClickMask() {
        this.close();
    }

    onEvent(event: any) {
        let data = event.getUserData();
        switch (event.getName()) {
            case EventConfig.LOGIN_SERVER_READY:
                SceneManager.getInstance().replaceScene(SceneConfig.HALL);
                break;
            default:
                break;
        }
    }
}
