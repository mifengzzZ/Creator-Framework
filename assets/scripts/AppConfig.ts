var AppConfig = {

   /**
    * dev 开发
    * test 测试
    * publish 发布
    */
   EvnEnum : {
      dev : "dev",
      test : "test",
      publish : "publish"
   },

   EvnType : "publish",

   // 是否开启热更
   isNotUpdate : true,

   // 平台名称
   appName : "quanmin",

   // 平台类型 1:app 2:小游戏
   platform : 2,

   // 应用ID
   appId : 90,
    
   // 版本号
   version : "1.0.0",

   // 协议版本号
   coreVersion : "1.0.0",

   // 通讯协议
   wwsValue : "ws",

   // 获取配置地址
   // loginConfigUrl : "https://servercfg.oss-cn-shenzhen.aliyuncs.com/loginserverconfig.json",
   loginConfigUrl : "http://www.phpfolder.com/loginserverconfig.json",

   // openId
   openId : "",

   // 登陆类型
   channel : 1,

   // device
   deviceId : "aa:bb:cc:dd",
   
   // WebServer
   webServerUrl : "",

   // loginServer
   loginServerIP : "",

   // loginPort
   loginServerPort : "",

   // bundleUrl
   bundleUrl : "",

   // 白名单测试用户
   whitePlayerList : [],
};

if (!window["initAppConfig"]) {
   if (AppConfig.EvnType === AppConfig.EvnEnum.dev) {
      AppConfig.webServerUrl = "http://nng1.16888game.com";
      AppConfig.loginServerIP = "";
      AppConfig.loginServerPort = "";
      AppConfig.bundleUrl = "http://192.168.0.16";
   } else if (AppConfig.EvnType === AppConfig.EvnEnum.test) {
      AppConfig.webServerUrl = "";
      AppConfig.loginServerIP = "";
      AppConfig.loginServerPort = "";
      AppConfig.bundleUrl = "";
   }
   window["initAppConfig"] = true;
}

export {AppConfig};