import { AppConfig } from "../AppConfig";
import { ConstConfig } from "../config/ConstConfig";
import { ResScene } from "../config/ResConfig";
import { SceneConfig } from "../config/SceneConfig";
import SceneBase from "../core/external/SceneBase";
import SceneInfo from "../core/package/SceneInfo";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SplashScene extends SceneBase {

    str: string = "";

    init() {
        if (AppConfig.EvnType === AppConfig.EvnEnum.publish) {
            this.toolUtils.sendHttpRequest("GET", AppConfig.loginConfigUrl, (req) => {
                this.logUtil.log("getLoginServerConfig req.responseText : " + req.responseText);
                let json = JSON.parse(req.responseText);
                let g_server = json[AppConfig.appName];
                this.logUtil.log(g_server);
                if (g_server) {
                    AppConfig.webServerUrl = g_server.webUrl;
                    AppConfig.loginServerIP = g_server.loginIp;
                    AppConfig.loginServerPort = g_server.loginPort;
                    AppConfig.bundleUrl = g_server.bundleUrl;
                    AppConfig.whiteUpSwitch = g_server.whiteUpSwitch;
                    AppConfig.whitePlayerList = g_server.whitePlayerList;
                    this.startGame();
                }
            });
        } else {
            this.startGame();
        }
    }

    startGame() {
        this.sceneManager.curSceneScript = this;
        this.sceneManager.registerCreator(SceneConfig.ASSETS, new SceneInfo("AssetsScene", ResScene.ASSETSCENE));
        this.sceneManager.registerCreator(SceneConfig.LOGIN, new SceneInfo("LoginScene", ResScene.LOGINSCENE));
        let icon = this.toolUtils.getNodeByName(this.node, "icon");
        icon.opacity = 0;
        cc.tween(icon).to(1, { opacity: 255 })
            .delay(1)
            .call(() => {
                if (AppConfig.platform === ConstConfig.PLATFORM_MINGAME) {
                    this.bundleManager.loadBundle().then(ret => {
                        if (ret) {
                            this.sceneManager.replaceScene(SceneConfig.LOGIN);
                        }
                    });
                } else if (AppConfig.platform === ConstConfig.PLATFORM_APP) {
                    this.bundleManager.loadBundle().then(ret => {
                        if (ret) {
                            this.sceneManager.replaceScene(SceneConfig.ASSETS);
                        }
                    });
                }
            })
            .start();
    }

}
