import HttpMessageHelp from "../http/HttpMessageHelp";
import BundleManager from "../manager/BundleManager";
import EventManager from "../manager/EventManager";
import LogManager from "../manager/LogManager";
import NativeManager from "../manager/NativeManager";
import ResourcesManager from "../manager/ResourcesManager";
import SceneManager from "../manager/SceneManager";
import SoundManager from "../manager/SoundManager";
import ViewManager from "../manager/ViewManager";
import ToolUtils from "../utils/ToolUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SceneBase extends cc.Component {

    // 当前场景类型
    _sceneType: string = null;

    // 跳转场景时携带参数
    _userData: any = null;

    // 地图层
    private _mapNode: cc.Node = null;
    // 地图上的物品层
    private _articleNode: cc.Node = null;
    // 主菜单层
    private _mainMenuNode: cc.Node = null;
    // 弹框层
    private _popNode: cc.Node = null;
    // loading
    private _loadResNode: cc.Node = null;

    toolUtils: ToolUtils = ToolUtils.getInstance();
    sceneManager: SceneManager = SceneManager.getInstance();
    viewManager: ViewManager = ViewManager.getInstance();
    eventManager: EventManager = EventManager.getInstance();
    soundManager: SoundManager = SoundManager.getInstance();
    nativeManager: NativeManager = NativeManager.getInstance();
    sResources: Object = ResourcesManager.getInstance().getGlobResources();
    bundleManager: BundleManager = BundleManager.getInstance();
    logUtil: LogManager = LogManager.getInstance();
    httpMessageHelp = HttpMessageHelp.getInstance();

    start() {
        // this._mapNode = new cc.Node("mapNode");
        // this.node.addChild(this._mapNode);
        // this._articleNode = new cc.Node("articleNode");
        // this.node.addChild(this._articleNode);
        // this._mainMenuNode = new cc.Node("mainMenuNode");
        // this.node.addChild(this._mainMenuNode);
        this._popNode = new cc.Node("popNode");
        this.node.addChild(this._popNode);
        this._loadResNode = new cc.Node("loadResNode");
        this.node.addChild(this._loadResNode);

        this.init();
    }

    init() { }

    public get mapNode(): cc.Node {
        return this._mapNode;
    }

    public get articleNode(): cc.Node {
        return this._articleNode;
    }

    public get mainMenuNode(): cc.Node {
        return this._mainMenuNode;
    }

    public get loadNode(): cc.Node {
        return this._loadResNode;
    }

    public get popNode(): cc.Node {
        return this._popNode;
    }

    setSceneType(type: string) {
        cc.log("Cur scene type : ", type);
        this._sceneType = type;
    }

    getSceneType(): string {
        return this._sceneType;
    }

    setUserData(data: any) {
        cc.log("Cur jump scene user data : ", data);
        this._userData = data;
    }

    getUserData(): any {
        return this._userData;
    }

}
