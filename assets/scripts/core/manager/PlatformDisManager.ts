import NativeManager from "./NativeManager";
import WxMinManager from "./WxMinManager";

//------------------------------------------------------------------------------------
// 常用平台类型（cc.sys.platform）
// cc.sys.OS_IOS                   苹果平台
// cc.sys.OS_ANDROID               安卓平台
// cc.sys.OS_WINDOWS               Windows平台
// cc.sys.MOBILE_BROWSER	        Web平台
// cc.sys.WECHAT_GAME              微信小游戏
// cc.sys.WECHAT_GAME_SUB          微信小游戏开放数据域
// cc.sys.QQ_PLAY	                qq小游戏	    
// cc.sys.BAIDU_GAME               百度小游戏
// cc.sys.BAIDU_GAME_SUB           百度小游戏开放数据域
// cc.sys.VIVO_GAME                vivo小游戏
// cc.sys.OPPO_GAME                oppo小游戏
// cc.sys.HUAWEI_GAME	            华为快游戏
// cc.sys.XIAOMI_GAME	            小米快游戏                
// cc.sys.ALIPAY_GAME              支付宝小游戏
// cc.sys.QTT_GAME                 趣头条小游戏
// cc.sys.BYTEDANCE_GAME           字节跳动小游戏
// cc.sys.BYTEDANCE_GAME_SUB       字节跳动小游戏开放数据域
// cc.sys.FB_PLAYABLE_ADS          Facebook
// cc.sys.LINKSURE                 连尚小游戏

export default class PlatformDisManager {

    _wxMinManager: WxMinManager = WxMinManager.getInstance();
    _nativeManager: NativeManager = NativeManager.getInstance();



}
