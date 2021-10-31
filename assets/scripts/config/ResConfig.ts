
/**
 * 场景fire
 */
const ResScene = {
    ASSETSCENE: "AssetsScene",         // 热更新场景
    LOGINSCENE: "LoginScene",          // 登录场景
    HALLSCENE: "HallScene",            // 大厅场景
    ROOMSCENE: "RoomScene",            // 房间场景
};

/**
 * resModule: AppConfig.bundleUrl
 */
const BundleResCfg = {
    //------------------------------------------------------prefab-----------------------------------------------------------------
    // common
    guideview: { path: "guide/guide_prefab/GuideView", ex: "cc.Prefab" },

    messageview: { path: "tips/tips_prefab/MessageView", ex: "cc.Prefab" },
    loadingview: { path: "loading/loading_prefab/LoadingView", ex: "cc.Prefab" },
    downloadgameview: { path: "downloadgame/downloadgame_prefab/DownloadGameView", ex: "cc.Prefab" },

    // login
    loginview: { path: "login/login_prefab/LoginView", ex: "cc.Prefab" },

    // hall
    hallview: { path: "hall/hall_prefab/HallView", ex: "cc.Prefab" },


    //------------------------------------------------------mp3-------------------------------------------------------------------
    mp3_close: { path: "sounds/sounds_close", ex: "cc.AudioClip" },
    mp3_open: { path: "sounds/sounds_open", ex: "cc.AudioClip" },


    //------------------------------------------------------texture-------------------------------------------------------------------
    // hall
    texture_hallBg: { path: "hall/hall_bg", ex: "cc.SpriteFrame" },

};

export { ResScene, BundleResCfg };