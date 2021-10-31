import ViewManager from "../manager/ViewManager";
import ToolUtils from "../utils/ToolUtils";
import EventManager from "../manager/EventManager";
import SoundManager from "../manager/SoundManager";
import NativeManager from "../manager/NativeManager";
import ResourcesManager from "../manager/ResourcesManager";
import BundleManager from "../manager/BundleManager";
import LogManager from "../manager/LogManager";
import SceneManager from "../manager/SceneManager";
import { AppConfig } from "../../AppConfig";
import { BundleResCfg } from "../../config/ResConfig";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ViewBase extends cc.Component {

    _guiType: string = "";
    _userData: any = null;
    _closeShowAnimation: boolean = false;
    _isCloseAnimating: boolean = false;
    _root: any = null;
    toolUtils: ToolUtils = ToolUtils.getInstance();
    viewManager: ViewManager = ViewManager.getInstance();
    eventManager: EventManager = EventManager.getInstance();
    soundManager: SoundManager = SoundManager.getInstance();
    nativeManager: NativeManager = NativeManager.getInstance();
    sResources: Object = ResourcesManager.getInstance().getGlobResources();
    bundleManager: BundleManager = BundleManager.getInstance();
    sceneManager: SceneManager = SceneManager.getInstance();
    logUtil: LogManager = LogManager.getInstance();

    start() {
        this.initView();
        this.init();
    }

    init() { };

    setType(type: string) {
        this._guiType = type;
    }

    getType(): string {
        return this._guiType;
    }

    setUserData(data: any) {
        this._userData = data;
    }

    getUserData(): any {
        return this._userData;
    }

    closeShowAnimation() {
        this._closeShowAnimation = true;
    }

    initView(reset?: boolean) {
        if (this.node === null) {
            return;
        }

        if (reset) {
            this.node.setContentSize(cc.winSize);
        }

        let mask: cc.Node = ToolUtils.getInstance().getNodeByName(this.node, "MASK");
        if (mask) {
            mask.addComponent(cc.Button);
            mask.setContentSize(cc.size(cc.winSize.width, cc.winSize.height));
            mask.on('click', () => {
                if (this.onClickMask) {
                    this.onClickMask();
                }
            }, this);
        }

        if (!this._closeShowAnimation) {
            this.node.opacity = 0;
            this.node.setScale(0.7);
            cc.tween(this.node).to(0.05, { scale: 1.1 }, { easing: "sineIn" })
                .to(0.03, { scale: 1 }, { easing: "sineOut" })
                .call(() => {
                    ViewManager.getInstance()._viewScriptStack.push(this);
                    this.bundleManager.loadSignResByBundleName(AppConfig.bundleUrl, BundleResCfg.mp3_open).then(sound => {
                        if (sound) {
                            this.soundManager.play(sound);
                        }
                    });
                })
                .start();
            cc.tween(this.node).to(0.08, { opacity: 255 })
                .start();
        }

        this._closeShowAnimation = false;
        //@ts-ignore
        if (this.onShow) {
            //@ts-ignore
            this.onShow();
        }
    }

    onClickMask() { }

    hide() {
        cc.tween(this.node).to(0.03, { scale: 1.1 }, { easing: "sineIn" })
            .to(0.05, { scale: 0.7 }, { easing: "sineOut" })
            .call(() => {
                this.node.active = false;
                //@ts-ignore
                if (this.onHide) {
                    //@ts-ignore
                    this.onHide();
                }
            }).start();
    }

    show() {
        this.node.opacity = 0;
        this.node.setScale(0.7);
        cc.tween(this.node).to(0.05, { scale: 1.1 }, { easing: "sineIn" }).to(0.03, { scale: 1 }, { easing: "sineOut" }).start();
        cc.tween(this.node).to(0.08, { opacity: 255 }).start();
    }

    _destroy() {
        ViewManager.getInstance().removeView(this._guiType);
        this._guiType = "";
        this._userData = null;
        this._closeShowAnimation = false;
        this._isCloseAnimating = false;
    }

    close(isNoAnim?: any) {
        if (this._isCloseAnimating) {
            return;
        }
        if (typeof isNoAnim === "undefined" || !isNoAnim) {
            this._isCloseAnimating = true;

            cc.tween(this.node).to(0.03, { scale: 1.1 }, { easing: "sineIn" })
                .to(0.05, { scale: 0.7 }, { easing: "sineOut" })
                .call(() => {
                    this._isCloseAnimating = false;
                    this._destroy();
                }).start();

        } else {
            this.node.opacity = 0;
            this._destroy();
        }
        this.bundleManager.loadSignResByBundleName(AppConfig.bundleUrl, BundleResCfg.mp3_close).then(sound => {
            if (sound) {
                this.soundManager.play(sound);
            }
        });
    }

    /**
     * 查找节点上的组件
     */
    getComponentByNode(node: cc.Node, component: any): any {
        let comp = node.getComponent(component);
        if (!comp) {
            cc.log("ViewBase ERROR : not found component : ", component);
            return node;
        }
        return comp;
    }

}
