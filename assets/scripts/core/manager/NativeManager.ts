import { ConstConfig } from "../../config/ConstConfig";

window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CLIPBOARD]           =       "phone_clipboard";        // 复制剪切板
window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_SHOCK]               =       "phone_shock";            // 手机震动
window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CHANGE_HSP]          =       "phone_changehsp";        // 切换横竖屏
window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_REMOVECACHE]         =       "phone_removecache";      // 删除缓存
window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_GETAPPCACHE]         =       "phone_getappcache";      // 获取缓存大小

// 保存回调函数
window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER]     =       {};

/**
 * 提供{java | oc}回调
 * @param jsonObj json格式
 */
window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACK] = (jsonObj:any) => {
    try {
        cc.log("AppPlatform callback jsonObj type : ", jsonObj["type"]);
        cc.log("AppPlatform callback jsonObj type : ", jsonObj["status"]);
        cc.log("AppPlatform callback jsonObj type : ", jsonObj["code"]);
        var handler = window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][jsonObj]["type"];
        if (handler) {
            handler(jsonObj);
        }
    } catch (error) {
        cc.log("AppPlatform callback error!");
    }
};

const ApiClass = "";

export default class NativeManager {

    private static _ins : NativeManager = null;

    static getInstance () : NativeManager {
        if (!this._ins) {
            this._ins = new NativeManager();
        }
        return this._ins;
    }

    /**
     * 区分Android与iOS
     */
    getPlatform () {
        if (cc.sys.platform === cc.sys.ANDROID) {
            cc.log("AppPlatform callback Android");
            return true;
        } else if (cc.sys.platform === cc.sys.IPHONE || cc.sys.platform === cc.sys.IPAD || cc.sys.platform === cc.sys.MACOS) {
            cc.log("AppPlatform callback iOS");
            return false;
        }
    }

    /**
     * 网络是否可用
     */
    isNetWorkAvailable () : boolean {
        if (!cc.sys.isNative) {
            return true;
        }

        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        let ret = true;
        if (this.getPlatform()) {
            ret = jsb.reflection.callStaticMethod(ApiClass, "isNetWorkAvailable", "()Z");
        } else {
            //@ts-ignore
            ret = jsb.reflection.callStaticMethod("PhoneTool", "isNetWorkAvailable");
        }
        return ret;
    }

    /**
     * 复制剪切板
     */
    clipboard (handler:any, code:any) {
        window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CLIPBOARD]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        if (this.getPlatform()) {
            jsb.reflection.callStaticMethod(ApiClass, "clipboard", "(Ljava/lang/String;)V", code);
        } else {
            jsb.reflection.callStaticMethod("PhoneTool", "clipboard", code);
        }
    }

    /**
     * 手机震动
     */
    openShock (handler:any) {
        window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_SHOCK]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        if (this.getPlatform()) {
            jsb.reflection.callStaticMethod(ApiClass, "openShock", "(I)V");
        } else {
            //@ts-ignore
            jsb.reflection.callStaticMethod("PhoneTool", "openShock");
        }
    }

    /**
     * 切换横竖屏
     * hsp : true竖屏 false横屏
     */
    changeHSP (handler:any, hsp:any) {
        window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CHANGE_HSP]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        if (this.getPlatform()) {
            jsb.reflection.callStaticMethod(ApiClass, "changeHSP", "(Z)V", hsp);
        } else {
            jsb.reflection.callStaticMethod("PhoneTool", "changeSHP:", hsp);
        }
    }
    
    /**
     * 获取缓存
     */
    getAppCache (handler:any) {
        window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CHANGE_HSP]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        if (this.getPlatform()) {
            jsb.reflection.callStaticMethod(ApiClass, "getAppCache", "()V");
        } else {
            //@ts-ignore
            jsb.reflection.callStaticMethod("PhoneTool", "getAppCacheValue");
        }
    }

    /**
     * 删除缓存
     */    
    removeCache (handler:any) {
        window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig.WINDOW_CONFIG.APPPLATFORM_REMOVECACHE]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        if (this.getPlatform()) {
            jsb.reflection.callStaticMethod(ApiClass, "removeAppCache", "()V");
        } else {
            //@ts-ignore
            jsb.reflection.callStaticMethod("PhoneTool", "removeAppData");
        }
    }

}
