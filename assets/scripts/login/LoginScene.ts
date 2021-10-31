import { ViewConfig } from "../config/ViewConfig";
import SceneBase from "../core/external/SceneBase";
import { AppConfig } from "../AppConfig";
import { SceneConfig } from "../config/SceneConfig";
import InitReg from "./InitReg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginScene extends SceneBase {

    _fileProgressTx: cc.Node = null;

    _loginBtn: cc.Node = null;

    _loginBtn2: cc.Node = null;


    _curLoadCount: number = 0;

    // 主域
    _subContextView: cc.Node = null;

    init() {
        InitReg.getInstance().init();

        this._loginBtn = this.toolUtils.getNodeByName(this.node, "loginBtn");
        this._loginBtn.on("click", this.loginBtnCallback, this);
        this._loginBtn.active = false;

        this._fileProgressTx = this.toolUtils.getNodeByName(this.node, "loadRes");
        this._fileProgressTx.getComponent(cc.Label).string = "正在加载资源(此过程不消耗流量)";

        this.httpMessageHelp.setLoginServerUrl(AppConfig.webServerUrl);
        this._loginBtn.active = true;
        this._fileProgressTx.active = false;

        // this._loginBtn2 = this.toolUtils.getNodeByName(this.node, "loginBtn2");
        // this._loginBtn2.on("click", this.updateScore, this);
    }

    // updateScore() {
    //     console.log("更新分数");
    //     // 设置随机数(把这个当做玩家的分数)
    //     let s = Math.round(Math.random() * 1000);
    //     let obj = { type: "update", score: s };
    //     let msg = JSON.stringify(obj);
    //     console.log("随机数 score : ", msg);
    //     // 发送结算分数到开放域更新
    //     //@ts-ignore
    //     wx.getOpenDataContext().postMessage({
    //         message: msg
    //     });
    // }

    // wxMinInit() {
    //     this._subContextView = this.toolUtils.getNodeByName(this.node, "subcontextview");
    //     this._subContextView.active = false;
    //     this.creatorAutorBtn();
    // }

    /**
     * 是否显示排行榜
     */
    // showRanks() {
    //     //@ts-ignore
    //     if (typeof wx === 'undefined') {
    //         return;
    //     }

    //     let msg = '';
    //     if (!this._subContextView.active) {
    //         // 设置容器可见
    //         this._subContextView.active = true;
    //         let obj = { type: "showrank" };
    //         msg = JSON.stringify(obj);
    //     } else {
    //         console.log("清除所有的分数");
    //         // 设置容器不可见，即关闭排行榜，并让开放域清空排名信息
    //         this._subContextView.active = false;
    //         let obj = { type: "clear" };
    //         msg = JSON.stringify(obj);
    //     }
    //     //@ts-ignore
    //     wx.getOpenDataContext().postMessage({
    //         message: msg
    //     });
    // }

    /**
     * 微信授权
     */
    // creatorAutorBtn() {
    //     let btnSize = cc.size(this._loginBtn.width + 10, this._loginBtn.height + 10);
    //     let frameSize = cc.view.getFrameSize();
    //     let winSize = cc.director.getWinSize();
    //     //适配不同机型来创建微信授权按钮
    //     let left = (winSize.width * 0.5 + this._loginBtn.x - btnSize.width * 0.5) / winSize.width * frameSize.width;
    //     let top = (winSize.height * 0.5 - this._loginBtn.y - btnSize.height * 0.5) / winSize.height * frameSize.height;
    //     let widget = btnSize.width / winSize.width * frameSize.width;
    //     let height = btnSize.height / winSize.height * frameSize.height;
    //     this.initUserInfoButton("", left, top, widget, height, () => {
    //         this.showRanks();
    //     });

    // }
    // initUserInfoButton(txt: string, left: number, top: number, w: number, h: number, cb: Function) {
    //     // 微信授权
    //     //@ts-ignore
    //     if (typeof wx === 'undefined') {
    //         return;
    //     }

    //     //@ts-ignore
    //     let button = wx.createUserInfoButton({
    //         type: 'text',
    //         text: '',
    //         style: {
    //             left: left,
    //             top: top,
    //             width: w,
    //             height: h,
    //             lineHeight: 40,
    //             backgroundColor: '#00000000',
    //             color: '#00000000',
    //             textAlign: 'center',
    //             fontSize: 10,
    //             borderRadius: 4
    //         }
    //     });

    //     button.onTap((res: any) => {
    //         if (res.userInfo) {
    //             console.log('授权成功！');
    //             cb();
    //         }
    //         else {
    //             console.log('授权失败！');
    //         }
    //         button.hide();
    //         button.destroy();
    //     });
    // }

    loginBtnCallback(sender: any) {
        this.viewManager.showView(ViewConfig.LOGINVIEW);
    }

}
