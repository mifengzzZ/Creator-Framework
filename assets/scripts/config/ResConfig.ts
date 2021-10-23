const ResScene = {
    LOGINSCENE: "LoginScene",           // 登录场景
    HALLSCENE: "HallScene",            // 大厅场景
    ROOMSCENE: "RoomScene",            // 房间场景
};

/**
 * bundle name
 */
const BdnmConfig = {
    body: "body",
    common: "common",
};

/**
 * app bundle key
 */
const BdnmAppConfig = {
    body: { path: "body", version: "1.0.0" },
    common: { path: "common", version: "1.0.0" },
};

/**
 * minGame bundle key
 */
const BdnmMinGameConfig = {
    body: { path: "body", version: "1.0.0" },
    common: { path: "common", version: "1.0.0" },
};

/**
 * 非游戏bundle资源
 */
const BdResConfig = [
    //------------------------------------------------------prefab-----------------------------------------------------------------
    // common
    { "bd_guideview": { path: "guide/guide_prefab/GuideView", ex: cc.Prefab } },
    { "bd_messageview": { path: "tips/tips_prefab/MessageView", ex: cc.Prefab } },
    { "bd_loadingview": { path: "loading/loading_prefab/LoadingView", ex: cc.Prefab } },
    { "bd_downloadgameview": { path: "downloadgame/downloadgame_prefab/DownloadGameView", ex: cc.Prefab } },

    // login
    { "bd_loginview": { path: "login/login_prefab/LoginView", ex: cc.Prefab } },

    // hall
    { "bd_hallview": { path: "hall/hall_prefab/HallView", ex: cc.Prefab } },

    //------------------------------------------------------mp3-------------------------------------------------------------------
    { "bd_mp3_close": { path: "sounds/sounds_close", ex: cc.AudioClip } },
    { "bd_mp3_open": { path: "sounds/sounds_open", ex: cc.AudioClip } },

    //------------------------------------------------------texture-------------------------------------------------------------------
    // hall
    { "bd_texture_hallBg": { path: "hall/hall_bg", ex: cc.SpriteFrame } },

];

export { ResScene, BdResConfig, BdnmConfig, BdnmAppConfig, BdnmMinGameConfig };