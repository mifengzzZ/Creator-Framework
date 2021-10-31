const ConstConfig = {

    // APP
    PLATFORM_APP: 1,
    // 小游戏
    PLATFORM_MINGAME: 2,

    //------------------------------------------------------------------------------------------------------------------------------
    // WINDOW全局字段表
    //------------------------------------------------------------------------------------------------------------------------------
    WINDOW_CONFIG: {
        APPPLATFORM_CALLBACKHANDLER: "APPPLATFORM_CALLBACKHANDLER",          // 平台回调Callback表
        APPPLATFORM_CALLBACK: "APPPLATFORM_CALLBACK",                 // 平台调用接口
        APPPLATFORM_CLIPBOARD: "APPPLATFORM_CLIPBOARD",                // 复制到剪切板
        APPPLATFORM_SHOCK: "APPPLATFORM_SHOCK",                    // 手机震动
        APPPLATFORM_CHANGE_HSP: "APPPLATFORM_CHANGE_HSP",               // 切换横竖屏
        APPPLATFORM_REMOVECACHE: "APPPLATFORM_REMOVECACHE",              // 清除缓存
        APPPLATFORM_GETAPPCACHE: "APPPLATFORM_GETAPPCACHE",              // 获取APP缓存
    },

    //------------------------------------------------------------------------------------------------------------------------------
    // 存储在本地的配置表 cc.sys.localStorage
    //------------------------------------------------------------------------------------------------------------------------------
    USERAID_STORAGE: 'userAid', // 用户aid

};

export { ConstConfig };
