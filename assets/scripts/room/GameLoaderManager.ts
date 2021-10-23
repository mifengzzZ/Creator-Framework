import ModelCenter from "../data/ModelCenter";
import GSManager from "./net/GSManager";
import LoadingManager from "../core/manager/LoadingManager";
import SceneManager from "../core/manager/SceneManager";
import { SceneConfig } from "../config/SceneConfig";
import ViewManager from "../core/manager/ViewManager";
import { ViewConfig } from "../config/ViewConfig";
import ViewInfo from "../core/package/ViewInfo";

/**
 * 本地存储游戏数据对象
 * 进入(退出)游戏将初始化为null
 */
window["GMDATA"] = null;

export default class GameLoaderManager {

    _gmLoader : any = null;
    
    private static _ins : GameLoaderManager = null;

    static getInstance () : GameLoaderManager {
        if (!this._ins) {
            this._ins = new GameLoaderManager();
        }
        return this._ins;
    }

    getGmLoader () {
        return this._gmLoader;
    }

    /**
     * 根据gameid加载对应的gameloader并连接socket
     */
    connectGameSocket () {
        this._gmLoader = null;
        window["GAMEDATA"] = null;
        let gmConfigInfo = ModelCenter.getInstance().gameConfigInfo.getGameInfoByGameID(ModelCenter.getInstance().reconnectionInfo.gameId);
        let loadCls = window[gmConfigInfo.clsName];
        //@ts-ignore
        this._gmLoader = new loadCls();
        if (this._gmLoader) {
            let socketProcess = this._gmLoader.createProcesser();
            let socketReader = this._gmLoader.createReader();
            let socketWriter = this._gmLoader.createWriter();
            GSManager.getInstance().addSocketProcesser(socketProcess);
            GSManager.getInstance().addSocketReader(socketReader);
            GSManager.getInstance().addSocketWriter(socketWriter);
            LoadingManager.getInstance().showLoadingView();
            this.startConnectSocket();
        }
    }

    /**
     * 供Bundle脚本使用
     */
    initBundleMgr () {
        window["BDMgr"]["ViewManager"] = ViewManager.getInstance();
        window["BDMgr"]["ViewConfig"] = ViewConfig;
        window["BDMgr"]["ViewInfo"] = ViewInfo;
    }

    /**
     * 开始连接Socket
     */
    startConnectSocket () {
        let serverIP = ModelCenter.getInstance().reconnectionInfo.serverIP;
        let serverPort = ModelCenter.getInstance().reconnectionInfo.serverPort;
        GSManager.getInstance().connect(serverIP, serverPort);
        LoadingManager.getInstance().showLoadingView();
    }

    /**
     * 重新连接Socket
     */
    reConnectSocket () {
        GSManager.getInstance().reconnect();
    }

    /**
     * 进入游戏场景
     */
    enterRoomScene ( data:any, reconnect:any ) {
        LoadingManager.getInstance().hideLoadingView();
        SceneManager.getInstance().replaceScene(SceneConfig.ROOM, data);
    }

    /**
     * 退出游戏场景
     */
    exitRoomScene () {
        LoadingManager.getInstance().clearLoadingView();
        GSManager.getInstance().clearCacheEvent();
        this._gmLoader = null;
        window["GAMEDATA"] = null;
        window["BDMgr"]["ViewManager"] = null;


    }

}
