import { AppConfig } from "../AppConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SplashScene extends cc.Component {
    
    getChildNodeByName (root:any, name:string) : any {
        if (!root) {
            return null;
        }
        if (root.name === name) {
            return root;
        }
        for (let index = 0; index < root.childrenCount; index++) {
            const element = root.children[index];
            let res = this.getChildNodeByName(element, name);
            if (res !== null) {
                return res;
            }
        }
        return null;
    }

    start () {

        let bg = this.getChildNodeByName(this.node, "bg");
        this.scaleBackgroundBG(bg);
        
        let icon = this.getChildNodeByName(this.node, "icon");
        icon.opacity = 0;
        cc.tween(icon).to(1, {opacity : 255})
                        .delay(0.8)
                        .call(() => {
                            if (AppConfig.platform === 2) {
                                cc.director.loadScene("LoginScene", (err:any, scene:any) => {
                                    let container = scene.children[0];
                                    let script = container.addComponent("LoginScene");
                                    //@ts-ignore
                                    script.setSceneType("login");
                                });
                            } else if (AppConfig.platform === 1) {
                                cc.director.loadScene("AssetsScene");
                            }
                        })
                        .start();

    }

    scaleBackgroundBG ( node:cc.Node ) {
        let showAll = Math.min(cc.view.getCanvasSize().width / node.width, cc.view.getCanvasSize().height / node.height);
        let realWidth = node.width * showAll;
        let realHeight = node.height * showAll;
        node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
    }
}
