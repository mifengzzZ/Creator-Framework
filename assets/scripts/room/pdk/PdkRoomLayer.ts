import ViewBase from "../../core/external/ViewBase";
import PdkGameData from "./data/PdkGameData";
import GSCmdDelayManager from "../net/GSCmdDelayManager";
import { PdkResConfig } from "./config/PdkResConfig";
import ToolUtils from "../../core/utils/ToolUtils";
import BundleManager from "../../core/manager/BundleManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PdkRoomLayer extends ViewBase {
    
    _roleLayer : any = null;
    _menuLayer : any = null;
    _asset : any = null;

    _jl : number = 10;
    _sp : cc.Node = null;

    start () {
        this.initView();

        window["GMDATA"] = new PdkGameData();
        GSCmdDelayManager.getInstance().pauseCmd();
        
        if (window["GMDATA"].initData(this._userData)) {

            let bg = new cc.Node();
            this.node.addChild(bg);
            bg.addComponent(cc.Sprite).spriteFrame = window["GMDATA"]._bundleRes["pdk_Desk2"];
            this.toolUtils.scaleBackgroundBG(bg);

            // 左下角菜单
            // let leftDownMenu = cc.instantiate(this.bodyBundleRes["Hall_leftMenu"]);
            // this.node.addChild(leftDownMenu);
            // this.toolUtils.dockLeftDown(leftDownMenu, 20, 20);

            // 用户层
            // this._roleLayer = cc.instantiate(window["GMDATA"]._bundleRes["pdkPlayerLayer"]);
            // console.log("_roleLayer : ", this._roleLayer);
            // console.log("this.node : ", this.node);
            // this.node.addChild(this._roleLayer);

            // 牌层
            // window["GMDATA"]._bundle.load(PdkResConfig.pdkCardLayer, (err:any, prefab:cc.Prefab) => {
            //     this._roleLayer = cc.instantiate(prefab);
            //     this.node.addChild(this._roleLayer);
            // });

            // cc.log("this.node : ", cc.winSize);
            
            // 菜单层
            this._menuLayer = cc.instantiate(window["GMDATA"]._bundleRes["pdkMenuLayer"]);
            this._menuLayer.setContentSize(cc.winSize);
            this.node.addChild(this._menuLayer);

            // let showAll = Math.min(cc.view.getCanvasSize().width / node.width, cc.view.getCanvasSize().height / node.height);
            // let realWidth = node.width * showAll;
            // let realHeight = node.height * showAll;
            // node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);

            // this.toolUtils.scaleBackgroundBG(this._menuLayer);

            // cc.log("this.node : ", this.node);
            // let create = ToolUtils.getInstance().getNodeByName(this.node, "creator");
            // cc.log("create : ", create);
            // create.on("click", this.resetGameView, this);

            // let dec = ToolUtils.getInstance().getNodeByName(this.node, "dec");
            // cc.log("dec : ", dec);
            // dec.on("click", this.dec, this);

            // let add = ToolUtils.getInstance().getNodeByName(this.node, "add");
            // cc.log("add : ", add);
            // add.on("click", this.add, this);

            // let removebundle = ToolUtils.getInstance().getNodeByName(this.node, "removebundle");
            // cc.log("removebundle : ", removebundle);
            // removebundle.on("click", this.removebundle, this);

            // let print = ToolUtils.getInstance().getNodeByName(this.node, "print");
            // cc.log("print : ", print);
            // print.on("click", this.print, this);

            // window["GMDATA"]._bundle.load("texture/baichun", cc.SpriteFrame, (err, texture) => {
            //         this._asset = texture;
            //         // texture.addRef();
            //         cc.log("asset 1: ", this._asset);
            //         // texture.decRef();
            //         // texture.addRef();
            //         // texture.decRef();
            //         // texture.addRef();
            // });

            // cc.resources.load("textures/splash/splash_quanmin_icon", cc.SpriteFrame, (err, texture) => {
            //     this._asset = texture;
            //     cc.log("asset 1: ", this._asset);
            // });

            // console.log("-----------------1111111111111111111111111--------------------");

        }

        GSCmdDelayManager.getInstance().resumeCmd();
    }

    dec () {
        // this._asset.decRef();
        this._sp.destroy();
        this._sp = null;
    }

    add () {
        // this._asset.addRef();
        this._asset.decRef();
    }

    removebundle () {
        BundleManager.getInstance().removeBundleByName("pdk");
    }

    print () {
        cc.log("asset : ", this._asset);
    }

    resetGameView () {
        this._sp = new cc.Node();
        let sp = this._sp.addComponent(cc.Sprite);
        sp.spriteFrame = this._asset;
        this._jl += 20;
        this._sp.x = this._jl;
        this.node.addChild(this._sp);
    }

}
