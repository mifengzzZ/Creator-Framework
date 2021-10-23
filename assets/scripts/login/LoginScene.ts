import ViewManager from "../core/manager/ViewManager";
import { ViewConfig } from "../config/ViewConfig";
import SceneBase from "../core/external/SceneBase";
import ToolUtils from "../core/utils/ToolUtils";
import { AppConfig } from "../AppConfig";
import HttpMessageHelp from "../core/http/HttpMessageHelp";
import { BdnmAppConfig, BdnmConfig, BdnmMinGameConfig, BdResConfig } from "../config/ResConfig";
import SceneManager from "../core/manager/SceneManager";
import { SceneConfig } from "../config/SceneConfig";
import InitReg from "./InitReg";
import LogManager from "../core/manager/LogManager";
import BundleManager from "../core/manager/BundleManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginScene extends SceneBase {

    _fileProgressTx : cc.Node = null;

    _loginBtn : cc.Node = null;

    _loginBtn2 : cc.Node = null;
    

    _curLoadCount : number = 0;

    // 主域
    _subContextView : cc.Node = null;

    start () {
        SceneManager.getInstance().setCurSceneType(SceneConfig.LOGIN);

        this._loginBtn = ToolUtils.getInstance().getNodeByName(this.node, "loginBtn");
        this._loginBtn.on("click", this.loginBtnCallback, this);
        this._loginBtn.active = false;
        this._fileProgressTx = ToolUtils.getInstance().getNodeByName(this.node, "loadRes");
        this._fileProgressTx.getComponent(cc.Label).string = "正在加载资源(此过程不消耗流量)";

        if (AppConfig.platform === 1) {
            this.getBundleRes();
        } else if (AppConfig.platform === 2) {
            this.getLoginServerConfig();
        }

        // 主域初始化
        this.wxMinInit();

        this._loginBtn2 = ToolUtils.getInstance().getNodeByName(this.node, "loginBtn2");
        this._loginBtn2.on("click", this.updateScore, this);
    }

    updateScore () {
        console.log("更新分数");
        // 设置随机数(把这个当做玩家的分数)
        let s = Math.round(Math.random()*1000);
        let obj = {type:"update", score : s };
        let msg = JSON.stringify(obj);
        console.log("随机数 score : ", msg);
        // 发送结算分数到开放域更新
        //@ts-ignore
        wx.getOpenDataContext().postMessage({
            message: msg
        });
    }

    wxMinInit () {
        this._subContextView = this.toolUtils.getNodeByName(this.node, "subcontextview");
        this._subContextView.active = false;
        this.creatorAutorBtn();
    }

    /**
     * 是否显示排行榜
     */
    showRanks() {
        //@ts-ignore
        if (typeof wx === 'undefined') {
            return;
        }

        let msg = '';
        if (!this._subContextView.active) {
            // 设置容器可见
            this._subContextView.active = true;
            let obj = {type:"showrank"};
            msg = JSON.stringify(obj);
        } else {
            console.log("清除所有的分数");
            // 设置容器不可见，即关闭排行榜，并让开放域清空排名信息
            this._subContextView.active = false;
            let obj = {type:"clear"};
            msg = JSON.stringify(obj);
        }
        //@ts-ignore
        wx.getOpenDataContext().postMessage({
            message: msg
        });
    }

    /**
     * 微信授权
     */
    creatorAutorBtn () {
        let btnSize = cc.size(this._loginBtn.width+10,this._loginBtn.height+10);
		let frameSize = cc.view.getFrameSize();
		let winSize = cc.director.getWinSize();
		//适配不同机型来创建微信授权按钮
		let left = (winSize.width*0.5+this._loginBtn.x-btnSize.width*0.5)/winSize.width*frameSize.width;
		let top = (winSize.height*0.5-this._loginBtn.y-btnSize.height*0.5)/winSize.height*frameSize.height;
	    let widget = btnSize.width/winSize.width*frameSize.width;
        let height = btnSize.height/winSize.height*frameSize.height;
        this.initUserInfoButton("", left, top, widget, height, () => {
            this.showRanks();
        });

    }
    initUserInfoButton (txt:string, left:number, top:number, w:number, h:number, cb:Function) {
        // 微信授权
        //@ts-ignore
        if (typeof wx === 'undefined') {
            return;
        }
    
        //@ts-ignore
        let button = wx.createUserInfoButton({
            type: 'text',
            text: '',
            style: {
                left: left,
                top: top,
                width: w,
                height: h,
                lineHeight: 40,
                backgroundColor: '#00000000',
                color: '#00000000',
                textAlign: 'center',
                fontSize: 10,
                borderRadius: 4
            }
        });

        button.onTap(( res:any ) => {
            if (res.userInfo) {
                console.log('授权成功！');
                cb();
            }
            else {
                console.log('授权失败！');
            }
            button.hide();
            button.destroy();
        });
    }

    loginBtnCallback ( sender:any ) {
        this.showRanks();
        // ViewManager.getInstance().showView(ViewConfig.LOGINVIEW);
    }

    /**
     * 获取登陆服务器配置
     */
    getLoginServerConfig () {
        this.toolUtils.sendHttpRequest("GET", AppConfig.loginConfigUrl, (req) => {
            this.logUtil.log("getLoginServerConfig req.responseText : " + req.responseText);
            let json = JSON.parse(req.responseText);
            let g_server = json[AppConfig.appName];
            this.logUtil.log(g_server);
            if (g_server) {
                if (AppConfig.EvnType === AppConfig.EvnEnum.publish) {
                    AppConfig.webServerUrl = g_server.webUrl;
                    AppConfig.loginServerIP = g_server.loginIp;
                    AppConfig.loginServerPort = g_server.loginPort;
                    AppConfig.bundleUrl = g_server.bundleUrl;
                    AppConfig.whitePlayerList = g_server.whitePlayerList;
                }
                this.getBundleRes();
            }
        });
    }

    getBundleRes () {
        let resSumArr = [];
        for (let index = 0; index < BdResConfig.length; index++) {
            resSumArr.push(BdResConfig[index]);
        }
        LogManager.getInstance().log("资源长度 : " + resSumArr.length);
        this._fileProgressTx.getComponent(cc.Label).string = "正在加载资源(此过程不消耗流量):" + this._curLoadCount + "/" + resSumArr.length;
        if (AppConfig.platform === 1) {
            this.loadAppBundle(resSumArr, AppConfig.bundleUrl + "appgame/remote/" + BdnmAppConfig.body.path + "/" + BdnmAppConfig.body.version + "/" + BdnmAppConfig.body.path);
        } else if (AppConfig.platform === 2) {
            this.loadMinGameBundle(resSumArr, AppConfig.bundleUrl + "mingame/" + BdnmMinGameConfig.body.path + "/" +  BdnmMinGameConfig.body.version + "/" + BdnmAppConfig.body.path);
        }
    }

    /**
     * 小游戏加载
     * @param arr 
     * @param url 
     */
    loadMinGameBundle ( arr:any[], url:string ) {
        LogManager.getInstance().log("当前远程资源地址 : " + url);
        this.loadBundle(arr, url);
    }

    /**
     * load bundle
     * @param arr 
     * @param url 
     */
    loadBundle (arr:any[], url:string) {
        cc.assetManager.loadBundle(url, {onFileProgress: (resData:any) => { this.logUtil.log("onFileProgress : " + resData); }}, (err:any, bundle:cc.AssetManager.Bundle) => {
            if (err) {
                return console.log("[LoginScene] load bundle res faild.");
            } else {
                console.log("[LoginScene] load bundle res success.");
                BundleManager.getInstance().saveBundleByName(bundle, BdnmConfig.body);
                BundleManager.getInstance().cacheBundleResources(BdnmConfig.body, arr, () => {
                    this._curLoadCount += 1;
                    LogManager.getInstance().log("this._curLoadCount : " + this._curLoadCount);
                    this._fileProgressTx.getComponent(cc.Label).string = "正在加载资源(此过程不消耗流量):" + this._curLoadCount + "/" + arr.length;
                    if (this._curLoadCount === arr.length) {
                        LogManager.getInstance().log("Bundle资源加载完成");
                        this.initLoginScene();
                    }
                });
            }
        });
    }

    /**
     * App加载
     * @param arr 
     * @param url 
     */
    loadAppBundle ( arr:any[], url:string ) {
        cc.assetManager.loadBundle(url, {onFileProgress: (resData:any) => { this.logUtil.log("onFileProgress : " + resData); }}, (err:any, bundle:cc.AssetManager.Bundle) => {
            if (err) {
                return console.log("[LoginScene] load bundle res faild.");
            } else {
                console.log("[LoginScene] load bundle res success.");
                BundleManager.getInstance().saveBundleByName(bundle, BdnmConfig.body);
                BundleManager.getInstance().cacheBundleResources(BdnmConfig.body, arr, () => {
                    this._curLoadCount += 1;
                    LogManager.getInstance().log("this._curLoadCount : " + this._curLoadCount);
                    this._fileProgressTx.getComponent(cc.Label).string = "正在加载资源(此过程不消耗流量):" + this._curLoadCount + "/" + arr.length;
                    if (this._curLoadCount === arr.length) {
                        LogManager.getInstance().log("Bundle资源加载完成,检测是否需要重启更新");
                        this.toolUtils.sendHttpRequest("GET", AppConfig.loginConfigUrl, (req) => {
                            this.logUtil.log("loadAppBundle req.responseText : " + req.responseText);
                            let json = JSON.parse(req.responseText);
                            json = json[AppConfig.appName];
                            if (json.scriptVersion !== AppConfig.version) {
                                if (json.whiteUpSwitch) {
                                    // 如果是测试人员,则需要更新到最新版本
                                    let aid = cc.sys.localStorage.getItem("userAid");
                                    this.logUtil.log("aid : " + aid);
                                    if (aid && typeof aid === "string") {
                                        let isNotPlayer = false;
                                        for (let index = 0; index < AppConfig.whitePlayerList.length; index++) {
                                            const id = AppConfig.whitePlayerList[index];
                                            if (id === Number(aid)) {
                                                isNotPlayer = true;
                                                break;
                                            }
                                        }
                                        if (isNotPlayer)
                                            this.reset();
                                        else
                                            this.initLoginScene();
                                    } else {
                                        this.reset();
                                    }
                                } else {
                                    this.reset();
                                }
                            } else {
                                this.initLoginScene();
                            }
                        });
                    }
                });
            }
        });

        
    }

    /**
     * 完成加载 显示登陆
     */
    initLoginScene () {
        InitReg.getInstance().init();
        HttpMessageHelp.getInstance().setLoginServerUrl(AppConfig.webServerUrl);
        this._loginBtn.active = true;
        this._fileProgressTx.active = false;
    }

    /**
     * 重启更新
     */
    reset () {
        this.viewManager.showView(ViewConfig.MESSAGE, {
            content : "检测到有新版本更新",
            continueCallBack : () => {
                this.logUtil.log("重启更新");
                cc.game.restart();
            }
        });
    }

}
