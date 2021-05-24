window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AppConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "830f3pOGP5Pw6sxwz+04ZAz", "AppConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AppConfig = void 0;
    var AppConfig = {
      EvnEnum: {
        dev: "dev",
        test: "test",
        publish: "publish"
      },
      EvnType: "publish",
      isNotUpdate: true,
      appName: "quanmin",
      platform: 1,
      appId: 90,
      version: "1.0.0",
      coreVersion: "1.0.0",
      wwsValue: "ws",
      loginConfigUrl: "http://www.phpfolder.com/loginserverconfig.json",
      openId: "",
      channel: 1,
      deviceId: "aa:bb:cc:dd",
      webServerUrl: "",
      loginServerIP: "",
      loginServerPort: "",
      bundleUrl: "",
      whitePlayerList: []
    };
    exports.AppConfig = AppConfig;
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
    cc._RF.pop();
  }, {} ],
  ArrayUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30a75jJDEpH4okjI0zIBoEY", "ArrayUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ArrayUtils = function() {
      function ArrayUtils() {}
      ArrayUtils.getInstance = function() {
        this._ins || (this._ins = new ArrayUtils());
        return this._ins;
      };
      ArrayUtils.prototype.mergeArrayBuffer = function(buff1, buff2) {
        var len1 = buff1.byteLength;
        var len2 = buff2.byteLength;
        var ret = new ArrayBuffer(len1 + len2);
        var retI8a = new Int8Array(ret);
        var i8a = new Int8Array(buff1);
        var i = 0;
        for (i = 0; i < len1; i++) retI8a[i] = i8a[i];
        i8a = new Int8Array(buff2);
        for (i = 0; i < len2; i++) retI8a[len1 + i] = i8a[i];
        return ret;
      };
      ArrayUtils.prototype.copyArrayBuffer = function(buff, offset, len) {
        var buffLen = buff.byteLength;
        var retArrayBuff = null;
        var retLen = len;
        len || (len = buffLen - offset);
        if (0 === len) return null;
        retArrayBuff = new ArrayBuffer(len);
        var reti8a = new Int8Array(retArrayBuff);
        var i8a = new Int8Array(buff, offset);
        for (var i = 0; i < len; i++) reti8a[i] = i8a[i];
        return retArrayBuff;
      };
      ArrayUtils.prototype.executeElmArr = function(arr, filter, processor) {
        var len = arr.length;
        for (var i = 0; i < len; i++) filter ? filter(arr[i]) && processor(arr[i]) : processor(arr[i]);
        return arr;
      };
      ArrayUtils.prototype.execRepArrElm = function(arr, processor) {
        var len = arr.length;
        for (var i = 0; i < len; i++) arr[i] = processor(arr[i]);
        return arr;
      };
      ArrayUtils.prototype.searchElm = function(arr, filter, getAll) {
        if (!arr || !filter) return null;
        var len = arr.length;
        var ret = [];
        var elm;
        for (var i = 0; i < len; i++) if (filter(arr[i])) {
          if (!getAll) return arr[i];
          ret.push(arr[i]);
        }
        return ret;
      };
      ArrayUtils.prototype.getRandomElm = function(arr) {
        if (arr) {
          var len = arr.length;
          if (len > 0) return arr[parseInt((Math.random() * len).toString())];
        }
      };
      ArrayUtils.prototype.numberToArray = function(value, refArr) {
        var ret = [];
        var arr = refArr;
        for (var i = arr.length - 1; i >= 0; i--) while (value >= arr[i]) {
          value -= arr[i];
          ret.push(arr[i]);
        }
        return ret;
      };
      ArrayUtils.prototype.copyPropertyUseObj = function(originObj, obj) {
        for (var property in obj) originObj.hasOwnProperty(property) && (originObj[property] = obj[property]);
      };
      ArrayUtils.prototype.findValueInArr = function(arr, value) {
        for (var i = 0; i < arr.length; i++) if (arr[i] == value) return i;
        return -1;
      };
      return ArrayUtils;
    }();
    exports.default = ArrayUtils;
    cc._RF.pop();
  }, {} ],
  AssetsScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b847j5zzpIDa3myONJV/7B", "AssetsScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AppConfig_1 = require("../AppConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AssetsScene = function(_super) {
      __extends(AssetsScene, _super);
      function AssetsScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.manifestUrl = null;
        _this._storagePath = "";
        _this._am = null;
        _this._updateListener = null;
        _this._updating = false;
        _this._canRetry = false;
        _this._progress = 0;
        _this._tips = null;
        _this._updatePanel = null;
        _this._updatePanelTxBg = null;
        _this._upPanelTx = null;
        _this._upPanelProgressBar = null;
        _this._upPanel_progressTx = null;
        return _this;
      }
      AssetsScene.prototype.getChildNodeByName = function(root, name) {
        if (!root) return null;
        if (root.name === name) return root;
        for (var index = 0; index < root.childrenCount; index++) {
          var element = root.children[index];
          var res = this.getChildNodeByName(element, name);
          if (null !== res) return res;
        }
        return null;
      };
      AssetsScene.prototype.start = function() {
        var bg = this.getChildNodeByName(this.node, "bg");
        this.scaleBackgroundBG(bg);
        this._tips = this.getChildNodeByName(this.node, "tips");
        this._tips.active = false;
        this._updatePanel = this.getChildNodeByName(this.node, "updatePanel");
        this._updatePanelTxBg = this.getChildNodeByName(this.node, "upPanel_txbg");
        this._upPanelTx = this.getChildNodeByName(this.node, "upPanel_tx");
        var progress = this.getChildNodeByName(this.node, "upPanel_Progressbar");
        this._upPanel_progressTx = this.getChildNodeByName(this.node, "upPanel_progressTx").getComponent(cc.Label);
        this._upPanelProgressBar = progress.getComponent(cc.ProgressBar);
        this._upPanelProgressBar.progress = 0;
        this.getLoginServerConfig();
      };
      AssetsScene.prototype.getLoginServerConfig = function() {
        var _this = this;
        var req = new XMLHttpRequest();
        req.open("GET", AppConfig_1.AppConfig.loginConfigUrl, true);
        req.onreadystatechange = function() {
          cc.log("req.readyState : ", req.readyState);
          cc.log("req.status : ", req.status);
          if (4 === req.readyState && req.status >= 200 && req.status < 400) {
            var json = JSON.parse(req.responseText);
            cc.log("req.responseText : ", req.responseText);
            var g_server = json[AppConfig_1.AppConfig.appName];
            if (g_server) {
              if (AppConfig_1.AppConfig.EvnType === AppConfig_1.AppConfig.EvnEnum.publish) {
                AppConfig_1.AppConfig.webServerUrl = g_server.webUrl;
                AppConfig_1.AppConfig.loginServerIP = g_server.loginIp;
                AppConfig_1.AppConfig.loginServerPort = g_server.loginPort;
                AppConfig_1.AppConfig.bundleUrl = g_server.bundleUrl;
                AppConfig_1.AppConfig.whitePlayerList = g_server.whitePlayerList;
              }
              if (AppConfig_1.AppConfig.isNotUpdate) if (g_server.whiteUpSwitch) {
                var aid = cc.sys.localStorage.getItem("userAid");
                if (aid && "string" === typeof aid) {
                  var isNotPlayer = false;
                  for (var index = 0; index < g_server.whitePlayerList.length; index++) {
                    var id = g_server.whitePlayerList[index];
                    if (id === Number(aid)) {
                      isNotPlayer = true;
                      break;
                    }
                  }
                  if (isNotPlayer) {
                    cc.log("\u6d4b\u8bd5\u4eba\u5458\u767d\u540d\u5355\u70ed\u66f4\u65b0");
                    _this.startHotUpdate();
                  } else if (jsb.fileUtils.isFileExist(jsb.fileUtils.getWritablePath() + "/remote-asset/version.manifest")) {
                    cc.log("\u672c\u5730\u6709\u70ed\u66f4\u65b0\u7248\u672c,\u53ef\u4ee5\u6e38\u620f!");
                    _this.jumpToLoginScene();
                  } else {
                    cc.log("\u91cd\u7f6e\u66f4\u65b0\u4e0e\u65b0\u7528\u6237\u53ef\u4ee5\u66f4\u65b0\u5230\u53d1\u5e03\u7248\u672c");
                    _this.startHotUpdate();
                  }
                } else {
                  cc.log("\u767d\u540d\u5355\u70ed\u66f4\u65b0");
                  _this.startHotUpdate();
                }
              } else {
                cc.log("\u6b63\u5e38\u70ed\u66f4\u65b0");
                _this.startHotUpdate();
              } else _this.jumpToLoginScene();
            } else _this.showTips("\u83b7\u53d6\u8fdc\u7a0b\u670d\u52a1\u5668\u914d\u7f6e\u4fe1\u606f\u5931\u8d25,\u8bf7\u91cd\u8bd5!", function() {
              _this.getLoginServerConfig();
            });
          }
        };
        req.send();
      };
      AssetsScene.prototype.startHotUpdate = function() {
        if (!cc.sys.isNative) {
          this.jumpToLoginScene();
          return;
        }
        this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset";
        cc.log("Storage path for remote asset : " + this._storagePath);
        this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
        this._am.setVerifyCallback(function(path, asset) {
          var compressed = asset.compressed;
          var expectedMD5 = asset.md5;
          var relativePath = asset.path;
          var size = asset.size;
          return compressed, true;
        });
        cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(2);
        if (this._am && !this._updating) {
          this._am.setEventCallback(this.updateCb.bind(this));
          this._updateListener = true;
          if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var url = this.manifestUrl.nativeUrl;
            this._am.loadLocalManifest(url);
          }
          this._am.update();
          this._updating = true;
        }
      };
      AssetsScene.prototype.versionCompareHandle = function(versionA, versionB) {
        cc.log("JS Custom Version Compare : version A is " + versionA + ", version B is " + versionB);
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        for (var i = 0; i < vA.length; i++) {
          var a = parseInt(vA[i]);
          var b = parseInt(vB[i] || 0);
          if (a === b) continue;
          return a - b;
        }
        return vB.length > vA.length ? -1 : 0;
      };
      AssetsScene.prototype.updateCb = function(event) {
        var _this = this;
        var needRestart = false;
        var failed = false;
        var failedType = "";
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          cc.log("\u7f3a\u5c11\u672c\u5730\u70ed\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6 Manifest");
          failed = true;
          failedType = "\u7f3a\u5c11\u672c\u5730\u70ed\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6 Manifest";
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          this._upPanelProgressBar.progress = event.getPercent();
          var downloadedMegabyte = event.getDownloadedBytes() / 1048576;
          var totalMegabyte = event.getTotalBytes() / 1048576;
          var progressTx = downloadedMegabyte.toFixed(2) + "MB / " + totalMegabyte.toFixed(2) + "MB";
          cc.log("\u66f4\u65b0 : ", progressTx);
          this._upPanel_progressTx.string = progressTx;
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
          cc.log("\u4e0b\u8f7d\u914d\u7f6e\u6587\u4ef6\u5931\u8d25");
          failedType = "\u4e0b\u8f7d\u914d\u7f6e\u6587\u4ef6\u5931\u8d25,\u70b9\u51fb\u786e\u5b9a\u91cd\u8bd5!";
          this._updating = false;
          this._canRetry = true;
          break;

         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          cc.log("\u89e3\u6790\u914d\u7f6e\u6587\u4ef6\u5931\u8d25");
          failed = true;
          failedType = "\u89e3\u6790\u914d\u7f6e\u6587\u4ef6\u5931\u8d25";
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          cc.log("\u5f53\u524d\u4e3a\u6700\u65b0\u7248\u672c");
          this.jumpToLoginScene();
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          cc.log("\u66f4\u65b0\u5b8c\u6210");
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          cc.log("\u66f4\u65b0\u5931\u8d25 : ", event.getMessage());
          this._updating = false;
          this._canRetry = true;
          failedType = "\u66f4\u65b0\u5931\u8d25,\u70b9\u51fb\u786e\u5b9a\u91cd\u8bd5!";
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          cc.log("\u4e0b\u8f7d\u5f02\u5e38 : ", event.getAssetId() + ", " + event.getMessage());
          failedType = "\u4e0b\u8f7d\u5f02\u5e38";
          this._updating = false;
          this._canRetry = true;
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          cc.log("\u89e3\u538b\u5931\u8d25");
          failedType = "\u89e3\u538b\u5931\u8d25";
          this._updating = false;
          this._canRetry = true;
        }
        if (failed) {
          this._am.setEventCallback(null);
          this._updateListener = null;
          this._updating = false;
          this.showTips(failedType);
        }
        if (needRestart) {
          this._am.setEventCallback(null);
          this._updateListener = null;
          var searchPaths = jsb.fileUtils.getSearchPaths();
          var newPaths = this._am.getLocalManifest().getSearchPaths();
          cc.log("----------------- >>> ", JSON.stringify(newPaths));
          cc.log("----------------- >>> ", this._updating);
          cc.log("----------------- >>> ", this._canRetry);
          cc.log("----------------- >>> ", failed);
          Array.prototype.unshift.apply(searchPaths, newPaths);
          cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(searchPaths));
          jsb.fileUtils.setSearchPaths(searchPaths);
          cc.audioEngine.stopAll();
          cc.log("\u91cd\u542f");
          cc.game.restart();
        }
        !this._updating && this._canRetry && this.showTips(failedType, function() {
          _this._canRetry = false;
          _this._am.downloadFailedAssets();
        });
      };
      AssetsScene.prototype.showTips = function(content, continueCall, cancelCall) {
        var _this = this;
        var tx = this.getChildNodeByName(this._tips, "content");
        tx.getComponent(cc.Label).string = content;
        var cancelBtn = this.getChildNodeByName(this._tips, "cancel");
        var continueBtn = this.getChildNodeByName(this._tips, "continue");
        if (cancelCall) {
          cancelBtn.active = false;
          continueBtn.x = 0;
        } else {
          cancelBtn.active = true;
          cancelBtn.x = -100;
          continueBtn.x = 100;
        }
        continueCall && (continueBtn.active = false);
        continueBtn.on("click", function() {
          _this._tips.active = false;
          continueCall();
        });
        cancelBtn.on("click", function() {
          _this._tips.active = false;
          cancelCall();
        });
        this._tips.active = true;
      };
      AssetsScene.prototype.jumpToLoginScene = function() {
        cc.director.loadScene("LoginScene", function(err, scene) {
          var container = scene.children[0];
          var script = container.addComponent("LoginScene");
          script.setSceneType("login");
        });
      };
      AssetsScene.prototype.onDestroy = function() {
        if (this._updateListener) {
          this._am.setEventCallback(null);
          this._updateListener = null;
        }
      };
      AssetsScene.prototype.scaleBackgroundBG = function(node) {
        var showAll = Math.min(cc.view.getCanvasSize().width / node.width, cc.view.getCanvasSize().height / node.height);
        var realWidth = node.width * showAll;
        var realHeight = node.height * showAll;
        node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
      };
      __decorate([ property(cc.Asset) ], AssetsScene.prototype, "manifestUrl", void 0);
      AssetsScene = __decorate([ ccclass ], AssetsScene);
      return AssetsScene;
    }(cc.Component);
    exports.default = AssetsScene;
    cc._RF.pop();
  }, {
    "../AppConfig": "AppConfig"
  } ],
  BackGroundCmp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "158aecRadlO9K6vPwRnOKCv", "BackGroundCmp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BackGroundCmp = function(_super) {
      __extends(BackGroundCmp, _super);
      function BackGroundCmp() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BackGroundCmp.prototype.start = function() {
        var showAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        var realWidth = this.node.width * showAll;
        var realHeight = this.node.height * showAll;
        this.node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
      };
      BackGroundCmp = __decorate([ ccclass ], BackGroundCmp);
      return BackGroundCmp;
    }(cc.Component);
    exports.default = BackGroundCmp;
    cc._RF.pop();
  }, {} ],
  BaseSocketProcesser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a9a6b1WfxE2aSZrpTvPUKR", "BaseSocketProcesser");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ErrorCodeConfig_1 = require("../../../config/ErrorCodeConfig");
    var BaseSocketProcesser = function() {
      function BaseSocketProcesser() {
        this.s_saveCmdEventFuncMap = null;
        this.eventCache = [];
        this.stopDispatch = false;
        this._cmdDelayMgr = null;
        this.s_saveCmdEventFuncMap = {};
        this.eventCache = [];
        this.stopDispatch = false;
        this.initFuncMap();
      }
      BaseSocketProcesser.prototype.bindMethodToCmd = function(cmd, func) {
        this.s_saveCmdEventFuncMap[cmd] = func;
      };
      BaseSocketProcesser.prototype.initCmdDelayManager = function(mgr) {
        this._cmdDelayMgr = mgr;
      };
      BaseSocketProcesser.prototype.checkResponseCode = function(data) {
        cc.log("------ \u6536\u5230\u670d\u52a1\u5668\u6d88\u606f\u8fdb\u884c\u9519\u8bef\u7801\u68c0\u6d4b ------ ", data);
        if (data && data.code && 1 !== data.code) {
          5001 === data.code ? cc.log("\u623f\u95f4\u4e0d\u5b58\u5728") : 5009 === data.code ? cc.log("\u623f\u95f4\u5f00\u59cb\u540e\u7981\u6b62\u4e2d\u9014\u8fdb\u5165") : cc.log("\u8bf7\u6c42\u9519\u8bef\u7801 : ", ErrorCodeConfig_1.ErrorCodeConfig[data.code]);
          return false;
        }
        return true;
      };
      BaseSocketProcesser.prototype.dispatchEvent = function(info) {
        if (!this.checkResponseCode(info.data)) return;
        cc.log("dispatch cmd : 0x", info.cmd.toString(16));
        this._cmdDelayMgr.getInstance().addCmd(info.cmd, info.data);
      };
      BaseSocketProcesser.prototype.onReceivePacket = function(cmd, info) {
        this.s_saveCmdEventFuncMap[cmd] ? this.s_saveCmdEventFuncMap[cmd](info, cmd) : this.stopDispatch ? this.addToEventCache(info) : this.dispatchEvent(info);
      };
      BaseSocketProcesser.prototype.cacheEvent = function() {
        cc.log("start cache event");
        this.stopDispatch = true;
      };
      BaseSocketProcesser.prototype.addToEventCache = function(info) {
        cc.log("cache event ", info.cmd.toString(16));
        this.eventCache.push(info);
      };
      BaseSocketProcesser.prototype.dispatchCacheEvent = function() {
        cc.log("start dispatch cache event");
        this.stopDispatch = false;
        for (var i = 0; i < this.eventCache.length; i++) {
          var data = this.eventCache[i];
          this.dispatchEvent(data);
        }
        cc.log("dispatch cache event end");
        this.eventCache = [];
      };
      BaseSocketProcesser.prototype.clearCacheEvent = function() {
        this.eventCache = [];
        cc.log("clear cache event");
      };
      return BaseSocketProcesser;
    }();
    exports.default = BaseSocketProcesser;
    cc._RF.pop();
  }, {
    "../../../config/ErrorCodeConfig": "ErrorCodeConfig"
  } ],
  BaseSocketReader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "875a0MsNJNHyKq4vJMDDTKU", "BaseSocketReader");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseSocketReader = function() {
      function BaseSocketReader() {
        this.s_saveReaderFuncMap = null;
        this.s_saveReaderFuncMap = {};
        this.initFuncMap();
      }
      BaseSocketReader.prototype.bindMethodToCmd = function(cmd, func) {
        this.s_saveReaderFuncMap[cmd] = func;
      };
      BaseSocketReader.prototype.readPacket = function(cmd, pack) {
        if (this.s_saveReaderFuncMap[cmd]) return this.s_saveReaderFuncMap[cmd](pack, cmd);
        return null;
      };
      return BaseSocketReader;
    }();
    exports.default = BaseSocketReader;
    cc._RF.pop();
  }, {} ],
  BaseSocketWriter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c62b1s9cDxOyLd1qgxOPoP6", "BaseSocketWriter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseSocketWriter = function() {
      function BaseSocketWriter() {
        this.s_clientWriterFuncMap = null;
        this.s_clientWriterFuncMap = {};
        this.initFuncMap();
      }
      BaseSocketWriter.prototype.bindMethodToCmd = function(cmd, func) {
        this.s_clientWriterFuncMap[cmd] = func;
      };
      BaseSocketWriter.prototype.writePacket = function(cmd, info) {
        cc.log("------[writePacket] cmd : ", cmd.toString(16), " data : ", JSON.stringify(info));
        if (this.s_clientWriterFuncMap[cmd]) return this.s_clientWriterFuncMap[cmd](info, cmd);
        return null;
      };
      return BaseSocketWriter;
    }();
    exports.default = BaseSocketWriter;
    cc._RF.pop();
  }, {} ],
  BundleManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d3d7kZCdlN07+k/4VNQ7RL", "BundleManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AppConfig_1 = require("../../AppConfig");
    var LogManager_1 = require("./LogManager");
    var BundleManager = function() {
      function BundleManager() {
        this._bundleMap = {};
        this._bundleResMap = {};
        this._logUtil = LogManager_1.default.getInstance();
      }
      BundleManager.getInstance = function() {
        this._ins || (this._ins = new BundleManager());
        return this._ins;
      };
      BundleManager.prototype.loadBundleByUrl = function(folderPath, callback) {
        cc.assetManager.loadRemote(AppConfig_1.AppConfig.bundleUrl + folderPath, function(err, bundle) {
          if (err) return cc.log("[BundleManager] load " + folderPath + " bundle faild.");
          cc.log("[BundleManager] load " + folderPath + " bundle success.");
          callback && callback(bundle);
        });
      };
      BundleManager.prototype.saveBundleByName = function(bundle, bundleName) {
        if (this._bundleMap[bundleName]) cc.log("[BundleManager] error : cur " + bundleName + " exist; Need to reset please first remove"); else {
          this._bundleMap[bundleName] = bundle;
          this._bundleResMap[bundleName] = {};
        }
      };
      BundleManager.prototype.getBundleByName = function(bundleName) {
        if (!this._bundleMap[bundleName]) {
          cc.log("[BundleManager] not found " + bundleName + " bundle.");
          return null;
        }
        return this._bundleMap[bundleName];
      };
      BundleManager.prototype.getBundleResByName = function(bundleName) {
        if (!this._bundleResMap[bundleName]) {
          cc.log("[BundleManager] not found " + bundleName + " bundleRes.");
          return null;
        }
        return this._bundleResMap[bundleName];
      };
      BundleManager.prototype.removeBundleByName = function(bundleName) {
        if (this._bundleMap[bundleName]) {
          this._bundleMap[bundleName].releaseAll();
          cc.assetManager.removeBundle(this._bundleMap[bundleName]);
          this._bundleMap[bundleName] = null;
          this._bundleResMap[bundleName] = {};
          cc.log("[BundleManager] remove " + bundleName + " bundle success.");
        } else cc.log("[BundleManager] remove faild, because the not found " + bundleName + " bundle.");
      };
      BundleManager.prototype.cacheBundleResources = function(bundleName, resList, callback) {
        var _this = this;
        var _loop_1 = function(index) {
          var element = resList[index];
          var _loop_2 = function(key) {
            this_1._bundleMap[bundleName].load(element[key].path, element[key].ex, function(err, asset) {
              cc.log("asset : ", asset);
              _this._bundleResMap[bundleName][key] = asset;
              element[key].ex !== cc.Prefab && element[key].ex !== cc.AudioClip && element[key].ex !== sp.SkeletonData && element[key].ex !== cc.SpriteAtlas || asset.addRef();
              callback();
            });
          };
          for (var key in element) _loop_2(key);
        };
        var this_1 = this;
        for (var index = 0; index < resList.length; index++) _loop_1(index);
      };
      BundleManager.prototype.getCacheRes = function(bundleName, res) {
        return this._bundleResMap[bundleName][res];
      };
      BundleManager._ins = null;
      return BundleManager;
    }();
    exports.default = BundleManager;
    cc._RF.pop();
  }, {
    "../../AppConfig": "AppConfig",
    "./LogManager": "LogManager"
  } ],
  ByteArray: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74ca5u3ZilMDpiPZlkM8xLw", "ByteArray");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketConfig_1 = require("../net/base/SocketConfig");
    var Utf8Utils_1 = require("./Utf8Utils");
    var ByteArray = function() {
      function ByteArray() {
        this.bytesBuff = null;
        this.bytesBuffView = null;
        this.fmt = [];
        this.data = [];
        this.endian = SocketConfig_1.SocketConfig.endian;
        this.position = 0;
        this.length = 0;
      }
      ByteArray.prototype.destroy = function() {
        this.bytesBuff = null;
        this.fmt = null;
        this.data = null;
        this.bytesBuffView = null;
      };
      ByteArray.prototype.readByte = function() {
        var val = this.bytesBuffView.getInt8(this.position);
        this.position += 1;
        return val;
      };
      ByteArray.prototype.writeByte = function(b) {
        this.fmt.push("b");
        this.data.push(b);
        this.length += 1;
      };
      ByteArray.prototype.readShort = function() {
        var val = this.bytesBuffView.getInt16(this.position, this.endian);
        this.position += 2;
        return val;
      };
      ByteArray.prototype.writeShort = function(h) {
        this.fmt.push("h");
        this.data.push(h);
        this.length += 2;
      };
      ByteArray.prototype.readInt = function() {
        var val = this.bytesBuffView.getInt32(this.position, this.endian);
        this.position += 4;
        return val;
      };
      ByteArray.prototype.writeInt = function(i) {
        this.fmt.push("i");
        this.data.push(i);
        this.length += 4;
      };
      ByteArray.prototype.readDouble = function() {
        var val = this.bytesBuffView.getFloat64(this.position, this.endian);
        this.position += 8;
        return val;
      };
      ByteArray.prototype.writeDouble = function(d) {
        this.fmt.push("d");
        this.data.push(d);
        this.length += 8;
      };
      ByteArray.prototype.readString = function() {
        var l = this.readShort();
        if (l < 1) return "";
        var u8Arr = new Uint8Array(this.bytesBuff, this.position);
        var arr = [];
        for (var i = 0; i < l; i++) arr[i] = u8Arr[i];
        var ret = Utf8Utils_1.default.getInstance().decode(arr);
        this.position += 1;
        return ret;
      };
      ByteArray.prototype.writeMultiByte = function(str) {
        var len = str.lenth;
        for (var i = 0; i < len; i++) this.writeByte(str.charCodeAt(i));
      };
      ByteArray.prototype._uintCharArrToString = function(arr) {
        var ret = "";
        for (var i = 0; i < arr.length; i++) ret += String.fromCharCode(arr[i]);
        return ret;
      };
      ByteArray.prototype.writeString = function(s, writelen) {
        var arr = Utf8Utils_1.default.getInstance().encode(s);
        (writelen || "undefined" === typeof writelen) && this.writeShort(arr.length);
        this.fmt.push("s");
        this.data.push(this._uintCharArrToString(arr));
        this.length += arr.length;
      };
      ByteArray.prototype.getbytes = function() {
        if (this.bytesBuff) return this.bytesBuff;
        var buff = new ArrayBuffer(this.length);
        var buffView = new DataView(buff);
        var len = this.fmt.length;
        var dataType = "";
        var elm = 0;
        var index = 0;
        for (var i = 0; i < len; i++) {
          dataType = this.fmt[i];
          elm = this.data[i];
          if ("b" === dataType) {
            buffView.setInt8(index, elm);
            index += 1;
          } else if ("h" === dataType) {
            buffView.setInt16(index, elm, this.endian);
            index += 2;
          } else if ("i" === dataType) {
            buffView.setInt32(index, elm, this.endian);
            index += 4;
          } else if ("d" === dataType) {
            buffView.setFloat64(index, elm, this.endian);
            index += 8;
          } else "s" === dataType && (index += this._fillArryBuffWithString(elm, buff, index));
        }
        return buff;
      };
      ByteArray.prototype._fillArryBuffWithString = function(strData, arryBuff, offset) {
        if (!strData) return;
        var len = strData.length;
        var tempDataView = new DataView(arryBuff, offset);
        for (var i = 0; i < len; i++) tempDataView.setUint8(i, strData.charCodeAt(i));
        return len;
      };
      return ByteArray;
    }();
    exports.default = ByteArray;
    cc._RF.pop();
  }, {
    "../net/base/SocketConfig": "SocketConfig",
    "./Utf8Utils": "Utf8Utils"
  } ],
  ConstConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a95ei/HUpFRIyCRgWtCOs4", "ConstConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ConstConfig = void 0;
    var ConstConfig = {
      WINDOW_CONFIG: {
        APPPLATFORM_CALLBACKHANDLER: "APPPLATFORM_CALLBACKHANDLER",
        APPPLATFORM_CALLBACK: "APPPLATFORM_CALLBACK",
        APPPLATFORM_CLIPBOARD: "APPPLATFORM_CLIPBOARD",
        APPPLATFORM_SHOCK: "APPPLATFORM_SHOCK",
        APPPLATFORM_CHANGE_HSP: "APPPLATFORM_CHANGE_HSP",
        APPPLATFORM_REMOVECACHE: "APPPLATFORM_REMOVECACHE",
        APPPLATFORM_GETAPPCACHE: "APPPLATFORM_GETAPPCACHE"
      }
    };
    exports.ConstConfig = ConstConfig;
    cc._RF.pop();
  }, {} ],
  ContentCmp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "033ffFNIuNMlbfahbcFH0UJ", "ContentCmp");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ContentCmp = function(_super) {
      __extends(ContentCmp, _super);
      function ContentCmp() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ContentCmp.prototype.start = function() {
        var showAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        var realWidth = this.node.width * showAll;
        var realHeight = this.node.height * showAll;
        this.node.width = this.node.width * (cc.view.getCanvasSize().width / realWidth);
        this.node.height = this.node.height * (cc.view.getCanvasSize().height / realHeight);
      };
      ContentCmp = __decorate([ ccclass ], ContentCmp);
      return ContentCmp;
    }(cc.Component);
    exports.default = ContentCmp;
    cc._RF.pop();
  }, {} ],
  DataParser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eb4a1ns3t9ATpKguPWk5nO1", "DataParser");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ArrayUtils_1 = require("../utils/ArrayUtils");
    var Pack_1 = require("../package/Pack");
    var DataParser = function() {
      function DataParser(callback) {
        this._buffer = null;
        this._headerSize = 8;
        this._callback = callback;
      }
      DataParser.prototype.parse = function(arrBuffer) {
        if (!arrBuffer) return;
        this._fillBuffer(arrBuffer);
        if (!this._checkHeader()) return;
        var pack = this._parseHeader(this._buffer);
        if (!this._checkBody(pack)) return;
        pack.data = ArrayUtils_1.default.getInstance().copyArrayBuffer(this._buffer, this._headerSize, pack.bodySize);
        this._parseBody(pack);
        var packTotalLen = this._headerSize + pack.bodySize;
        if (arrBuffer.byteLength > packTotalLen) {
          cc.log("byteLength > packTotalLen ---\x3e \u51fa\u73b0\u7c98\u5305");
          var buffer = ArrayUtils_1.default.getInstance().copyArrayBuffer(this._buffer, packTotalLen);
          this._buffer = null;
          this.parse(buffer);
        } else this._buffer = null;
      };
      DataParser.prototype._checkBody = function(pack) {
        if (pack.bodySize > this._buffer.byteLength - this._headerSize) {
          cc.log("---\x3e body data not enough");
          return false;
        }
        return true;
      };
      DataParser.prototype._checkHeader = function() {
        if (this._buffer.byteLength < this._headerSize) {
          cc.log("---\x3ebuffer bytelength less header size min limit");
          return false;
        }
        return true;
      };
      DataParser.prototype._fillBuffer = function(arrBuffer) {
        this._buffer ? this._buffer = ArrayUtils_1.default.getInstance().mergeArrayBuffer(this._buffer, arrBuffer) : this._buffer = arrBuffer;
      };
      DataParser.prototype._parseHeader = function(buff) {
        var dv = new DataView(buff);
        var pack = new Pack_1.default();
        pack.bodySize = dv.getInt32(0);
        pack.bodySize -= this._headerSize;
        pack.cmd = dv.getInt32(4);
        return pack;
      };
      DataParser.prototype._parseBody = function(pack) {
        this._callback && this._callback(pack);
      };
      return DataParser;
    }();
    exports.default = DataParser;
    cc._RF.pop();
  }, {
    "../package/Pack": "Pack",
    "../utils/ArrayUtils": "ArrayUtils"
  } ],
  DownloadGameView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99cb6cObHdK3aJkqfWDHoiE", "DownloadGameView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewBase_1 = require("../core/external/ViewBase");
    var AppConfig_1 = require("../AppConfig");
    var ModelCenter_1 = require("../data/ModelCenter");
    var GameLoaderManager_1 = require("./GameLoaderManager");
    var BundleManager_1 = require("../core/manager/BundleManager");
    var ResConfig_1 = require("../config/ResConfig");
    var GameCommonConfig_1 = require("./config/GameCommonConfig");
    var ViewConfig_1 = require("../config/ViewConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DownLoadGameView = function(_super) {
      __extends(DownLoadGameView, _super);
      function DownLoadGameView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._tips = null;
        _this._curLoadCount = 0;
        _this._sumLoadCount = 0;
        _this._gmData = null;
        return _this;
      }
      DownLoadGameView.prototype.start = function() {
        this.initView();
        cc.log("\u5f00\u59cb\u4e0b\u8f7d\u6e38\u620f");
        this._tips = this.toolUtils.getNodeByName(this.node, "tips");
        this._gmData = ModelCenter_1.default.getInstance().gameConfigInfo.getGameInfoByGameID(ModelCenter_1.default.getInstance().reconnectionInfo.gameId);
        this.getCommonBundleRes();
      };
      DownLoadGameView.prototype.getCommonBundleRes = function() {
        var resCmSumArr = [];
        for (var index = 0; index < GameCommonConfig_1.GmCmConfig.length; index++) resCmSumArr.push(GameCommonConfig_1.GmCmConfig[index]);
        this.logUtil.log("\u6e38\u620f\u516c\u5171\u8d44\u6e90\u957f\u5ea6 : " + resCmSumArr.length);
        this.logUtil.log("\u6e38\u620f\u79c1\u6709\u8d44\u6e90\u957f\u5ea6 : " + this._gmData.resConfig.length);
        this._sumLoadCount = resCmSumArr.length + this._gmData.resConfig.length;
        this._tips.getComponent(cc.Label).string = "\u6b63\u5728\u52a0\u8f7d\u6e38\u620f\u8d44\u6e90(\u6b64\u8fc7\u7a0b\u4e0d\u6d88\u8017\u6d41\u91cf):" + this._curLoadCount + "/" + this._sumLoadCount;
        1 === AppConfig_1.AppConfig.platform ? this.loadAppBundleCheck(resCmSumArr, AppConfig_1.AppConfig.bundleUrl + "appgame/remote/" + ResConfig_1.BdnmAppConfig.common.path + "/" + ResConfig_1.BdnmAppConfig.common.version + "/" + ResConfig_1.BdnmAppConfig.common.path) : 2 === AppConfig_1.AppConfig.platform && this.loadBundle(resCmSumArr, AppConfig_1.AppConfig.bundleUrl + "mingame/" + ResConfig_1.BdnmMinGameConfig.common.path + "/" + ResConfig_1.BdnmMinGameConfig.common.version + "/" + ResConfig_1.BdnmMinGameConfig.common.path);
      };
      DownLoadGameView.prototype.loadBundleGameCommon = function(arr, url, callfunc) {
        var _this = this;
        cc.assetManager.loadBundle(url, {
          onFileProgress: function(resData) {
            _this.logUtil.log("onFileProgress : " + resData);
          }
        }, function(err, bundle) {
          if (err) return console.log("[DownloadGameView] load bundle res faild.");
          console.log("[DownloadGameView] load bundle res success.");
          BundleManager_1.default.getInstance().saveBundleByName(bundle, ResConfig_1.BdnmConfig.common);
          BundleManager_1.default.getInstance().cacheBundleResources(ResConfig_1.BdnmConfig.common, arr, function() {
            _this._curLoadCount += 1;
            _this.logUtil.log("this._curLoadCount : " + _this._curLoadCount);
            _this._tips.getComponent(cc.Label).string = "\u6b63\u5728\u52a0\u8f7d\u6e38\u620f\u8d44\u6e90(\u6b64\u8fc7\u7a0b\u4e0d\u6d88\u8017\u6d41\u91cf):" + _this._curLoadCount + "/" + arr.length;
            _this._curLoadCount === arr.length && callfunc();
          });
        });
      };
      DownLoadGameView.prototype.loadGameRes = function() {
        var _this = this;
        var gameUrl = "";
        1 === AppConfig_1.AppConfig.platform ? gameUrl = AppConfig_1.AppConfig.bundleUrl + "appgame/remote/" + this._gmData.bundleName + "/" + this._gmData.appBdVer + "/" + this._gmData.bundleName : 2 === AppConfig_1.AppConfig.platform && (gameUrl = AppConfig_1.AppConfig.bundleUrl + "mingame/" + this._gmData.bundleName + "/" + this._gmData.minGameBdVer + "/" + this._gmData.bundleName);
        cc.assetManager.loadBundle(gameUrl, {
          onFileProgress: function(resData) {
            cc.log("onFileProgress : ", resData);
          }
        }, function(err, bundle) {
          if (err) return console.log("[DownloadGameView] load bundle res faild.");
          console.log("[DownloadGameView] load bundle res success.");
          BundleManager_1.default.getInstance().saveBundleByName(bundle, _this._gmData.bundleName);
          BundleManager_1.default.getInstance().cacheBundleResources(_this._gmData.bundleName, _this._gmData.resConfig, function() {
            _this._curLoadCount += 1;
            _this.logUtil.log("this._curLoadCount : " + _this._curLoadCount);
            _this._tips.getComponent(cc.Label).string = "\u6b63\u5728\u52a0\u8f7d\u6e38\u620f\u8d44\u6e90(\u6b64\u8fc7\u7a0b\u4e0d\u6d88\u8017\u6d41\u91cf):" + _this._curLoadCount + "/" + _this._sumLoadCount;
            if (_this._curLoadCount === _this._sumLoadCount) {
              _this.logUtil.log("\u6240\u6709\u6e38\u620f\u52a0\u8f7d\u8d44\u6e90\u5b8c\u6210");
              var cmBundle = BundleManager_1.default.getInstance().getBundleResByName(ResConfig_1.BdnmConfig.common);
              var gmBundle = BundleManager_1.default.getInstance().getBundleResByName(_this._gmData.bundleName);
              GameLoaderManager_1.default.getInstance().connectGameSocket();
            }
          });
        });
      };
      DownLoadGameView.prototype.loadAppBundleCheck = function(arr, url) {
        var _this = this;
        this.toolUtils.sendHttpRequest("GET", AppConfig_1.AppConfig.loginConfigUrl, function(req) {
          _this.logUtil.log("req.responseText : " + req.responseText);
          var json = JSON.parse(req.responseText);
          json = json[AppConfig_1.AppConfig.appName];
          if (json.scriptVersion !== AppConfig_1.AppConfig.version) {
            if (json.whiteUpSwitch) {
              var aid = cc.sys.localStorage.getItem("userAid");
              if (aid && "string" === typeof aid) {
                var isNotPlayer = false;
                for (var index = 0; index < AppConfig_1.AppConfig.whitePlayerList.length; index++) {
                  var id = AppConfig_1.AppConfig.whitePlayerList[index];
                  if (id === Number(aid)) {
                    isNotPlayer = true;
                    break;
                  }
                }
                isNotPlayer ? _this.reset() : _this.loadBundle(arr, url);
              }
            }
          } else _this.loadBundle(arr, url);
        });
      };
      DownLoadGameView.prototype.loadBundle = function(arr, url) {
        var _this = this;
        if (null !== this.bundleManager.getBundleByName(ResConfig_1.BdnmConfig.common)) {
          this.logUtil.log("\u516c\u5171Bundle\u8d44\u6e90\u5df2\u7ecf\u5b58\u5728,\u52a0\u8f7d\u6e38\u620f\u79c1\u6709\u90e8\u5206\u8d44\u6e90");
          this.loadGameRes();
        } else this.loadBundleGameCommon(arr, url, function() {
          _this.logUtil.log("\u516c\u5171Bundle\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6210,\u5f00\u59cb\u52a0\u8f7d\u6e38\u620f\u79c1\u6709\u90e8\u5206\u8d44\u6e90");
          _this.loadGameRes();
        });
      };
      DownLoadGameView.prototype.reset = function() {
        var _this = this;
        this.viewManager.showView(ViewConfig_1.ViewConfig.MESSAGE, {
          content: "\u68c0\u6d4b\u5230\u6709\u65b0\u7248\u672c\u66f4\u65b0",
          continueCallBack: function() {
            _this.logUtil.log("\u91cd\u542f\u66f4\u65b0");
            cc.game.restart();
          }
        });
      };
      DownLoadGameView = __decorate([ ccclass ], DownLoadGameView);
      return DownLoadGameView;
    }(ViewBase_1.default);
    exports.default = DownLoadGameView;
    cc._RF.pop();
  }, {
    "../AppConfig": "AppConfig",
    "../config/ResConfig": "ResConfig",
    "../config/ViewConfig": "ViewConfig",
    "../core/external/ViewBase": "ViewBase",
    "../core/manager/BundleManager": "BundleManager",
    "../data/ModelCenter": "ModelCenter",
    "./GameLoaderManager": "GameLoaderManager",
    "./config/GameCommonConfig": "GameCommonConfig"
  } ],
  EntryBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7bc29lnnJEb7vd294UnKyW", "EntryBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResConfig_1 = require("../../config/ResConfig");
    var BundleManager_1 = require("../manager/BundleManager");
    var LogManager_1 = require("../manager/LogManager");
    var EntryBase = function() {
      function EntryBase() {
        this.logUtil = LogManager_1.default.getInstance();
        this.bundleMgr = BundleManager_1.default.getInstance();
        this.bodyBundleRes = BundleManager_1.default.getInstance().getBundleResByName(ResConfig_1.BdnmConfig.body);
      }
      return EntryBase;
    }();
    exports.default = EntryBase;
    cc._RF.pop();
  }, {
    "../../config/ResConfig": "ResConfig",
    "../manager/BundleManager": "BundleManager",
    "../manager/LogManager": "LogManager"
  } ],
  ErrorCodeConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90e21RrTTVEmouy6v4TIIGe", "ErrorCodeConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ErrorCodeConfig = void 0;
    var ErrorCodeConfig = {};
    exports.ErrorCodeConfig = ErrorCodeConfig;
    cc._RF.pop();
  }, {} ],
  EventConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f518LVMB9K7aH+7IMEeOIK", "EventConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EventConfig = void 0;
    var EventConfig = {
      LOGIN_SERVER_READY: "LoginServerReady",
      HALL_DOWNLOADGAME: "HallDownloadGame",
      SCENE_CHANGE: "SceneChange"
    };
    exports.EventConfig = EventConfig;
    cc._RF.pop();
  }, {} ],
  EventInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b32c9TeOqxDXLS9gdOF39If", "EventInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventInfo = function() {
      function EventInfo(_name, _userData) {
        this._name = _name;
        this._userData = _userData;
      }
      EventInfo.prototype.getName = function() {
        return this._name;
      };
      EventInfo.prototype.getUserData = function() {
        return this._userData;
      };
      return EventInfo;
    }();
    exports.default = EventInfo;
    cc._RF.pop();
  }, {} ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "42e1eY9vphCqJ43CGgPaks3", "EventManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Listener_1 = require("../package/Listener");
    var EventManager = function() {
      function EventManager() {
        this._listenerList = [];
      }
      EventManager.getInstance = function() {
        this._ins || (this._ins = new EventManager());
        return this._ins;
      };
      EventManager.prototype.sort = function(leftListener, rightListener) {
        return leftListener.getPriority() < rightListener.getPriority();
      };
      EventManager.prototype.dispatchEvent = function(event) {
        if (!event) {
          cc.log("EventManager : invaild param in dispatchEvent");
          return;
        }
        var length = this._listenerList.length;
        for (var index = 0; index < length; index++) {
          var listener = this._listenerList[index];
          listener._target && listener._target.onEvent && event.getName() && listener._target.onEvent(event);
        }
      };
      EventManager.prototype.registerListener = function(target, priority) {
        if (!target) {
          cc.log("EventManager : invaild param in registerListener");
          return;
        }
        var length = this._listenerList.length;
        for (var index = 0; index < length; index++) if (this._listenerList[index].getTarget() === target) return;
        priority = priority || 0;
        this._listenerList.push(new Listener_1.default(target, priority));
        this._listenerList.sort(this.sort);
      };
      EventManager.prototype.unRegisterEvent = function(target) {
        var length = this._listenerList.length;
        for (var index = 0; index < length; index++) this._listenerList[index].getTarget() === target && this._listenerList.slice(index, 1);
      };
      EventManager._ins = null;
      return EventManager;
    }();
    exports.default = EventManager;
    cc._RF.pop();
  }, {
    "../package/Listener": "Listener"
  } ],
  1: [ function(require, module, exports) {
    "use strict";
    module.exports = asPromise;
    function asPromise(fn, ctx) {
      var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
      while (index < arguments.length) params[offset++] = arguments[index++];
      return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err) {
          if (pending) {
            pending = false;
            if (err) reject(err); else {
              var params = new Array(arguments.length - 1), offset = 0;
              while (offset < params.length) params[offset++] = arguments[offset];
              resolve.apply(null, params);
            }
          }
        };
        try {
          fn.apply(ctx || null, params);
        } catch (err) {
          if (pending) {
            pending = false;
            reject(err);
          }
        }
      });
    }
  }, {} ],
  2: [ function(require, module, exports) {
    "use strict";
    var base64 = exports;
    base64.length = function length(string) {
      var p = string.length;
      if (!p) return 0;
      var n = 0;
      while (--p % 4 > 1 && "=" === string.charAt(p)) ++n;
      return Math.ceil(3 * string.length) / 4 - n;
    };
    var b64 = new Array(64);
    var s64 = new Array(123);
    for (var i = 0; i < 64; ) s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
    base64.encode = function encode(buffer, start, end) {
      var parts = null, chunk = [];
      var i = 0, j = 0, t;
      while (start < end) {
        var b = buffer[start++];
        switch (j) {
         case 0:
          chunk[i++] = b64[b >> 2];
          t = (3 & b) << 4;
          j = 1;
          break;

         case 1:
          chunk[i++] = b64[t | b >> 4];
          t = (15 & b) << 2;
          j = 2;
          break;

         case 2:
          chunk[i++] = b64[t | b >> 6];
          chunk[i++] = b64[63 & b];
          j = 0;
        }
        if (i > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i = 0;
        }
      }
      if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        1 === j && (chunk[i++] = 61);
      }
      if (parts) {
        i && parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i));
    };
    var invalidEncoding = "invalid encoding";
    base64.decode = function decode(string, buffer, offset) {
      var start = offset;
      var j = 0, t;
      for (var i = 0; i < string.length; ) {
        var c = string.charCodeAt(i++);
        if (61 === c && j > 1) break;
        if (void 0 === (c = s64[c])) throw Error(invalidEncoding);
        switch (j) {
         case 0:
          t = c;
          j = 1;
          break;

         case 1:
          buffer[offset++] = t << 2 | (48 & c) >> 4;
          t = c;
          j = 2;
          break;

         case 2:
          buffer[offset++] = (15 & t) << 4 | (60 & c) >> 2;
          t = c;
          j = 3;
          break;

         case 3:
          buffer[offset++] = (3 & t) << 6 | c;
          j = 0;
        }
      }
      if (1 === j) throw Error(invalidEncoding);
      return offset - start;
    };
    base64.test = function test(string) {
      return /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(string);
    };
  }, {} ],
  3: [ function(require, module, exports) {
    "use strict";
    module.exports = EventEmitter;
    function EventEmitter() {
      this._listeners = {};
    }
    EventEmitter.prototype.on = function on(evt, fn, ctx) {
      (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn: fn,
        ctx: ctx || this
      });
      return this;
    };
    EventEmitter.prototype.off = function off(evt, fn) {
      if (void 0 === evt) this._listeners = {}; else if (void 0 === fn) this._listeners[evt] = []; else {
        var listeners = this._listeners[evt];
        for (var i = 0; i < listeners.length; ) listeners[i].fn === fn ? listeners.splice(i, 1) : ++i;
      }
      return this;
    };
    EventEmitter.prototype.emit = function emit(evt) {
      var listeners = this._listeners[evt];
      if (listeners) {
        var args = [], i = 1;
        for (;i < arguments.length; ) args.push(arguments[i++]);
        for (i = 0; i < listeners.length; ) listeners[i].fn.apply(listeners[i++].ctx, args);
      }
      return this;
    };
  }, {} ],
  4: [ function(require, module, exports) {
    "use strict";
    module.exports = factory(factory);
    function factory(exports) {
      "undefined" !== typeof Float32Array ? function() {
        var f32 = new Float32Array([ -0 ]), f8b = new Uint8Array(f32.buffer), le = 128 === f8b[3];
        function writeFloat_f32_cpy(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
        }
        function writeFloat_f32_rev(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[3];
          buf[pos + 1] = f8b[2];
          buf[pos + 2] = f8b[1];
          buf[pos + 3] = f8b[0];
        }
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
        function readFloat_f32_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          return f32[0];
        }
        function readFloat_f32_rev(buf, pos) {
          f8b[3] = buf[pos];
          f8b[2] = buf[pos + 1];
          f8b[1] = buf[pos + 2];
          f8b[0] = buf[pos + 3];
          return f32[0];
        }
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
      }() : function() {
        function writeFloat_ieee754(writeUint, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          sign && (val = -val);
          if (0 === val) writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos); else if (isNaN(val)) writeUint(2143289344, buf, pos); else if (val > 34028234663852886e22) writeUint((sign << 31 | 2139095040) >>> 0, buf, pos); else if (val < 11754943508222875e-54) writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos); else {
            var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = 8388607 & Math.round(val * Math.pow(2, -exponent) * 8388608);
            writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
          }
        }
        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
        function readFloat_ieee754(readUint, buf, pos) {
          var uint = readUint(buf, pos), sign = 2 * (uint >> 31) + 1, exponent = uint >>> 23 & 255, mantissa = 8388607 & uint;
          return 255 === exponent ? mantissa ? NaN : Infinity * sign : 0 === exponent ? 1401298464324817e-60 * sign * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }
        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
      }();
      "undefined" !== typeof Float64Array ? function() {
        var f64 = new Float64Array([ -0 ]), f8b = new Uint8Array(f64.buffer), le = 128 === f8b[7];
        function writeDouble_f64_cpy(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
          buf[pos + 4] = f8b[4];
          buf[pos + 5] = f8b[5];
          buf[pos + 6] = f8b[6];
          buf[pos + 7] = f8b[7];
        }
        function writeDouble_f64_rev(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[7];
          buf[pos + 1] = f8b[6];
          buf[pos + 2] = f8b[5];
          buf[pos + 3] = f8b[4];
          buf[pos + 4] = f8b[3];
          buf[pos + 5] = f8b[2];
          buf[pos + 6] = f8b[1];
          buf[pos + 7] = f8b[0];
        }
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
        function readDouble_f64_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          f8b[4] = buf[pos + 4];
          f8b[5] = buf[pos + 5];
          f8b[6] = buf[pos + 6];
          f8b[7] = buf[pos + 7];
          return f64[0];
        }
        function readDouble_f64_rev(buf, pos) {
          f8b[7] = buf[pos];
          f8b[6] = buf[pos + 1];
          f8b[5] = buf[pos + 2];
          f8b[4] = buf[pos + 3];
          f8b[3] = buf[pos + 4];
          f8b[2] = buf[pos + 5];
          f8b[1] = buf[pos + 6];
          f8b[0] = buf[pos + 7];
          return f64[0];
        }
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
      }() : function() {
        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          sign && (val = -val);
          if (0 === val) {
            writeUint(0, buf, pos + off0);
            writeUint(1 / val > 0 ? 0 : 2147483648, buf, pos + off1);
          } else if (isNaN(val)) {
            writeUint(0, buf, pos + off0);
            writeUint(2146959360, buf, pos + off1);
          } else if (val > 17976931348623157e292) {
            writeUint(0, buf, pos + off0);
            writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
          } else {
            var mantissa;
            if (val < 22250738585072014e-324) {
              mantissa = val / 5e-324;
              writeUint(mantissa >>> 0, buf, pos + off0);
              writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
            } else {
              var exponent = Math.floor(Math.log(val) / Math.LN2);
              1024 === exponent && (exponent = 1023);
              mantissa = val * Math.pow(2, -exponent);
              writeUint(4503599627370496 * mantissa >>> 0, buf, pos + off0);
              writeUint((sign << 31 | exponent + 1023 << 20 | 1048576 * mantissa & 1048575) >>> 0, buf, pos + off1);
            }
          }
        }
        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
          var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
          var sign = 2 * (hi >> 31) + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (1048575 & hi) + lo;
          return 2047 === exponent ? mantissa ? NaN : Infinity * sign : 0 === exponent ? 5e-324 * sign * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }
        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
      }();
      return exports;
    }
    function writeUintLE(val, buf, pos) {
      buf[pos] = 255 & val;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    function writeUintBE(val, buf, pos) {
      buf[pos] = val >>> 24;
      buf[pos + 1] = val >>> 16 & 255;
      buf[pos + 2] = val >>> 8 & 255;
      buf[pos + 3] = 255 & val;
    }
    function readUintLE(buf, pos) {
      return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
    }
    function readUintBE(buf, pos) {
      return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
    }
  }, {} ],
  5: [ function(require, module, exports) {
    "use strict";
    module.exports = inquire;
    function inquire(moduleName) {
      try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName);
        if (mod && (mod.length || Object.keys(mod).length)) return mod;
      } catch (e) {}
      return null;
    }
  }, {} ],
  6: [ function(require, module, exports) {
    "use strict";
    module.exports = pool;
    function pool(alloc, slice, size) {
      var SIZE = size || 8192;
      var MAX = SIZE >>> 1;
      var slab = null;
      var offset = SIZE;
      return function pool_alloc(size) {
        if (size < 1 || size > MAX) return alloc(size);
        if (offset + size > SIZE) {
          slab = alloc(SIZE);
          offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        7 & offset && (offset = 1 + (7 | offset));
        return buf;
      };
    }
  }, {} ],
  7: [ function(require, module, exports) {
    "use strict";
    var utf8 = exports;
    utf8.length = function utf8_length(string) {
      var len = 0, c = 0;
      for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128) len += 1; else if (c < 2048) len += 2; else if (55296 === (64512 & c) && 56320 === (64512 & string.charCodeAt(i + 1))) {
          ++i;
          len += 4;
        } else len += 3;
      }
      return len;
    };
    utf8.read = function utf8_read(buffer, start, end) {
      var len = end - start;
      if (len < 1) return "";
      var parts = null, chunk = [], i = 0, t;
      while (start < end) {
        t = buffer[start++];
        if (t < 128) chunk[i++] = t; else if (t > 191 && t < 224) chunk[i++] = (31 & t) << 6 | 63 & buffer[start++]; else if (t > 239 && t < 365) {
          t = ((7 & t) << 18 | (63 & buffer[start++]) << 12 | (63 & buffer[start++]) << 6 | 63 & buffer[start++]) - 65536;
          chunk[i++] = 55296 + (t >> 10);
          chunk[i++] = 56320 + (1023 & t);
        } else chunk[i++] = (15 & t) << 12 | (63 & buffer[start++]) << 6 | 63 & buffer[start++];
        if (i > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i = 0;
        }
      }
      if (parts) {
        i && parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i));
    };
    utf8.write = function utf8_write(string, buffer, offset) {
      var start = offset, c1, c2;
      for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) buffer[offset++] = c1; else if (c1 < 2048) {
          buffer[offset++] = c1 >> 6 | 192;
          buffer[offset++] = 63 & c1 | 128;
        } else if (55296 === (64512 & c1) && 56320 === (64512 & (c2 = string.charCodeAt(i + 1)))) {
          c1 = 65536 + ((1023 & c1) << 10) + (1023 & c2);
          ++i;
          buffer[offset++] = c1 >> 18 | 240;
          buffer[offset++] = c1 >> 12 & 63 | 128;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = 63 & c1 | 128;
        } else {
          buffer[offset++] = c1 >> 12 | 224;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = 63 & c1 | 128;
        }
      }
      return offset - start;
    };
  }, {} ],
  8: [ function(require, module, exports) {
    "use strict";
    module.exports = require("./src/index-minimal");
  }, {
    "./src/index-minimal": 9
  } ],
  9: [ function(require, module, exports) {
    "use strict";
    var protobuf = exports;
    protobuf.build = "minimal";
    protobuf.Writer = require("./writer");
    protobuf.BufferWriter = require("./writer_buffer");
    protobuf.Reader = require("./reader");
    protobuf.BufferReader = require("./reader_buffer");
    protobuf.util = require("./util/minimal");
    protobuf.rpc = require("./rpc");
    protobuf.roots = require("./roots");
    protobuf.configure = configure;
    function configure() {
      protobuf.util._configure();
      protobuf.Writer._configure(protobuf.BufferWriter);
      protobuf.Reader._configure(protobuf.BufferReader);
    }
    configure();
  }, {
    "./reader": 10,
    "./reader_buffer": 11,
    "./roots": 12,
    "./rpc": 13,
    "./util/minimal": 16,
    "./writer": 17,
    "./writer_buffer": 18
  } ],
  10: [ function(require, module, exports) {
    "use strict";
    module.exports = Reader;
    var util = require("./util/minimal");
    var BufferReader;
    var LongBits = util.LongBits, utf8 = util.utf8;
    function indexOutOfRange(reader, writeLength) {
      return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
    }
    function Reader(buffer) {
      this.buf = buffer;
      this.pos = 0;
      this.len = buffer.length;
    }
    var create_array = "undefined" !== typeof Uint8Array ? function create_typed_array(buffer) {
      if (buffer instanceof Uint8Array || Array.isArray(buffer)) return new Reader(buffer);
      throw Error("illegal buffer");
    } : function create_array(buffer) {
      if (Array.isArray(buffer)) return new Reader(buffer);
      throw Error("illegal buffer");
    };
    var create = function create() {
      return util.Buffer ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
          return util.Buffer.isBuffer(buffer) ? new BufferReader(buffer) : create_array(buffer);
        })(buffer);
      } : create_array;
    };
    Reader.create = create();
    Reader.prototype._slice = util.Array.prototype.subarray || util.Array.prototype.slice;
    Reader.prototype.uint32 = function read_uint32_setup() {
      var value = 4294967295;
      return function read_uint32() {
        value = (127 & this.buf[this.pos]) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (127 & this.buf[this.pos]) << 7) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (127 & this.buf[this.pos]) << 14) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (127 & this.buf[this.pos]) << 21) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (15 & this.buf[this.pos]) << 28) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        if ((this.pos += 5) > this.len) {
          this.pos = this.len;
          throw indexOutOfRange(this, 10);
        }
        return value;
      };
    }();
    Reader.prototype.int32 = function read_int32() {
      return 0 | this.uint32();
    };
    Reader.prototype.sint32 = function read_sint32() {
      var value = this.uint32();
      return value >>> 1 ^ -(1 & value) | 0;
    };
    function readLongVarint() {
      var bits = new LongBits(0, 0);
      var i = 0;
      if (!(this.len - this.pos > 4)) {
        for (;i < 3; ++i) {
          if (this.pos >= this.len) throw indexOutOfRange(this);
          bits.lo = (bits.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0;
          if (this.buf[this.pos++] < 128) return bits;
        }
        bits.lo = (bits.lo | (127 & this.buf[this.pos++]) << 7 * i) >>> 0;
        return bits;
      }
      for (;i < 4; ++i) {
        bits.lo = (bits.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0;
        if (this.buf[this.pos++] < 128) return bits;
      }
      bits.lo = (bits.lo | (127 & this.buf[this.pos]) << 28) >>> 0;
      bits.hi = (bits.hi | (127 & this.buf[this.pos]) >> 4) >>> 0;
      if (this.buf[this.pos++] < 128) return bits;
      i = 0;
      if (this.len - this.pos > 4) for (;i < 5; ++i) {
        bits.hi = (bits.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0;
        if (this.buf[this.pos++] < 128) return bits;
      } else for (;i < 5; ++i) {
        if (this.pos >= this.len) throw indexOutOfRange(this);
        bits.hi = (bits.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0;
        if (this.buf[this.pos++] < 128) return bits;
      }
      throw Error("invalid varint encoding");
    }
    Reader.prototype.bool = function read_bool() {
      return 0 !== this.uint32();
    };
    function readFixed32_end(buf, end) {
      return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
    }
    Reader.prototype.fixed32 = function read_fixed32() {
      if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4);
    };
    Reader.prototype.sfixed32 = function read_sfixed32() {
      if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
      return 0 | readFixed32_end(this.buf, this.pos += 4);
    };
    function readFixed64() {
      if (this.pos + 8 > this.len) throw indexOutOfRange(this, 8);
      return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
    }
    Reader.prototype.float = function read_float() {
      if (this.pos + 4 > this.len) throw indexOutOfRange(this, 4);
      var value = util.float.readFloatLE(this.buf, this.pos);
      this.pos += 4;
      return value;
    };
    Reader.prototype.double = function read_double() {
      if (this.pos + 8 > this.len) throw indexOutOfRange(this, 4);
      var value = util.float.readDoubleLE(this.buf, this.pos);
      this.pos += 8;
      return value;
    };
    Reader.prototype.bytes = function read_bytes() {
      var length = this.uint32(), start = this.pos, end = this.pos + length;
      if (end > this.len) throw indexOutOfRange(this, length);
      this.pos += length;
      if (Array.isArray(this.buf)) return this.buf.slice(start, end);
      return start === end ? new this.buf.constructor(0) : this._slice.call(this.buf, start, end);
    };
    Reader.prototype.string = function read_string() {
      var bytes = this.bytes();
      return utf8.read(bytes, 0, bytes.length);
    };
    Reader.prototype.skip = function skip(length) {
      if ("number" === typeof length) {
        if (this.pos + length > this.len) throw indexOutOfRange(this, length);
        this.pos += length;
      } else do {
        if (this.pos >= this.len) throw indexOutOfRange(this);
      } while (128 & this.buf[this.pos++]);
      return this;
    };
    Reader.prototype.skipType = function(wireType) {
      switch (wireType) {
       case 0:
        this.skip();
        break;

       case 1:
        this.skip(8);
        break;

       case 2:
        this.skip(this.uint32());
        break;

       case 3:
        while (4 !== (wireType = 7 & this.uint32())) this.skipType(wireType);
        break;

       case 5:
        this.skip(4);
        break;

       default:
        throw Error("invalid wire type " + wireType + " at offset " + this.pos);
      }
      return this;
    };
    Reader._configure = function(BufferReader_) {
      BufferReader = BufferReader_;
      Reader.create = create();
      BufferReader._configure();
      var fn = util.Long ? "toLong" : "toNumber";
      util.merge(Reader.prototype, {
        int64: function read_int64() {
          return readLongVarint.call(this)[fn](false);
        },
        uint64: function read_uint64() {
          return readLongVarint.call(this)[fn](true);
        },
        sint64: function read_sint64() {
          return readLongVarint.call(this).zzDecode()[fn](false);
        },
        fixed64: function read_fixed64() {
          return readFixed64.call(this)[fn](true);
        },
        sfixed64: function read_sfixed64() {
          return readFixed64.call(this)[fn](false);
        }
      });
    };
  }, {
    "./util/minimal": 16
  } ],
  11: [ function(require, module, exports) {
    "use strict";
    module.exports = BufferReader;
    var Reader = require("./reader");
    (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
    var util = require("./util/minimal");
    function BufferReader(buffer) {
      Reader.call(this, buffer);
    }
    BufferReader._configure = function() {
      util.Buffer && (BufferReader.prototype._slice = util.Buffer.prototype.slice);
    };
    BufferReader.prototype.string = function read_string_buffer() {
      var len = this.uint32();
      return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
    };
    BufferReader._configure();
  }, {
    "./reader": 10,
    "./util/minimal": 16
  } ],
  12: [ function(require, module, exports) {
    "use strict";
    module.exports = {};
  }, {} ],
  13: [ function(require, module, exports) {
    "use strict";
    var rpc = exports;
    rpc.Service = require("./rpc/service");
  }, {
    "./rpc/service": 14
  } ],
  14: [ function(require, module, exports) {
    "use strict";
    module.exports = Service;
    var util = require("../util/minimal");
    (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
    function Service(rpcImpl, requestDelimited, responseDelimited) {
      if ("function" !== typeof rpcImpl) throw TypeError("rpcImpl must be a function");
      util.EventEmitter.call(this);
      this.rpcImpl = rpcImpl;
      this.requestDelimited = Boolean(requestDelimited);
      this.responseDelimited = Boolean(responseDelimited);
    }
    Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
      if (!request) throw TypeError("request must be specified");
      var self = this;
      if (!callback) return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);
      if (!self.rpcImpl) {
        setTimeout(function() {
          callback(Error("already ended"));
        }, 0);
        return;
      }
      try {
        return self.rpcImpl(method, requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(), function rpcCallback(err, response) {
          if (err) {
            self.emit("error", err, method);
            return callback(err);
          }
          if (null === response) {
            self.end(true);
            return;
          }
          if (!(response instanceof responseCtor)) try {
            response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
          } catch (err) {
            self.emit("error", err, method);
            return callback(err);
          }
          self.emit("data", response, method);
          return callback(null, response);
        });
      } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() {
          callback(err);
        }, 0);
        return;
      }
    };
    Service.prototype.end = function end(endedByRPC) {
      if (this.rpcImpl) {
        endedByRPC || this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
      }
      return this;
    };
  }, {
    "../util/minimal": 16
  } ],
  15: [ function(require, module, exports) {
    "use strict";
    module.exports = LongBits;
    var util = require("../util/minimal");
    function LongBits(lo, hi) {
      this.lo = lo >>> 0;
      this.hi = hi >>> 0;
    }
    var zero = LongBits.zero = new LongBits(0, 0);
    zero.toNumber = function() {
      return 0;
    };
    zero.zzEncode = zero.zzDecode = function() {
      return this;
    };
    zero.length = function() {
      return 1;
    };
    var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
    LongBits.fromNumber = function fromNumber(value) {
      if (0 === value) return zero;
      var sign = value < 0;
      sign && (value = -value);
      var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
      if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
          lo = 0;
          ++hi > 4294967295 && (hi = 0);
        }
      }
      return new LongBits(lo, hi);
    };
    LongBits.from = function from(value) {
      if ("number" === typeof value) return LongBits.fromNumber(value);
      if (util.isString(value)) {
        if (!util.Long) return LongBits.fromNumber(parseInt(value, 10));
        value = util.Long.fromString(value);
      }
      return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
    };
    LongBits.prototype.toNumber = function toNumber(unsigned) {
      if (!unsigned && this.hi >>> 31) {
        var lo = 1 + ~this.lo >>> 0, hi = ~this.hi >>> 0;
        lo || (hi = hi + 1 >>> 0);
        return -(lo + 4294967296 * hi);
      }
      return this.lo + 4294967296 * this.hi;
    };
    LongBits.prototype.toLong = function toLong(unsigned) {
      return util.Long ? new util.Long(0 | this.lo, 0 | this.hi, Boolean(unsigned)) : {
        low: 0 | this.lo,
        high: 0 | this.hi,
        unsigned: Boolean(unsigned)
      };
    };
    var charCodeAt = String.prototype.charCodeAt;
    LongBits.fromHash = function fromHash(hash) {
      if (hash === zeroHash) return zero;
      return new LongBits((charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0, (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0);
    };
    LongBits.prototype.toHash = function toHash() {
      return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
    };
    LongBits.prototype.zzEncode = function zzEncode() {
      var mask = this.hi >> 31;
      this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
      this.lo = (this.lo << 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.zzDecode = function zzDecode() {
      var mask = -(1 & this.lo);
      this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
      this.hi = (this.hi >>> 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.length = function length() {
      var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
      return 0 === part2 ? 0 === part1 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
    };
  }, {
    "../util/minimal": 16
  } ],
  16: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      var util = exports;
      util.asPromise = require("@protobufjs/aspromise");
      util.base64 = require("@protobufjs/base64");
      util.EventEmitter = require("@protobufjs/eventemitter");
      util.float = require("@protobufjs/float");
      util.inquire = require("@protobufjs/inquire");
      util.utf8 = require("@protobufjs/utf8");
      util.pool = require("@protobufjs/pool");
      util.LongBits = require("./longbits");
      util.isNode = Boolean("undefined" !== typeof global && global && global.process && global.process.versions && global.process.versions.node);
      util.global = util.isNode && global || "undefined" !== typeof window && window || "undefined" !== typeof self && self || this;
      util.emptyArray = Object.freeze ? Object.freeze([]) : [];
      util.emptyObject = Object.freeze ? Object.freeze({}) : {};
      util.isInteger = Number.isInteger || function isInteger(value) {
        return "number" === typeof value && isFinite(value) && Math.floor(value) === value;
      };
      util.isString = function isString(value) {
        return "string" === typeof value || value instanceof String;
      };
      util.isObject = function isObject(value) {
        return value && "object" === typeof value;
      };
      util.isset = util.isSet = function isSet(obj, prop) {
        var value = obj[prop];
        if (null != value && obj.hasOwnProperty(prop)) return "object" !== typeof value || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
        return false;
      };
      util.Buffer = function() {
        try {
          var Buffer = util.inquire("buffer").Buffer;
          return Buffer.prototype.utf8Write ? Buffer : null;
        } catch (e) {
          return null;
        }
      }();
      util._Buffer_from = null;
      util._Buffer_allocUnsafe = null;
      util.newBuffer = function newBuffer(sizeOrArray) {
        return "number" === typeof sizeOrArray ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : "undefined" === typeof Uint8Array ? sizeOrArray : new Uint8Array(sizeOrArray);
      };
      util.Array = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
      util.Long = util.global.dcodeIO && util.global.dcodeIO.Long || util.global.Long || util.inquire("long");
      util.key2Re = /^true|false|0|1$/;
      util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
      util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
      util.longToHash = function longToHash(value) {
        return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
      };
      util.longFromHash = function longFromHash(hash, unsigned) {
        var bits = util.LongBits.fromHash(hash);
        if (util.Long) return util.Long.fromBits(bits.lo, bits.hi, unsigned);
        return bits.toNumber(Boolean(unsigned));
      };
      function merge(dst, src, ifNotSet) {
        for (var keys = Object.keys(src), i = 0; i < keys.length; ++i) void 0 !== dst[keys[i]] && ifNotSet || (dst[keys[i]] = src[keys[i]]);
        return dst;
      }
      util.merge = merge;
      util.lcFirst = function lcFirst(str) {
        return str.charAt(0).toLowerCase() + str.substring(1);
      };
      function newError(name) {
        function CustomError(message, properties) {
          if (!(this instanceof CustomError)) return new CustomError(message, properties);
          Object.defineProperty(this, "message", {
            get: function() {
              return message;
            }
          });
          Error.captureStackTrace ? Error.captureStackTrace(this, CustomError) : Object.defineProperty(this, "stack", {
            value: new Error().stack || ""
          });
          properties && merge(this, properties);
        }
        (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;
        Object.defineProperty(CustomError.prototype, "name", {
          get: function() {
            return name;
          }
        });
        CustomError.prototype.toString = function toString() {
          return this.name + ": " + this.message;
        };
        return CustomError;
      }
      util.newError = newError;
      util.ProtocolError = newError("ProtocolError");
      util.oneOfGetter = function getOneOf(fieldNames) {
        var fieldMap = {};
        for (var i = 0; i < fieldNames.length; ++i) fieldMap[fieldNames[i]] = 1;
        return function() {
          for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i) if (1 === fieldMap[keys[i]] && void 0 !== this[keys[i]] && null !== this[keys[i]]) return keys[i];
        };
      };
      util.oneOfSetter = function setOneOf(fieldNames) {
        return function(name) {
          for (var i = 0; i < fieldNames.length; ++i) fieldNames[i] !== name && delete this[fieldNames[i]];
        };
      };
      util.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: true
      };
      util._configure = function() {
        var Buffer = util.Buffer;
        if (!Buffer) {
          util._Buffer_from = util._Buffer_allocUnsafe = null;
          return;
        }
        util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from || function Buffer_from(value, encoding) {
          return new Buffer(value, encoding);
        };
        util._Buffer_allocUnsafe = Buffer.allocUnsafe || function Buffer_allocUnsafe(size) {
          return new Buffer(size);
        };
      };
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "./longbits": 15,
    "@protobufjs/aspromise": 1,
    "@protobufjs/base64": 2,
    "@protobufjs/eventemitter": 3,
    "@protobufjs/float": 4,
    "@protobufjs/inquire": 5,
    "@protobufjs/pool": 6,
    "@protobufjs/utf8": 7
  } ],
  17: [ function(require, module, exports) {
    "use strict";
    module.exports = Writer;
    var util = require("./util/minimal");
    var BufferWriter;
    var LongBits = util.LongBits, base64 = util.base64, utf8 = util.utf8;
    function Op(fn, len, val) {
      this.fn = fn;
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    function noop() {}
    function State(writer) {
      this.head = writer.head;
      this.tail = writer.tail;
      this.len = writer.len;
      this.next = writer.states;
    }
    function Writer() {
      this.len = 0;
      this.head = new Op(noop, 0, 0);
      this.tail = this.head;
      this.states = null;
    }
    var create = function create() {
      return util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
          return new BufferWriter();
        })();
      } : function create_array() {
        return new Writer();
      };
    };
    Writer.create = create();
    Writer.alloc = function alloc(size) {
      return new util.Array(size);
    };
    util.Array !== Array && (Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray));
    Writer.prototype._push = function push(fn, len, val) {
      this.tail = this.tail.next = new Op(fn, len, val);
      this.len += len;
      return this;
    };
    function writeByte(val, buf, pos) {
      buf[pos] = 255 & val;
    }
    function writeVarint32(val, buf, pos) {
      while (val > 127) {
        buf[pos++] = 127 & val | 128;
        val >>>= 7;
      }
      buf[pos] = val;
    }
    function VarintOp(len, val) {
      this.len = len;
      this.next = void 0;
      this.val = val;
    }
    VarintOp.prototype = Object.create(Op.prototype);
    VarintOp.prototype.fn = writeVarint32;
    Writer.prototype.uint32 = function write_uint32(value) {
      this.len += (this.tail = this.tail.next = new VarintOp((value >>>= 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5, value)).len;
      return this;
    };
    Writer.prototype.int32 = function write_int32(value) {
      return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
    };
    Writer.prototype.sint32 = function write_sint32(value) {
      return this.uint32((value << 1 ^ value >> 31) >>> 0);
    };
    function writeVarint64(val, buf, pos) {
      while (val.hi) {
        buf[pos++] = 127 & val.lo | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
      }
      while (val.lo > 127) {
        buf[pos++] = 127 & val.lo | 128;
        val.lo = val.lo >>> 7;
      }
      buf[pos++] = val.lo;
    }
    Writer.prototype.uint64 = function write_uint64(value) {
      var bits = LongBits.from(value);
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.int64 = Writer.prototype.uint64;
    Writer.prototype.sint64 = function write_sint64(value) {
      var bits = LongBits.from(value).zzEncode();
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.bool = function write_bool(value) {
      return this._push(writeByte, 1, value ? 1 : 0);
    };
    function writeFixed32(val, buf, pos) {
      buf[pos] = 255 & val;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    Writer.prototype.fixed32 = function write_fixed32(value) {
      return this._push(writeFixed32, 4, value >>> 0);
    };
    Writer.prototype.sfixed32 = Writer.prototype.fixed32;
    Writer.prototype.fixed64 = function write_fixed64(value) {
      var bits = LongBits.from(value);
      return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
    };
    Writer.prototype.sfixed64 = Writer.prototype.fixed64;
    Writer.prototype.float = function write_float(value) {
      return this._push(util.float.writeFloatLE, 4, value);
    };
    Writer.prototype.double = function write_double(value) {
      return this._push(util.float.writeDoubleLE, 8, value);
    };
    var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytes_for(val, buf, pos) {
      for (var i = 0; i < val.length; ++i) buf[pos + i] = val[i];
    };
    Writer.prototype.bytes = function write_bytes(value) {
      var len = value.length >>> 0;
      if (!len) return this._push(writeByte, 1, 0);
      if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
      }
      return this.uint32(len)._push(writeBytes, len, value);
    };
    Writer.prototype.string = function write_string(value) {
      var len = utf8.length(value);
      return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
    };
    Writer.prototype.fork = function fork() {
      this.states = new State(this);
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
      return this;
    };
    Writer.prototype.reset = function reset() {
      if (this.states) {
        this.head = this.states.head;
        this.tail = this.states.tail;
        this.len = this.states.len;
        this.states = this.states.next;
      } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
      }
      return this;
    };
    Writer.prototype.ldelim = function ldelim() {
      var head = this.head, tail = this.tail, len = this.len;
      this.reset().uint32(len);
      if (len) {
        this.tail.next = head.next;
        this.tail = tail;
        this.len += len;
      }
      return this;
    };
    Writer.prototype.finish = function finish() {
      var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
      while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
      }
      return buf;
    };
    Writer._configure = function(BufferWriter_) {
      BufferWriter = BufferWriter_;
      Writer.create = create();
      BufferWriter._configure();
    };
  }, {
    "./util/minimal": 16
  } ],
  18: [ function(require, module, exports) {
    "use strict";
    module.exports = BufferWriter;
    var Writer = require("./writer");
    (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
    var util = require("./util/minimal");
    function BufferWriter() {
      Writer.call(this);
    }
    BufferWriter._configure = function() {
      BufferWriter.alloc = util._Buffer_allocUnsafe;
      BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && "set" === util.Buffer.prototype.set.name ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos);
      } : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) val.copy(buf, pos, 0, val.length); else for (var i = 0; i < val.length; ) buf[pos++] = val[i++];
      };
    };
    BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
      util.isString(value) && (value = util._Buffer_from(value, "base64"));
      var len = value.length >>> 0;
      this.uint32(len);
      len && this._push(BufferWriter.writeBytesBuffer, len, value);
      return this;
    };
    function writeStringBuffer(val, buf, pos) {
      val.length < 40 ? util.utf8.write(val, buf, pos) : buf.utf8Write ? buf.utf8Write(val, pos) : buf.write(val, pos);
    }
    BufferWriter.prototype.string = function write_string_buffer(value) {
      var len = util.Buffer.byteLength(value);
      this.uint32(len);
      len && this._push(writeStringBuffer, len, value);
      return this;
    };
    BufferWriter._configure();
  }, {
    "./util/minimal": 16,
    "./writer": 17
  } ],
  GSCmdDelayManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df2c3ZN+dBDEo4W90vz7OmU", "GSCmdDelayManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GSCmdDelayManager = function() {
      function GSCmdDelayManager() {
        this._cmdDataMap = [];
        this._cmdDelayMap = [];
        this._callback = null;
        this._cmdTimeId = null;
        this._isStopCmd = false;
        this._timerId = null;
        this._delayIng = false;
        this._clearTimer();
        this._delayIng = false;
        this._isStopCmd = false;
      }
      GSCmdDelayManager.getInstance = function() {
        this._ins || (this._ins = new GSCmdDelayManager());
        return this._ins;
      };
      GSCmdDelayManager.prototype.registerCmdCallback = function(callback) {
        this._callback = callback;
      };
      GSCmdDelayManager.prototype.addCmd = function(cmd, data) {
        cc.log("[GSCmdDelayManager] cmd : 0x", cmd.toString(16));
        this._cmdDataMap.push({
          cmd: cmd,
          data: data
        });
        if (this._delayIng || this._isStopCmd) return;
        this._cmdDataMap.length > 0 && this._playCmd();
      };
      GSCmdDelayManager.prototype.addTimeToDelayMap = function(cmd, time) {
        this._cmdDelayMap[cmd] = time;
      };
      GSCmdDelayManager.prototype.clean = function() {
        this._callback = null;
        this._cmdDataMap = [];
      };
      GSCmdDelayManager.prototype._nextCmd = function() {
        this._clearTimer();
        this._delayIng = false;
        if (0 < this._cmdDataMap.length) {
          var temp = this._cmdDataMap[0];
          this._cmdDataMap.shift();
          if (this._callback) {
            cc.log("GSCmdDelayManager excute cmd = ", temp.cmd.toString(16));
            this._callback(temp.cmd, temp.data);
          }
          cc.log("[GSCmdDelayManager] play cmd ", temp.cmd.toString(16), " cmd queue length " + this._cmdDataMap.length);
          this._playCmd();
        }
      };
      GSCmdDelayManager.prototype._playCmd = function() {
        if (this._cmdDataMap.length <= 0) return;
        this._delayIng = true;
        var temp = this._cmdDataMap[0];
        var time = this._getCmdDelayTime(temp.cmd);
        if (time) {
          this._timerId = setTimeout(this._nextCmd.bind(this), 1e3 * time);
          cc.log("[GSCmdDelayManager] cmd : 0x", temp.cmd.toString(16), " delay : ", 1e3 * time);
        } else this._nextCmd();
      };
      GSCmdDelayManager.prototype._getCmdDelayTime = function(cmd) {
        var reTimes = this._cmdDelayMap[cmd];
        return reTimes;
      };
      GSCmdDelayManager.prototype._clearTimer = function() {
        if (null != this._timerId) {
          clearTimeout(this._timerId);
          this._timerId = null;
        }
      };
      GSCmdDelayManager.prototype._setStop = function(stop) {
        this._isStopCmd = stop;
      };
      GSCmdDelayManager.prototype.pauseCmd = function() {
        cc.log("pause GSCmdDelayManager");
        this._isStopCmd = true;
        this._clearTimer();
      };
      GSCmdDelayManager.prototype.resumeCmd = function() {
        cc.log("resume GSCmdDelayManager");
        this._isStopCmd = false;
        this._setStop(false);
        0 < this._cmdDataMap.length && this._playCmd();
      };
      GSCmdDelayManager.prototype.clearDelayCmd = function() {
        cc.log("[GSCmdDelayManager] clear delay cmd");
        this._clearTimer();
        this._delayIng = false;
        this._isStopCmd = false;
        this._setStop(false);
        this._cmdDataMap = [];
      };
      return GSCmdDelayManager;
    }();
    exports.default = GSCmdDelayManager;
    cc._RF.pop();
  }, {} ],
  GSManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c07co/FiNAL6DIaeJVKs0v", "GSManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketBase_1 = require("../../core/net/base/SocketBase");
    var DataParser_1 = require("../../core/utils/DataParser");
    var StringUtils_1 = require("../../core/utils/StringUtils");
    var AppConfig_1 = require("../../AppConfig");
    var WsSocket_1 = require("../../core/net/base/WsSocket");
    var NativeManager_1 = require("../../core/manager/NativeManager");
    var ModelCenter_1 = require("../../data/ModelCenter");
    var ViewManager_1 = require("../../core/manager/ViewManager");
    var ViewConfig_1 = require("../../config/ViewConfig");
    var TipsConfig_1 = require("../../config/TipsConfig");
    var LoadingManager_1 = require("../../core/manager/LoadingManager");
    var GSManager = function(_super) {
      __extends(GSManager, _super);
      function GSManager() {
        var _this = _super.call(this) || this;
        _this.connectFlag = 0;
        _this._socket = null;
        _this._heartBeatTimeOutTimer = null;
        _this._heartBeatTimeOut = 1e4;
        _this._heartBeatInterval = 1e4;
        _this._currentBeatInterval = 1e4;
        _this._dataParser = null;
        _this.canHeartbeat = true;
        _this._heartBeat = 0;
        _this._connectType = "GS";
        _this._listener = null;
        _this._ip = null;
        _this._port = null;
        _this._dataParser = new DataParser_1.default(_this.onParseMsg.bind(_this));
        _this.canHeartbeat = true;
        _this._heartBeat = 0;
        _this._heartBeatTimeOut = 1e4;
        _this._currentBeatInterval = _this._heartBeatTimeOut;
        return _this;
      }
      GSManager.getInstance = function() {
        this._ins || (this._ins = new GSManager());
        return this._ins;
      };
      GSManager.prototype.addSocketProcesser = function(socketProcesser) {
        this._commonProcesser = socketProcesser;
      };
      GSManager.prototype.addSocketReader = function(socketReader) {
        this._commonReader = socketReader;
      };
      GSManager.prototype.addSocketWriter = function(socketWriter) {
        this._commonWriter = socketWriter;
      };
      GSManager.prototype.dispatchCacheEvent = function() {
        this._commonProcesser.dispatchCacheEvent();
      };
      GSManager.prototype.cacheEvent = function() {
        this._commonProcesser.cacheEvent();
      };
      GSManager.prototype.clearCacheEvent = function() {
        this._commonProcesser.clearCacheEvent();
      };
      GSManager.prototype.isConnect = function() {
        if (this._socket) return this._socket.isConnect();
        return false;
      };
      GSManager.prototype.sendMsg = function(cmd, info) {
        this.isConnect() && _super.prototype.sendMsg.call(this, cmd, info);
      };
      GSManager.prototype.onParseMsg = function(pack) {
        cc.log("this : ", this);
        var info = this.readPacket(pack);
        var cmd = info.cmd;
        this.receivePacket(cmd, info);
      };
      GSManager.prototype.onClose = function(evt) {
        var _this = this;
        cc.log("[GSManager] socket close by server");
        this._stopHeartbeat();
        this._clearLoading();
        clearInterval(this._heartBeatTimeOutTimer);
        setTimeout(function() {
          ViewManager_1.default.getInstance().showView(ViewConfig_1.ViewConfig.MESSAGE, {
            content: TipsConfig_1.TipsConfig.common_sys_tips_004,
            continueCallBack: function() {
              _this.reconnect();
            }
          });
        }, 200);
      };
      GSManager.prototype.onError = function(evt) {
        var _this = this;
        cc.log("[GSManager] socket connect error");
        this._stopHeartbeat();
        this._clearLoading();
        clearInterval(this._heartBeatTimeOutTimer);
        var mark = NativeManager_1.default.getInstance().isNetWorkAvailable();
        if (mark) setTimeout(function() {
          ViewManager_1.default.getInstance().showView(ViewConfig_1.ViewConfig.MESSAGE, {
            content: TipsConfig_1.TipsConfig.common_sys_tips_004,
            continueCallBack: function() {
              _this.reconnect();
            }
          });
        }, 200); else {
          cc.log("\u60a8\u5f53\u524d\u7f51\u7edc\u73af\u5883\u4e0d\u7a33\u5b9a,\u8bf7\u68c0\u67e5\u7f51\u7edc\u662f\u5426\u6253\u5f00");
          setTimeout(function() {
            ViewManager_1.default.getInstance().showView(ViewConfig_1.ViewConfig.MESSAGE, {
              content: TipsConfig_1.TipsConfig.common_sys_tips_005,
              continueCallBack: function() {
                _this.reconnect();
              }
            });
          }, 200);
        }
      };
      GSManager.prototype.onMessage = function(evt) {
        this._dataParser.parse(evt.data);
      };
      GSManager.prototype.onOpen = function(evt) {
        this._stopHeartbeat();
        this.canHeartbeat = true;
        this._hidePreloading();
        clearInterval(this._heartBeatTimeOutTimer);
        cc.log("[GSManager] socket connect success");
        this.sendMsg(81, {
          roomId: ModelCenter_1.default.getInstance().reconnectionInfo.roomId
        });
      };
      GSManager.prototype.connect = function(ip, port) {
        this._ip = ip;
        this._port = port;
        this._sendSeq = 0;
        this._reciveSeq = 0;
        this.connectFlag += 1;
        cc.log("[GSManager] connect : ", this.getSocketUrl());
        this._socket = new WsSocket_1.default(this, true, this.connectFlag, this._connectType);
        this._socket.connect(this.getSocketUrl());
      };
      GSManager.prototype.reconnect = function() {
        var connectUrl = this.getSocketUrl;
        this._stopHeartbeat();
        if (connectUrl) {
          cc.log("[GSManager] start reconnect");
          this.close();
          LoadingManager_1.default.getInstance().showLoadingView();
          this.connect(this._ip, this._port);
        }
      };
      GSManager.prototype.close = function() {
        cc.log("[GSManager] socket close by client");
        if (this._socket) {
          clearInterval(this._heartBeatTimeOutTimer);
          this._stopHeartbeat();
          this.connectFlag += 1;
          this._socket.close();
          this._socket = null;
        }
      };
      GSManager.prototype.errorClose = function() {
        var _this = this;
        this.close();
        setTimeout(function() {
          _this.reconnect();
        }, 200);
      };
      GSManager.prototype.getSocketUrl = function() {
        return this._ip && this._port ? StringUtils_1.default.getInstance().substitute(AppConfig_1.AppConfig.wwsValue + "://{0}:{1}/ws", [ this._ip, this._port ]) : null;
      };
      GSManager.prototype._hidePreloading = function() {
        LoadingManager_1.default.getInstance().hideLoadingView();
      };
      GSManager.prototype._showLoading = function() {
        LoadingManager_1.default.getInstance().showLoadingView();
      };
      GSManager.prototype._clearLoading = function() {
        LoadingManager_1.default.getInstance().clearLoadingView();
      };
      GSManager.prototype._startHeartbeat = function() {
        if (this.canHeartbeat) {
          this._sendHeartbeat();
          this._heartBeat = setTimeout(this._startHeartbeat.bind(this), this._currentBeatInterval);
        }
      };
      GSManager.prototype._sendHeartbeat = function() {
        if (this.canHeartbeat) {
          cc.log("[GSManager] send heart beat");
          this._heartBeatTimeOutTimer = setTimeout(this.heartBeatTimeout.bind(this), this._heartBeatTimeOut);
          this.sendMsg(92, {});
        }
      };
      GSManager.prototype._stopHeartbeat = function() {
        this.canHeartbeat = false;
        if (this._heartBeat) {
          clearInterval(this._heartBeat);
          this._heartBeat = 0;
        }
      };
      GSManager.prototype.heartBeatTimeout = function() {
        cc.log("[GSManager] heart beat time out");
        this.errorClose();
      };
      GSManager.prototype.onHeartBeatResponse = function(data) {
        cc.log("[GSManager] heart response");
        clearInterval(this._heartBeatTimeOutTimer);
      };
      GSManager._ins = null;
      return GSManager;
    }(SocketBase_1.default);
    exports.default = GSManager;
    cc._RF.pop();
  }, {
    "../../AppConfig": "AppConfig",
    "../../config/TipsConfig": "TipsConfig",
    "../../config/ViewConfig": "ViewConfig",
    "../../core/manager/LoadingManager": "LoadingManager",
    "../../core/manager/NativeManager": "NativeManager",
    "../../core/manager/ViewManager": "ViewManager",
    "../../core/net/base/SocketBase": "SocketBase",
    "../../core/net/base/WsSocket": "WsSocket",
    "../../core/utils/DataParser": "DataParser",
    "../../core/utils/StringUtils": "StringUtils",
    "../../data/ModelCenter": "ModelCenter"
  } ],
  GameCommonConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6235X6QeFN0Z756JEZme7c", "GameCommonConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GmCmConfig = void 0;
    var GmCmConfig = [ {
      rmcm_smallSettlement: {
        path: "SmallSettlement",
        ex: cc.Prefab
      }
    } ];
    exports.GmCmConfig = GmCmConfig;
    cc._RF.pop();
  }, {} ],
  GameConfigInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a9c44o/H/pE14E7qY2HB42J", "GameConfigInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConfigInfo = function() {
      function GameConfigInfo(gmData) {
        this._gameListInfo = {};
        for (var _i = 0, gmData_1 = gmData; _i < gmData_1.length; _i++) {
          var iterator = gmData_1[_i];
          this._gameListInfo[iterator.gameid] = iterator;
        }
      }
      GameConfigInfo.prototype.getGameInfoByGameID = function(gameID) {
        if (!this._gameListInfo[gameID]) {
          cc.log("error : not found game info ", gameID);
          return;
        }
        return this._gameListInfo[gameID];
      };
      return GameConfigInfo;
    }();
    exports.default = GameConfigInfo;
    cc._RF.pop();
  }, {} ],
  GameLoaderBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "328d7bEqGxB1ZU+Fcai2VqK", "GameLoaderBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameLoaderBase = function() {
      function GameLoaderBase() {}
      GameLoaderBase.prototype.registerView = function(bundle, bundle2) {};
      GameLoaderBase.prototype.unRegisterView = function() {};
      GameLoaderBase.prototype.createProcesser = function() {};
      GameLoaderBase.prototype.createReader = function() {};
      GameLoaderBase.prototype.createWriter = function() {};
      return GameLoaderBase;
    }();
    exports.default = GameLoaderBase;
    cc._RF.pop();
  }, {} ],
  GameLoaderManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3959luxLhFTIAH2tPkxs4V", "GameLoaderManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ModelCenter_1 = require("../data/ModelCenter");
    var GSManager_1 = require("./net/GSManager");
    var LoadingManager_1 = require("../core/manager/LoadingManager");
    var SceneManager_1 = require("../core/manager/SceneManager");
    var SceneConfig_1 = require("../config/SceneConfig");
    var ViewManager_1 = require("../core/manager/ViewManager");
    var ViewConfig_1 = require("../config/ViewConfig");
    var ViewInfo_1 = require("../core/package/ViewInfo");
    window["GMDATA"] = null;
    var GameLoaderManager = function() {
      function GameLoaderManager() {
        this._gmLoader = null;
      }
      GameLoaderManager.getInstance = function() {
        this._ins || (this._ins = new GameLoaderManager());
        return this._ins;
      };
      GameLoaderManager.prototype.getGmLoader = function() {
        return this._gmLoader;
      };
      GameLoaderManager.prototype.connectGameSocket = function() {
        this._gmLoader = null;
        window["GAMEDATA"] = null;
        var gmConfigInfo = ModelCenter_1.default.getInstance().gameConfigInfo.getGameInfoByGameID(ModelCenter_1.default.getInstance().reconnectionInfo.gameId);
        var loadCls = window[gmConfigInfo.clsName];
        this._gmLoader = new loadCls();
        if (this._gmLoader) {
          var socketProcess = this._gmLoader.createProcesser();
          var socketReader = this._gmLoader.createReader();
          var socketWriter = this._gmLoader.createWriter();
          GSManager_1.default.getInstance().addSocketProcesser(socketProcess);
          GSManager_1.default.getInstance().addSocketReader(socketReader);
          GSManager_1.default.getInstance().addSocketWriter(socketWriter);
          LoadingManager_1.default.getInstance().showLoadingView();
          this.startConnectSocket();
        }
      };
      GameLoaderManager.prototype.initBundleMgr = function() {
        window["BDMgr"]["ViewManager"] = ViewManager_1.default.getInstance();
        window["BDMgr"]["ViewConfig"] = ViewConfig_1.ViewConfig;
        window["BDMgr"]["ViewInfo"] = ViewInfo_1.default;
      };
      GameLoaderManager.prototype.startConnectSocket = function() {
        var serverIP = ModelCenter_1.default.getInstance().reconnectionInfo.serverIP;
        var serverPort = ModelCenter_1.default.getInstance().reconnectionInfo.serverPort;
        GSManager_1.default.getInstance().connect(serverIP, serverPort);
        LoadingManager_1.default.getInstance().showLoadingView();
      };
      GameLoaderManager.prototype.reConnectSocket = function() {
        GSManager_1.default.getInstance().reconnect();
      };
      GameLoaderManager.prototype.enterRoomScene = function(data, reconnect) {
        LoadingManager_1.default.getInstance().hideLoadingView();
        SceneManager_1.default.getInstance().replaceScene(SceneConfig_1.SceneConfig.ROOM, data);
      };
      GameLoaderManager.prototype.exitRoomScene = function() {
        LoadingManager_1.default.getInstance().clearLoadingView();
        GSManager_1.default.getInstance().clearCacheEvent();
        this._gmLoader = null;
        window["GAMEDATA"] = null;
        window["BDMgr"]["ViewManager"] = null;
      };
      GameLoaderManager._ins = null;
      return GameLoaderManager;
    }();
    exports.default = GameLoaderManager;
    cc._RF.pop();
  }, {
    "../config/SceneConfig": "SceneConfig",
    "../config/ViewConfig": "ViewConfig",
    "../core/manager/LoadingManager": "LoadingManager",
    "../core/manager/SceneManager": "SceneManager",
    "../core/manager/ViewManager": "ViewManager",
    "../core/package/ViewInfo": "ViewInfo",
    "../data/ModelCenter": "ModelCenter",
    "./net/GSManager": "GSManager"
  } ],
  GameMapConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e026xP9ZlNY7ePSMFHyNri", "GameMapConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameMapConfig = void 0;
    var PdkResConfig_1 = require("../pdk/config/PdkResConfig");
    var GameMapConfig = [ {
      gameid: 368,
      name: "\u8dd1\u5f97\u5feb",
      bundleName: "rPdk",
      clsName: "PdkGameLoader",
      appBdVer: "1.0.0",
      minGameBdVer: "1.0.0",
      resConfig: PdkResConfig_1.PdkResConfig
    } ];
    exports.GameMapConfig = GameMapConfig;
    cc._RF.pop();
  }, {
    "../pdk/config/PdkResConfig": "PdkResConfig"
  } ],
  GuideView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "436ccwR0IZK5bnr73DtjYaa", "GuideView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewBase_1 = require("../../core/external/ViewBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GuideView = function(_super) {
      __extends(GuideView, _super);
      function GuideView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._touchNode = null;
        return _this;
      }
      GuideView.prototype.start = function() {
        this.initView();
        this._touchNode = this.toolUtils.getNodeByName(this.node, "bg");
        var touch = this.toolUtils.getNodeByName(this.node, "touch");
        touch.on(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
      };
      GuideView.prototype.onTouchStart = function(event) {
        var touchs = event.getTouches();
        var loc = touchs[0].getLocation();
        var pt = this._touchNode.convertToNodeSpaceAR(loc);
        var rect = cc.rect(-this._touchNode.width / 2, -this._touchNode.height / 2, this._touchNode.width, this._touchNode.height);
        if (rect.contains(pt)) {
          cc.log("\u6709\u6548");
          return false;
        }
      };
      GuideView = __decorate([ ccclass ], GuideView);
      return GuideView;
    }(ViewBase_1.default);
    exports.default = GuideView;
    cc._RF.pop();
  }, {
    "../../core/external/ViewBase": "ViewBase"
  } ],
  HallEntry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7178/poV1EpazU8y4QTSUB", "HallEntry");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneConfig_1 = require("../config/SceneConfig");
    var ResConfig_1 = require("../config/ResConfig");
    var SceneInfo_1 = require("../core/package/SceneInfo");
    var SceneManager_1 = require("../core/manager/SceneManager");
    var ViewManager_1 = require("../core/manager/ViewManager");
    var ViewConfig_1 = require("../config/ViewConfig");
    var ViewInfo_1 = require("../core/package/ViewInfo");
    var EntryBase_1 = require("../core/external/EntryBase");
    var HallEntry = function(_super) {
      __extends(HallEntry, _super);
      function HallEntry() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HallEntry.getInstance = function() {
        this._ins || (this._ins = new HallEntry());
        return this._ins;
      };
      HallEntry.prototype.init = function() {
        SceneManager_1.default.getInstance().registerCreator(SceneConfig_1.SceneConfig.HALL, new SceneInfo_1.default("HallScene", ResConfig_1.ResScene.HALLSCENE));
        ViewManager_1.default.getInstance().registerCreator(ViewConfig_1.ViewConfig.HALLVIEW, new ViewInfo_1.default("HallView", this.bodyBundleRes["bd_hallview"]));
        ViewManager_1.default.getInstance().registerCreator(ViewConfig_1.ViewConfig.GUIDEVIEW, new ViewInfo_1.default("GuideView", this.bodyBundleRes["bd_guideview"]));
      };
      HallEntry._ins = null;
      return HallEntry;
    }(EntryBase_1.default);
    exports.default = HallEntry;
    cc._RF.pop();
  }, {
    "../config/ResConfig": "ResConfig",
    "../config/SceneConfig": "SceneConfig",
    "../config/ViewConfig": "ViewConfig",
    "../core/external/EntryBase": "EntryBase",
    "../core/manager/SceneManager": "SceneManager",
    "../core/manager/ViewManager": "ViewManager",
    "../core/package/SceneInfo": "SceneInfo",
    "../core/package/ViewInfo": "ViewInfo"
  } ],
  HallScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96a5dAi1NdOmphLexyuqztH", "HallScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneBase_1 = require("../core/external/SceneBase");
    var ViewConfig_1 = require("../config/ViewConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HallScene = function(_super) {
      __extends(HallScene, _super);
      function HallScene() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HallScene.prototype.start = function() {
        var bg = new cc.Node();
        this.node.addChild(bg);
        bg.addComponent(cc.Sprite).spriteFrame = this.bodyBundleRes["bd_texture_hallBg"];
        this.toolUtils.scaleBackgroundBG(bg);
        this.viewManager.showView(ViewConfig_1.ViewConfig.HALLVIEW, null, null, true);
      };
      HallScene = __decorate([ ccclass ], HallScene);
      return HallScene;
    }(SceneBase_1.default);
    exports.default = HallScene;
    cc._RF.pop();
  }, {
    "../config/ViewConfig": "ViewConfig",
    "../core/external/SceneBase": "SceneBase"
  } ],
  HallView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ab73a5EzxMvpAZW0IBC/nn", "HallView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewBase_1 = require("../core/external/ViewBase");
    var EventConfig_1 = require("../config/EventConfig");
    var ViewManager_1 = require("../core/manager/ViewManager");
    var ViewConfig_1 = require("../config/ViewConfig");
    var HttpMessageHelp_1 = require("../core/http/HttpMessageHelp");
    var HttpConfig_1 = require("../config/HttpConfig");
    var AppConfig_1 = require("../AppConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HallView = function(_super) {
      __extends(HallView, _super);
      function HallView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HallView.prototype.start = function() {
        this.initView(true);
        var versionLabel = this.toolUtils.getNodeByName(this.node, "hall_version");
        versionLabel.getComponent(cc.Label).string = AppConfig_1.AppConfig.version;
        var roomCreator = this.toolUtils.getNodeByName(this.node, "hall_create");
        roomCreator.on("click", this.onCreatorRoom, this);
      };
      HallView.prototype.onCreatorRoom = function() {
        cc.log("\u521b\u5efa\u623f\u95f4");
        var roomSet = {
          app_id: 90,
          game_type: 368,
          aa: 0,
          chairs: 2,
          club: 0,
          wf_id: 1,
          wf_type: 0,
          base_score: 1,
          max_rounds: 10,
          watch: 0,
          must_put: 1,
          tuo_guan: 0,
          choice_banker: 1,
          first_put: 1,
          show_card_len: 2,
          AAAABC: 1,
          AAAABCD: 1,
          AAAB: 1,
          AAAB2: 1,
          AAAA: 1,
          sameID: 1,
          hongshi: 1,
          fangzuobi: 1,
          bomb_A: 1,
          put_2: 1,
          bomb_3: 1,
          bomb_x: 3,
          mt_1: 1,
          mt_2: 1,
          mt_3: 1,
          mt_4: 1,
          mt_5: 1,
          AABB: 1,
          AAABBB: 1,
          end_put: "11",
          wanfa: "1111",
          mingtang: "11111"
        };
        HttpMessageHelp_1.default.getInstance().sendMessage(HttpConfig_1.HttpConfig.LOGIN_CREATEROOM, roomSet);
      };
      HallView.prototype.onEvent = function(event) {
        var data = event.getUserData();
        switch (event.getName()) {
         case EventConfig_1.EventConfig.HALL_DOWNLOADGAME:
          ViewManager_1.default.getInstance().showView(ViewConfig_1.ViewConfig.DOWNLOADGAMEVIEW);
        }
      };
      HallView = __decorate([ ccclass ], HallView);
      return HallView;
    }(ViewBase_1.default);
    exports.default = HallView;
    cc._RF.pop();
  }, {
    "../AppConfig": "AppConfig",
    "../config/EventConfig": "EventConfig",
    "../config/HttpConfig": "HttpConfig",
    "../config/ViewConfig": "ViewConfig",
    "../core/external/ViewBase": "ViewBase",
    "../core/http/HttpMessageHelp": "HttpMessageHelp",
    "../core/manager/ViewManager": "ViewManager"
  } ],
  HttpBaseProto: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dfa24lXODZNU6n2THg8AY6A", "HttpBaseProto");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HttpBaseProto = function() {
      function HttpBaseProto() {}
      HttpBaseProto.prototype.checkCodeResult = function(result) {
        var code = result.getCode();
        if (1 !== code) {
          cc.log("\u8bf7\u6c42\u9519\u8bef : " + code);
          return false;
        }
        return true;
      };
      return HttpBaseProto;
    }();
    exports.default = HttpBaseProto;
    cc._RF.pop();
  }, {} ],
  HttpConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "716e6uRdHZJ8bsMSyw35fJY", "HttpConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HttpConfig = void 0;
    var HttpConfig = {
      LOGIN_GAME: "login",
      LOGIN_CREATEROOM: "establish",
      LOGIN_JOINROOM: "enter_room",
      HEART_BEAT_LABBY: "heartbeat.php"
    };
    exports.HttpConfig = HttpConfig;
    cc._RF.pop();
  }, {} ],
  HttpLoginProto: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae04eh0OiVNX7hRI/ZQaRbu", "HttpLoginProto");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HttpBaseProto_1 = require("./HttpBaseProto");
    var protoLogin_1 = require("../third/protobuf/protoLogin");
    var AppConfig_1 = require("../../AppConfig");
    var ToolUtils_1 = require("../utils/ToolUtils");
    var EventManager_1 = require("../manager/EventManager");
    var EventConfig_1 = require("../../config/EventConfig");
    var EventInfo_1 = require("../package/EventInfo");
    var ModelCenter_1 = require("../../data/ModelCenter");
    var HttpLoginProto = function(_super) {
      __extends(HttpLoginProto, _super);
      function HttpLoginProto() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HttpLoginProto.prototype.loginRequest = function(data) {
        var msg = protoLogin_1.protoLogin.LoginRequest.create();
        msg.openId = data.openId;
        msg.channel = AppConfig_1.AppConfig.channel;
        msg.appId = AppConfig_1.AppConfig.appId;
        msg.deviceId = AppConfig_1.AppConfig.deviceId;
        msg.verId = AppConfig_1.AppConfig.version;
        msg.location = "\u6682\u672a\u5b9a\u4f4d";
        return protoLogin_1.protoLogin.LoginRequest.encode(msg).finish();
      };
      HttpLoginProto.prototype.loginResponse = function(data) {
        var uint8Arr = ToolUtils_1.default.getInstance().base64ToUint8Array(data);
        var result = protoLogin_1.protoLogin.LoginResponse.decode(uint8Arr);
        cc.log("loginResponse result : ", result);
        if (1 === result.code) {
          ModelCenter_1.default.getInstance().userInfo.parseLoginData(result);
          ModelCenter_1.default.getInstance().reconnectionInfo.initInfo(result);
          EventManager_1.default.getInstance().dispatchEvent(new EventInfo_1.default(EventConfig_1.EventConfig.LOGIN_SERVER_READY));
        }
      };
      HttpLoginProto.prototype.createRoomRequest = function(data) {
        var msg = protoLogin_1.protoLogin.RoomCreateRequest.create();
        msg.appId = AppConfig_1.AppConfig.appId;
        msg.gameId = data.game_type;
        msg.userId = ModelCenter_1.default.getInstance().userInfo._uid;
        msg.deviceId = AppConfig_1.AppConfig.deviceId;
        msg.maxRounds = data.max_rounds;
        msg.coreVersion = AppConfig_1.AppConfig.coreVersion;
        msg.roomConfig = JSON.stringify(data);
        ModelCenter_1.default.getInstance().reconnectionInfo.setGameId(data.game_type);
        return protoLogin_1.protoLogin.RoomCreateRequest.encode(msg).finish();
      };
      HttpLoginProto.prototype.createRoomResponse = function(data) {
        var uint8Arr = ToolUtils_1.default.getInstance().base64ToUint8Array(data);
        var result = protoLogin_1.protoLogin.RoomCreateResponse.decode(uint8Arr);
        cc.log("createRoomResponse result : ", result);
        if (1 === result.code) {
          ModelCenter_1.default.getInstance().reconnectionInfo.setInfo(result.serverIp, result.serverPort, result.roomId, false);
          EventManager_1.default.getInstance().dispatchEvent(new EventInfo_1.default(EventConfig_1.EventConfig.HALL_DOWNLOADGAME));
        }
      };
      return HttpLoginProto;
    }(HttpBaseProto_1.default);
    exports.default = HttpLoginProto;
    cc._RF.pop();
  }, {
    "../../AppConfig": "AppConfig",
    "../../config/EventConfig": "EventConfig",
    "../../data/ModelCenter": "ModelCenter",
    "../manager/EventManager": "EventManager",
    "../package/EventInfo": "EventInfo",
    "../third/protobuf/protoLogin": "protoLogin",
    "../utils/ToolUtils": "ToolUtils",
    "./HttpBaseProto": "HttpBaseProto"
  } ],
  HttpMessageHelp: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fe82dHqnu9CTJiuPRDoIGr4", "HttpMessageHelp");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var JsonRemoteProxy_1 = require("./JsonRemoteProxy");
    var HttpLoginProto_1 = require("./HttpLoginProto");
    var HttpConfig_1 = require("../../config/HttpConfig");
    var HttpMessageHelp = function() {
      function HttpMessageHelp() {
        this._loginServerUrl = null;
        this._HTTP_TIME_OUT_MS = 2e4;
        this._webClient = null;
        this._loginProto = null;
        this._cmdProtoMap = {};
        this._serverType = {
          ST_LOGIN: "Login"
        };
        this._webClient = new JsonRemoteProxy_1.default(this._HTTP_TIME_OUT_MS);
        this._init();
      }
      HttpMessageHelp.getInstance = function() {
        this._ins || (this._ins = new HttpMessageHelp());
        return this._ins;
      };
      HttpMessageHelp.prototype.registerRequest = function(serverType, cmd, sProto, rProto) {
        serverType && cmd && sProto && rProto ? this._cmdProtoMap[cmd] = {
          _serverType: serverType,
          _sProto: sProto,
          _rProto: rProto
        } : cc.log("ERROR : register Request fail!");
      };
      HttpMessageHelp.prototype.sendMessage = function(cmd, data) {
        if (void 0 === cmd) {
          cc.log("ERROR : invaild cmd");
          return;
        }
        var reqInfo = this._cmdProtoMap[cmd];
        if (!reqInfo) {
          cc.log("ERROR : undefined http cmd = ", cmd);
          return;
        }
        var serverUrl = this.getServerUrlByType(reqInfo._serverType);
        var bytes = reqInfo._sProto(data);
        this._webClient.sendMessage(serverUrl, cmd, bytes, function(data) {
          reqInfo._rProto(data);
        });
      };
      HttpMessageHelp.prototype._init = function() {
        this._loginProto = new HttpLoginProto_1.default();
        this.registerRequest(this._serverType.ST_LOGIN, HttpConfig_1.HttpConfig.LOGIN_GAME, this._loginProto.loginRequest.bind(this._loginProto), this._loginProto.loginResponse.bind(this._loginProto));
        this.registerRequest(this._serverType.ST_LOGIN, HttpConfig_1.HttpConfig.LOGIN_CREATEROOM, this._loginProto.createRoomRequest.bind(this._loginProto), this._loginProto.createRoomResponse.bind(this._loginProto));
      };
      HttpMessageHelp.prototype.setLoginServerUrl = function(loginUrl) {
        this._loginServerUrl !== loginUrl && (this._loginServerUrl = loginUrl);
      };
      HttpMessageHelp.prototype.getServerUrlByType = function(type) {
        if (this._serverType.ST_LOGIN === type) return this._loginServerUrl;
        cc.log("ERROR : invaild server url type = ", type);
      };
      HttpMessageHelp._ins = null;
      return HttpMessageHelp;
    }();
    exports.default = HttpMessageHelp;
    cc._RF.pop();
  }, {
    "../../config/HttpConfig": "HttpConfig",
    "./HttpLoginProto": "HttpLoginProto",
    "./JsonRemoteProxy": "JsonRemoteProxy"
  } ],
  InitReg: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9e272BA4G1DsqREMglhli6K", "InitReg");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LoginEntry_1 = require("../login/LoginEntry");
    var HallEntry_1 = require("../hall/HallEntry");
    var RoomEntry_1 = require("../room/RoomEntry");
    var InitReg = function() {
      function InitReg() {}
      InitReg.getInstance = function() {
        this._ins || (this._ins = new InitReg());
        return this._ins;
      };
      InitReg.prototype.init = function() {
        LoginEntry_1.default.getInstance().init();
        HallEntry_1.default.getInstance().init();
        RoomEntry_1.default.getInstance().init();
      };
      InitReg._ins = null;
      return InitReg;
    }();
    exports.default = InitReg;
    cc._RF.pop();
  }, {
    "../hall/HallEntry": "HallEntry",
    "../login/LoginEntry": "LoginEntry",
    "../room/RoomEntry": "RoomEntry"
  } ],
  JsonRemoteProxy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7f21EiGZVCYLLSqxAKeL1F", "JsonRemoteProxy");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HttpConfig_1 = require("../../config/HttpConfig");
    var NativeManager_1 = require("../manager/NativeManager");
    var ViewManager_1 = require("../manager/ViewManager");
    var LoadingManager_1 = require("../manager/LoadingManager");
    var TipsConfig_1 = require("../../config/TipsConfig");
    var ViewConfig_1 = require("../../config/ViewConfig");
    var JsonRemoteProxy = function() {
      function JsonRemoteProxy(timeOut) {
        this._msgId = null;
        this._reqHttpList = [];
        this._isReqHttpIng = null;
        this._showLoading = null;
        this._timeOutInterval = null;
        this._timeOutNum = null;
        this._timeOutNum = timeOut || 1e4;
      }
      JsonRemoteProxy.prototype.setTimeOutNum = function(ms) {
        this._timeOutNum = ms;
      };
      JsonRemoteProxy.prototype.sendMessage = function(serverUrl, msgId, reqData, cbHandler, hideLoading) {
        hideLoading = hideLoading || false;
        msgId === HttpConfig_1.HttpConfig.HEART_BEAT_LABBY || NativeManager_1.default.getInstance().isNetWorkAvailable() || ViewManager_1.default.getInstance().showView(ViewConfig_1.ViewConfig.MESSAGE, {
          data: TipsConfig_1.TipsConfig.common_sys_tips_002
        });
        hideLoading || this.showHttpLoadingView();
        this._sendHttpMessage(serverUrl, reqData, msgId, cbHandler);
      };
      JsonRemoteProxy.prototype._sendHttpMessage = function(serverUrl, data, msgId, cbHandler) {
        var _this = this;
        if (this._isReqHttpIng) {
          if (msgId === HttpConfig_1.HttpConfig.HEART_BEAT_LABBY) return;
          this._reqHttpList.push({
            url: serverUrl,
            data: data,
            msgId: msgId,
            cbHandler: cbHandler
          });
          return;
        }
        this._msgId = msgId;
        msgId !== HttpConfig_1.HttpConfig.HEART_BEAT_LABBY && (this._isReqHttpIng = true);
        var url = this._checkUrl(serverUrl) + msgId;
        cc.log("Send Http Req = ", url);
        var req = new XMLHttpRequest();
        req.open("POST", url, true);
        req.onreadystatechange = function() {
          if (4 === req.readyState && req.status >= 200 && req.status < 400) {
            msgId !== HttpConfig_1.HttpConfig.HEART_BEAT_LABBY && _this.hideHttpLoadingView();
            _this._endReqTimeOut();
            _this._isReqHttpIng = false;
            if (0 < _this._reqHttpList.length) {
              var reqData = _this._reqHttpList[0];
              _this._reqHttpList.shift();
              _this._sendHttpMessage(reqData.url, reqData.data, reqData.msgId, reqData.cbHandler);
            }
            cbHandler && cbHandler(req.responseText);
          }
        };
        msgId !== HttpConfig_1.HttpConfig.HEART_BEAT_LABBY && this._startReqTimeOut();
        req.send(data);
      };
      JsonRemoteProxy.prototype._checkUrl = function(serverUrl) {
        return "/" === serverUrl[serverUrl.length - 1] ? serverUrl : serverUrl + "/";
      };
      JsonRemoteProxy.prototype._startReqTimeOut = function() {
        var _this = this;
        if (null !== this._timeOutInterval) return;
        this._timeOutInterval = setTimeout(function() {
          if (null !== _this._timeOutInterval) {
            _this.hideHttpLoadingView();
            _this._isReqHttpIng = false;
            _this._endReqTimeOut();
            0 < _this._reqHttpList.length && _this._reqHttpList.shift();
            _this._showTimeOutMessage();
          }
        }, this._timeOutNum);
      };
      JsonRemoteProxy.prototype._endReqTimeOut = function() {
        clearTimeout(this._timeOutInterval);
        this._timeOutInterval = null;
      };
      JsonRemoteProxy.prototype._showTimeOutMessage = function() {
        ViewManager_1.default.getInstance().showView(ViewConfig_1.ViewConfig.MESSAGE, {
          data: TipsConfig_1.TipsConfig.common_sys_tips_001
        });
      };
      JsonRemoteProxy.prototype.showHttpLoadingView = function() {
        LoadingManager_1.default.getInstance().showLoadingView();
      };
      JsonRemoteProxy.prototype.hideHttpLoadingView = function() {
        LoadingManager_1.default.getInstance().hideLoadingView();
      };
      return JsonRemoteProxy;
    }();
    exports.default = JsonRemoteProxy;
    cc._RF.pop();
  }, {
    "../../config/HttpConfig": "HttpConfig",
    "../../config/TipsConfig": "TipsConfig",
    "../../config/ViewConfig": "ViewConfig",
    "../manager/LoadingManager": "LoadingManager",
    "../manager/NativeManager": "NativeManager",
    "../manager/ViewManager": "ViewManager"
  } ],
  LSCmdDelayManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b89950+Ne5Oa7uxn9XzB3AG", "LSCmdDelayManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LSCmdDelayManager = function() {
      function LSCmdDelayManager() {
        this._cmdDataMap = [];
        this._cmdDelayMap = [];
        this._callback = null;
        this._cmdTimeId = null;
        this._isStopCmd = false;
        this._timerId = null;
        this._delayIng = false;
        this._clearTimer();
        this._delayIng = false;
        this._isStopCmd = false;
      }
      LSCmdDelayManager.getInstance = function() {
        this._ins || (this._ins = new LSCmdDelayManager());
        return this._ins;
      };
      LSCmdDelayManager.prototype.registerCmdCallback = function(callback) {
        this._callback = callback;
      };
      LSCmdDelayManager.prototype.addCmd = function(cmd, data) {
        cc.log("[LSCmdDelayManager] cmd : 0x", cmd.toString(16));
        this._cmdDataMap.push({
          cmd: cmd,
          data: data
        });
        if (this._delayIng || this._isStopCmd) return;
        this._cmdDataMap.length > 0 && this._playCmd();
      };
      LSCmdDelayManager.prototype.addTimeToDelayMap = function(cmd, time) {
        this._cmdDelayMap[cmd] = time;
      };
      LSCmdDelayManager.prototype.clean = function() {
        this._callback = null;
        this._cmdDataMap = [];
      };
      LSCmdDelayManager.prototype._nextCmd = function() {
        this._clearTimer();
        this._delayIng = false;
        if (0 < this._cmdDataMap.length) {
          var temp = this._cmdDataMap[0];
          this._cmdDataMap.shift();
          if (this._callback) {
            cc.log("LSCmdDelayManager excute cmd = ", temp.cmd.toString(16));
            this._callback(temp.cmd, temp.data);
          }
          cc.log("[LSCmdDelayManager] play cmd ", temp.cmd.toString(16), " cmd queue length " + this._cmdDataMap.length);
          this._playCmd();
        }
      };
      LSCmdDelayManager.prototype._playCmd = function() {
        if (this._cmdDataMap.length <= 0) return;
        this._delayIng = true;
        var temp = this._cmdDataMap[0];
        var time = this._getCmdDelayTime(temp.cmd);
        if (time) {
          this._timerId = setTimeout(this._nextCmd.bind(this), 1e3 * time);
          cc.log("[LSCmdDelayManager] cmd : 0x", temp.cmd.toString(16), " delay : ", 1e3 * time);
        } else this._nextCmd();
      };
      LSCmdDelayManager.prototype._getCmdDelayTime = function(cmd) {
        var reTimes = this._cmdDelayMap[cmd];
        return reTimes;
      };
      LSCmdDelayManager.prototype._clearTimer = function() {
        if (null != this._timerId) {
          clearTimeout(this._timerId);
          this._timerId = null;
        }
      };
      LSCmdDelayManager.prototype._setStop = function(stop) {
        this._isStopCmd = stop;
      };
      LSCmdDelayManager.prototype.pauseCmd = function() {
        cc.log("pause LSCmdDelayManager");
        this._isStopCmd = true;
        this._clearTimer();
      };
      LSCmdDelayManager.prototype.resumeCmd = function() {
        cc.log("resume LSCmdDelayManager");
        this._isStopCmd = false;
        this._setStop(false);
        0 < this._cmdDataMap.length && this._playCmd();
      };
      LSCmdDelayManager.prototype.clearDelayCmd = function() {
        cc.log("[LSCmdDelayManager] clear delay cmd");
        this._clearTimer();
        this._delayIng = false;
        this._isStopCmd = false;
        this._setStop(false);
        this._cmdDataMap = [];
      };
      return LSCmdDelayManager;
    }();
    exports.default = LSCmdDelayManager;
    cc._RF.pop();
  }, {} ],
  LSCommand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd9fdR7+2pC3pD+6xewl3OP", "LSCommand");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LSCommand = void 0;
    var LSCommand = {
      LSC_LOGIN: 1
    };
    exports.LSCommand = LSCommand;
    cc._RF.pop();
  }, {} ],
  LSListener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ffb2dn14ahM3LsN3OKuR9J+", "LSListener");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LSCmdDelayManager_1 = require("../core/net/LSCmdDelayManager");
    var LSManager_1 = require("../core/net/LSManager");
    var LSListener = function() {
      function LSListener() {
        this._saveCmdEventFuncMap = {};
        this._saveCmdEventFuncMap = {};
        this.init();
        LSCmdDelayManager_1.default.getInstance().registerCmdCallback(this._onDelayCmdCallBack.bind(this));
        LSManager_1.default.getInstance().dispatchCacheEvent();
      }
      LSListener.prototype._onDelayCmdCallBack = function(cmd, data) {
        this._saveCmdEventFuncMap[cmd] && this._saveCmdEventFuncMap[cmd](data);
      };
      LSListener.prototype.bindMethodToCmd = function(cmd, func, delay) {
        LSCmdDelayManager_1.default.getInstance().addTimeToDelayMap(cmd, delay);
        this._saveCmdEventFuncMap[cmd] = func.bind(this);
      };
      LSListener.prototype.init = function() {};
      return LSListener;
    }();
    exports.default = LSListener;
    cc._RF.pop();
  }, {
    "../core/net/LSCmdDelayManager": "LSCmdDelayManager",
    "../core/net/LSManager": "LSManager"
  } ],
  LSManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15ff7wB/sJKVq322JqWImE4", "LSManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketBase_1 = require("./base/SocketBase");
    var DataParser_1 = require("../utils/DataParser");
    var StringUtils_1 = require("../utils/StringUtils");
    var AppConfig_1 = require("../../AppConfig");
    var WsSocket_1 = require("./base/WsSocket");
    var LSCmdDelayManager_1 = require("./LSCmdDelayManager");
    var LoadingManager_1 = require("../manager/LoadingManager");
    var LSProcesser_1 = require("../../lib/LSProcesser");
    var LSReader_1 = require("../../lib/LSReader");
    var LSWriter_1 = require("../../lib/LSWriter");
    var LSListener_1 = require("../../lib/LSListener");
    var NativeManager_1 = require("../manager/NativeManager");
    var LSManager = function(_super) {
      __extends(LSManager, _super);
      function LSManager() {
        var _this = _super.call(this) || this;
        _this.connectFlag = 0;
        _this._socket = null;
        _this._heartBeatTimeOutTimer = null;
        _this._heartBeatTimeOut = 1e4;
        _this._heartBeatInterval = 1e4;
        _this._currentBeatInterval = 1e4;
        _this._dataParser = null;
        _this.canHeartbeat = true;
        _this._heartBeat = 0;
        _this._connectType = "LS";
        _this._listener = null;
        _this._ip = null;
        _this._port = null;
        _this._dataParser = new DataParser_1.default(_this.onParseMsg);
        _this.canHeartbeat = true;
        _this._heartBeat = 0;
        _this._heartBeatTimeOut = 1e4;
        _this._currentBeatInterval = _this._heartBeatTimeOut;
        return _this;
      }
      LSManager.getInstance = function() {
        this._ins || (this._ins = new LSManager());
        return this._ins;
      };
      LSManager.prototype.connectLoginSocket = function() {
        var lsProcesser = new LSProcesser_1.default();
        var lsReader = new LSReader_1.default();
        var lsWriter = new LSWriter_1.default();
        this.addSocketProcesser(lsProcesser);
        this.addSocketReader(lsReader);
        this.addSocketWriter(lsWriter);
        this._listener = new LSListener_1.default();
        this.startConnectLoginSocket();
      };
      LSManager.prototype.startConnectLoginSocket = function() {
        this.connect(AppConfig_1.AppConfig.loginServerIP, AppConfig_1.AppConfig.loginServerPort);
      };
      LSManager.prototype.closeLoginSocket = function() {
        this.close();
        this.clearCacheEvent();
        LSCmdDelayManager_1.default.getInstance().clearDelayCmd();
        LoadingManager_1.default.getInstance().clearLoadingView();
      };
      LSManager.prototype.addSocketProcesser = function(socketProcesser) {
        this._commonProcesser = socketProcesser;
      };
      LSManager.prototype.addSocketReader = function(socketReader) {
        this._commonReader = socketReader;
      };
      LSManager.prototype.addSocketWriter = function(socketWriter) {
        this._commonWriter = socketWriter;
      };
      LSManager.prototype.dispatchCacheEvent = function() {
        this._commonProcesser.dispatchCacheEvent();
      };
      LSManager.prototype.cacheEvent = function() {
        this._commonProcesser.cacheEvent();
      };
      LSManager.prototype.clearCacheEvent = function() {
        this._commonProcesser.clearCacheEvent();
      };
      LSManager.prototype.isConnect = function() {
        if (this._socket) return this._socket.isConnect();
        return false;
      };
      LSManager.prototype.sendMsg = function(cmd, info) {
        this.isConnect() && _super.prototype.sendMsg.call(this, cmd, info);
      };
      LSManager.prototype.onParseMsg = function(pack) {
        var info = this.readPacket(pack);
        var cmd = info.cmd;
        this.receivePacket(cmd, info);
      };
      LSManager.prototype.onClose = function(evt) {
        cc.log("[LSManager] socket close by server");
        this._stopHeartbeat();
        this._clearLoading();
        clearInterval(this._heartBeatTimeOutTimer);
        setTimeout(function() {
          cc.log("\u662f\u5426\u70b9\u51fb\u91cd\u8fde");
        }, 200);
      };
      LSManager.prototype.onError = function(evt) {
        cc.log("[LSManager] socket connect error");
        this._stopHeartbeat();
        this._clearLoading();
        clearInterval(this._heartBeatTimeOutTimer);
        var mark = NativeManager_1.default.getInstance().isNetWorkAvailable();
        mark ? cc.log("\u60a8\u5f53\u524d\u7f51\u7edc\u4e0d\u7a33\u5b9a,\u8bf7\u91cd\u8fde") : cc.log("\u60a8\u5f53\u524d\u7f51\u7edc\u73af\u5883\u4e0d\u7a33\u5b9a,\u8bf7\u68c0\u67e5\u7f51\u7edc\u662f\u5426\u6253\u5f00");
      };
      LSManager.prototype.onMessage = function(evt) {
        this._dataParser(evt.data);
      };
      LSManager.prototype.onOpen = function(evt) {
        this._stopHeartbeat();
        this.canHeartbeat = true;
        this._hidePreloading();
        clearInterval(this._heartBeatTimeOutTimer);
        cc.log("[LSManager] socket connect success");
        cc.log("\u53ef\u4ee5\u53d1\u9001\u534f\u8bae\u4e86");
      };
      LSManager.prototype.connect = function(ip, port) {
        this._ip = ip;
        this._port = port;
        this._sendSeq = 0;
        this._reciveSeq = 0;
        this.connectFlag += 1;
        cc.log("[LSManager] connect : ", this.getSocketUrl());
        this._socket = new WsSocket_1.default(this, true, this.connectFlag, this._connectType);
        this._socket.connect(this.getSocketUrl());
      };
      LSManager.prototype.reconnect = function() {
        var connectUrl = this.getSocketUrl;
        this._stopHeartbeat();
        if (connectUrl) {
          cc.log("[LSManager] start reconnect");
          this.close();
          this.connect(this._ip, this._port);
        }
      };
      LSManager.prototype.close = function() {
        cc.log("[LSManager] socket close by client");
        if (this._socket) {
          clearInterval(this._heartBeatTimeOutTimer);
          this._stopHeartbeat();
          this.connectFlag += 1;
          this._socket.close();
          this._socket = null;
        }
      };
      LSManager.prototype.errorClose = function() {
        var _this = this;
        this.close();
        setTimeout(function() {
          _this.reconnect();
        }, 200);
      };
      LSManager.prototype.getSocketUrl = function() {
        return this._ip && this._port ? StringUtils_1.default.getInstance().substitute(AppConfig_1.AppConfig.wwsValue + "://{0}:{1}/ws", [ this._ip, this._port ]) : null;
      };
      LSManager.prototype._hidePreloading = function() {};
      LSManager.prototype._showLoading = function() {};
      LSManager.prototype._clearLoading = function() {};
      LSManager.prototype._startHeartbeat = function() {
        if (this.canHeartbeat) {
          this._sendHeartbeat();
          this._heartBeat = setTimeout(this._startHeartbeat.bind(this), this._currentBeatInterval);
        }
      };
      LSManager.prototype._sendHeartbeat = function() {
        if (this.canHeartbeat) {
          cc.log("[LSManager] send heart beat");
          this._heartBeatTimeOutTimer = setTimeout(this.heartBeatTimeout.bind(this), this._heartBeatTimeOut);
          this.sendMsg(this._commonProcesser._command.HEARTBEAT, {});
        }
      };
      LSManager.prototype._stopHeartbeat = function() {
        this.canHeartbeat = false;
        if (this._heartBeat) {
          clearInterval(this._heartBeat);
          this._heartBeat = 0;
        }
      };
      LSManager.prototype.heartBeatTimeout = function() {
        cc.log("[LSManager] heart beat time out");
        this.errorClose();
      };
      LSManager.prototype.onHeartBeatResponse = function(data) {
        cc.log("[LSManager] heart response");
        clearInterval(this._heartBeatTimeOutTimer);
      };
      LSManager._ins = null;
      return LSManager;
    }(SocketBase_1.default);
    exports.default = LSManager;
    cc._RF.pop();
  }, {
    "../../AppConfig": "AppConfig",
    "../../lib/LSListener": "LSListener",
    "../../lib/LSProcesser": "LSProcesser",
    "../../lib/LSReader": "LSReader",
    "../../lib/LSWriter": "LSWriter",
    "../manager/LoadingManager": "LoadingManager",
    "../manager/NativeManager": "NativeManager",
    "../utils/DataParser": "DataParser",
    "../utils/StringUtils": "StringUtils",
    "./LSCmdDelayManager": "LSCmdDelayManager",
    "./base/SocketBase": "SocketBase",
    "./base/WsSocket": "WsSocket"
  } ],
  LSProcesser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cdca8QTN21Kt43Y4AONmyUj", "LSProcesser");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseSocketProcesser_1 = require("../core/net/base/BaseSocketProcesser");
    var LSCmdDelayManager_1 = require("../core/net/LSCmdDelayManager");
    var LSProcesser = function(_super) {
      __extends(LSProcesser, _super);
      function LSProcesser() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LSProcesser.prototype.initFuncMap = function() {
        this.initCmdDelayManager(LSCmdDelayManager_1.default.getInstance());
      };
      return LSProcesser;
    }(BaseSocketProcesser_1.default);
    exports.default = LSProcesser;
    cc._RF.pop();
  }, {
    "../core/net/LSCmdDelayManager": "LSCmdDelayManager",
    "../core/net/base/BaseSocketProcesser": "BaseSocketProcesser"
  } ],
  LSReader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d95aqwKs1G36NcehixaR5Q", "LSReader");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseSocketReader_1 = require("../core/net/base/BaseSocketReader");
    var LSReader = function(_super) {
      __extends(LSReader, _super);
      function LSReader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return LSReader;
    }(BaseSocketReader_1.default);
    exports.default = LSReader;
    cc._RF.pop();
  }, {
    "../core/net/base/BaseSocketReader": "BaseSocketReader"
  } ],
  LSWriter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0eb67zp/tLJq/DBhsiFbS3", "LSWriter");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseSocketWriter_1 = require("../core/net/base/BaseSocketWriter");
    var LSWriter = function(_super) {
      __extends(LSWriter, _super);
      function LSWriter() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return LSWriter;
    }(BaseSocketWriter_1.default);
    exports.default = LSWriter;
    cc._RF.pop();
  }, {
    "../core/net/base/BaseSocketWriter": "BaseSocketWriter"
  } ],
  ListItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0539cdZca5IVLHWR/AQ9GkB", "ListItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ListItem = function(_super) {
      __extends(ListItem, _super);
      function ListItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.labelIdx = null;
        return _this;
      }
      ListItem.prototype.onShow = function(info, index, remove) {
        this._index = index;
        this._remove = remove;
        this.labelIdx.string = info.message;
      };
      ListItem.prototype.onClick = function() {
        cc.log("\u70b9\u51fb");
      };
      ListItem.prototype.onRemove = function() {};
      __decorate([ property(cc.Label) ], ListItem.prototype, "labelIdx", void 0);
      ListItem = __decorate([ ccclass ], ListItem);
      return ListItem;
    }(cc.Component);
    exports.default = ListItem;
    cc._RF.pop();
  }, {} ],
  ListView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f6397281HdBSqYywJpsXmQ8", "ListView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewBase_1 = require("../../core/external/ViewBase");
    var UISuperLayout_1 = require("../../core/external/listView/UISuperLayout");
    var ListItem_1 = require("./ListItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ListView = function(_super) {
      __extends(ListView, _super);
      function ListView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this._total = 50;
        _this._datas = [];
        return _this;
      }
      ListView.prototype.start = function() {
        for (var i = 0; i < this._total; i++) this._datas.push({
          message: i.toString()
        });
        this.layout.total(this._datas.length);
      };
      ListView.prototype.onRefreshEvent = function(node, index) {
        var info = this._datas[index];
        node.getComponent(ListItem_1.default).onShow(info, index, this.onRemove.bind(this));
      };
      ListView.prototype.onRemove = function(index) {
        this._datas.splice(index, 1);
        this.layout.total(this._datas.length);
      };
      ListView.prototype.onScrollEvent = function(node) {};
      __decorate([ property(UISuperLayout_1.default) ], ListView.prototype, "layout", void 0);
      ListView = __decorate([ ccclass ], ListView);
      return ListView;
    }(ViewBase_1.default);
    exports.default = ListView;
    cc._RF.pop();
  }, {
    "../../core/external/ViewBase": "ViewBase",
    "../../core/external/listView/UISuperLayout": "UISuperLayout",
    "./ListItem": "ListItem"
  } ],
  Listener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f066cijLgdOv6VqhUtVpr1O", "Listener");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Listener = function() {
      function Listener(_target, _priority) {
        this._target = _target;
        this._priority = _priority;
      }
      Listener.prototype.getTarget = function() {
        return this._target;
      };
      Listener.prototype.getPriority = function() {
        return this._priority;
      };
      return Listener;
    }();
    exports.default = Listener;
    cc._RF.pop();
  }, {} ],
  LoadingManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a0dahin9xK2ZkRx+zR+unA", "LoadingManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResConfig_1 = require("../../config/ResConfig");
    var BundleManager_1 = require("./BundleManager");
    var LogManager_1 = require("./LogManager");
    var LoadingManager = function() {
      function LoadingManager() {
        this._loadingView = null;
        this._timeOut = 20;
        this._timer = null;
        this._loadingCount = 0;
        this._logUtil = LogManager_1.default.getInstance();
        this._bundleRes = BundleManager_1.default.getInstance();
      }
      LoadingManager.getInstance = function() {
        this._ins || (this._ins = new LoadingManager());
        return this._ins;
      };
      LoadingManager.prototype.showLoadingView = function() {
        var _this = this;
        if (!this._loadingView) {
          this._loadingView = cc.instantiate(this._bundleRes.getCacheRes(ResConfig_1.BdnmConfig.body, "bd_loadingview"));
          var anim = this._loadingView.getComponent(cc.Animation);
          var animState = anim.play("loading");
          animState.wrapMode = cc.WrapMode.Loop;
          cc.director.getScene().addChild(this._loadingView, 2);
          this._timer = setTimeout(function() {
            _this.clearLoadingView();
          }, 1e3 * this._timeOut);
        }
        this._loadingCount += 1;
        cc.log("LoadingView count ++ " + this._loadingCount);
      };
      LoadingManager.prototype.hideLoadingView = function() {
        if (this._loadingView) {
          this._loadingCount--;
          if (this._loadingCount <= 0) {
            this._loadingView.destroy();
            this._loadingView = null;
            null !== this._timer && clearTimeout(this._timer);
            this._timer = null;
          }
          cc.log("LoadingView count -- " + this._loadingCount);
        }
      };
      LoadingManager.prototype.clearLoadingView = function() {
        if (this._loadingView) {
          this._loadingCount = 0;
          this._loadingView.destroy();
          this._loadingView = null;
          null !== this._timer && clearTimeout(this._timer);
          this._timer = null;
        }
      };
      LoadingManager._ins = null;
      return LoadingManager;
    }();
    exports.default = LoadingManager;
    cc._RF.pop();
  }, {
    "../../config/ResConfig": "ResConfig",
    "./BundleManager": "BundleManager",
    "./LogManager": "LogManager"
  } ],
  LogManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "407b1pE+5BOJaw67MVcy2/W", "LogManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LogManager = function() {
      function LogManager() {}
      LogManager_1 = LogManager;
      LogManager.getInstance = function() {
        this._ins || (this._ins = new LogManager_1());
        return this._ins;
      };
      LogManager.prototype.log = function(obj) {
        console.log(obj);
      };
      var LogManager_1;
      LogManager._ins = null;
      LogManager = LogManager_1 = __decorate([ ccclass ], LogManager);
      return LogManager;
    }();
    exports.default = LogManager;
    cc._RF.pop();
  }, {} ],
  LoginEntry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e74aa+oBThAz4iMfWxqFozA", "LoginEntry");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneManager_1 = require("../core/manager/SceneManager");
    var SceneConfig_1 = require("../config/SceneConfig");
    var SceneInfo_1 = require("../core/package/SceneInfo");
    var ViewManager_1 = require("../core/manager/ViewManager");
    var ViewConfig_1 = require("../config/ViewConfig");
    var ViewInfo_1 = require("../core/package/ViewInfo");
    var ResConfig_1 = require("../config/ResConfig");
    var EntryBase_1 = require("../core/external/EntryBase");
    var LoginEntry = function(_super) {
      __extends(LoginEntry, _super);
      function LoginEntry() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LoginEntry.getInstance = function() {
        this._ins || (this._ins = new LoginEntry());
        return this._ins;
      };
      LoginEntry.prototype.init = function() {
        SceneManager_1.default.getInstance().registerCreator(SceneConfig_1.SceneConfig.LOGIN, new SceneInfo_1.default("LoginScene", ResConfig_1.ResScene.LOGINSCENE));
        ViewManager_1.default.getInstance().registerCreator(ViewConfig_1.ViewConfig.MESSAGE, new ViewInfo_1.default("MessageView", this.bodyBundleRes["bd_messageview"]));
        ViewManager_1.default.getInstance().registerCreator(ViewConfig_1.ViewConfig.LOGINVIEW, new ViewInfo_1.default("LoginView", this.bodyBundleRes["bd_loginview"]));
      };
      LoginEntry._ins = null;
      return LoginEntry;
    }(EntryBase_1.default);
    exports.default = LoginEntry;
    cc._RF.pop();
  }, {
    "../config/ResConfig": "ResConfig",
    "../config/SceneConfig": "SceneConfig",
    "../config/ViewConfig": "ViewConfig",
    "../core/external/EntryBase": "EntryBase",
    "../core/manager/SceneManager": "SceneManager",
    "../core/manager/ViewManager": "ViewManager",
    "../core/package/SceneInfo": "SceneInfo",
    "../core/package/ViewInfo": "ViewInfo"
  } ],
  LoginScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "739598InZNM7rFc/GIysgi8", "LoginScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../core/manager/ViewManager");
    var ViewConfig_1 = require("../config/ViewConfig");
    var SceneBase_1 = require("../core/external/SceneBase");
    var ToolUtils_1 = require("../core/utils/ToolUtils");
    var AppConfig_1 = require("../AppConfig");
    var HttpMessageHelp_1 = require("../core/http/HttpMessageHelp");
    var ResConfig_1 = require("../config/ResConfig");
    var SceneManager_1 = require("../core/manager/SceneManager");
    var SceneConfig_1 = require("../config/SceneConfig");
    var InitReg_1 = require("./InitReg");
    var LogManager_1 = require("../core/manager/LogManager");
    var BundleManager_1 = require("../core/manager/BundleManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoginScene = function(_super) {
      __extends(LoginScene, _super);
      function LoginScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._fileProgressTx = null;
        _this._loginBtn = null;
        _this._curLoadCount = 0;
        return _this;
      }
      LoginScene.prototype.start = function() {
        SceneManager_1.default.getInstance().setCurSceneType(SceneConfig_1.SceneConfig.LOGIN);
        this._loginBtn = ToolUtils_1.default.getInstance().getNodeByName(this.node, "loginBtn");
        this._loginBtn.on("click", this.loginBtnCallback, this);
        this._loginBtn.active = false;
        this._fileProgressTx = ToolUtils_1.default.getInstance().getNodeByName(this.node, "loadRes");
        this._fileProgressTx.getComponent(cc.Label).string = "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90(\u6b64\u8fc7\u7a0b\u4e0d\u6d88\u8017\u6d41\u91cf)";
        1 === AppConfig_1.AppConfig.platform ? this.getBundleRes() : 2 === AppConfig_1.AppConfig.platform && this.getLoginServerConfig();
      };
      LoginScene.prototype.loginBtnCallback = function(sender) {
        ViewManager_1.default.getInstance().showView(ViewConfig_1.ViewConfig.LOGINVIEW);
      };
      LoginScene.prototype.getLoginServerConfig = function() {
        var _this = this;
        this.toolUtils.sendHttpRequest("GET", AppConfig_1.AppConfig.loginConfigUrl, function(req) {
          _this.logUtil.log("getLoginServerConfig req.responseText : " + req.responseText);
          var json = JSON.parse(req.responseText);
          var g_server = json[AppConfig_1.AppConfig.appName];
          _this.logUtil.log(g_server);
          if (g_server) {
            if (AppConfig_1.AppConfig.EvnType === AppConfig_1.AppConfig.EvnEnum.publish) {
              AppConfig_1.AppConfig.webServerUrl = g_server.webUrl;
              AppConfig_1.AppConfig.loginServerIP = g_server.loginIp;
              AppConfig_1.AppConfig.loginServerPort = g_server.loginPort;
              AppConfig_1.AppConfig.bundleUrl = g_server.bundleUrl;
              AppConfig_1.AppConfig.whitePlayerList = g_server.whitePlayerList;
            }
            _this.getBundleRes();
          }
        });
      };
      LoginScene.prototype.getBundleRes = function() {
        var resSumArr = [];
        for (var index = 0; index < ResConfig_1.BdResConfig.length; index++) resSumArr.push(ResConfig_1.BdResConfig[index]);
        LogManager_1.default.getInstance().log("\u8d44\u6e90\u957f\u5ea6 : " + resSumArr.length);
        this._fileProgressTx.getComponent(cc.Label).string = "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90(\u6b64\u8fc7\u7a0b\u4e0d\u6d88\u8017\u6d41\u91cf):" + this._curLoadCount + "/" + resSumArr.length;
        1 === AppConfig_1.AppConfig.platform ? this.loadAppBundle(resSumArr, AppConfig_1.AppConfig.bundleUrl + "appgame/remote/" + ResConfig_1.BdnmAppConfig.body.path + "/" + ResConfig_1.BdnmAppConfig.body.version + "/" + ResConfig_1.BdnmAppConfig.body.path) : 2 === AppConfig_1.AppConfig.platform && this.loadMinGameBundle(resSumArr, AppConfig_1.AppConfig.bundleUrl + "mingame/" + ResConfig_1.BdnmMinGameConfig.body.path + "/" + ResConfig_1.BdnmMinGameConfig.body.version + "/" + ResConfig_1.BdnmAppConfig.body.path);
      };
      LoginScene.prototype.loadMinGameBundle = function(arr, url) {
        LogManager_1.default.getInstance().log("\u5f53\u524d\u8fdc\u7a0b\u8d44\u6e90\u5730\u5740 : " + url);
        this.loadBundle(arr, url);
      };
      LoginScene.prototype.loadBundle = function(arr, url) {
        var _this = this;
        cc.assetManager.loadBundle(url, {
          onFileProgress: function(resData) {
            _this.logUtil.log("onFileProgress : " + resData);
          }
        }, function(err, bundle) {
          if (err) return console.log("[LoginScene] load bundle res faild.");
          console.log("[LoginScene] load bundle res success.");
          BundleManager_1.default.getInstance().saveBundleByName(bundle, ResConfig_1.BdnmConfig.body);
          BundleManager_1.default.getInstance().cacheBundleResources(ResConfig_1.BdnmConfig.body, arr, function() {
            _this._curLoadCount += 1;
            LogManager_1.default.getInstance().log("this._curLoadCount : " + _this._curLoadCount);
            _this._fileProgressTx.getComponent(cc.Label).string = "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90(\u6b64\u8fc7\u7a0b\u4e0d\u6d88\u8017\u6d41\u91cf):" + _this._curLoadCount + "/" + arr.length;
            if (_this._curLoadCount === arr.length) {
              LogManager_1.default.getInstance().log("Bundle\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6210");
              _this.initLoginScene();
            }
          });
        });
      };
      LoginScene.prototype.loadAppBundle = function(arr, url) {
        var _this = this;
        cc.assetManager.loadBundle(url, {
          onFileProgress: function(resData) {
            _this.logUtil.log("onFileProgress : " + resData);
          }
        }, function(err, bundle) {
          if (err) return console.log("[LoginScene] load bundle res faild.");
          console.log("[LoginScene] load bundle res success.");
          BundleManager_1.default.getInstance().saveBundleByName(bundle, ResConfig_1.BdnmConfig.body);
          BundleManager_1.default.getInstance().cacheBundleResources(ResConfig_1.BdnmConfig.body, arr, function() {
            _this._curLoadCount += 1;
            LogManager_1.default.getInstance().log("this._curLoadCount : " + _this._curLoadCount);
            _this._fileProgressTx.getComponent(cc.Label).string = "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90(\u6b64\u8fc7\u7a0b\u4e0d\u6d88\u8017\u6d41\u91cf):" + _this._curLoadCount + "/" + arr.length;
            if (_this._curLoadCount === arr.length) {
              LogManager_1.default.getInstance().log("Bundle\u8d44\u6e90\u52a0\u8f7d\u5b8c\u6210,\u68c0\u6d4b\u662f\u5426\u9700\u8981\u91cd\u542f\u66f4\u65b0");
              _this.toolUtils.sendHttpRequest("GET", AppConfig_1.AppConfig.loginConfigUrl, function(req) {
                _this.logUtil.log("loadAppBundle req.responseText : " + req.responseText);
                var json = JSON.parse(req.responseText);
                json = json[AppConfig_1.AppConfig.appName];
                if (json.scriptVersion !== AppConfig_1.AppConfig.version) if (json.whiteUpSwitch) {
                  var aid = cc.sys.localStorage.getItem("userAid");
                  _this.logUtil.log("aid : " + aid);
                  if (aid && "string" === typeof aid) {
                    var isNotPlayer = false;
                    for (var index = 0; index < AppConfig_1.AppConfig.whitePlayerList.length; index++) {
                      var id = AppConfig_1.AppConfig.whitePlayerList[index];
                      if (id === Number(aid)) {
                        isNotPlayer = true;
                        break;
                      }
                    }
                    isNotPlayer ? _this.reset() : _this.initLoginScene();
                  } else _this.reset();
                } else _this.reset(); else _this.initLoginScene();
              });
            }
          });
        });
      };
      LoginScene.prototype.initLoginScene = function() {
        InitReg_1.default.getInstance().init();
        HttpMessageHelp_1.default.getInstance().setLoginServerUrl(AppConfig_1.AppConfig.webServerUrl);
        this._loginBtn.active = true;
        this._fileProgressTx.active = false;
      };
      LoginScene.prototype.reset = function() {
        var _this = this;
        this.viewManager.showView(ViewConfig_1.ViewConfig.MESSAGE, {
          content: "\u68c0\u6d4b\u5230\u6709\u65b0\u7248\u672c\u66f4\u65b0",
          continueCallBack: function() {
            _this.logUtil.log("\u91cd\u542f\u66f4\u65b0");
            cc.game.restart();
          }
        });
      };
      LoginScene = __decorate([ ccclass ], LoginScene);
      return LoginScene;
    }(SceneBase_1.default);
    exports.default = LoginScene;
    cc._RF.pop();
  }, {
    "../AppConfig": "AppConfig",
    "../config/ResConfig": "ResConfig",
    "../config/SceneConfig": "SceneConfig",
    "../config/ViewConfig": "ViewConfig",
    "../core/external/SceneBase": "SceneBase",
    "../core/http/HttpMessageHelp": "HttpMessageHelp",
    "../core/manager/BundleManager": "BundleManager",
    "../core/manager/LogManager": "LogManager",
    "../core/manager/SceneManager": "SceneManager",
    "../core/manager/ViewManager": "ViewManager",
    "../core/utils/ToolUtils": "ToolUtils",
    "./InitReg": "InitReg"
  } ],
  LoginView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f8a8RFyIJNvKKqbhvomLXG", "LoginView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewBase_1 = require("../core/external/ViewBase");
    var ToolUtils_1 = require("../core/utils/ToolUtils");
    var EventConfig_1 = require("../config/EventConfig");
    var HttpMessageHelp_1 = require("../core/http/HttpMessageHelp");
    var HttpConfig_1 = require("../config/HttpConfig");
    var SceneManager_1 = require("../core/manager/SceneManager");
    var SceneConfig_1 = require("../config/SceneConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoginView = function(_super) {
      __extends(LoginView, _super);
      function LoginView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._loginEditBox = null;
        _this._accountNumStr = null;
        return _this;
      }
      LoginView.prototype.start = function() {
        this.initView();
        this._loginEditBox = ToolUtils_1.default.getInstance().getNodeByName(this.node, "loginEditBox");
        this._loginEditBox.on("editing-did-began", this.loginEditBeganCallBack, this);
        this._loginEditBox.on("editing-did-ended", this.loginEditEndedCallBack, this);
        var _loginBtn = ToolUtils_1.default.getInstance().getNodeByName(this.node, "loginBtn");
        _loginBtn.on("click", this.loginBtnCallback, this);
      };
      LoginView.prototype.loginEditBeganCallBack = function(editbox) {};
      LoginView.prototype.loginEditEndedCallBack = function(editbox) {
        cc.log("\u767b\u9646\u8d26\u53f7 : ", editbox.string);
        this._accountNumStr = editbox.string;
      };
      LoginView.prototype.loginBtnCallback = function() {
        HttpMessageHelp_1.default.getInstance().sendMessage(HttpConfig_1.HttpConfig.LOGIN_GAME, {
          openId: this._accountNumStr
        });
      };
      LoginView.prototype.onClickMask = function() {
        this.close();
      };
      LoginView.prototype.onEvent = function(event) {
        var data = event.getUserData();
        switch (event.getName()) {
         case EventConfig_1.EventConfig.LOGIN_SERVER_READY:
          cc.log("\u767b\u9646\u6210\u529f");
          SceneManager_1.default.getInstance().replaceScene(SceneConfig_1.SceneConfig.HALL);
        }
      };
      LoginView = __decorate([ ccclass ], LoginView);
      return LoginView;
    }(ViewBase_1.default);
    exports.default = LoginView;
    cc._RF.pop();
  }, {
    "../config/EventConfig": "EventConfig",
    "../config/HttpConfig": "HttpConfig",
    "../config/SceneConfig": "SceneConfig",
    "../core/external/ViewBase": "ViewBase",
    "../core/http/HttpMessageHelp": "HttpMessageHelp",
    "../core/manager/SceneManager": "SceneManager",
    "../core/utils/ToolUtils": "ToolUtils"
  } ],
  MessageView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c97f8yNNzFEsoMKuZH1Db0L", "MessageView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewBase_1 = require("../core/external/ViewBase");
    var ToolUtils_1 = require("../core/utils/ToolUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MessageView = function(_super) {
      __extends(MessageView, _super);
      function MessageView() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MessageView.prototype.start = function() {
        this.initView();
        var contentLabel = ToolUtils_1.default.getInstance().getNodeByName(this.node, "contentTx");
        contentLabel.getComponent(cc.Label).string = this._userData.content;
        var yBtn = ToolUtils_1.default.getInstance().getNodeByName(this.node, "continue");
        var nBtn = ToolUtils_1.default.getInstance().getNodeByName(this.node, "cancel");
        yBtn.on("click", this.yCallBack, this);
        nBtn.on("click", this.nCallBack, this);
        yBtn.active = true;
        nBtn.active = true;
        yBtn.x = 130;
        if (!this._userData.cancelCallBack && !this._userData.continueCallBack) {
          yBtn.active = false;
          nBtn.active = false;
        }
        if (!this._userData.cancelCallBack && this._userData.continueCallBack) {
          yBtn.x = 0;
          nBtn.active = false;
        }
      };
      MessageView.prototype.yCallBack = function(sender) {
        this.close();
        this._userData.continueCallBack && this._userData.continueCallBack();
      };
      MessageView.prototype.nCallBack = function(sender) {
        this.close();
        this._userData.cancelCallBack && this._userData.cancelCallBack();
      };
      MessageView = __decorate([ ccclass ], MessageView);
      return MessageView;
    }(ViewBase_1.default);
    exports.default = MessageView;
    cc._RF.pop();
  }, {
    "../core/external/ViewBase": "ViewBase",
    "../core/utils/ToolUtils": "ToolUtils"
  } ],
  ModelCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0affc+y5VlFTaehRCM1dVnS", "ModelCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StaCnfInfo_1 = require("./StaCnfInfo");
    var UserInfo_1 = require("./UserInfo");
    var ReconnectionInfo_1 = require("./ReconnectionInfo");
    var GameConfigInfo_1 = require("./GameConfigInfo");
    var GameMapConfig_1 = require("../room/config/GameMapConfig");
    var ModelCenter = function() {
      function ModelCenter() {
        this.staCnfInf = null;
        this.userInfo = null;
        this.reconnectionInfo = null;
        this.gameConfigInfo = null;
        this.staCnfInf = new StaCnfInfo_1.default();
        this.userInfo = new UserInfo_1.default();
        this.reconnectionInfo = new ReconnectionInfo_1.default();
        this.gameConfigInfo = new GameConfigInfo_1.default(GameMapConfig_1.GameMapConfig);
      }
      ModelCenter.getInstance = function() {
        this._ins || (this._ins = new ModelCenter());
        return this._ins;
      };
      ModelCenter._ins = null;
      return ModelCenter;
    }();
    exports.default = ModelCenter;
    cc._RF.pop();
  }, {
    "../room/config/GameMapConfig": "GameMapConfig",
    "./GameConfigInfo": "GameConfigInfo",
    "./ReconnectionInfo": "ReconnectionInfo",
    "./StaCnfInfo": "StaCnfInfo",
    "./UserInfo": "UserInfo"
  } ],
  NativeManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19e76i6JbFA+7IjMkerRjwH", "NativeManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ConstConfig_1 = require("../../config/ConstConfig");
    window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CLIPBOARD] = "phone_clipboard";
    window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_SHOCK] = "phone_shock";
    window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CHANGE_HSP] = "phone_changehsp";
    window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_REMOVECACHE] = "phone_removecache";
    window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_GETAPPCACHE] = "phone_getappcache";
    window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER] = {};
    window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACK] = function(jsonObj) {
      try {
        cc.log("AppPlatform callback jsonObj type : ", jsonObj["type"]);
        cc.log("AppPlatform callback jsonObj type : ", jsonObj["status"]);
        cc.log("AppPlatform callback jsonObj type : ", jsonObj["code"]);
        var handler = window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][jsonObj]["type"];
        handler && handler(jsonObj);
      } catch (error) {
        cc.log("AppPlatform callback error!");
      }
    };
    var ApiClass = "";
    var NativeManager = function() {
      function NativeManager() {}
      NativeManager.getInstance = function() {
        this._ins || (this._ins = new NativeManager());
        return this._ins;
      };
      NativeManager.prototype.getPlatform = function() {
        if (cc.sys.platform === cc.sys.ANDROID) {
          cc.log("AppPlatform callback Android");
          return true;
        }
        if (cc.sys.platform === cc.sys.IPHONE || cc.sys.platform === cc.sys.IPAD || cc.sys.platform === cc.sys.MACOS) {
          cc.log("AppPlatform callback iOS");
          return false;
        }
      };
      NativeManager.prototype.isNetWorkAvailable = function() {
        if (!cc.sys.isNative) return true;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        var ret = true;
        ret = this.getPlatform() ? jsb.reflection.callStaticMethod(ApiClass, "isNetWorkAvailable", "()Z") : jsb.reflection.callStaticMethod("PhoneTool", "isNetWorkAvailable");
        return ret;
      };
      NativeManager.prototype.clipboard = function(handler, code) {
        window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CLIPBOARD]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        this.getPlatform() ? jsb.reflection.callStaticMethod(ApiClass, "clipboard", "(Ljava/lang/String;)V", code) : jsb.reflection.callStaticMethod("PhoneTool", "clipboard", code);
      };
      NativeManager.prototype.openShock = function(handler) {
        window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_SHOCK]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        this.getPlatform() ? jsb.reflection.callStaticMethod(ApiClass, "openShock", "(I)V") : jsb.reflection.callStaticMethod("PhoneTool", "openShock");
      };
      NativeManager.prototype.changeHSP = function(handler, hsp) {
        window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CHANGE_HSP]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        this.getPlatform() ? jsb.reflection.callStaticMethod(ApiClass, "changeHSP", "(Z)V", hsp) : jsb.reflection.callStaticMethod("PhoneTool", "changeSHP:", hsp);
      };
      NativeManager.prototype.getAppCache = function(handler) {
        window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CHANGE_HSP]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        this.getPlatform() ? jsb.reflection.callStaticMethod(ApiClass, "getAppCache", "()V") : jsb.reflection.callStaticMethod("PhoneTool", "getAppCacheValue");
      };
      NativeManager.prototype.removeCache = function(handler) {
        window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_CALLBACKHANDLER][window[ConstConfig_1.ConstConfig.WINDOW_CONFIG.APPPLATFORM_REMOVECACHE]] = handler;
        cc.log("Platform Android(true) iOS(false) : ", this.getPlatform());
        this.getPlatform() ? jsb.reflection.callStaticMethod(ApiClass, "removeAppCache", "()V") : jsb.reflection.callStaticMethod("PhoneTool", "removeAppData");
      };
      NativeManager._ins = null;
      return NativeManager;
    }();
    exports.default = NativeManager;
    cc._RF.pop();
  }, {
    "../../config/ConstConfig": "ConstConfig"
  } ],
  Pack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29b8elp0/5OAqysTAO6+Knd", "Pack");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Pack = function() {
      function Pack() {}
      return Pack;
    }();
    exports.default = Pack;
    cc._RF.pop();
  }, {} ],
  PdkCommand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd42d7MaFJNTYsaSPHAZnyh", "PdkCommand");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PdkCommand = void 0;
    var PdkCommand = {
      HEARTBEAT: 92,
      ENTER_ROOM: 81
    };
    exports.PdkCommand = PdkCommand;
    cc._RF.pop();
  }, {} ],
  PdkConstant: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "04abdiBGtVKToF4/z9K0/r/", "PdkConstant");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PdkConstant = void 0;
    var PdkConstant = {
      GameStatus: {
        wait: 0,
        game: 1
      }
    };
    exports.PdkConstant = PdkConstant;
    cc._RF.pop();
  }, {} ],
  PdkGameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1efaezkNNNBfJmQaamt+OdV", "PdkGameData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PdkConstant_1 = require("../config/PdkConstant");
    var ModelCenter_1 = require("../../../data/ModelCenter");
    var BundleManager_1 = require("../../../core/manager/BundleManager");
    var PdkGameData = function() {
      function PdkGameData() {
        this._gameId = 0;
        this._status = PdkConstant_1.PdkConstant.GameStatus.wait;
        this._roomPlayerList = {};
        this._curBoard = 0;
        this._roomInfo = null;
        this._roomOwnerUid = "";
        this._roomOwnerInfo = null;
        this._roomID = 0;
        this._gameConfig = null;
        this._bundleRes = null;
      }
      PdkGameData.prototype.initData = function(data) {
        cc.log("\u6570\u636e : ", data);
        this._status = data.roomState;
        this._roomOwnerInfo = JSON.parse(data.roomOwnerInfo);
        this._curBoard = data.gameRools;
        this._roomOwnerUid = data.roomOwner;
        this._roomInfo = JSON.parse(data.roomKwargs);
        this._roomID = data.roomId;
        this._gameId = this._roomInfo.game_type;
        this._gameConfig = ModelCenter_1.default.getInstance().gameConfigInfo.getGameInfoByGameID(this._gameId);
        this._bundleRes = BundleManager_1.default.getInstance().getBundleResByName(this._gameConfig.bundleName);
        for (var index = 0; index < data.player.length; index++) {
          var element = data.player[index];
          this._roomPlayerList[element.player] = element;
        }
        return true;
      };
      PdkGameData.prototype.reset = function() {};
      return PdkGameData;
    }();
    exports.default = PdkGameData;
    cc._RF.pop();
  }, {
    "../../../core/manager/BundleManager": "BundleManager",
    "../../../data/ModelCenter": "ModelCenter",
    "../config/PdkConstant": "PdkConstant"
  } ],
  PdkInit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90634f1Va5KGa2VU+31eTzJ", "PdkInit");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameLoaderBase_1 = require("../GameLoaderBase");
    var PdkProcesser_1 = require("./lib/PdkProcesser");
    var PdkReader_1 = require("./lib/PdkReader");
    var PdkWriter_1 = require("./lib/PdkWriter");
    var ViewManager_1 = require("../../core/manager/ViewManager");
    var ViewConfig_1 = require("../../config/ViewConfig");
    var ViewInfo_1 = require("../../core/package/ViewInfo");
    window["PdkGameLoader"] = function(_super) {
      __extends(PdkGameLoader, _super);
      function PdkGameLoader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PdkGameLoader.prototype.registerView = function(gmBundle, cmBundle) {
        ViewManager_1.default.getInstance().registerCreator(ViewConfig_1.ViewConfig.ROOMLAYER, new ViewInfo_1.default("PdkRoomLayer", gmBundle["pdkRoomLayer"]));
        ViewManager_1.default.getInstance().registerCreator(ViewConfig_1.ViewConfig.ROOM_SMALLSETTLEMENT, new ViewInfo_1.default("RmcmSmallSettlement", cmBundle["rmcm_smallSettlement"]));
      };
      PdkGameLoader.prototype.unRegisterView = function() {
        ViewManager_1.default.getInstance().unRegisterCreator(ViewConfig_1.ViewConfig.ROOMLAYER);
        ViewManager_1.default.getInstance().unRegisterCreator(ViewConfig_1.ViewConfig.ROOM_SMALLSETTLEMENT);
      };
      PdkGameLoader.prototype.createProcesser = function() {
        return new PdkProcesser_1.default();
      };
      PdkGameLoader.prototype.createReader = function() {
        return new PdkReader_1.default();
      };
      PdkGameLoader.prototype.createWriter = function() {
        return new PdkWriter_1.default();
      };
      return PdkGameLoader;
    }(GameLoaderBase_1.default);
    cc._RF.pop();
  }, {
    "../../config/ViewConfig": "ViewConfig",
    "../../core/manager/ViewManager": "ViewManager",
    "../../core/package/ViewInfo": "ViewInfo",
    "../GameLoaderBase": "GameLoaderBase",
    "./lib/PdkProcesser": "PdkProcesser",
    "./lib/PdkReader": "PdkReader",
    "./lib/PdkWriter": "PdkWriter"
  } ],
  PdkListener: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b5846HXpmtJuYiATC6CRmHO", "PdkListener");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GSCmdDelayManager_1 = require("../../net/GSCmdDelayManager");
    var GSManager_1 = require("../../net/GSManager");
    var PdkListener = function() {
      function PdkListener(roomLayer) {
        this._saveCmdEventFuncMap = {};
        this._roomLayer = null;
        this._roomLayer = roomLayer;
        this._saveCmdEventFuncMap = {};
        this.init();
        GSCmdDelayManager_1.default.getInstance().registerCmdCallback(this._onDelayCmdCallBack.bind(this));
        GSManager_1.default.getInstance().dispatchCacheEvent();
      }
      PdkListener.prototype._onDelayCmdCallBack = function(cmd, data) {
        this._saveCmdEventFuncMap[cmd] && this._saveCmdEventFuncMap[cmd](data);
      };
      PdkListener.prototype.bindMethodToCmd = function(cmd, func, delay) {
        GSCmdDelayManager_1.default.getInstance().addTimeToDelayMap(cmd, delay);
        this._saveCmdEventFuncMap[cmd] = func.bind(this);
      };
      PdkListener.prototype.init = function() {};
      return PdkListener;
    }();
    exports.default = PdkListener;
    cc._RF.pop();
  }, {
    "../../net/GSCmdDelayManager": "GSCmdDelayManager",
    "../../net/GSManager": "GSManager"
  } ],
  PdkProcesser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf6f4C7EJlLEoRGm9g0MkGg", "PdkProcesser");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseSocketProcesser_1 = require("../../../core/net/base/BaseSocketProcesser");
    var PdkCommand_1 = require("./PdkCommand");
    var LoadingManager_1 = require("../../../core/manager/LoadingManager");
    var GSManager_1 = require("../../net/GSManager");
    var GSCmdDelayManager_1 = require("../../net/GSCmdDelayManager");
    var SceneManager_1 = require("../../../core/manager/SceneManager");
    var SceneConfig_1 = require("../../../config/SceneConfig");
    var GameLoaderManager_1 = require("../../GameLoaderManager");
    var PdkProcesser = function(_super) {
      __extends(PdkProcesser, _super);
      function PdkProcesser() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PdkProcesser.prototype.initFuncMap = function() {
        this.initCmdDelayManager(GSCmdDelayManager_1.default.getInstance());
        this.bindMethodToCmd(PdkCommand_1.PdkCommand.HEARTBEAT, this.onHeartBeat.bind(this));
        this.bindMethodToCmd(PdkCommand_1.PdkCommand.ENTER_ROOM, this.onEnterRoom.bind(this));
      };
      PdkProcesser.prototype.onHeartBeat = function(data) {
        GSManager_1.default.getInstance().onHeartBeatResponse(data);
      };
      PdkProcesser.prototype.onEnterRoom = function(data) {
        if (!this.checkResponseCode(data.data)) {
          LoadingManager_1.default.getInstance().clearLoadingView();
          GSManager_1.default.getInstance().close();
          return;
        }
        GSCmdDelayManager_1.default.getInstance().clearDelayCmd();
        GSManager_1.default.getInstance()._startHeartbeat();
        if (SceneManager_1.default.getInstance().getCurSceneType() !== SceneConfig_1.SceneConfig.ROOM) {
          GSManager_1.default.getInstance().clearCacheEvent();
          GSManager_1.default.getInstance().cacheEvent();
          GameLoaderManager_1.default.getInstance().enterRoomScene(data.data, false);
        }
      };
      return PdkProcesser;
    }(BaseSocketProcesser_1.default);
    exports.default = PdkProcesser;
    cc._RF.pop();
  }, {
    "../../../config/SceneConfig": "SceneConfig",
    "../../../core/manager/LoadingManager": "LoadingManager",
    "../../../core/manager/SceneManager": "SceneManager",
    "../../../core/net/base/BaseSocketProcesser": "BaseSocketProcesser",
    "../../GameLoaderManager": "GameLoaderManager",
    "../../net/GSCmdDelayManager": "GSCmdDelayManager",
    "../../net/GSManager": "GSManager",
    "./PdkCommand": "PdkCommand"
  } ],
  PdkReader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2af89IbvFZBq59urByaUcCD", "PdkReader");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseSocketReader_1 = require("../../../core/net/base/BaseSocketReader");
    var PdkCommand_1 = require("./PdkCommand");
    var protoPaodekuai_1 = require("./protoPaodekuai");
    var PdkReader = function(_super) {
      __extends(PdkReader, _super);
      function PdkReader() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PdkReader.prototype.initFuncMap = function() {
        this.bindMethodToCmd(PdkCommand_1.PdkCommand.HEARTBEAT, this.readHeartBeat.bind(this));
        this.bindMethodToCmd(PdkCommand_1.PdkCommand.ENTER_ROOM, this.readEnterRoom.bind(this));
      };
      PdkReader.prototype.readHeartBeat = function(pack) {
        var info = {};
        return info;
      };
      PdkReader.prototype.readEnterRoom = function(pack) {
        var result = protoPaodekuai_1.protoPaodekuai.EnterRoomResponse.decode(pack);
        return result;
      };
      return PdkReader;
    }(BaseSocketReader_1.default);
    exports.default = PdkReader;
    cc._RF.pop();
  }, {
    "../../../core/net/base/BaseSocketReader": "BaseSocketReader",
    "./PdkCommand": "PdkCommand",
    "./protoPaodekuai": "protoPaodekuai"
  } ],
  PdkResConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a731fDai/lOK6r+s4FY3R5i", "PdkResConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PdkResConfig = void 0;
    var PdkResConfig = [ {
      pdkPlayerLayer: {
        path: "prefabs/PdkPlayerLayer",
        ex: cc.Prefab
      }
    }, {
      pdkMenuLayer: {
        path: "prefabs/PdkMenuLayer",
        ex: cc.Prefab
      }
    }, {
      pdkRoomLayer: {
        path: "prefabs/PdkRoomLayer",
        ex: cc.Prefab
      }
    }, {
      pdkCardLayer: {
        path: "prefabs/PdkCardLayer",
        ex: cc.Prefab
      }
    }, {
      pdk_Desk2: {
        path: "texture/Desk2",
        ex: cc.SpriteFrame
      }
    } ];
    exports.PdkResConfig = PdkResConfig;
    cc._RF.pop();
  }, {} ],
  PdkRoomLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "edf8f9dBRxDBq9sdwpF+26Z", "PdkRoomLayer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewBase_1 = require("../../core/external/ViewBase");
    var PdkGameData_1 = require("./data/PdkGameData");
    var GSCmdDelayManager_1 = require("../net/GSCmdDelayManager");
    var BundleManager_1 = require("../../core/manager/BundleManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PdkRoomLayer = function(_super) {
      __extends(PdkRoomLayer, _super);
      function PdkRoomLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._roleLayer = null;
        _this._menuLayer = null;
        _this._asset = null;
        _this._jl = 10;
        _this._sp = null;
        return _this;
      }
      PdkRoomLayer.prototype.start = function() {
        this.initView();
        window["GMDATA"] = new PdkGameData_1.default();
        GSCmdDelayManager_1.default.getInstance().pauseCmd();
        if (window["GMDATA"].initData(this._userData)) {
          var bg = new cc.Node();
          this.node.addChild(bg);
          bg.addComponent(cc.Sprite).spriteFrame = window["GMDATA"]._bundleRes["pdk_Desk2"];
          this.toolUtils.scaleBackgroundBG(bg);
          this._menuLayer = cc.instantiate(window["GMDATA"]._bundleRes["pdkMenuLayer"]);
          this._menuLayer.setContentSize(cc.winSize);
          this.node.addChild(this._menuLayer);
        }
        GSCmdDelayManager_1.default.getInstance().resumeCmd();
      };
      PdkRoomLayer.prototype.dec = function() {
        this._sp.destroy();
        this._sp = null;
      };
      PdkRoomLayer.prototype.add = function() {
        this._asset.decRef();
      };
      PdkRoomLayer.prototype.removebundle = function() {
        BundleManager_1.default.getInstance().removeBundleByName("pdk");
      };
      PdkRoomLayer.prototype.print = function() {
        cc.log("asset : ", this._asset);
      };
      PdkRoomLayer.prototype.resetGameView = function() {
        this._sp = new cc.Node();
        var sp = this._sp.addComponent(cc.Sprite);
        sp.spriteFrame = this._asset;
        this._jl += 20;
        this._sp.x = this._jl;
        this.node.addChild(this._sp);
      };
      PdkRoomLayer = __decorate([ ccclass ], PdkRoomLayer);
      return PdkRoomLayer;
    }(ViewBase_1.default);
    exports.default = PdkRoomLayer;
    cc._RF.pop();
  }, {
    "../../core/external/ViewBase": "ViewBase",
    "../../core/manager/BundleManager": "BundleManager",
    "../net/GSCmdDelayManager": "GSCmdDelayManager",
    "./data/PdkGameData": "PdkGameData"
  } ],
  PdkWriter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "523dePKio1E7YenpkT7JRlx", "PdkWriter");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BaseSocketWriter_1 = require("../../../core/net/base/BaseSocketWriter");
    var PdkCommand_1 = require("./PdkCommand");
    var protoPaodekuai_1 = require("./protoPaodekuai");
    var ModelCenter_1 = require("../../../data/ModelCenter");
    var PdkWriter = function(_super) {
      __extends(PdkWriter, _super);
      function PdkWriter() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      PdkWriter.prototype.initFuncMap = function() {
        this.bindMethodToCmd(PdkCommand_1.PdkCommand.ENTER_ROOM, this.writeEnterRoom.bind(this));
      };
      PdkWriter.prototype.writeEnterRoom = function(info) {
        var msg = protoPaodekuai_1.protoPaodekuai.EnterRoomRequest.create();
        msg.roomId = info.roomId;
        msg.player = ModelCenter_1.default.getInstance().userInfo._uid;
        msg.info = JSON.stringify(ModelCenter_1.default.getInstance().userInfo.getUserInfo());
        return protoPaodekuai_1.protoPaodekuai.EnterRoomRequest.encode(msg).finish();
      };
      return PdkWriter;
    }(BaseSocketWriter_1.default);
    exports.default = PdkWriter;
    cc._RF.pop();
  }, {
    "../../../core/net/base/BaseSocketWriter": "BaseSocketWriter",
    "../../../data/ModelCenter": "ModelCenter",
    "./PdkCommand": "PdkCommand",
    "./protoPaodekuai": "protoPaodekuai"
  } ],
  PlatformDisManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "414353VCyVJgLIX3H+1Gfdg", "PlatformDisManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NativeManager_1 = require("./NativeManager");
    var WxMinManager_1 = require("./WxMinManager");
    var PlatformDisManager = function() {
      function PlatformDisManager() {
        this._wxMinManager = WxMinManager_1.default.getInstance();
        this._nativeManager = NativeManager_1.default.getInstance();
      }
      return PlatformDisManager;
    }();
    exports.default = PlatformDisManager;
    cc._RF.pop();
  }, {
    "./NativeManager": "NativeManager",
    "./WxMinManager": "WxMinManager"
  } ],
  ReconnectionInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fdc657W9/lJC5hOxN7/0VEz", "ReconnectionInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ReconnectionInfo = function() {
      function ReconnectionInfo() {
        this.isReconnection = false;
        this.serverIP = null;
        this.serverPort = null;
        this.roomId = null;
        this.gameId = null;
      }
      ReconnectionInfo.prototype.setGameId = function(gameId) {
        this.gameId = gameId;
      };
      ReconnectionInfo.prototype.setInfo = function(serverIp, serverPort, roomId, isReconnection) {
        this.isReconnection = isReconnection;
        this.serverIP = serverIp;
        this.serverPort = serverPort;
        this.roomId = roomId;
      };
      ReconnectionInfo.prototype.initInfo = function(data) {
        this.isReconnection = data.reconnectionInfo.state;
        this.serverIP = data.reconnectionInfo.serverIp;
        this.serverPort = data.reconnectionInfo.serverPort;
        this.roomId = data.reconnectionInfo.roomId;
        this.gameId = data.reconnectionInfo.gameId;
      };
      return ReconnectionInfo;
    }();
    exports.default = ReconnectionInfo;
    cc._RF.pop();
  }, {} ],
  ResConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f093D+6JBPb7n6NKPmwbxq", "ResConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BdnmMinGameConfig = exports.BdnmAppConfig = exports.BdnmConfig = exports.BdResConfig = exports.ResScene = void 0;
    var ResScene = {
      LOGINSCENE: "LoginScene",
      HALLSCENE: "HallScene",
      ROOMSCENE: "RoomScene"
    };
    exports.ResScene = ResScene;
    var BdnmConfig = {
      body: "body",
      common: "common"
    };
    exports.BdnmConfig = BdnmConfig;
    var BdnmAppConfig = {
      body: {
        path: "body",
        version: "1.0.0"
      },
      common: {
        path: "common",
        version: "1.0.0"
      }
    };
    exports.BdnmAppConfig = BdnmAppConfig;
    var BdnmMinGameConfig = {
      body: {
        path: "body",
        version: "1.0.0"
      },
      common: {
        path: "common",
        version: "1.0.0"
      }
    };
    exports.BdnmMinGameConfig = BdnmMinGameConfig;
    var BdResConfig = [ {
      bd_guideview: {
        path: "guide/guide_prefab/GuideView",
        ex: cc.Prefab
      }
    }, {
      bd_messageview: {
        path: "tips/tips_prefab/MessageView",
        ex: cc.Prefab
      }
    }, {
      bd_loadingview: {
        path: "loading/loading_prefab/LoadingView",
        ex: cc.Prefab
      }
    }, {
      bd_downloadgameview: {
        path: "downloadgame/downloadgame_prefab/DownloadGameView",
        ex: cc.Prefab
      }
    }, {
      bd_loginview: {
        path: "login/login_prefab/LoginView",
        ex: cc.Prefab
      }
    }, {
      bd_hallview: {
        path: "hall/hall_prefab/HallView",
        ex: cc.Prefab
      }
    }, {
      bd_mp3_close: {
        path: "sounds/sounds_close",
        ex: cc.AudioClip
      }
    }, {
      bd_mp3_open: {
        path: "sounds/sounds_open",
        ex: cc.AudioClip
      }
    }, {
      bd_texture_hallBg: {
        path: "hall/hall_bg",
        ex: cc.SpriteFrame
      }
    } ];
    exports.BdResConfig = BdResConfig;
    cc._RF.pop();
  }, {} ],
  ResourcesManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4abbBqVSFECq2xWCzsf9De", "ResourcesManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResourcesManager = function() {
      function ResourcesManager() {
        this.s_resources = {};
      }
      ResourcesManager.getInstance = function() {
        this._ins || (this._ins = new ResourcesManager());
        return this._ins;
      };
      ResourcesManager.prototype.getGlobResources = function() {
        return this.s_resources;
      };
      ResourcesManager.prototype.cacheAllResources = function(config, callBack) {
        var _this = this;
        for (var index = 0; index < config.length; index++) {
          var value = config[index];
          var _loop_1 = function(key) {
            var arr = value[key].split(".");
            cc.log(arr[0]);
            "prefab" === arr[1] ? cc.resources.load(arr[0], cc.Prefab, function(err, prefab) {
              prefab.addRef();
              _this.s_resources[key] = prefab;
              callBack();
            }) : "mp3" === arr[1] ? cc.resources.load(arr[0], cc.AudioClip, function(err, audio) {
              audio.addRef();
              _this.s_resources[key] = audio;
              callBack();
            }) : "png" === arr[1] ? cc.resources.load(arr[0], cc.SpriteFrame, function(err, texture) {
              _this.s_resources[key] = texture;
              callBack();
            }) : "atlas" === arr[1] ? cc.resources.load(arr[0], sp.SkeletonData, function(err, spine) {
              spine.addRef();
              _this.s_resources[key] = spine;
              callBack();
            }) : "plist" === arr[1] && cc.resources.load(arr[0], cc.SpriteAtlas, function(err, spriteAtlas) {
              spriteAtlas.addRef();
              _this.s_resources[key] = spriteAtlas;
              callBack();
            });
          };
          for (var key in value) _loop_1(key);
        }
      };
      ResourcesManager._ins = null;
      return ResourcesManager;
    }();
    exports.default = ResourcesManager;
    cc._RF.pop();
  }, {} ],
  RmcmSmallSettlement: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49d6a6SswZPSL74yIUzxNPV", "RmcmSmallSettlement");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewBase_1 = require("../../core/external/ViewBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RmcmSmallSettlement = function(_super) {
      __extends(RmcmSmallSettlement, _super);
      function RmcmSmallSettlement() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RmcmSmallSettlement.prototype.start = function() {
        this.logUtil.log("RmcmSmallSettlement");
      };
      RmcmSmallSettlement = __decorate([ ccclass ], RmcmSmallSettlement);
      return RmcmSmallSettlement;
    }(ViewBase_1.default);
    exports.default = RmcmSmallSettlement;
    cc._RF.pop();
  }, {
    "../../core/external/ViewBase": "ViewBase"
  } ],
  RoomEntry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9f9bYx1I1EPI/OMCxRSmAk", "RoomEntry");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneManager_1 = require("../core/manager/SceneManager");
    var SceneConfig_1 = require("../config/SceneConfig");
    var SceneInfo_1 = require("../core/package/SceneInfo");
    var ViewManager_1 = require("../core/manager/ViewManager");
    var ViewConfig_1 = require("../config/ViewConfig");
    var ViewInfo_1 = require("../core/package/ViewInfo");
    var ResConfig_1 = require("../config/ResConfig");
    var EntryBase_1 = require("../core/external/EntryBase");
    var RoomEntry = function(_super) {
      __extends(RoomEntry, _super);
      function RoomEntry() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RoomEntry.getInstance = function() {
        this._ins || (this._ins = new RoomEntry());
        return this._ins;
      };
      RoomEntry.prototype.init = function() {
        SceneManager_1.default.getInstance().registerCreator(SceneConfig_1.SceneConfig.ROOM, new SceneInfo_1.default("RoomScene", ResConfig_1.ResScene.ROOMSCENE));
        ViewManager_1.default.getInstance().registerCreator(ViewConfig_1.ViewConfig.DOWNLOADGAMEVIEW, new ViewInfo_1.default("DownloadGameView", this.bodyBundleRes["bd_downloadgameview"]));
      };
      RoomEntry._ins = null;
      return RoomEntry;
    }(EntryBase_1.default);
    exports.default = RoomEntry;
    cc._RF.pop();
  }, {
    "../config/ResConfig": "ResConfig",
    "../config/SceneConfig": "SceneConfig",
    "../config/ViewConfig": "ViewConfig",
    "../core/external/EntryBase": "EntryBase",
    "../core/manager/SceneManager": "SceneManager",
    "../core/manager/ViewManager": "ViewManager",
    "../core/package/SceneInfo": "SceneInfo",
    "../core/package/ViewInfo": "ViewInfo"
  } ],
  RoomScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0a29vGUGBBrKiamhcOb9Jk", "RoomScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneBase_1 = require("../core/external/SceneBase");
    var GameLoaderManager_1 = require("./GameLoaderManager");
    var ViewManager_1 = require("../core/manager/ViewManager");
    var BundleManager_1 = require("../core/manager/BundleManager");
    var ModelCenter_1 = require("../data/ModelCenter");
    var ViewConfig_1 = require("../config/ViewConfig");
    var ResConfig_1 = require("../config/ResConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RoomScene = function(_super) {
      __extends(RoomScene, _super);
      function RoomScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._gmConfig = null;
        return _this;
      }
      RoomScene.prototype.start = function() {
        cc.log("\u8fdb\u5165\u6e38\u620f\u573a\u666f : ", JSON.parse(this._userData.roomKwargs).game_type);
        this._gmConfig = ModelCenter_1.default.getInstance().gameConfigInfo.getGameInfoByGameID(JSON.parse(this._userData.roomKwargs).game_type);
        var gmBundle = BundleManager_1.default.getInstance().getBundleResByName(this._gmConfig.bundleName);
        GameLoaderManager_1.default.getInstance().getGmLoader().registerView(gmBundle, this.bundleManager.getBundleResByName(ResConfig_1.BdnmConfig.common));
        ViewManager_1.default.getInstance().showView(ViewConfig_1.ViewConfig.ROOMLAYER, this._userData, false, true);
      };
      RoomScene.prototype.onDestroy = function() {
        GameLoaderManager_1.default.getInstance().getGmLoader().unRegisterView();
        BundleManager_1.default.getInstance().removeBundleByName(this._gmConfig.bundleName);
        GameLoaderManager_1.default.getInstance().exitRoomScene();
      };
      RoomScene = __decorate([ ccclass ], RoomScene);
      return RoomScene;
    }(SceneBase_1.default);
    exports.default = RoomScene;
    cc._RF.pop();
  }, {
    "../config/ResConfig": "ResConfig",
    "../config/ViewConfig": "ViewConfig",
    "../core/external/SceneBase": "SceneBase",
    "../core/manager/BundleManager": "BundleManager",
    "../core/manager/ViewManager": "ViewManager",
    "../data/ModelCenter": "ModelCenter",
    "./GameLoaderManager": "GameLoaderManager"
  } ],
  SceneBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a599eCAuQtPh50a9b3EqEpd", "SceneBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResConfig_1 = require("../../config/ResConfig");
    var BundleManager_1 = require("../manager/BundleManager");
    var EventManager_1 = require("../manager/EventManager");
    var LogManager_1 = require("../manager/LogManager");
    var NativeManager_1 = require("../manager/NativeManager");
    var ResourcesManager_1 = require("../manager/ResourcesManager");
    var SoundManager_1 = require("../manager/SoundManager");
    var ViewManager_1 = require("../manager/ViewManager");
    var ToolUtils_1 = require("../utils/ToolUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneBase = function(_super) {
      __extends(SceneBase, _super);
      function SceneBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._sceneType = null;
        _this._userData = null;
        _this.toolUtils = ToolUtils_1.default.getInstance();
        _this.viewManager = ViewManager_1.default.getInstance();
        _this.eventManager = EventManager_1.default.getInstance();
        _this.soundManager = SoundManager_1.default.getInstance();
        _this.nativeManager = NativeManager_1.default.getInstance();
        _this.sResources = ResourcesManager_1.default.getInstance().getGlobResources();
        _this.bundleManager = BundleManager_1.default.getInstance();
        _this.logUtil = LogManager_1.default.getInstance();
        _this.bodyBundleRes = BundleManager_1.default.getInstance().getBundleResByName(ResConfig_1.BdnmConfig.body);
        return _this;
      }
      SceneBase.prototype.setSceneType = function(type) {
        cc.log("Cur scene type : ", type);
        this._sceneType = type;
      };
      SceneBase.prototype.getSceneType = function() {
        return this._sceneType;
      };
      SceneBase.prototype.setUserData = function(data) {
        cc.log("Cur jump scene user data : ", data);
        this._userData = data;
      };
      SceneBase.prototype.getUserData = function() {
        return this._userData;
      };
      SceneBase = __decorate([ ccclass ], SceneBase);
      return SceneBase;
    }(cc.Component);
    exports.default = SceneBase;
    cc._RF.pop();
  }, {
    "../../config/ResConfig": "ResConfig",
    "../manager/BundleManager": "BundleManager",
    "../manager/EventManager": "EventManager",
    "../manager/LogManager": "LogManager",
    "../manager/NativeManager": "NativeManager",
    "../manager/ResourcesManager": "ResourcesManager",
    "../manager/SoundManager": "SoundManager",
    "../manager/ViewManager": "ViewManager",
    "../utils/ToolUtils": "ToolUtils"
  } ],
  SceneConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0a189l3ANxK/pnlgLtRYIHt", "SceneConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SceneConfig = void 0;
    var SceneConfig = {
      ERROR: "error",
      LOGIN: "login",
      HALL: "hall",
      ROOM: "room"
    };
    exports.SceneConfig = SceneConfig;
    cc._RF.pop();
  }, {} ],
  SceneInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3617OA0tFJDLQk3AbhHdEo", "SceneInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneInfo = function() {
      function SceneInfo(tsPath, firePath) {
        this.tsPath = "";
        this.firePath = "";
        this.tsPath = tsPath;
        this.firePath = firePath;
      }
      return SceneInfo;
    }();
    exports.default = SceneInfo;
    cc._RF.pop();
  }, {} ],
  SceneManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa1dbvJr+9PRKjAIpUcKHve", "SceneManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager_1 = require("./EventManager");
    var EventInfo_1 = require("../package/EventInfo");
    var EventConfig_1 = require("../../config/EventConfig");
    var SceneManager = function() {
      function SceneManager() {
        this._curSceneType = "";
        this._createList = {};
      }
      SceneManager.getInstance = function() {
        this._ins || (this._ins = new SceneManager());
        return this._ins;
      };
      SceneManager.prototype.registerCreator = function(SceneType, sceneInfo) {
        this._createList[SceneType] || (this._createList[SceneType] = sceneInfo);
      };
      SceneManager.prototype.replaceScene = function(sceneType, userData) {
        var _this = this;
        if (sceneType && this._createList[sceneType]) {
          var info_1 = this._createList[sceneType];
          EventManager_1.default.getInstance().dispatchEvent(new EventInfo_1.default(EventConfig_1.EventConfig.SCENE_CHANGE));
          cc.director.loadScene(info_1.firePath, function(err, scene) {
            var container = scene.children[0];
            var script = container.addComponent(info_1.tsPath);
            _this._curSceneType = sceneType;
            script.setSceneType(sceneType);
            userData && script.setUserData(userData);
          });
        } else cc.log("ERROR: invaild scene type = ", sceneType);
      };
      SceneManager.prototype.getCurSceneType = function() {
        return this._curSceneType;
      };
      SceneManager.prototype.setCurSceneType = function(sceneType) {
        this._curSceneType = sceneType;
      };
      SceneManager._ins = null;
      return SceneManager;
    }();
    exports.default = SceneManager;
    cc._RF.pop();
  }, {
    "../../config/EventConfig": "EventConfig",
    "../package/EventInfo": "EventInfo",
    "./EventManager": "EventManager"
  } ],
  SocketBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b917fzBAbJHG5eObNDWVs4/", "SocketBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AppConfig_1 = require("../../../AppConfig");
    var ByteArray_1 = require("../../utils/ByteArray");
    var ArrayUtils_1 = require("../../utils/ArrayUtils");
    var SocketBase = function() {
      function SocketBase() {
        this._sendSeq = 0;
        this._reciveSeq = 0;
        var versionStrs = AppConfig_1.AppConfig.version.split(".");
        this._v1 = parseInt(versionStrs[0]);
        this._v2 = parseInt(versionStrs[1]);
        this._v3 = parseInt(versionStrs[2]);
      }
      SocketBase.prototype.onClose = function(evt) {};
      SocketBase.prototype.oError = function(evt) {};
      SocketBase.prototype.onMessage = function(evt) {};
      SocketBase.prototype.onOpen = function(evt) {};
      SocketBase.prototype.sendMsg = function(cmd, info) {
        var beginPacket = this.writeBegin(cmd);
        var bodyPacket = this.writePacket(info, cmd);
        this.writeEnd(cmd, bodyPacket);
      };
      SocketBase.prototype.writeBegin = function(cmd) {
        var pack = new ByteArray_1.default();
        pack.writeInt(cmd);
        pack.writeInt(AppConfig_1.AppConfig.appId);
        return pack;
      };
      SocketBase.prototype.writePacket = function(info, cmd) {
        return this._commonWriter.writePacket(cmd, info);
      };
      SocketBase.prototype.writeEnd = function(cmd, protoPack) {
        var bodyBuff = null;
        var bodySize = 0;
        if (protoPack) {
          bodyBuff = protoPack;
          bodySize = bodyBuff.length;
        }
        var beginPack = new ByteArray_1.default();
        beginPack.writeInt(bodySize + 8);
        beginPack.writeInt(cmd);
        var headerBuff = beginPack.getbytes();
        var sendBuff = headerBuff;
        cc.log("headerBuff : ", headerBuff);
        cc.log("bodyBuff : ", bodyBuff);
        bodyBuff && (sendBuff = ArrayUtils_1.default.getInstance().mergeArrayBuffer(headerBuff, bodyBuff));
        cc.log("sendBuff : ", sendBuff);
        this._socket.sendData(sendBuff);
      };
      SocketBase.prototype.readPacket = function(pack) {
        var info = {};
        cc.log("------[readPacket] cmd:0x" + pack.cmd.toString(16));
        cc.log("[socket] revice sequence " + this._reciveSeq);
        info["cmd"] = pack.cmd;
        var uint8View = pack.data ? new Uint8Array(pack.data) : null;
        info["data"] = this._commonReader.readPacket(pack.cmd, uint8View);
        info["data"] || cc.log("------[readPacket] cannot find match parser:0x" + pack.cmd.toString(16));
        return info;
      };
      SocketBase.prototype.receivePacket = function(cmd, info) {
        "undefined" === typeof info || this._commonProcesser.onReceivePacket(cmd, info);
      };
      return SocketBase;
    }();
    exports.default = SocketBase;
    cc._RF.pop();
  }, {
    "../../../AppConfig": "AppConfig",
    "../../utils/ArrayUtils": "ArrayUtils",
    "../../utils/ByteArray": "ByteArray"
  } ],
  SocketConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "767f0UTb1FHx5aUcBg0wOzx", "SocketConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SocketConfig = void 0;
    var SocketConfig = {
      endian: false,
      HEAD_FLAG: "HNN",
      HEAD_VERSION: 1,
      HEAD_SUBVERSION: 19
    };
    exports.SocketConfig = SocketConfig;
    cc._RF.pop();
  }, {} ],
  SoundManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "348d2bDPqZC246BIMzgB3S1", "SoundManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SoundManager = function() {
      function SoundManager() {
        this._playAudioIDList = {};
      }
      SoundManager.getInstance = function() {
        this._ins || (this._ins = new SoundManager());
        return this._ins;
      };
      SoundManager.prototype.loadPlay = function(path, loop, value) {
        var _this = this;
        cc.resources.load(path, cc.AudioClip, function(err, audioClip) {
          var audioID = cc.audioEngine.play(audioClip, loop, value);
          _this._playAudioIDList[path] = audioID;
        });
      };
      SoundManager.prototype.play = function(audioClip, loop, value) {
        var lp = loop || false;
        var ve = value || .5;
        var audioID = cc.audioEngine.play(audioClip, lp, ve);
        this._playAudioIDList[audioClip] = audioID;
      };
      SoundManager.prototype.stop = function(path) {
        if (!this._playAudioIDList[path]) {
          cc.log("[SoundManager] stop Error : not found AudioID");
          return;
        }
        cc.audioEngine.stop(this._playAudioIDList[path]);
      };
      SoundManager.prototype.resume = function(path) {
        if (!this._playAudioIDList[path]) {
          cc.log("[SoundManager] resume Error : not found AudioID");
          return;
        }
        cc.audioEngine.resume(this._playAudioIDList[path]);
      };
      SoundManager.prototype.setVolume = function(path, value) {
        if (!this._playAudioIDList[path]) {
          cc.log("[SoundManager] setVolume Error : not found AudioID");
          return;
        }
        cc.audioEngine.setVolume(this._playAudioIDList[path], value);
      };
      SoundManager.prototype.getVolume = function(path) {
        if (!this._playAudioIDList[path]) {
          cc.log("[SoundManager] getVolume Error : not found AudioID");
          return;
        }
        return cc.audioEngine.getVolume(this._playAudioIDList[path]);
      };
      SoundManager.prototype.stopAll = function() {
        cc.audioEngine.stopAll();
      };
      SoundManager.prototype.resumeAll = function() {
        cc.audioEngine.resumeAll();
      };
      SoundManager._ins = null;
      return SoundManager;
    }();
    exports.default = SoundManager;
    cc._RF.pop();
  }, {} ],
  SpineUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b899eSihVFDu7lcDveXVkc6", "SpineUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ToolUtils_1 = require("./ToolUtils");
    var SpineUtils = function() {
      function SpineUtils() {}
      SpineUtils.getInstance = function() {
        this._ins || (this._ins = new SpineUtils());
        return this._ins;
      };
      SpineUtils.prototype.getSkeletonObj = function(root, name) {
        var rn = ToolUtils_1.default.getInstance().getNodeByName(root, name);
        return rn.getComponent(sp.Skeleton);
      };
      SpineUtils.prototype.showSlotDebugInfo = function(spine) {
        spine.debugSlots = true;
      };
      SpineUtils.prototype.showBoneDebugInfo = function(spine) {
        spine.debugBones = true;
      };
      SpineUtils.prototype.showMeshDebugInfo = function(spine) {
        spine.debugMesh = true;
      };
      SpineUtils.prototype.setSpineAnimaPlayTime = function(spine, time) {
        spine.timeScale = time;
      };
      SpineUtils.prototype.replaceSkinByName = function(skeleton, skinName) {
        skeleton.setSkin(skinName);
        skeleton.setSlotsToSetupPose();
      };
      SpineUtils.prototype.exchangeAtmtByName = function(sk1, sk2, attachmentArr) {
        for (var index = 0; index < attachmentArr.length; index++) {
          var element = attachmentArr[index];
          var slot1 = sk1.findSlot(element);
          var slot2 = sk2.findSlot(element);
          var attachment = slot2.getAttachment();
          slot1.setAttachment(attachment);
        }
      };
      SpineUtils.prototype.replaceRegionBySlotName = function(sk, slotName, texture, textureName) {
        var _s = {
          width: texture.width,
          height: texture.height
        };
        var sps = {
          _image: _s,
          _texture: texture
        };
        var page = {
          name: textureName,
          height: texture.height,
          width: texture.width,
          texture: sps,
          magFilter: texture["_magFilter"],
          minFilter: texture["_minFilter"],
          uWrap: texture["_wrapS"],
          vWrap: texture["_wrapT"]
        };
        var region = {
          degrees: 0,
          height: texture.height,
          width: texture.width,
          index: -1,
          name: slotName,
          x: 0,
          y: 0,
          offsetX: 0,
          offsetY: 0,
          originalHeight: texture.height,
          originalWidth: texture.width,
          rotate: false,
          page: page,
          renderObject: null,
          texture: sps,
          u: 0,
          u2: 1,
          v: 0,
          v2: 1
        };
        region.renderObject = region;
        var slot = sk.findSlot(slotName);
        var attachment = new sp.spine.RegionAttachment(slotName);
        attachment.setRegion(region);
        attachment.height = texture.height;
        attachment.width = texture.width;
        var half_width = texture.width / 2;
        var half_height = texture.height / 2;
        var offset = new Float32Array([ -half_width, -half_height, -half_width, half_height, half_width, half_height, half_width, -half_height ]);
        attachment.offset = offset;
        attachment.path = slotName;
        slot.setAttachment(attachment);
      };
      SpineUtils._ins = null;
      return SpineUtils;
    }();
    exports.default = SpineUtils;
    cc._RF.pop();
  }, {
    "./ToolUtils": "ToolUtils"
  } ],
  SplashScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5f2fx6EsdKaIwefArW6p9c", "SplashScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AppConfig_1 = require("../AppConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SplashScene = function(_super) {
      __extends(SplashScene, _super);
      function SplashScene() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SplashScene.prototype.getChildNodeByName = function(root, name) {
        if (!root) return null;
        if (root.name === name) return root;
        for (var index = 0; index < root.childrenCount; index++) {
          var element = root.children[index];
          var res = this.getChildNodeByName(element, name);
          if (null !== res) return res;
        }
        return null;
      };
      SplashScene.prototype.start = function() {
        var bg = this.getChildNodeByName(this.node, "bg");
        this.scaleBackgroundBG(bg);
        var icon = this.getChildNodeByName(this.node, "icon");
        icon.opacity = 0;
        cc.tween(icon).to(1, {
          opacity: 255
        }).delay(.8).call(function() {
          2 === AppConfig_1.AppConfig.platform ? cc.director.loadScene("LoginScene", function(err, scene) {
            var container = scene.children[0];
            var script = container.addComponent("LoginScene");
            script.setSceneType("login");
          }) : 1 === AppConfig_1.AppConfig.platform && cc.director.loadScene("AssetsScene");
        }).start();
      };
      SplashScene.prototype.scaleBackgroundBG = function(node) {
        var showAll = Math.min(cc.view.getCanvasSize().width / node.width, cc.view.getCanvasSize().height / node.height);
        var realWidth = node.width * showAll;
        var realHeight = node.height * showAll;
        node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
      };
      SplashScene = __decorate([ ccclass ], SplashScene);
      return SplashScene;
    }(cc.Component);
    exports.default = SplashScene;
    cc._RF.pop();
  }, {
    "../AppConfig": "AppConfig"
  } ],
  StaCnfInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2439fdxLWhM26cQ6Y8IKv3u", "StaCnfInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StaCnfInfo = function() {
      function StaCnfInfo() {
        this.isNeedUpdate = false;
        this.appStoreUrl = "";
        this.apkUrl = "";
        this.notice = "";
        this.sharedUrl = "";
      }
      return StaCnfInfo;
    }();
    exports.default = StaCnfInfo;
    cc._RF.pop();
  }, {} ],
  StringUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ff905KdUwxAvI+8VlSLFJWd", "StringUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StringUtils = function() {
      function StringUtils() {}
      StringUtils.getInstance = function() {
        this._ins || (this._ins = new StringUtils());
        return this._ins;
      };
      StringUtils.prototype.substitute = function(str, replaceArr) {
        var len = replaceArr.length;
        var regE = null;
        for (var index = 0; index < len; index++) {
          regE = new RegExp("\\{" + index + "\\}", "g");
          str = str.replace(regE, replaceArr[index]);
        }
        return str;
      };
      StringUtils._ins = null;
      return StringUtils;
    }();
    exports.default = StringUtils;
    cc._RF.pop();
  }, {} ],
  TipsConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dc298tLZRA7LJT2ijd7Xg5", "TipsConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TipsConfig = void 0;
    var TipsConfig = {
      common_sys_tips_001: "\u60a8\u7684\u5f53\u524d\u7f51\u7edc\u73af\u5883\u4e0d\u7a33\u5b9a\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",
      common_sys_tips_002: "\u60a8\u7684\u5f53\u524d\u7f51\u7edc\u73af\u5883\u4e0d\u7a33\u5b9a\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u662f\u5426\u6253\u5f00",
      common_sys_tips_003: "\u60a8\u7684\u5f53\u524d\u7f51\u7edc\u73af\u5883\u4e0d\u7a33\u5b9a\uff0c\u8bf7\u91cd\u8fde",
      common_sys_tips_004: "\u7f51\u7edc\u8fde\u63a5\u65ad\u5f00\uff0c\u8bf7\u70b9\u51fb\u91cd\u8fde",
      common_sys_tips_005: "\u60a8\u7684\u5f53\u524d\u7f51\u7edc\u73af\u5883\u4e0d\u7a33\u5b9a\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u662f\u5426\u6253\u5f00"
    };
    exports.TipsConfig = TipsConfig;
    cc._RF.pop();
  }, {} ],
  ToolUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27d99DS11RHVpVkx/2WczbJ", "ToolUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LogManager_1 = require("../manager/LogManager");
    var ToolUtils = function() {
      function ToolUtils() {}
      ToolUtils.getInstance = function() {
        this._ins || (this._ins = new ToolUtils());
        return this._ins;
      };
      ToolUtils.prototype.base64ToUint8Array = function(base64String) {
        var padding = "=".repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);
        for (var i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
        return outputArray;
      };
      ToolUtils.prototype.uint8arrayToBase64 = function(u8Arr) {
        var CHUNK_SIZE = 32768;
        var index = 0;
        var length = u8Arr.length;
        var result = "";
        var slice = null;
        while (index < length) {
          slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
          result += String.fromCharCode.apply(null, slice);
          index += CHUNK_SIZE;
        }
        return btoa(result);
      };
      ToolUtils.prototype.getNodeByName = function(root, name) {
        if (!root) return null;
        if (root.name === name) return root;
        for (var index = 0; index < root.childrenCount; index++) {
          var element = root.children[index];
          var res = this.getNodeByName(element, name);
          if (null !== res) return res;
        }
        return null;
      };
      ToolUtils.prototype.setSpriteFrameByImgURL = function(url, Img) {
        if ("" === url) return;
        cc.assetManager.loadRemote(url, cc.Texture2D, function(err, texture) {
          var frame = new cc.SpriteFrame(texture);
          Img.getComponent(cc.Sprite).spriteFrame = frame;
        });
      };
      ToolUtils.prototype.setLocalData = function(key, data) {
        if (!key) {
          cc.log("------[ToolUtils] setLocalData key is null");
          return;
        }
        var jsondata = JSON.stringify(data);
        cc.sys.localStorage(key, jsondata);
      };
      ToolUtils.prototype.getLocalData = function(key) {
        var data = cc.sys.localStorage.getItem(key);
        if (!data) return null;
        data = JSON.parse(data);
        return data;
      };
      ToolUtils.prototype.moveN1toN2 = function(node1, node2) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
      };
      ToolUtils.prototype.convertNodeSpaceAR = function(node1, node2) {
        return node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
      };
      ToolUtils.prototype.getRandom = function(m, n) {
        return Math.floor(Math.random() * (m - n) + n);
      };
      ToolUtils.prototype.sendHttpRequest = function(tp, url, callfunc) {
        var req = new XMLHttpRequest();
        req.open(tp, url, true);
        req.onreadystatechange = function() {
          LogManager_1.default.getInstance().log("[ToolUtils] sendHttpRequest");
          LogManager_1.default.getInstance().log(req.readyState);
          LogManager_1.default.getInstance().log(req.status);
          4 === req.readyState && req.status >= 200 && req.status < 400 && callfunc(req);
        };
        req.send();
      };
      ToolUtils.prototype.scaleBackgroundBG = function(node) {
        var showAll = Math.min(cc.view.getCanvasSize().width / node.width, cc.view.getCanvasSize().height / node.height);
        var realWidth = node.width * showAll;
        var realHeight = node.height * showAll;
        node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
      };
      ToolUtils.prototype.dockLeft = function(node, disX) {
        cc.log("cc.view.getCanvasSize().width : ", cc.view.getCanvasSize().width);
        var x = -cc.view.getCanvasSize().width + disX;
        cc.log("x : ", x);
        node.x = x;
      };
      ToolUtils.prototype.dockRight = function(node, disX) {
        var x = cc.view.getCanvasSize().width - disX;
        node.x = x;
      };
      ToolUtils.prototype.dockTop = function(node, disY) {
        var y = cc.view.getCanvasSize().height - disY;
        node.y = y;
      };
      ToolUtils.prototype.dockDown = function(node, disY) {
        var y = -cc.view.getCanvasSize().height + disY;
        node.y = y;
      };
      ToolUtils.prototype.dockLeftTop = function(node, disX, disY) {
        this.dockLeft(node, disX);
        this.dockTop(node, disY);
      };
      ToolUtils.prototype.dockLeftDown = function(node, disX, disY) {
        this.dockLeft(node, disX);
        this.dockDown(node, disY);
      };
      ToolUtils.prototype.dockRightTop = function(node, disX, disY) {
        this.dockRight(node, disX);
        this.dockTop(node, disY);
      };
      ToolUtils.prototype.dockRightDown = function(node, disX, disY) {
        this.dockRight(node, disX);
        this.dockDown(node, disY);
      };
      ToolUtils._ins = null;
      return ToolUtils;
    }();
    exports.default = ToolUtils;
    cc._RF.pop();
  }, {
    "../manager/LogManager": "LogManager"
  } ],
  UISuperItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0217l/PaVBqoKe4HJBER3w", "UISuperItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("./UISuperLayout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UISpuerItem = function(_super) {
      __extends(UISpuerItem, _super);
      function UISpuerItem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Object.defineProperty(UISpuerItem.prototype, "width", {
        get: function() {
          return this.layout.vertical ? (this.layout.accommodWidth - this.layout.spacingWidth) / this.layout.column : this.node.width * this.layout.getUsedScaleValue(this.node.scaleX);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerItem.prototype, "height", {
        get: function() {
          return this.layout.horizontal ? (this.layout.accommodHeight - this.layout.spacingWidth) / this.layout.column : this.node.height * this.layout.getUsedScaleValue(this.node.scaleY);
        },
        enumerable: false,
        configurable: true
      });
      UISpuerItem.prototype.onLoad = function() {
        this.node["watchSelf"] = this.watchSelf.bind(this);
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
          cc.warn("UISuperItem: item\u4e0d\u5141\u8bb8\u6302cc.Widget\u7ec4\u4ef6 \u8bf7\u624b\u52a8\u79fb\u9664");
          this.node.removeComponent(widget);
        }
      };
      UISpuerItem.prototype.init = function(layout) {
        this.layout = layout;
        this.layout.node.on(UISuperLayout_1.UIChangeBrotherEvnet, this.onChangeBrother, this);
        this.originSize = cc.size(this.width, this.height);
        this.node.setContentSize(this.originSize);
        this.originScale = cc.v2(this.node.scaleX, this.node.scaleY);
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this);
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this);
        this.onChangeBrother();
      };
      UISpuerItem.prototype.onDisable = function() {
        this.layout.node.off(UISuperLayout_1.UIChangeBrotherEvnet, this.onChangeBrother, this);
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this);
        this.node.off(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this);
        this.unlisten();
      };
      UISpuerItem.prototype.onChangeBrother = function() {
        var _a;
        var _brother = this.layout.getBrotherNode(this.node);
        if ((null === _brother || void 0 === _brother ? void 0 : _brother.uuid) == (null === (_a = this.brother) || void 0 === _a ? void 0 : _a.uuid)) return;
        this.unlisten();
        this.brother = _brother;
        this.listen();
        this.watchBrother();
      };
      UISpuerItem.prototype.listen = function() {
        var _a, _b;
        null === (_a = this.brother) || void 0 === _a ? void 0 : _a.on("leave", this.unlisten, this);
        null === (_b = this.brother) || void 0 === _b ? void 0 : _b.on(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this);
      };
      UISpuerItem.prototype.unlisten = function() {
        var _a, _b;
        null === (_a = this.brother) || void 0 === _a ? void 0 : _a.off("leave", this.unlisten, this);
        null === (_b = this.brother) || void 0 === _b ? void 0 : _b.off(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this);
        this.brother = null;
      };
      UISpuerItem.prototype.watchSize = function() {
        if (this.layout.column > 1) {
          this.node.setContentSize(this.originSize);
          this.node.setScale(this.originScale);
        } else {
          this.brother ? this.watchBrother() : this.node.emit(cc.Node.EventType.POSITION_CHANGED);
          this.layout.resetScrollView();
        }
      };
      UISpuerItem.prototype.watchBrother = function() {
        if (!this.brother) return;
        this.layout.headerToFooter ? this.headerToFooterRelativeToFooter(this.brother) : this.footerToHeaderRelativeToFooter(this.brother);
      };
      UISpuerItem.prototype.isOutOfBoundary = function(offset) {
        if (this.layout.vertical && 0 == offset.y) return true;
        if (this.layout.horizontal && 0 == offset.x) return true;
        return false;
      };
      UISpuerItem.prototype.footerToHeaderWatchHeader = function() {
        if (this.layout.getSiblingIndex(this.node) >= this.layout.column) return;
        var index = this.layout.footer["index"] + 1;
        if (index >= this.layout.maxItemTotal) {
          if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter) return;
          index = 0;
        }
        var offset = this.layout.isOutOfBoundaryFooter(this.node);
        if (!this.isOutOfBoundary(offset)) return;
        this.node["index"] = index;
        this.layout.notifyRefreshItem(this.node);
        this.node.emit("leave");
        this.layout.setSiblingIndex(this.node, this.layout.children.length - 1);
      };
      UISpuerItem.prototype.footerToHeaderWatchFooter = function() {
        if (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column) return;
        var index = this.layout.header["index"] - 1;
        if (index < 0) {
          if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter) return;
          index = this.node["index"];
        }
        var offset = this.layout.isOutOfBoundaryHeader(this.node);
        if (!this.isOutOfBoundary(offset)) return;
        this.node["index"] = index;
        this.layout.notifyRefreshItem(this.node);
        this.node.emit("leave");
        this.unlisten();
        this.footerToHeaderRelativeToHeader(this.layout.header);
        this.layout.setSiblingIndex(this.node, 0);
      };
      UISpuerItem.prototype.headerToFooterWatchHeader = function() {
        if (this.layout.getSiblingIndex(this.node) >= this.layout.column) return;
        var index = this.layout.footer["index"] + 1;
        if (index > this.layout.maxItemTotal - 1) {
          if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter) return;
          index = 0;
        }
        var offset = this.layout.isOutOfBoundaryHeader(this.node);
        if (!this.isOutOfBoundary(offset)) return;
        this.node["index"] = index;
        this.layout.notifyRefreshItem(this.node);
        this.node.emit("leave");
        this.layout.setSiblingIndex(this.node, this.layout.children.length - 1);
      };
      UISpuerItem.prototype.headerToFooterWatchFooter = function() {
        if (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column) return;
        var index = this.layout.header["index"] - 1;
        if (index < 0) {
          if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter) return;
          index = this.node["index"];
        }
        var offset = this.layout.isOutOfBoundaryFooter(this.node);
        if (!this.isOutOfBoundary(offset)) return;
        this.node["index"] = index;
        this.layout.notifyRefreshItem(this.node);
        this.node.emit("leave");
        this.unlisten();
        this.headerToFooterRelativeToHeader(this.layout.header);
        this.layout.setSiblingIndex(this.node, 0);
      };
      UISpuerItem.prototype.watchSelf = function(isScrollToFooter) {
        isScrollToFooter ? this.layout.headerToFooter ? this.headerToFooterWatchFooter() : this.footerToHeaderWatchHeader() : this.layout.headerToFooter ? this.headerToFooterWatchHeader() : this.footerToHeaderWatchFooter();
      };
      UISpuerItem.prototype.footerToHeaderRelativeToHeader = function(relative) {
        var pos = this.node.getPosition();
        if (this.layout.vertical) {
          if (this.layout.isGroupHeader(relative)) {
            pos.x = this.layout.getGroupFooter(this.node).x;
            pos.y = this.layout.getGroupBottomY(this.node, relative);
          } else {
            pos.x = this.layout.getGroupLeftX(this.node, relative);
            pos.y = relative.y;
          }
          0 == this.node["index"] && (pos.x = this.layout.getGroupHeader(this.node).x);
        } else {
          if (this.layout.isGroupHeader(relative)) {
            pos.x = this.layout.getGroupRightX(this.node, relative);
            pos.y = this.layout.getGroupFooter(this.node).y;
          } else {
            pos.x = relative.x;
            pos.y = this.layout.getGroupTopY(this.node, relative);
          }
          0 == this.node["index"] && (pos.y = this.layout.getGroupHeader(this.node).y);
        }
        this.node.setPosition(pos);
      };
      UISpuerItem.prototype.footerToHeaderRelativeToFooter = function(relative) {
        var pos = this.node.getPosition();
        if (this.layout.vertical) if (this.layout.isGroupFooter(relative)) {
          pos.x = this.layout.getGroupHeader(this.node).x;
          pos.y = this.layout.getGroupTopY(this.node, relative);
        } else {
          pos.x = this.layout.getGroupRightX(this.node, relative);
          pos.y = relative.y;
        } else if (this.layout.isGroupFooter(relative)) {
          pos.x = this.layout.getGroupLeftX(this.node, relative);
          pos.y = this.layout.getGroupHeader(this.node).y;
        } else {
          pos.x = relative.x;
          pos.y = this.layout.getGroupBottomY(this.node, relative);
        }
        this.node.setPosition(pos);
      };
      UISpuerItem.prototype.headerToFooterRelativeToHeader = function(relative) {
        var pos = this.node.getPosition();
        if (this.layout.vertical) {
          if (this.layout.isGroupHeader(relative)) {
            pos.x = this.layout.getGroupFooter(this.node).x;
            pos.y = this.layout.getGroupTopY(this.node, relative);
          } else {
            pos.x = this.layout.getGroupLeftX(this.node, relative);
            pos.y = relative.y;
          }
          0 == this.node["index"] && (pos.x = this.layout.getGroupHeader(this.node).x);
        } else {
          if (this.layout.isGroupHeader(relative)) {
            pos.x = this.layout.getGroupLeftX(this.node, relative);
            pos.y = this.layout.getGroupFooter(this.node).y;
          } else {
            pos.x = relative.x;
            pos.y = this.layout.getGroupTopY(this.node, relative);
          }
          0 == this.node["index"] && (pos.y = this.layout.getGroupHeader(this.node).y);
        }
        this.node.setPosition(pos);
      };
      UISpuerItem.prototype.headerToFooterRelativeToFooter = function(relative) {
        var pos = this.node.getPosition();
        if (this.layout.vertical) if (this.layout.isGroupFooter(relative)) {
          pos.x = this.layout.getGroupHeader(this.node).x;
          pos.y = this.layout.getGroupBottomY(this.node, relative);
        } else {
          pos.x = this.layout.getGroupRightX(this.node, relative);
          pos.y = relative.y;
        } else if (this.layout.isGroupFooter(relative)) {
          pos.x = this.layout.getGroupRightX(this.node, relative);
          pos.y = this.layout.getGroupHeader(this.node).y;
        } else {
          pos.x = relative.x;
          pos.y = this.layout.getGroupBottomY(this.node, relative);
        }
        this.node.setPosition(pos);
      };
      UISpuerItem = __decorate([ ccclass ], UISpuerItem);
      return UISpuerItem;
    }(cc.Component);
    exports.default = UISpuerItem;
    cc._RF.pop();
  }, {
    "./UISuperLayout": "UISuperLayout"
  } ],
  UISuperLayout: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29398ZH/uZIvIFYVivQukim", "UISuperLayout");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UISuperDirection = exports.UISuperAxis = exports.UIChangeBrotherEvnet = void 0;
    var UISuperScrollView_1 = require("./UISuperScrollView");
    var UISuperItem_1 = require("./UISuperItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var EPSILON = 1e-4;
    exports.UIChangeBrotherEvnet = "UIChangeBrotherEvnet";
    var UISuperAxis;
    (function(UISuperAxis) {
      UISuperAxis[UISuperAxis["HORIZONTAL"] = 0] = "HORIZONTAL";
      UISuperAxis[UISuperAxis["VERTICAL"] = 1] = "VERTICAL";
    })(UISuperAxis = exports.UISuperAxis || (exports.UISuperAxis = {}));
    var UISuperDirection;
    (function(UISuperDirection) {
      UISuperDirection[UISuperDirection["HEADER_TO_FOOTER"] = 0] = "HEADER_TO_FOOTER";
      UISuperDirection[UISuperDirection["FOOTER_TO_HEADER"] = 1] = "FOOTER_TO_HEADER";
    })(UISuperDirection = exports.UISuperDirection || (exports.UISuperDirection = {}));
    var UISuperLayout = function(_super) {
      __extends(UISuperLayout, _super);
      function UISuperLayout() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.startAxis = UISuperAxis.VERTICAL;
        _this.direction = UISuperDirection.HEADER_TO_FOOTER;
        _this.paddingTop = 0;
        _this.paddingBottom = 0;
        _this.paddingLeft = 0;
        _this.paddingRight = 0;
        _this.spacing = cc.Vec2.ZERO;
        _this.column = 2;
        _this.multiple = 2;
        _this.prefab = null;
        _this.headerLoop = false;
        _this.footerLoop = false;
        _this.affectedByScale = true;
        _this.refreshItemEvents = [];
        _this._isinited = false;
        _this._maxPrefabTotal = 0;
        _this._children = [];
        _this._scrollView = null;
        _this._maxItemTotal = 0;
        _this._prevLayoutPosition = cc.Vec2.ZERO;
        _this.scrollToHeaderOrFooter = false;
        return _this;
      }
      Object.defineProperty(UISuperLayout.prototype, "layoutDirection", {
        get: function() {
          var pos = cc.Vec2.ZERO;
          this.vertical ? pos.y = this.node.y - this._prevLayoutPosition.y : pos.x = this.node.x - this._prevLayoutPosition.x;
          this._prevLayoutPosition = this.node.getPosition();
          return pos;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "isScrollToFooter", {
        get: function() {
          return this.vertical ? this.layoutDirection.y < 0 : this.layoutDirection.x > 0;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "children", {
        get: function() {
          return this._children;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "maxItemTotal", {
        get: function() {
          return this._maxItemTotal;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "maxPrefabTotal", {
        get: function() {
          return this._maxPrefabTotal;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "viewSize", {
        get: function() {
          this._viewSize || (this._viewSize = this.scrollView.view.getContentSize());
          return this._viewSize;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "vertical", {
        get: function() {
          return this.startAxis == UISuperAxis.VERTICAL;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "horizontal", {
        get: function() {
          return this.startAxis == UISuperAxis.HORIZONTAL;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "headerToFooter", {
        get: function() {
          return this.direction == UISuperDirection.HEADER_TO_FOOTER;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footerToHeader", {
        get: function() {
          return this.direction == UISuperDirection.FOOTER_TO_HEADER;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "spacingWidth", {
        get: function() {
          return this.spacing.x * (this.column - 1);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "spacingHeight", {
        get: function() {
          return this.spacing.y * (this.column - 1);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "accommodWidth", {
        get: function() {
          return this.viewSize.width - this.paddingLeft - this.paddingRight;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "accommodHeight", {
        get: function() {
          return this.viewSize.height - this.paddingTop - this.paddingBottom;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "scrollView", {
        get: function() {
          this._scrollView || (this._scrollView = this.node.parent.parent.getComponent(UISuperScrollView_1.default));
          return this._scrollView;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "header", {
        get: function() {
          return this._children[0];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footer", {
        get: function() {
          return this._children[this._children.length - 1];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "topBoundary", {
        get: function() {
          return this.headerToFooter ? this.headerBoundaryY + this.paddingTop : this.footerBoundaryY + this.paddingTop;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "bottomBoundary", {
        get: function() {
          return this.headerToFooter ? this.footerBoundaryY - this.paddingBottom : this.headerBoundaryY - this.paddingBottom;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "leftBoundary", {
        get: function() {
          return this.headerToFooter ? this.headerBoundaryX - this.paddingLeft : this.footerBoundaryX - this.paddingLeft;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "rightBoundary", {
        get: function() {
          return this.headerToFooter ? this.footerBoundaryX + this.paddingRight : this.headerBoundaryX + this.paddingRight;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "headerBoundaryX", {
        get: function() {
          return this.headerToFooter ? this.node.x + this.header.x - this.header.anchorX * this.getScaleWidth(this.header) : this.node.x + this.header.x + (1 - this.header.anchorX) * this.getScaleWidth(this.header);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "headerBoundaryY", {
        get: function() {
          return this.headerToFooter ? this.node.y + this.header.y + (1 - this.header.anchorY) * this.getScaleHeight(this.header) : this.node.y + this.header.y - this.header.anchorY * this.getScaleHeight(this.header);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footerBoundaryX", {
        get: function() {
          return this.headerToFooter ? this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.getScaleWidth(this.footer) : this.node.x + this.footer.x - this.footer.anchorX * this.getScaleWidth(this.footer);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footerBoundaryY", {
        get: function() {
          return this.headerToFooter ? this.node.y + this.footer.y - this.footer.anchorY * this.getScaleHeight(this.footer) : this.node.y + this.footer.y + (1 - this.footer.anchorY) * this.getScaleHeight(this.footer);
        },
        enumerable: false,
        configurable: true
      });
      UISuperLayout.prototype.getContentSize = function() {
        var size = this.getReallySize();
        var viewSize = this.scrollView.view.getContentSize();
        size.height < viewSize.height && (size.height = viewSize.height);
        size.width < viewSize.width && (size.width = viewSize.width);
        return size;
      };
      UISuperLayout.prototype.getReallySize = function() {
        if (0 == this.node.childrenCount) return this.viewSize;
        var size = cc.Size.ZERO;
        if (this.headerToFooter) {
          size.width = this.footerBoundaryX + -this.headerBoundaryX + this.paddingLeft + this.paddingRight;
          size.height = this.headerBoundaryY + -this.footerBoundaryY + this.paddingTop + this.paddingBottom;
        } else {
          size.width = this.headerBoundaryX + -this.footerBoundaryX + this.paddingLeft + this.paddingRight;
          size.height = this.footerBoundaryY + -this.headerBoundaryY + this.paddingTop + this.paddingBottom;
        }
        return size;
      };
      UISuperLayout.prototype.resetScrollView = function() {
        this.scrollView.reset();
      };
      UISuperLayout.prototype.getUsedScaleValue = function(value) {
        return this.affectedByScale ? Math.abs(value) : 1;
      };
      UISuperLayout.prototype.total = function(value) {
        return __awaiter(this, void 0, void 0, function() {
          var dataOffset, reallyOffset;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.scrollView.stopAutoScroll();
              this.scrollView.release();
              this.initlized();
              return [ 4, this.asyncCreateItem(value) ];

             case 1:
              _a.sent();
              dataOffset = this.getDataOffset(value);
              reallyOffset = this.getReallyOffset(dataOffset);
              this.refreshItems(value, reallyOffset);
              this._maxItemTotal = value;
              return [ 2 ];
            }
          });
        });
      };
      UISuperLayout.prototype.getBrotherNode = function(node) {
        var index = this.getSiblingIndex(node) - 1;
        return this._children[index];
      };
      UISuperLayout.prototype.isGroupHeader = function(node) {
        var xOry = this.getGroupHeader(node);
        var pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y);
        var self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y);
        return self.fuzzyEquals(pos, EPSILON);
      };
      UISuperLayout.prototype.isGroupFooter = function(node) {
        var xOry = this.getGroupFooter(node);
        var pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y);
        var self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y);
        return self.fuzzyEquals(pos, EPSILON);
      };
      UISuperLayout.prototype.getGroupHeader = function(node) {
        var pos = cc.Vec2.ZERO;
        if (!node) return pos;
        if (this.vertical) if (this.headerToFooter) {
          pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft * node.scaleX - this.node.anchorX * this.viewSize.width * node.scaleX;
          pos.y = (1 - node.anchorY) * -this.getScaleHeight(node) - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
        } else {
          pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width;
          pos.y = node.anchorY * this.getScaleHeight(node) + this.paddingBottom - this.node.anchorY * this.viewSize.height;
        } else if (this.headerToFooter) {
          pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width;
          pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
        } else {
          pos.x = this.accommodWidth * this.node.anchorX - this.getScaleWidth(node) * (1 - node.anchorX);
          pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
        }
        return pos;
      };
      UISuperLayout.prototype.getGroupFooter = function(node) {
        var pos = cc.Vec2.ZERO;
        if (!node) return pos;
        if (this.vertical) {
          pos.x = (this.accommodWidth + this.paddingLeft) * this.node.anchorX - (this.getScaleWidth(node) * (1 - node.anchorX) + this.node.anchorX * this.paddingRight);
          pos.y = node.y;
        } else {
          pos.x = node.x;
          pos.y = -((this.accommodHeight + this.paddingTop) * this.node.anchorY - this.getScaleHeight(node) * node.anchorY) + (1 - node.anchorY) * this.paddingBottom;
        }
        return pos;
      };
      UISuperLayout.prototype.getGroupRightX = function(node, relative) {
        if (!node || !relative) return this.getGroupHeader(node).x;
        var prevWidth = relative.x + this.getScaleWidth(relative) * (1 - relative.anchorX);
        var selfWidth = this.getScaleWidth(node) * node.anchorX;
        return prevWidth + selfWidth + this.spacing.x;
      };
      UISuperLayout.prototype.getGroupLeftX = function(node, relative) {
        if (!node || !relative) return this.getGroupFooter(node).x;
        var prevWidth = relative.x - this.getScaleWidth(relative) * relative.anchorX;
        var selfWidth = this.getScaleWidth(node) * (1 - node.anchorX);
        return prevWidth - selfWidth - this.spacing.x;
      };
      UISuperLayout.prototype.getGroupBottomY = function(node, relative) {
        var prevHeight = relative.y - this.getScaleHeight(relative) * relative.anchorY;
        var selfHeight = this.getScaleHeight(node) * (1 - node.anchorY);
        return prevHeight - selfHeight - this.spacing.y;
      };
      UISuperLayout.prototype.getGroupTopY = function(node, relative) {
        var prevHeight = relative.y + this.getScaleHeight(relative) * (1 - relative.anchorY);
        var selfHeight = this.getScaleHeight(node) * node.anchorY;
        return prevHeight + selfHeight + this.spacing.y;
      };
      UISuperLayout.prototype.isOutOfBoundaryHeader = function(node, multiple) {
        void 0 === multiple && (multiple = 1.5);
        var width = node.width * this.getUsedScaleValue(node.scaleX) * multiple;
        var height = -node.height * this.getUsedScaleValue(node.scaleY) * multiple;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
      };
      UISuperLayout.prototype.isOutOfBoundaryFooter = function(node, multiple) {
        void 0 === multiple && (multiple = 1.5);
        var width = -node.width * this.getUsedScaleValue(node.scaleX) * multiple;
        var height = node.height * this.getUsedScaleValue(node.scaleY) * multiple;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
      };
      UISuperLayout.prototype.scrollToHeader = function(timeInSecond, attenuated) {
        this.scrollToHeaderOrFooter = timeInSecond > 0;
        this.scrollView.stopAutoScroll();
        this.resetToHeader();
        this.headerToFooter ? this.vertical ? this.scrollView.scrollToTop(timeInSecond, attenuated) : this.scrollView.scrollToLeft(timeInSecond, attenuated) : this.vertical ? this.scrollView.scrollToBottom(timeInSecond, attenuated) : this.scrollView.scrollToRight(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.scrollToFooter = function(timeInSecond, attenuated) {
        this.scrollToHeaderOrFooter = timeInSecond > 0;
        this.scrollView.stopAutoScroll();
        this.resetToFooter();
        this.headerToFooter ? this.vertical ? this.scrollView.scrollToBottom(timeInSecond, attenuated) : this.scrollView.scrollToRight(timeInSecond, attenuated) : this.vertical ? this.scrollView.scrollToTop(timeInSecond, attenuated) : this.scrollView.scrollToLeft(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.notifyRefreshItem = function(target) {
        cc.Component.EventHandler.emitEvents(this.refreshItemEvents, target, target["index"]);
      };
      UISuperLayout.prototype.getSiblingIndex = function(node) {
        return this._children.indexOf(node);
      };
      UISuperLayout.prototype.setSiblingIndex = function(node, index) {
        index = -1 !== index ? index : this._children.length - 1;
        var oldIndex = this._children.indexOf(node);
        if (index !== oldIndex) {
          this._children.splice(oldIndex, 1);
          index < this._children.length ? this._children.splice(index, 0, node) : this._children.push(node);
          this.node.emit(exports.UIChangeBrotherEvnet);
        }
      };
      UISuperLayout.prototype.onLoad = function() {
        this.initlized();
      };
      UISuperLayout.prototype.initlized = function() {
        var _this = this;
        if (this._isinited) return;
        this.node.anchorX = .5;
        this.node.anchorY = .5;
        this.node.setContentSize(this.viewSize);
        this.node.getContentSize = this.getContentSize.bind(this);
        this.node.setPosition(cc.Vec2.ZERO);
        this.column = this.column < 1 ? 1 : this.column;
        this.node.on(cc.Node.EventType.POSITION_CHANGED, function() {
          var flag = _this.isScrollToFooter;
          _this.headerToFooter ? flag ? _this.footerToHeaderWatchChilds(flag) : _this.headerToFooterWatchChilds(flag) : flag ? _this.headerToFooterWatchChilds(flag) : _this.footerToHeaderWatchChilds(flag);
          (_this.vertical && 0 == _this.node.y || _this.horizontal && 0 == _this.node.x) && _this.header.setPosition(_this.getGroupHeader(_this.header));
        }, this);
        this._isinited = true;
      };
      UISuperLayout.prototype.getScaleWidth = function(node) {
        return node.width * this.getUsedScaleValue(node.scaleX);
      };
      UISuperLayout.prototype.getScaleHeight = function(node) {
        return node.height * this.getUsedScaleValue(node.scaleY);
      };
      UISuperLayout.prototype.getTempChildren = function() {
        var list = [];
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          list.push(child);
        }
        return list;
      };
      UISuperLayout.prototype.headerToFooterWatchChilds = function(flag) {
        var children = this.getTempChildren();
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          child["watchSelf"](flag);
        }
      };
      UISuperLayout.prototype.footerToHeaderWatchChilds = function(flag) {
        var children = this.getTempChildren();
        for (var i = children.length - 1; i >= 0; i--) {
          var child = children[i];
          child["watchSelf"](flag);
        }
      };
      UISuperLayout.prototype.getDataOffset = function(value) {
        if (this.footer && this.footer["index"] + 1 >= value) {
          var offset = this.footer["index"] + 1 - value;
          return 0 == offset ? 0 : -offset;
        }
        if (0 == this._maxItemTotal || value < this._maxItemTotal || this._maxItemTotal < this._maxPrefabTotal) return 0;
        if (this.isGroupFooter(this.footer)) return 0;
        return value - this._maxItemTotal;
      };
      UISuperLayout.prototype.getReallyOffset = function(dataOffset) {
        if (!this.header) return 0;
        if (dataOffset > 0) {
          for (var i = 0; i < dataOffset; i++) {
            if (this.isGroupFooter(this.footer)) return i;
            var pos = this.header.getPosition();
            if (this.vertical) if (this.isGroupFooter(this.header)) {
              this.headerToFooter ? pos.y = this.getGroupBottomY(this.header, this.header) : pos.y = this.getGroupTopY(this.header, this.header);
              pos.x = this.getGroupHeader(this.header).x;
            } else pos.x = this.getGroupRightX(this.header, this.header); else if (this.isGroupFooter(this.header)) {
              this.headerToFooter ? pos.x = this.getGroupRightX(this.header, this.header) : pos.x = this.getGroupLeftX(this.header, this.header);
              pos.y = this.getGroupHeader(this.header).y;
            } else pos.y = this.getGroupBottomY(this.header, this.header);
            this.header.setPosition(pos);
          }
          return dataOffset;
        }
        for (var i = 0; i < Math.abs(dataOffset); i++) {
          var pos = cc.Vec2.ZERO;
          if (this.vertical) if (this.isGroupHeader(this.header)) {
            pos.x = this.getGroupFooter(this.header).x;
            this.headerToFooter ? pos.y = this.getGroupTopY(this.header, this.header) : pos.y = this.getGroupBottomY(this.header, this.header);
          } else {
            pos.x = this.getGroupLeftX(this.header, this.header);
            pos.y = this.header.y;
          } else if (this.isGroupHeader(this.header)) {
            pos.y = this.getGroupFooter(this.header).y;
            this.headerToFooter ? pos.x = this.getGroupLeftX(this.header, this.header) : pos.x = this.getGroupRightX(this.header, this.header);
          } else {
            pos.y = this.getGroupTopY(this.header, this.header);
            pos.x = this.header.x;
          }
          this.header.setPosition(pos);
        }
        this.scrollView.calculateBoundary();
        return dataOffset;
      };
      UISuperLayout.prototype.refreshItems = function(value, offset) {
        void 0 === offset && (offset = 0);
        if (!this.header) return;
        var startIndex = this.header["index"] - 1 + offset;
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          startIndex++;
          startIndex > value - 1 ? startIndex = 0 : startIndex < 0 && (startIndex = value - 1);
          child["index"] = startIndex;
          this.notifyRefreshItem(child);
        }
      };
      UISuperLayout.prototype.resetToHeader = function() {
        var _a, _b;
        for (var i = 0; i < this._children.length; i++) {
          var child = this._children[i];
          child["index"] = i;
          this.notifyRefreshItem(child);
        }
        this.headerLoop || this.footerLoop ? this.scrollToHeaderOrFooter || (null === (_b = this.header) || void 0 === _b ? void 0 : _b.setPosition(this.getGroupHeader(this.header))) : null === (_a = this.header) || void 0 === _a ? void 0 : _a.setPosition(this.getGroupHeader(this.header));
      };
      UISuperLayout.prototype.resetToFooter = function() {
        var index = this._maxItemTotal;
        for (var i = this._children.length - 1; i >= 0; i--) {
          var child = this._children[i];
          child["index"] = --index;
          this.notifyRefreshItem(child);
        }
      };
      UISuperLayout.prototype.removeChilds = function(value) {
        var length = this.node.childrenCount - value;
        for (var i = 0; i < length; i++) {
          var child = this.footer;
          this.remChild(child);
          child.destroy();
          this.node.removeChild(child);
        }
        if (!this.header) return;
        var pos = this.getGroupHeader(this.header);
        this.vertical ? this.header.x = pos.x : this.header.y = pos.y;
      };
      UISuperLayout.prototype.asyncCreateItem = function(value) {
        var _a;
        return __awaiter(this, void 0, void 0, function() {
          var total;
          var _this = this;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              null === (_a = this._gener) || void 0 === _a ? void 0 : _a.return("");
              if (this.node.childrenCount > value) return [ 2, this.removeChilds(value) ];
              if (this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.childrenCount) return [ 2 ];
              total = value - this.node.childrenCount;
              this._gener = this.getGeneratorLength(total, function() {
                var child = cc.instantiate(_this.prefab);
                child["index"] = _this.node.childrenCount;
                _this.addChild(child);
                var spuerItem = child.getComponent(UISuperItem_1.default) || child.addComponent(UISuperItem_1.default);
                _this.node.addChild(child);
                spuerItem.init(_this);
                if (1 == _this.node.childrenCount) {
                  var pos = _this.getGroupHeader(_this.header);
                  _this.header.setPosition(pos);
                  _this.scrollView.calculateBoundary();
                }
                var selfHorW, viewHorW;
                if (_this.vertical) {
                  selfHorW = _this.getReallySize().height;
                  viewHorW = _this.viewSize.height;
                } else {
                  selfHorW = _this.getReallySize().width;
                  viewHorW = _this.viewSize.width;
                }
                if (selfHorW >= viewHorW * _this.multiple && _this.isGroupFooter(_this.footer)) {
                  _this._maxPrefabTotal = _this.node.childrenCount;
                  return false;
                }
                return true;
              });
              return [ 4, this.exeGenerator(this._gener, 10) ];

             case 1:
              _b.sent();
              return [ 2 ];
            }
          });
        });
      };
      UISuperLayout.prototype.addChild = function(node) {
        this._children.push(node);
        this.node.emit(exports.UIChangeBrotherEvnet);
      };
      UISuperLayout.prototype.remChild = function(node) {
        var index = this._children.indexOf(node);
        if (-1 == index) return;
        this._children.splice(index, 1);
        this.node.emit(exports.UIChangeBrotherEvnet);
      };
      UISuperLayout.prototype.getGeneratorLength = function(length, callback) {
        var _i, i, result;
        var params = [];
        for (_i = 2; _i < arguments.length; _i++) params[_i - 2] = arguments[_i];
        return __generator(this, function(_a) {
          switch (_a.label) {
           case 0:
            i = 0;
            _a.label = 1;

           case 1:
            if (!(i < length)) return [ 3, 5 ];
            result = callback.apply(void 0, __spreadArrays([ i ], params));
            if (!result) return [ 3, 3 ];
            return [ 4 ];

           case 2:
            _a.sent();
            return [ 3, 4 ];

           case 3:
            return [ 2 ];

           case 4:
            i++;
            return [ 3, 1 ];

           case 5:
            return [ 2 ];
          }
        });
      };
      UISuperLayout.prototype.exeGenerator = function(generator, duration) {
        return new Promise(function(resolve, reject) {
          var gen = generator;
          var execute = function() {
            var startTime = new Date().getTime();
            for (var iter = gen.next(); ;iter = gen.next()) {
              if (null == iter || iter.done) {
                resolve();
                return;
              }
              if (new Date().getTime() - startTime > duration) {
                setTimeout(function() {
                  return execute();
                }, 1e3 * cc.director.getDeltaTime());
                return;
              }
            }
          };
          execute();
        });
      };
      __decorate([ property({
        type: cc.Enum(UISuperAxis),
        displayName: "\u6392\u5217\u65b9\u5411"
      }) ], UISuperLayout.prototype, "startAxis", void 0);
      __decorate([ property({
        type: cc.Enum(UISuperDirection),
        displayName: "\u6392\u5217\u5b50\u8282\u70b9\u7684\u65b9\u5411"
      }) ], UISuperLayout.prototype, "direction", void 0);
      __decorate([ property({
        displayName: "\u4e0a\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingTop", void 0);
      __decorate([ property({
        displayName: "\u4e0b\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingBottom", void 0);
      __decorate([ property({
        displayName: "\u5de6\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingLeft", void 0);
      __decorate([ property({
        displayName: "\u53f3\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingRight", void 0);
      __decorate([ property({
        displayName: "\u95f4\u9694"
      }) ], UISuperLayout.prototype, "spacing", void 0);
      __decorate([ property({
        displayName: "\u6bcf\u7ec4item\u4e2a\u6570",
        tooltip: "\u5355\u884c\u7684\u5217\u6570 \u6216 \u5355\u5217\u7684\u884c\u6570"
      }) ], UISuperLayout.prototype, "column", void 0);
      __decorate([ property({
        displayName: "item\u521b\u5efa\u500d\u7387",
        tooltip: "\u76f8\u5bf9\u4e8eview\u7684\u5c3a\u5bf8 \u9ed8\u8ba42\u500d"
      }) ], UISuperLayout.prototype, "multiple", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "item Prefab"
      }) ], UISuperLayout.prototype, "prefab", void 0);
      __decorate([ property({
        displayName: "\u5934\u90e8\u6ed1\u52a8\u5faa\u73af"
      }) ], UISuperLayout.prototype, "headerLoop", void 0);
      __decorate([ property({
        displayName: "\u5c3e\u90e8\u6ed1\u52a8\u5faa\u73af"
      }) ], UISuperLayout.prototype, "footerLoop", void 0);
      __decorate([ property ], UISuperLayout.prototype, "affectedByScale", void 0);
      __decorate([ property(cc.Component.EventHandler) ], UISuperLayout.prototype, "refreshItemEvents", void 0);
      UISuperLayout = __decorate([ ccclass, menu("UISuperLayout") ], UISuperLayout);
      return UISuperLayout;
    }(cc.Component);
    exports.default = UISuperLayout;
    cc._RF.pop();
  }, {
    "./UISuperItem": "UISuperItem",
    "./UISuperScrollView": "UISuperScrollView"
  } ],
  UISuperScrollView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b76c4YBQgBBtaGj5CKetj0u", "UISuperScrollView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("./UISuperLayout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var EPSILON = 1e-4;
    var UISpuerScrollView = function(_super) {
      __extends(UISpuerScrollView, _super);
      function UISpuerScrollView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.headerOutOffset = 200;
        _this.headerMultiple = 2;
        _this.footerOutOffset = 200;
        _this.footerMultiple = 2;
        _this.pullDownEvents = [];
        _this.pullUpEvents = [];
        _this.isMoveHeader = false;
        _this.isMoveFooter = false;
        _this.isLockHeader = false;
        _this.isLockFooter = false;
        _this.headerProgress = 0;
        _this.footerProgress = 0;
        _this._layout = null;
        return _this;
      }
      Object.defineProperty(UISpuerScrollView.prototype, "view", {
        get: function() {
          return this["_view"];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "autoScrolling", {
        get: function() {
          return this["_autoScrolling"];
        },
        set: function(value) {
          this["_autoScrolling"] = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "layout", {
        get: function() {
          null == this._layout && (this._layout = this.content.getComponent(UISuperLayout_1.default));
          return this._layout;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "isHeader", {
        get: function() {
          var _a, _b, _c, _d;
          if (this.layout.headerToFooter) {
            if (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.header) return 0 == (null === (_b = this.layout) || void 0 === _b ? void 0 : _b.header["index"]);
          } else if (null === (_c = this.layout) || void 0 === _c ? void 0 : _c.footer) return (null === (_d = this.layout) || void 0 === _d ? void 0 : _d.footer["index"]) == this.layout.maxItemTotal - 1;
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "isFooter", {
        get: function() {
          var _a, _b, _c;
          if (this.layout.headerToFooter) {
            if (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.footer) return this.layout.footer["index"] == this.layout.maxItemTotal - 1;
          } else if (null === (_b = this.layout) || void 0 === _b ? void 0 : _b.header) return 0 == (null === (_c = this.layout) || void 0 === _c ? void 0 : _c.header["index"]);
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "isCalculPull", {
        get: function() {
          return this.pullDownEvents.length > 0 || this.pullUpEvents.length > 0;
        },
        enumerable: false,
        configurable: true
      });
      UISpuerScrollView.prototype.calculateBoundary = function() {
        this["_calculateBoundary"]();
      };
      UISpuerScrollView.prototype.getHowMuchOutOfBoundary = function(offset) {
        return this["_getHowMuchOutOfBoundary"](offset);
      };
      UISpuerScrollView.prototype.release = function() {
        this.isMoveHeader = false;
        this.isMoveFooter = false;
        if (this.isLockHeader || this.isLockFooter) {
          var outOfBoundary = this.getHowMuchOutOfBoundary();
          var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
          var autoScroll = true;
          if (0 == offset || this.isLockHeader && offset < 0 || this.isLockFooter && offset > 0) {
            this.clearProgress();
            autoScroll = false;
          }
          this.isLockHeader = false;
          this.isLockFooter = false;
          if (autoScroll) {
            this["_outOfBoundaryAmountDirty"] = true;
            this["_processInertiaScroll"]();
          }
        } else this.clearProgress();
      };
      UISpuerScrollView.prototype.reset = function() {
        this["_outOfBoundaryAmountDirty"] = true;
        var offset = this.getHowMuchOutOfBoundary();
        offset.fuzzyEquals(cc.v2(0, 0), EPSILON) || this["_processInertiaScroll"]();
      };
      UISpuerScrollView.prototype._onTouchMoved = function(event, captureListeners) {
        _super.prototype["_onTouchMoved"].call(this, event, captureListeners);
        if (this.isCalculPull) {
          var outOfBoundary = this.getHowMuchOutOfBoundary();
          var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
          if (offset > 0 && this.isHeader && !this.isLockHeader && !this.isLockFooter) {
            this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
            this.isMoveHeader = this.headerProgress >= this.headerMultiple;
            this.emitPullDownEvent({
              action: false,
              progress: this.headerProgress,
              progressStage: this.isMoveHeader ? "wait" : "touch"
            });
            this.emitPullUpEvent({
              action: false,
              progress: 0,
              progressStage: "release"
            });
          } else if (offset < 0 && this.isFooter && !this.isLockFooter && !this.isLockHeader) {
            this.footerProgress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
            this.isMoveFooter = this.footerProgress >= this.footerMultiple;
            this.emitPullUpEvent({
              action: false,
              progress: this.footerProgress,
              progressStage: this.isMoveFooter ? "wait" : "touch"
            });
            this.emitPullDownEvent({
              action: false,
              progress: 0,
              progressStage: "release"
            });
          }
        }
      };
      UISpuerScrollView.prototype._dispatchEvent = function(event) {
        _super.prototype["_dispatchEvent"].call(this, event);
        "scroll-ended" == event && (this.layout.scrollToHeaderOrFooter = false);
      };
      UISpuerScrollView.prototype._getContentTopBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.header) && this.layout.getReallySize().height > viewSize.height ? this.layout.topBoundary : this._getContentBottomBoundary() + viewSize.height;
        this.isHeader && this.isLockHeader && (local += this.headerOutOffset);
        return local;
      };
      UISpuerScrollView.prototype._getContentBottomBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.footer) && this.layout.getReallySize().height > viewSize.height ? this.layout.bottomBoundary : this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        this.isFooter && this.isLockFooter && (local -= this.footerOutOffset);
        return local;
      };
      UISpuerScrollView.prototype._getContentLeftBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.header) && this.layout.getReallySize().width > viewSize.width ? this.layout.leftBoundary : this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        this.isHeader && this.isLockHeader && (local -= this.headerOutOffset);
        return local;
      };
      UISpuerScrollView.prototype._getContentRightBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.footer) && this.layout.getReallySize().width > viewSize.width ? this.layout.rightBoundary : this._getContentLeftBoundary() + viewSize.width;
        this.isFooter && this.isLockFooter && (local += this.footerOutOffset);
        return local;
      };
      UISpuerScrollView.prototype._startAutoScroll = function(deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) if (this.isMoveHeader && !this.isLockHeader) {
          this.isLockHeader = true;
          this.vertical && (deltaMove.y -= this.headerOutOffset);
          this.horizontal && (deltaMove.x += this.headerOutOffset);
          this.emitPullDownEvent({
            action: true,
            progress: this.headerProgress,
            progressStage: "lock"
          });
        } else if (this.isMoveFooter && !this.isLockFooter) {
          this.isLockFooter = true;
          this.vertical && (deltaMove.y += this.footerOutOffset);
          this.horizontal && (deltaMove.x -= this.footerOutOffset);
          this.emitPullUpEvent({
            action: true,
            progress: this.footerProgress,
            progressStage: "lock"
          });
        }
        _super.prototype["_startAutoScroll"].call(this, deltaMove, timeInSecond, attenuated);
      };
      UISpuerScrollView.prototype._updateScrollBar = function(outOfBoundary) {
        _super.prototype["_updateScrollBar"].call(this, outOfBoundary);
        if (!this.isCalculPull) return;
        if (this["_autoScrollBraking"]) return;
        if (!this.autoScrolling) return;
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0) {
          var progress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
          var progressStage = void 0;
          if (this.isLockHeader) {
            this.headerProgress = 1 == this.headerProgress ? this.headerProgress : Math.max(progress, 1);
            progressStage = "lock";
          } else {
            this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress;
            progressStage = "release";
          }
          this.emitPullDownEvent({
            action: false,
            progress: this.headerProgress,
            progressStage: progressStage
          });
        } else if (offset < 0) {
          var progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
          var progressStage = void 0;
          if (this.isLockFooter) {
            this.footerProgress = 1 == this.footerProgress ? this.footerProgress : Math.max(progress, 1);
            progressStage = "lock";
          } else {
            this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress;
            progressStage = "release";
          }
          this.emitPullUpEvent({
            action: false,
            progress: this.footerProgress,
            progressStage: progressStage
          });
        } else 0 == offset && (this.isLockHeader || this.isLockFooter || this.clearProgress());
      };
      UISpuerScrollView.prototype.clearProgress = function() {
        this.headerProgress = 0;
        this.footerProgress = 0;
        this.emitPullDownEvent({
          action: false,
          progress: 0,
          progressStage: "release"
        });
        this.emitPullUpEvent({
          action: false,
          progress: 0,
          progressStage: "release"
        });
      };
      UISpuerScrollView.prototype.emitPullDownEvent = function(data) {
        cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data);
      };
      UISpuerScrollView.prototype.emitPullUpEvent = function(data) {
        cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data);
      };
      __decorate([ property({
        displayName: "\u9876\u90e8\u504f\u79fb\u91cf",
        tooltip: "\u4e0b\u62c9\u65f6\u8d85\u8fc7\u6b64\u504f\u79fb\u4f1a\u53d1\u9001\u4e0b\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "headerOutOffset", void 0);
      __decorate([ property({
        displayName: "\u6ee1\u8db3\u89e6\u53d1Header\u7684\u500d\u6570"
      }) ], UISpuerScrollView.prototype, "headerMultiple", void 0);
      __decorate([ property({
        displayName: "\u5e95\u90e8\u504f\u79fb\u91cf",
        tooltip: "\u4e0a\u62c9\u65f6\u8d85\u8fc7\u6b64\u504f\u79fb\u4f1a\u53d1\u9001\u4e0a\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "footerOutOffset", void 0);
      __decorate([ property({
        displayName: "\u6ee1\u8db3\u89e6\u53d1Footer\u7684\u500d\u6570"
      }) ], UISpuerScrollView.prototype, "footerMultiple", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u4e0b\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "pullDownEvents", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u4e0a\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "pullUpEvents", void 0);
      UISpuerScrollView = __decorate([ ccclass, menu("UISpuerScrollView") ], UISpuerScrollView);
      return UISpuerScrollView;
    }(cc.ScrollView);
    exports.default = UISpuerScrollView;
    cc._RF.pop();
  }, {
    "./UISuperLayout": "UISuperLayout"
  } ],
  UserInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77df3mk0qdHf6Go0S+yDT6p", "UserInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UserInfo = function() {
      function UserInfo() {
        this._uid = null;
        this._aid = 0;
        this._name = "";
        this._location = "\u4e2d\u56fd";
        this._userIP = "";
        this._iconURL = "";
        this._gender = 0;
        this._round = 0;
      }
      UserInfo.prototype.parseLoginData = function(data) {
        this._uid = data.userBaseInfo.uid;
        this._aid = data.userBaseInfo.aid;
        this._name = data.userBaseInfo.userNick;
        this._location = data.location;
        this._userIP = data.ip;
        this._iconURL = data.userBaseInfo.avatarUrl;
        cc.sys.isNative && cc.sys.localStorage("userAid", this._aid);
      };
      UserInfo.prototype.getUserInfo = function() {
        var info = {};
        info["name"] = this._name;
        info["iconUrl"] = this._iconURL;
        info["aid"] = this._aid;
        info["ip"] = this._userIP;
        info["location"] = this._location;
        info["uuid"] = this._uid;
        info["gender"] = this._gender;
        info["round"] = this._round;
        info["regTime"] = this._regTime;
        return info;
      };
      return UserInfo;
    }();
    exports.default = UserInfo;
    cc._RF.pop();
  }, {} ],
  Utf8Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d53aWbSxlB+J5EAXHGLYfd", "Utf8Utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utf8Utils = function() {
      function Utf8Utils() {}
      Utf8Utils.getInstance = function() {
        this._ins || (this._ins = new Utf8Utils());
        return this._ins;
      };
      Utf8Utils.prototype._encode = function(stringToEncode, insertBOM) {
        stringToEncode = stringToEncode.replace(/\r\n/g, "\n");
        var utftext = [];
        if (true == insertBOM) {
          utftext[0] = 239;
          utftext[1] = 187;
          utftext[2] = 191;
        }
        for (var n = 0; n < stringToEncode.length; n++) {
          var c = stringToEncode.charCodeAt(n);
          if (c < 128) utftext[utftext.length] = c; else if (c > 127 && c < 2048) {
            utftext[utftext.length] = c >> 6 | 192;
            utftext[utftext.length] = 63 & c | 128;
          } else {
            utftext[utftext.length] = c >> 12 | 224;
            utftext[utftext.length] = c >> 6 & 63 | 128;
            utftext[utftext.length] = 63 & c | 128;
          }
        }
        return utftext;
      };
      Utf8Utils.prototype.encode = function(stringToEncode) {
        return this._encode(stringToEncode, false);
      };
      Utf8Utils.prototype.encodeWithBOM = function(stringToEncode) {
        return this._encode(stringToEncode, true);
      };
      Utf8Utils.prototype.decode = function(dotNetBytes) {
        var result = "";
        var i = 0;
        var c = 0;
        var c2 = 0;
        var c3 = 0;
        dotNetBytes.length >= 3 && 239 == (239 & dotNetBytes[0]) && 187 == (187 & dotNetBytes[1]) && 191 == (191 & dotNetBytes[2]) && (i = 3);
        while (i < dotNetBytes.length) {
          c = 255 & dotNetBytes[i];
          if (c < 128) {
            result += String.fromCharCode(c);
            i++;
          } else if (c > 191 && c < 224) {
            if (i + 1 >= dotNetBytes.length) throw "Un-expected encoding error, UTF-8 stream truncated, or incorrect";
            c2 = 255 & dotNetBytes[i + 1];
            result += String.fromCharCode((31 & c) << 6 | 63 & c2);
            i += 2;
          } else {
            if (i + 2 >= dotNetBytes.length || i + 1 >= dotNetBytes.length) throw "Un-expected encoding error, UTF-8 stream truncated, or incorrect";
            c2 = 255 & dotNetBytes[i + 1];
            c3 = 255 & dotNetBytes[i + 2];
            result += String.fromCharCode((15 & c) << 12 | (63 & c2) << 6 | 63 & c3);
            i += 3;
          }
        }
        return result;
      };
      Utf8Utils._ins = null;
      return Utf8Utils;
    }();
    exports.default = Utf8Utils;
    cc._RF.pop();
  }, {} ],
  ViewBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5fb95iQJZ1FjbCTtPNpJMBE", "ViewBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewManager_1 = require("../manager/ViewManager");
    var ToolUtils_1 = require("../utils/ToolUtils");
    var EventManager_1 = require("../manager/EventManager");
    var SoundManager_1 = require("../manager/SoundManager");
    var NativeManager_1 = require("../manager/NativeManager");
    var ResourcesManager_1 = require("../manager/ResourcesManager");
    var BundleManager_1 = require("../manager/BundleManager");
    var LogManager_1 = require("../manager/LogManager");
    var ResConfig_1 = require("../../config/ResConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ViewBase = function(_super) {
      __extends(ViewBase, _super);
      function ViewBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._guiType = "";
        _this._userData = null;
        _this._closeShowAnimation = false;
        _this._isCloseAnimating = false;
        _this._root = null;
        _this.toolUtils = ToolUtils_1.default.getInstance();
        _this.viewManager = ViewManager_1.default.getInstance();
        _this.eventManager = EventManager_1.default.getInstance();
        _this.soundManager = SoundManager_1.default.getInstance();
        _this.nativeManager = NativeManager_1.default.getInstance();
        _this.sResources = ResourcesManager_1.default.getInstance().getGlobResources();
        _this.bundleManager = BundleManager_1.default.getInstance();
        _this.logUtil = LogManager_1.default.getInstance();
        _this.bodyBundleRes = BundleManager_1.default.getInstance().getBundleResByName(ResConfig_1.BdnmConfig.body);
        return _this;
      }
      ViewBase.prototype.setType = function(type) {
        this._guiType = type;
      };
      ViewBase.prototype.getType = function() {
        return this._guiType;
      };
      ViewBase.prototype.setUserData = function(data) {
        this._userData = data;
      };
      ViewBase.prototype.getUserData = function() {
        return this._userData;
      };
      ViewBase.prototype.closeShowAnimation = function() {
        this._closeShowAnimation = true;
      };
      ViewBase.prototype.initView = function(reset) {
        var _this = this;
        if (null === this.node) return;
        reset && this.node.setContentSize(cc.winSize);
        var mask = ToolUtils_1.default.getInstance().getNodeByName(this.node, "MASK");
        if (mask) {
          mask.setContentSize(cc.size(cc.winSize.width, cc.winSize.height));
          mask.on(cc.Node.EventType.TOUCH_START, function() {
            _this.onClickMask && _this.onClickMask();
            return true;
          });
        }
        var bg = ToolUtils_1.default.getInstance().getNodeByName(this.node, "BGIMG");
        bg && bg.on(cc.Node.EventType.TOUCH_START, function() {
          return true;
        });
        if (!this._closeShowAnimation) {
          this.node.opacity = 0;
          this.node.setScale(.7);
          cc.tween(this.node).to(.05, {
            scale: 1.1
          }, {
            easing: "sineIn"
          }).to(.03, {
            scale: 1
          }, {
            easing: "sineOut"
          }).call(function() {
            ViewManager_1.default.getInstance()._viewScriptStack.push(_this);
            _this.soundManager.play(_this.bundleManager.getCacheRes(ResConfig_1.BdnmConfig.body, "bd_mp3_open"));
          }).start();
          cc.tween(this.node).to(.08, {
            opacity: 255
          }).start();
        }
        this._closeShowAnimation = false;
        this.onShow && this.onShow();
      };
      ViewBase.prototype.hide = function() {
        var _this = this;
        cc.tween(this.node).to(.03, {
          scale: 1.1
        }, {
          easing: "sineIn"
        }).to(.05, {
          scale: .7
        }, {
          easing: "sineOut"
        }).call(function() {
          _this.node.active = false;
          _this.onHide && _this.onHide();
        }).start();
      };
      ViewBase.prototype.show = function() {
        this.node.opacity = 0;
        this.node.setScale(.7);
        cc.tween(this.node).to(.05, {
          scale: 1.1
        }, {
          easing: "sineIn"
        }).to(.03, {
          scale: 1
        }, {
          easing: "sineOut"
        }).start();
        cc.tween(this.node).to(.08, {
          opacity: 255
        }).start();
      };
      ViewBase.prototype._destroy = function() {
        ViewManager_1.default.getInstance().removeView(this._guiType);
        this._guiType = "";
        this._userData = null;
        this._closeShowAnimation = false;
        this._isCloseAnimating = false;
      };
      ViewBase.prototype.close = function(isNoAnim) {
        var _this = this;
        if (this._isCloseAnimating) return;
        if ("undefined" !== typeof isNoAnim && isNoAnim) {
          this.node.opacity = 0;
          this._destroy();
        } else {
          this._isCloseAnimating = true;
          cc.tween(this.node).to(.03, {
            scale: 1.1
          }, {
            easing: "sineIn"
          }).to(.05, {
            scale: .7
          }, {
            easing: "sineOut"
          }).call(function() {
            _this._isCloseAnimating = false;
            _this._destroy();
          }).start();
        }
        this.soundManager.play(this.bundleManager.getCacheRes(ResConfig_1.BdnmConfig.body, "bd_mp3_open"));
      };
      ViewBase.prototype.getComponentByNode = function(node, component) {
        var comp = node.getComponent(component);
        if (!comp) {
          cc.log("ViewBase ERROR : not found component : ", component);
          return node;
        }
        return comp;
      };
      ViewBase = __decorate([ ccclass ], ViewBase);
      return ViewBase;
    }(cc.Component);
    exports.default = ViewBase;
    cc._RF.pop();
  }, {
    "../../config/ResConfig": "ResConfig",
    "../manager/BundleManager": "BundleManager",
    "../manager/EventManager": "EventManager",
    "../manager/LogManager": "LogManager",
    "../manager/NativeManager": "NativeManager",
    "../manager/ResourcesManager": "ResourcesManager",
    "../manager/SoundManager": "SoundManager",
    "../manager/ViewManager": "ViewManager",
    "../utils/ToolUtils": "ToolUtils"
  } ],
  ViewConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96178vHEtRI1KlTPUePckbh", "ViewConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ViewConfig = void 0;
    var ViewConfig = {
      LOGINVIEW: "LoginView",
      HALLVIEW: "HallView",
      MESSAGE: "MessageView",
      GUIDEVIEW: "GuideView",
      DOWNLOADGAMEVIEW: "DownloadGameView",
      ROOMLAYER: "RoomLayer",
      ROOM_SMALLSETTLEMENT: "Room_SmallSettlement"
    };
    exports.ViewConfig = ViewConfig;
    cc._RF.pop();
  }, {} ],
  ViewInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9ed3cgCIpZAu7BOULy9x4Xw", "ViewInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewInfo = function() {
      function ViewInfo(tsPath, prefab, zOrder) {
        this.tsPath = "";
        this.prefab = null;
        this.zOrder = 0;
        this.tsPath = tsPath;
        this.prefab = prefab;
        this.zOrder = zOrder || 0;
      }
      return ViewInfo;
    }();
    exports.default = ViewInfo;
    cc._RF.pop();
  }, {} ],
  ViewManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2035b/ApGRO6YwdhO0kL0rg", "ViewManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventConfig_1 = require("../../config/EventConfig");
    var EventManager_1 = require("./EventManager");
    var ResourcesManager_1 = require("./ResourcesManager");
    var ViewManager = function() {
      function ViewManager() {
        this._createList = {};
        this._viewScriptStack = [];
        this._scriptObjectList = {};
      }
      ViewManager.getInstance = function() {
        if (!this._ins) {
          this._ins = new ViewManager();
          EventManager_1.default.getInstance().registerListener(this._ins);
        }
        return this._ins;
      };
      ViewManager.prototype.registerCreator = function(viewType, viewInfo) {
        this._createList[viewType] || (this._createList[viewType] = viewInfo);
      };
      ViewManager.prototype.unRegisterCreator = function(viewType) {
        this._createList[viewType] || (this._createList[viewType] = null);
      };
      ViewManager.prototype.getView = function(viewType) {
        return null !== viewType ? this._scriptObjectList[viewType] : null;
      };
      ViewManager.prototype.showView = function(viewType, userData, closeTop, closeShowAnimation) {
        cc.log("viewType : ", viewType);
        if (!viewType) {
          cc.log("ERROR : invaild view type = ", viewType);
          return null;
        }
        if (this._scriptObjectList[viewType]) return this._scriptObjectList[viewType];
        if (!this._createList[viewType].prefab) {
          cc.log("ERROR : unvaild prefab");
          return;
        }
        var tsPath = this._createList[viewType].tsPath;
        var zOrder = this._createList[viewType].zOrder;
        var view = cc.instantiate(this._createList[viewType].prefab);
        var script = view.addComponent(tsPath);
        script.setType(viewType);
        userData && script.setUserData(userData);
        closeShowAnimation && script.closeShowAnimation();
        script.hideByOther = false;
        this._scriptObjectList[viewType] = script;
        if (closeTop) {
          var topViewScript = this._viewScriptStack[this._viewScriptStack.length - 1];
          cc.log("hide top view " + topViewScript._guiType);
          topViewScript.hide();
          topViewScript.hideByOther = true;
        }
        closeShowAnimation && this._viewScriptStack.push(script);
        cc.Canvas.instance.node.addChild(view, zOrder);
        cc.log("VIEWMANAGER : show viewType : ", viewType);
      };
      ViewManager.prototype.load = function(info, callback) {
        info.bundle ? info.bundle.load(info.prefab, cc.Prefab, function(err, prefab) {
          callback(err, prefab);
        }) : callback(false, ResourcesManager_1.default.getInstance().s_resources[info.prefab]);
      };
      ViewManager.prototype.removeView = function(viewType) {
        if (viewType && this._scriptObjectList[viewType]) {
          cc.log("remove view viewtype : ", viewType);
          var i = this._viewScriptStack.indexOf(this._scriptObjectList[viewType]);
          this._viewScriptStack.splice(i, 1);
          this._scriptObjectList[viewType].node.destroy();
          this.clearView(viewType);
        }
      };
      ViewManager.prototype.clearView = function(viewType) {
        this._scriptObjectList[viewType] && (this._scriptObjectList[viewType] = null);
      };
      ViewManager.prototype.removeTopView = function() {
        var topViewScript = this._viewScriptStack.pop();
        cc.log("remove top view " + topViewScript._guiType);
        if (this._viewScriptStack.length > 1) {
          var topViewScript_1 = this._viewScriptStack[this._viewScriptStack.length - 1];
          if (topViewScript_1.hideByOther) {
            cc.log("ReShow Top View " + topViewScript_1._guiType);
            topViewScript_1.node.setVisible(true);
            topViewScript_1.show();
            topViewScript_1.hideByOther = false;
          }
        }
      };
      ViewManager.prototype.clearViewScriptStack = function() {
        this._viewScriptStack = [];
        cc.log("clear view script stack");
      };
      ViewManager.prototype.getTopView = function() {
        if (this._viewScriptStack.length > 0) return this._viewScriptStack[this._viewScriptStack.length - 1];
      };
      ViewManager.prototype.clearAllView = function() {
        for (var type in this._scriptObjectList) if (this._scriptObjectList[type]) {
          this._scriptObjectList[type].node.destroy();
          this._scriptObjectList[type] = null;
        }
        this.clearViewScriptStack();
      };
      ViewManager.prototype.onEvent = function(event) {
        event.getName() === EventConfig_1.EventConfig.SCENE_CHANGE && this.clearAllView();
        for (var viewType in this._scriptObjectList) {
          var target = this._scriptObjectList[viewType];
          target && target.onEvent && target.onEvent(event);
        }
      };
      ViewManager._ins = null;
      return ViewManager;
    }();
    exports.default = ViewManager;
    cc._RF.pop();
  }, {
    "../../config/EventConfig": "EventConfig",
    "./EventManager": "EventManager",
    "./ResourcesManager": "ResourcesManager"
  } ],
  WsSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8d787gCShBMbMoJySYxoXU", "WsSocket");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AppConfig_1 = require("../../../AppConfig");
    var ModelCenter_1 = require("../../../data/ModelCenter");
    var WsSocket = function() {
      function WsSocket(handler, isBinary, connectFlag, connectType) {
        this._connectType = "";
        this._handler = handler;
        this._socket = null;
        this._url = "";
        this._isBinary = isBinary;
        this._connectFlag = connectFlag;
        this._connectType = connectType;
      }
      WsSocket.prototype.connect = function(url) {
        this._url = url;
        this._startConnect();
      };
      WsSocket.prototype._startConnect = function() {
        if (this._socket) {
          if (this._socket.readyState === WebSocket.OPEN) {
            cc.log("WsSocket is open with no need for connect repeat");
            return;
          }
          this.close();
        }
        var connecttionData = "app_id=" + AppConfig_1.AppConfig.appId + "&uuid=" + ModelCenter_1.default.getInstance().userInfo._uid;
        "GS" === this._connectType && (connecttionData = connecttionData + "&game_id=" + ModelCenter_1.default.getInstance().reconnectionInfo.gameId + "&room_id=" + ModelCenter_1.default.getInstance().reconnectionInfo.roomId);
        cc.log("connecttionData : ", connecttionData);
        var url = this._url + "?" + connecttionData;
        this._socket = new WebSocket(url, []);
        cc.log(url);
        this._isBinary && (this._socket.binaryType = "arraybuffer");
        cc.log("------[WsSocket] connect");
        this._socket.onopen = this._onOpen.bind(this);
        this._socket.onmessage = this._onMessage.bind(this);
        this._socket.onerror = this._onError.bind(this);
        this._socket.onclose = this._onClose.bind(this);
      };
      WsSocket.prototype._onOpen = function(evt) {
        cc.log("------[WsSocket] onOpen");
        this._handler && this._handler.connectFlag === this._connectFlag && this._handler.onOpen(evt);
      };
      WsSocket.prototype._onMessage = function(evt) {
        this._handler && this._handler.connectFlag === this._connectFlag && this._handler.onMessage(evt);
      };
      WsSocket.prototype._onError = function(evt) {
        cc.log("------[WsSocket] onError connectFlag:", this._handler.connectFlag);
        this._handler && this._handler.connectFlag === this._connectFlag && this._handler.onError(evt);
      };
      WsSocket.prototype._onClose = function(evt) {
        cc.log("------[WsSocket] onClose handlerconnectFlag:", this._handler.connectFlag);
        cc.log("------[WsSocket] onClose connectFlag:", this._connectFlag);
        this._handler && this._handler.connectFlag === this._connectFlag && this._handler.onClose(evt);
        if (this._socket) {
          if (this._socket.readyState === WebSocket.CONNECTING || this._socket.readyState === WebSocket.OPEN) return;
          this.close();
        }
      };
      WsSocket.prototype.close = function() {
        if (this._socket) {
          if (this._socket.readyState === WebSocket.OPEN) {
            cc.log("------[WsSocket] close socket");
            this._socket.close();
          } else cc.log("------[WsSocket] socket not run");
          this._socket = null;
        }
      };
      WsSocket.prototype.sendData = function(data) {
        if (!this._socket) {
          cc.log("------[WsSocket] socket:is null, socket maybe can not connect");
          return;
        }
        this._socket.readyState === WebSocket.OPEN ? this._socket.send(data) : this._handler && this._handler.connectFlag === this._connectFlag && this._handler.onError();
      };
      WsSocket.prototype.reconnect = function() {
        this._startConnect();
      };
      WsSocket.prototype.isConnect = function() {
        if (this._socket && this._socket.readyState === WebSocket.OPEN) return true;
        return false;
      };
      return WsSocket;
    }();
    exports.default = WsSocket;
    cc._RF.pop();
  }, {
    "../../../AppConfig": "AppConfig",
    "../../../data/ModelCenter": "ModelCenter"
  } ],
  WxMinManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5dc81mvP55H36y+Rdz+rOyk", "WxMinManager");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LogManager_1 = require("./LogManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WxMinManager = function() {
      function WxMinManager() {
        this._shareModel = 2;
        this._id = "";
        this._url = "";
        this._wxBannerCfg = {
          bannerAd: null,
          bannerAd2: null,
          windowWidth: null,
          windowHeight: null
        };
        this._wxVideoCfg = {
          videoBar: null,
          videoBar2: null
        };
      }
      WxMinManager_1 = WxMinManager;
      WxMinManager.getInstance = function() {
        if (!this._ins) {
          this._ins = new WxMinManager_1();
          this._ins.init();
        }
        return this._ins;
      };
      WxMinManager.prototype.init = function() {
        if (!CC_WECHATGAME) return;
        this.setForwardVis(true);
        wx.onShow(function(res) {
          console.log("------------------------- \u5524\u8d77");
          LogManager_1.default.getInstance().log(res);
        });
        wx.onHide(function() {
          console.log("------------------------- \u540e\u53f0");
        });
        this.getStartAppOptions();
      };
      WxMinManager.prototype.creatWxBannerAd = function(callback) {
        var _this = this;
        if (!CC_WECHATGAME) return;
        if ("undefined" !== typeof wx) var winSize = wx.getSystemInfoSync({
          success: function(res) {
            this._wxBannerCfg.windowWidth = res.windowWidth;
            this._wxBannerCfg.windowHeight = res.windowHeight;
          }
        });
        if (null === this._wxBannerCfg.bannerAd) {
          console.log("\u521b\u5efa\u5e7f\u544a1");
          this._wxBannerCfg.bannerAd = window.wx.createBannerAd({
            adUnitId: "adunit-ce2d1811f7116b05",
            style: {
              left: this._wxBannerCfg.windowWidth / 2 - 150,
              top: this._wxBannerCfg.windowHeight - 90,
              width: 300
            }
          });
          this._wxBannerCfg.bannerAd.onResize(function() {
            _this._wxBannerCfg.bannerAd.style.left = _this._wxBannerCfg.windowWidth / 2 - 150 + .1;
            _this._wxBannerCfg.bannerAd.style.top = _this._wxBannerCfg.windowHeight - _this._wxBannerCfg.bannerAd.style.realHeight + .1;
          });
          this._wxBannerCfg.bannerAd.onError(function(res) {
            console.log(res);
          });
          this._wxBannerCfg.bannerAd.onLoad(function() {
            console.log("\u5e7f\u544a1\u52a0\u8f7d\u6210\u529f");
            callback();
          });
        }
      };
      WxMinManager.prototype.creatWxVideoAd = function(callback) {
        var _this = this;
        if (!CC_WECHATGAME) return;
        if (null === this._wxVideoCfg.videoBar) {
          this._wxVideoCfg.videoBar = wx.createRewardedVideoAd({
            adUnitId: "adunit-ce2d1811f7116b05"
          });
          this._wxVideoCfg.videoBar.onError(function(res) {
            console.log("video_1", res);
          });
          this._wxVideoCfg.videoBar.onLoad(function() {
            console.log("\u590d\u6d3b\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
          });
          this._wxVideoCfg.videoBar.onClose(function(res) {
            _this._wxVideoCfg.videoBar.offClose();
            console.log("\u7b2c\u4e00\u4e2a\u89c6\u9891\u56de\u8c03");
            res && res.isEnded || void 0 === res ? console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1") : console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1");
            callback();
          });
          CC_WECHATGAME && this._wxVideoCfg.videoBar.load().then(function() {
            return _this._wxVideoCfg.videoBar.show();
          }).catch(function(err) {
            return console.log(err.errMsg);
          });
        }
      };
      WxMinManager.prototype.setForwardVis = function(vis) {
        if (!CC_WECHATGAME) return;
        if (vis) {
          wx.showShareMenu();
          wx.onShareAppMessage(this.onShareAppMsgFunc.bind(this));
        } else wx.hideShareMenu();
      };
      WxMinManager.prototype.onShareAppMsgFunc = function() {
        if (!CC_WECHATGAME) return;
        if (1 === this._shareModel) return {
          title: "\u88ab\u52a8\u8f6c\u53d11"
        };
        if (2 === this._shareModel) return {
          title: "\u88ab\u52a8\u8f6c\u53d12",
          imageUrl: cc.game.canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: cc.game.canvas.width,
            height: cc.game.canvas.height,
            destWidth: 500,
            destHeight: 400,
            fileType: "jpg",
            quality: 1,
            success: function(res) {
              console.log(res.tempFilePath);
            }
          })
        };
        3 === this._shareModel && wx.onShareAppMessage(function() {
          return {
            imageUrlId: this._id,
            imageUrl: this._url
          };
        });
      };
      WxMinManager.prototype.shareAppMsg = function(title, type, obj, id, url) {
        if (!CC_WECHATGAME) return;
        if (1 === type) wx.shareAppMessage({
          title: title
        }); else if (2 === type) {
          var queryStr = "";
          var count = 0;
          for (var key in obj) if (obj.hasOwnProperty(key)) {
            count > 0 && (queryStr += "&");
            queryStr = queryStr + key + "=" + obj[key];
            count += 1;
          }
          LogManager_1.default.getInstance().log(queryStr);
          wx.shareAppMessage({
            title: title,
            query: queryStr,
            imageUrl: cc.game.canvas.toTempFilePath({
              x: 0,
              y: 0,
              width: cc.game.canvas.width,
              height: cc.game.canvas.height,
              destWidth: 500,
              destHeight: 400,
              fileType: "jpg",
              quality: 1,
              success: function(res) {
                console.log(res.tempFilePath);
              }
            })
          });
        } else 3 === type && wx.shareAppMessage({
          imageUrlId: id,
          imageUrl: url
        });
      };
      WxMinManager.prototype.getStartAppOptions = function() {
        var options = wx.getLaunchOptionsSync();
        LogManager_1.default.getInstance().log(options);
      };
      var WxMinManager_1;
      WxMinManager._ins = null;
      WxMinManager = WxMinManager_1 = __decorate([ ccclass ], WxMinManager);
      return WxMinManager;
    }();
    exports.default = WxMinManager;
    cc._RF.pop();
  }, {
    "./LogManager": "LogManager"
  } ],
  protoLogin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "77c90NMbiFKtLRs7LRUfNfV", "protoLogin");
    "use strict";
    var $protobuf = require("protobufjs/minimal");
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    $root.protoLogin = function() {
      var protoLogin = {};
      protoLogin.UserBaseInfo = function() {
        function UserBaseInfo(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        UserBaseInfo.prototype.aid = 0;
        UserBaseInfo.prototype.uid = "";
        UserBaseInfo.prototype.avatarUrl = "";
        UserBaseInfo.prototype.userNick = "";
        UserBaseInfo.prototype.role = 0;
        UserBaseInfo.prototype.state = 0;
        UserBaseInfo.prototype.permissions = "";
        UserBaseInfo.prototype.groupid = 0;
        UserBaseInfo.prototype.groupname = "";
        UserBaseInfo.prototype.score = 0;
        UserBaseInfo.create = function create(properties) {
          return new UserBaseInfo(properties);
        };
        UserBaseInfo.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.aid && Object.hasOwnProperty.call(message, "aid") && writer.uint32(8).uint32(message.aid);
          null != message.uid && Object.hasOwnProperty.call(message, "uid") && writer.uint32(18).string(message.uid);
          null != message.avatarUrl && Object.hasOwnProperty.call(message, "avatarUrl") && writer.uint32(26).string(message.avatarUrl);
          null != message.userNick && Object.hasOwnProperty.call(message, "userNick") && writer.uint32(34).string(message.userNick);
          null != message.role && Object.hasOwnProperty.call(message, "role") && writer.uint32(40).uint32(message.role);
          null != message.state && Object.hasOwnProperty.call(message, "state") && writer.uint32(56).uint32(message.state);
          null != message.permissions && Object.hasOwnProperty.call(message, "permissions") && writer.uint32(66).string(message.permissions);
          null != message.groupid && Object.hasOwnProperty.call(message, "groupid") && writer.uint32(72).uint32(message.groupid);
          null != message.groupname && Object.hasOwnProperty.call(message, "groupname") && writer.uint32(82).string(message.groupname);
          null != message.score && Object.hasOwnProperty.call(message, "score") && writer.uint32(88).uint32(message.score);
          return writer;
        };
        UserBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        UserBaseInfo.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoLogin.UserBaseInfo();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.aid = reader.uint32();
              break;

             case 2:
              message.uid = reader.string();
              break;

             case 3:
              message.avatarUrl = reader.string();
              break;

             case 4:
              message.userNick = reader.string();
              break;

             case 5:
              message.role = reader.uint32();
              break;

             case 7:
              message.state = reader.uint32();
              break;

             case 8:
              message.permissions = reader.string();
              break;

             case 9:
              message.groupid = reader.uint32();
              break;

             case 10:
              message.groupname = reader.string();
              break;

             case 11:
              message.score = reader.uint32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        UserBaseInfo.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        UserBaseInfo.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.aid && message.hasOwnProperty("aid") && !$util.isInteger(message.aid)) return "aid: integer expected";
          if (null != message.uid && message.hasOwnProperty("uid") && !$util.isString(message.uid)) return "uid: string expected";
          if (null != message.avatarUrl && message.hasOwnProperty("avatarUrl") && !$util.isString(message.avatarUrl)) return "avatarUrl: string expected";
          if (null != message.userNick && message.hasOwnProperty("userNick") && !$util.isString(message.userNick)) return "userNick: string expected";
          if (null != message.role && message.hasOwnProperty("role") && !$util.isInteger(message.role)) return "role: integer expected";
          if (null != message.state && message.hasOwnProperty("state") && !$util.isInteger(message.state)) return "state: integer expected";
          if (null != message.permissions && message.hasOwnProperty("permissions") && !$util.isString(message.permissions)) return "permissions: string expected";
          if (null != message.groupid && message.hasOwnProperty("groupid") && !$util.isInteger(message.groupid)) return "groupid: integer expected";
          if (null != message.groupname && message.hasOwnProperty("groupname") && !$util.isString(message.groupname)) return "groupname: string expected";
          if (null != message.score && message.hasOwnProperty("score") && !$util.isInteger(message.score)) return "score: integer expected";
          return null;
        };
        UserBaseInfo.fromObject = function fromObject(object) {
          if (object instanceof $root.protoLogin.UserBaseInfo) return object;
          var message = new $root.protoLogin.UserBaseInfo();
          null != object.aid && (message.aid = object.aid >>> 0);
          null != object.uid && (message.uid = String(object.uid));
          null != object.avatarUrl && (message.avatarUrl = String(object.avatarUrl));
          null != object.userNick && (message.userNick = String(object.userNick));
          null != object.role && (message.role = object.role >>> 0);
          null != object.state && (message.state = object.state >>> 0);
          null != object.permissions && (message.permissions = String(object.permissions));
          null != object.groupid && (message.groupid = object.groupid >>> 0);
          null != object.groupname && (message.groupname = String(object.groupname));
          null != object.score && (message.score = object.score >>> 0);
          return message;
        };
        UserBaseInfo.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.aid = 0;
            object.uid = "";
            object.avatarUrl = "";
            object.userNick = "";
            object.role = 0;
            object.state = 0;
            object.permissions = "";
            object.groupid = 0;
            object.groupname = "";
            object.score = 0;
          }
          null != message.aid && message.hasOwnProperty("aid") && (object.aid = message.aid);
          null != message.uid && message.hasOwnProperty("uid") && (object.uid = message.uid);
          null != message.avatarUrl && message.hasOwnProperty("avatarUrl") && (object.avatarUrl = message.avatarUrl);
          null != message.userNick && message.hasOwnProperty("userNick") && (object.userNick = message.userNick);
          null != message.role && message.hasOwnProperty("role") && (object.role = message.role);
          null != message.state && message.hasOwnProperty("state") && (object.state = message.state);
          null != message.permissions && message.hasOwnProperty("permissions") && (object.permissions = message.permissions);
          null != message.groupid && message.hasOwnProperty("groupid") && (object.groupid = message.groupid);
          null != message.groupname && message.hasOwnProperty("groupname") && (object.groupname = message.groupname);
          null != message.score && message.hasOwnProperty("score") && (object.score = message.score);
          return object;
        };
        UserBaseInfo.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return UserBaseInfo;
      }();
      protoLogin.UserDomain = function() {
        function UserDomain(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        UserDomain.prototype.update = "";
        UserDomain.prototype.login = "";
        UserDomain.prototype.pay = "";
        UserDomain.create = function create(properties) {
          return new UserDomain(properties);
        };
        UserDomain.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.update && Object.hasOwnProperty.call(message, "update") && writer.uint32(10).string(message.update);
          null != message.login && Object.hasOwnProperty.call(message, "login") && writer.uint32(18).string(message.login);
          null != message.pay && Object.hasOwnProperty.call(message, "pay") && writer.uint32(26).string(message.pay);
          return writer;
        };
        UserDomain.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        UserDomain.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoLogin.UserDomain();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.update = reader.string();
              break;

             case 2:
              message.login = reader.string();
              break;

             case 3:
              message.pay = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        UserDomain.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        UserDomain.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.update && message.hasOwnProperty("update") && !$util.isString(message.update)) return "update: string expected";
          if (null != message.login && message.hasOwnProperty("login") && !$util.isString(message.login)) return "login: string expected";
          if (null != message.pay && message.hasOwnProperty("pay") && !$util.isString(message.pay)) return "pay: string expected";
          return null;
        };
        UserDomain.fromObject = function fromObject(object) {
          if (object instanceof $root.protoLogin.UserDomain) return object;
          var message = new $root.protoLogin.UserDomain();
          null != object.update && (message.update = String(object.update));
          null != object.login && (message.login = String(object.login));
          null != object.pay && (message.pay = String(object.pay));
          return message;
        };
        UserDomain.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.update = "";
            object.login = "";
            object.pay = "";
          }
          null != message.update && message.hasOwnProperty("update") && (object.update = message.update);
          null != message.login && message.hasOwnProperty("login") && (object.login = message.login);
          null != message.pay && message.hasOwnProperty("pay") && (object.pay = message.pay);
          return object;
        };
        UserDomain.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return UserDomain;
      }();
      protoLogin.UserCurrencyInfo = function() {
        function UserCurrencyInfo(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        UserCurrencyInfo.prototype.coin = 0;
        UserCurrencyInfo.prototype.gold = 0;
        UserCurrencyInfo.prototype.diamond = 0;
        UserCurrencyInfo.create = function create(properties) {
          return new UserCurrencyInfo(properties);
        };
        UserCurrencyInfo.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.coin && Object.hasOwnProperty.call(message, "coin") && writer.uint32(8).int32(message.coin);
          null != message.gold && Object.hasOwnProperty.call(message, "gold") && writer.uint32(16).int32(message.gold);
          null != message.diamond && Object.hasOwnProperty.call(message, "diamond") && writer.uint32(24).int32(message.diamond);
          return writer;
        };
        UserCurrencyInfo.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        UserCurrencyInfo.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoLogin.UserCurrencyInfo();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.coin = reader.int32();
              break;

             case 2:
              message.gold = reader.int32();
              break;

             case 3:
              message.diamond = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        UserCurrencyInfo.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        UserCurrencyInfo.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.coin && message.hasOwnProperty("coin") && !$util.isInteger(message.coin)) return "coin: integer expected";
          if (null != message.gold && message.hasOwnProperty("gold") && !$util.isInteger(message.gold)) return "gold: integer expected";
          if (null != message.diamond && message.hasOwnProperty("diamond") && !$util.isInteger(message.diamond)) return "diamond: integer expected";
          return null;
        };
        UserCurrencyInfo.fromObject = function fromObject(object) {
          if (object instanceof $root.protoLogin.UserCurrencyInfo) return object;
          var message = new $root.protoLogin.UserCurrencyInfo();
          null != object.coin && (message.coin = 0 | object.coin);
          null != object.gold && (message.gold = 0 | object.gold);
          null != object.diamond && (message.diamond = 0 | object.diamond);
          return message;
        };
        UserCurrencyInfo.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.coin = 0;
            object.gold = 0;
            object.diamond = 0;
          }
          null != message.coin && message.hasOwnProperty("coin") && (object.coin = message.coin);
          null != message.gold && message.hasOwnProperty("gold") && (object.gold = message.gold);
          null != message.diamond && message.hasOwnProperty("diamond") && (object.diamond = message.diamond);
          return object;
        };
        UserCurrencyInfo.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return UserCurrencyInfo;
      }();
      protoLogin.ReconnectionInfo = function() {
        function ReconnectionInfo(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        ReconnectionInfo.prototype.state = false;
        ReconnectionInfo.prototype.roomId = 0;
        ReconnectionInfo.prototype.gameId = 0;
        ReconnectionInfo.prototype.serverIp = "";
        ReconnectionInfo.prototype.serverPort = 0;
        ReconnectionInfo.create = function create(properties) {
          return new ReconnectionInfo(properties);
        };
        ReconnectionInfo.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.state && Object.hasOwnProperty.call(message, "state") && writer.uint32(8).bool(message.state);
          null != message.roomId && Object.hasOwnProperty.call(message, "roomId") && writer.uint32(16).uint32(message.roomId);
          null != message.gameId && Object.hasOwnProperty.call(message, "gameId") && writer.uint32(24).uint32(message.gameId);
          null != message.serverIp && Object.hasOwnProperty.call(message, "serverIp") && writer.uint32(34).string(message.serverIp);
          null != message.serverPort && Object.hasOwnProperty.call(message, "serverPort") && writer.uint32(40).uint32(message.serverPort);
          return writer;
        };
        ReconnectionInfo.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ReconnectionInfo.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoLogin.ReconnectionInfo();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.state = reader.bool();
              break;

             case 2:
              message.roomId = reader.uint32();
              break;

             case 3:
              message.gameId = reader.uint32();
              break;

             case 4:
              message.serverIp = reader.string();
              break;

             case 5:
              message.serverPort = reader.uint32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        ReconnectionInfo.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        ReconnectionInfo.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.state && message.hasOwnProperty("state") && "boolean" !== typeof message.state) return "state: boolean expected";
          if (null != message.roomId && message.hasOwnProperty("roomId") && !$util.isInteger(message.roomId)) return "roomId: integer expected";
          if (null != message.gameId && message.hasOwnProperty("gameId") && !$util.isInteger(message.gameId)) return "gameId: integer expected";
          if (null != message.serverIp && message.hasOwnProperty("serverIp") && !$util.isString(message.serverIp)) return "serverIp: string expected";
          if (null != message.serverPort && message.hasOwnProperty("serverPort") && !$util.isInteger(message.serverPort)) return "serverPort: integer expected";
          return null;
        };
        ReconnectionInfo.fromObject = function fromObject(object) {
          if (object instanceof $root.protoLogin.ReconnectionInfo) return object;
          var message = new $root.protoLogin.ReconnectionInfo();
          null != object.state && (message.state = Boolean(object.state));
          null != object.roomId && (message.roomId = object.roomId >>> 0);
          null != object.gameId && (message.gameId = object.gameId >>> 0);
          null != object.serverIp && (message.serverIp = String(object.serverIp));
          null != object.serverPort && (message.serverPort = object.serverPort >>> 0);
          return message;
        };
        ReconnectionInfo.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.state = false;
            object.roomId = 0;
            object.gameId = 0;
            object.serverIp = "";
            object.serverPort = 0;
          }
          null != message.state && message.hasOwnProperty("state") && (object.state = message.state);
          null != message.roomId && message.hasOwnProperty("roomId") && (object.roomId = message.roomId);
          null != message.gameId && message.hasOwnProperty("gameId") && (object.gameId = message.gameId);
          null != message.serverIp && message.hasOwnProperty("serverIp") && (object.serverIp = message.serverIp);
          null != message.serverPort && message.hasOwnProperty("serverPort") && (object.serverPort = message.serverPort);
          return object;
        };
        ReconnectionInfo.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ReconnectionInfo;
      }();
      protoLogin.UserSocial = function() {
        function UserSocial(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        UserSocial.prototype.gender = 0;
        UserSocial.prototype.round = 0;
        UserSocial.prototype.regTime = 0;
        UserSocial.prototype.grade = 0;
        UserSocial.create = function create(properties) {
          return new UserSocial(properties);
        };
        UserSocial.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.gender && Object.hasOwnProperty.call(message, "gender") && writer.uint32(8).uint32(message.gender);
          null != message.round && Object.hasOwnProperty.call(message, "round") && writer.uint32(16).uint32(message.round);
          null != message.regTime && Object.hasOwnProperty.call(message, "regTime") && writer.uint32(24).uint32(message.regTime);
          null != message.grade && Object.hasOwnProperty.call(message, "grade") && writer.uint32(32).uint32(message.grade);
          return writer;
        };
        UserSocial.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        UserSocial.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoLogin.UserSocial();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.gender = reader.uint32();
              break;

             case 2:
              message.round = reader.uint32();
              break;

             case 3:
              message.regTime = reader.uint32();
              break;

             case 4:
              message.grade = reader.uint32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        UserSocial.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        UserSocial.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.gender && message.hasOwnProperty("gender") && !$util.isInteger(message.gender)) return "gender: integer expected";
          if (null != message.round && message.hasOwnProperty("round") && !$util.isInteger(message.round)) return "round: integer expected";
          if (null != message.regTime && message.hasOwnProperty("regTime") && !$util.isInteger(message.regTime)) return "regTime: integer expected";
          if (null != message.grade && message.hasOwnProperty("grade") && !$util.isInteger(message.grade)) return "grade: integer expected";
          return null;
        };
        UserSocial.fromObject = function fromObject(object) {
          if (object instanceof $root.protoLogin.UserSocial) return object;
          var message = new $root.protoLogin.UserSocial();
          null != object.gender && (message.gender = object.gender >>> 0);
          null != object.round && (message.round = object.round >>> 0);
          null != object.regTime && (message.regTime = object.regTime >>> 0);
          null != object.grade && (message.grade = object.grade >>> 0);
          return message;
        };
        UserSocial.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.gender = 0;
            object.round = 0;
            object.regTime = 0;
            object.grade = 0;
          }
          null != message.gender && message.hasOwnProperty("gender") && (object.gender = message.gender);
          null != message.round && message.hasOwnProperty("round") && (object.round = message.round);
          null != message.regTime && message.hasOwnProperty("regTime") && (object.regTime = message.regTime);
          null != message.grade && message.hasOwnProperty("grade") && (object.grade = message.grade);
          return object;
        };
        UserSocial.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return UserSocial;
      }();
      protoLogin.LoginRequest = function() {
        function LoginRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        LoginRequest.prototype.openId = "";
        LoginRequest.prototype.channel = 0;
        LoginRequest.prototype.appId = 0;
        LoginRequest.prototype.deviceId = "";
        LoginRequest.prototype.verId = "";
        LoginRequest.prototype.location = "";
        LoginRequest.create = function create(properties) {
          return new LoginRequest(properties);
        };
        LoginRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.openId && Object.hasOwnProperty.call(message, "openId") && writer.uint32(10).string(message.openId);
          null != message.channel && Object.hasOwnProperty.call(message, "channel") && writer.uint32(16).int32(message.channel);
          null != message.appId && Object.hasOwnProperty.call(message, "appId") && writer.uint32(24).int32(message.appId);
          null != message.deviceId && Object.hasOwnProperty.call(message, "deviceId") && writer.uint32(42).string(message.deviceId);
          null != message.verId && Object.hasOwnProperty.call(message, "verId") && writer.uint32(50).string(message.verId);
          null != message.location && Object.hasOwnProperty.call(message, "location") && writer.uint32(58).string(message.location);
          return writer;
        };
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        LoginRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoLogin.LoginRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.openId = reader.string();
              break;

             case 2:
              message.channel = reader.int32();
              break;

             case 3:
              message.appId = reader.int32();
              break;

             case 5:
              message.deviceId = reader.string();
              break;

             case 6:
              message.verId = reader.string();
              break;

             case 7:
              message.location = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        LoginRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.openId && message.hasOwnProperty("openId") && !$util.isString(message.openId)) return "openId: string expected";
          if (null != message.channel && message.hasOwnProperty("channel") && !$util.isInteger(message.channel)) return "channel: integer expected";
          if (null != message.appId && message.hasOwnProperty("appId") && !$util.isInteger(message.appId)) return "appId: integer expected";
          if (null != message.deviceId && message.hasOwnProperty("deviceId") && !$util.isString(message.deviceId)) return "deviceId: string expected";
          if (null != message.verId && message.hasOwnProperty("verId") && !$util.isString(message.verId)) return "verId: string expected";
          if (null != message.location && message.hasOwnProperty("location") && !$util.isString(message.location)) return "location: string expected";
          return null;
        };
        LoginRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.protoLogin.LoginRequest) return object;
          var message = new $root.protoLogin.LoginRequest();
          null != object.openId && (message.openId = String(object.openId));
          null != object.channel && (message.channel = 0 | object.channel);
          null != object.appId && (message.appId = 0 | object.appId);
          null != object.deviceId && (message.deviceId = String(object.deviceId));
          null != object.verId && (message.verId = String(object.verId));
          null != object.location && (message.location = String(object.location));
          return message;
        };
        LoginRequest.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.openId = "";
            object.channel = 0;
            object.appId = 0;
            object.deviceId = "";
            object.verId = "";
            object.location = "";
          }
          null != message.openId && message.hasOwnProperty("openId") && (object.openId = message.openId);
          null != message.channel && message.hasOwnProperty("channel") && (object.channel = message.channel);
          null != message.appId && message.hasOwnProperty("appId") && (object.appId = message.appId);
          null != message.deviceId && message.hasOwnProperty("deviceId") && (object.deviceId = message.deviceId);
          null != message.verId && message.hasOwnProperty("verId") && (object.verId = message.verId);
          null != message.location && message.hasOwnProperty("location") && (object.location = message.location);
          return object;
        };
        LoginRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return LoginRequest;
      }();
      protoLogin.LoginResponse = function() {
        function LoginResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        LoginResponse.prototype.code = 0;
        LoginResponse.prototype.openId = "";
        LoginResponse.prototype.sessionKey = "";
        LoginResponse.prototype.invitation = 0;
        LoginResponse.prototype.parentId = 0;
        LoginResponse.prototype.ip = "";
        LoginResponse.prototype.location = "";
        LoginResponse.prototype.iosReview = false;
        LoginResponse.prototype.isBlack = false;
        LoginResponse.prototype.notice = "";
        LoginResponse.prototype.shareUrl = "";
        LoginResponse.prototype.nonMemberRecharge = false;
        LoginResponse.prototype.userDomain = null;
        LoginResponse.prototype.userBaseInfo = null;
        LoginResponse.prototype.userCoin = null;
        LoginResponse.prototype.reconnectionInfo = null;
        LoginResponse.prototype.userSocial = null;
        LoginResponse.prototype.isFlag = 0;
        LoginResponse.prototype.announcements = "";
        LoginResponse.create = function create(properties) {
          return new LoginResponse(properties);
        };
        LoginResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(8).uint32(message.code);
          null != message.openId && Object.hasOwnProperty.call(message, "openId") && writer.uint32(18).string(message.openId);
          null != message.sessionKey && Object.hasOwnProperty.call(message, "sessionKey") && writer.uint32(26).string(message.sessionKey);
          null != message.invitation && Object.hasOwnProperty.call(message, "invitation") && writer.uint32(32).uint32(message.invitation);
          null != message.parentId && Object.hasOwnProperty.call(message, "parentId") && writer.uint32(40).uint32(message.parentId);
          null != message.ip && Object.hasOwnProperty.call(message, "ip") && writer.uint32(50).string(message.ip);
          null != message.location && Object.hasOwnProperty.call(message, "location") && writer.uint32(58).string(message.location);
          null != message.iosReview && Object.hasOwnProperty.call(message, "iosReview") && writer.uint32(64).bool(message.iosReview);
          null != message.isBlack && Object.hasOwnProperty.call(message, "isBlack") && writer.uint32(72).bool(message.isBlack);
          null != message.notice && Object.hasOwnProperty.call(message, "notice") && writer.uint32(82).string(message.notice);
          null != message.shareUrl && Object.hasOwnProperty.call(message, "shareUrl") && writer.uint32(90).string(message.shareUrl);
          null != message.nonMemberRecharge && Object.hasOwnProperty.call(message, "nonMemberRecharge") && writer.uint32(96).bool(message.nonMemberRecharge);
          null != message.userDomain && Object.hasOwnProperty.call(message, "userDomain") && $root.protoLogin.UserDomain.encode(message.userDomain, writer.uint32(106).fork()).ldelim();
          null != message.userBaseInfo && Object.hasOwnProperty.call(message, "userBaseInfo") && $root.protoLogin.UserBaseInfo.encode(message.userBaseInfo, writer.uint32(114).fork()).ldelim();
          null != message.userCoin && Object.hasOwnProperty.call(message, "userCoin") && $root.protoLogin.UserCurrencyInfo.encode(message.userCoin, writer.uint32(122).fork()).ldelim();
          null != message.reconnectionInfo && Object.hasOwnProperty.call(message, "reconnectionInfo") && $root.protoLogin.ReconnectionInfo.encode(message.reconnectionInfo, writer.uint32(130).fork()).ldelim();
          null != message.userSocial && Object.hasOwnProperty.call(message, "userSocial") && $root.protoLogin.UserSocial.encode(message.userSocial, writer.uint32(138).fork()).ldelim();
          null != message.isFlag && Object.hasOwnProperty.call(message, "isFlag") && writer.uint32(144).uint32(message.isFlag);
          null != message.announcements && Object.hasOwnProperty.call(message, "announcements") && writer.uint32(154).string(message.announcements);
          return writer;
        };
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        LoginResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoLogin.LoginResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.code = reader.uint32();
              break;

             case 2:
              message.openId = reader.string();
              break;

             case 3:
              message.sessionKey = reader.string();
              break;

             case 4:
              message.invitation = reader.uint32();
              break;

             case 5:
              message.parentId = reader.uint32();
              break;

             case 6:
              message.ip = reader.string();
              break;

             case 7:
              message.location = reader.string();
              break;

             case 8:
              message.iosReview = reader.bool();
              break;

             case 9:
              message.isBlack = reader.bool();
              break;

             case 10:
              message.notice = reader.string();
              break;

             case 11:
              message.shareUrl = reader.string();
              break;

             case 12:
              message.nonMemberRecharge = reader.bool();
              break;

             case 13:
              message.userDomain = $root.protoLogin.UserDomain.decode(reader, reader.uint32());
              break;

             case 14:
              message.userBaseInfo = $root.protoLogin.UserBaseInfo.decode(reader, reader.uint32());
              break;

             case 15:
              message.userCoin = $root.protoLogin.UserCurrencyInfo.decode(reader, reader.uint32());
              break;

             case 16:
              message.reconnectionInfo = $root.protoLogin.ReconnectionInfo.decode(reader, reader.uint32());
              break;

             case 17:
              message.userSocial = $root.protoLogin.UserSocial.decode(reader, reader.uint32());
              break;

             case 18:
              message.isFlag = reader.uint32();
              break;

             case 19:
              message.announcements = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        LoginResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.openId && message.hasOwnProperty("openId") && !$util.isString(message.openId)) return "openId: string expected";
          if (null != message.sessionKey && message.hasOwnProperty("sessionKey") && !$util.isString(message.sessionKey)) return "sessionKey: string expected";
          if (null != message.invitation && message.hasOwnProperty("invitation") && !$util.isInteger(message.invitation)) return "invitation: integer expected";
          if (null != message.parentId && message.hasOwnProperty("parentId") && !$util.isInteger(message.parentId)) return "parentId: integer expected";
          if (null != message.ip && message.hasOwnProperty("ip") && !$util.isString(message.ip)) return "ip: string expected";
          if (null != message.location && message.hasOwnProperty("location") && !$util.isString(message.location)) return "location: string expected";
          if (null != message.iosReview && message.hasOwnProperty("iosReview") && "boolean" !== typeof message.iosReview) return "iosReview: boolean expected";
          if (null != message.isBlack && message.hasOwnProperty("isBlack") && "boolean" !== typeof message.isBlack) return "isBlack: boolean expected";
          if (null != message.notice && message.hasOwnProperty("notice") && !$util.isString(message.notice)) return "notice: string expected";
          if (null != message.shareUrl && message.hasOwnProperty("shareUrl") && !$util.isString(message.shareUrl)) return "shareUrl: string expected";
          if (null != message.nonMemberRecharge && message.hasOwnProperty("nonMemberRecharge") && "boolean" !== typeof message.nonMemberRecharge) return "nonMemberRecharge: boolean expected";
          if (null != message.userDomain && message.hasOwnProperty("userDomain")) {
            var error = $root.protoLogin.UserDomain.verify(message.userDomain);
            if (error) return "userDomain." + error;
          }
          if (null != message.userBaseInfo && message.hasOwnProperty("userBaseInfo")) {
            var error = $root.protoLogin.UserBaseInfo.verify(message.userBaseInfo);
            if (error) return "userBaseInfo." + error;
          }
          if (null != message.userCoin && message.hasOwnProperty("userCoin")) {
            var error = $root.protoLogin.UserCurrencyInfo.verify(message.userCoin);
            if (error) return "userCoin." + error;
          }
          if (null != message.reconnectionInfo && message.hasOwnProperty("reconnectionInfo")) {
            var error = $root.protoLogin.ReconnectionInfo.verify(message.reconnectionInfo);
            if (error) return "reconnectionInfo." + error;
          }
          if (null != message.userSocial && message.hasOwnProperty("userSocial")) {
            var error = $root.protoLogin.UserSocial.verify(message.userSocial);
            if (error) return "userSocial." + error;
          }
          if (null != message.isFlag && message.hasOwnProperty("isFlag") && !$util.isInteger(message.isFlag)) return "isFlag: integer expected";
          if (null != message.announcements && message.hasOwnProperty("announcements") && !$util.isString(message.announcements)) return "announcements: string expected";
          return null;
        };
        LoginResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoLogin.LoginResponse) return object;
          var message = new $root.protoLogin.LoginResponse();
          null != object.code && (message.code = object.code >>> 0);
          null != object.openId && (message.openId = String(object.openId));
          null != object.sessionKey && (message.sessionKey = String(object.sessionKey));
          null != object.invitation && (message.invitation = object.invitation >>> 0);
          null != object.parentId && (message.parentId = object.parentId >>> 0);
          null != object.ip && (message.ip = String(object.ip));
          null != object.location && (message.location = String(object.location));
          null != object.iosReview && (message.iosReview = Boolean(object.iosReview));
          null != object.isBlack && (message.isBlack = Boolean(object.isBlack));
          null != object.notice && (message.notice = String(object.notice));
          null != object.shareUrl && (message.shareUrl = String(object.shareUrl));
          null != object.nonMemberRecharge && (message.nonMemberRecharge = Boolean(object.nonMemberRecharge));
          if (null != object.userDomain) {
            if ("object" !== typeof object.userDomain) throw TypeError(".protoLogin.LoginResponse.userDomain: object expected");
            message.userDomain = $root.protoLogin.UserDomain.fromObject(object.userDomain);
          }
          if (null != object.userBaseInfo) {
            if ("object" !== typeof object.userBaseInfo) throw TypeError(".protoLogin.LoginResponse.userBaseInfo: object expected");
            message.userBaseInfo = $root.protoLogin.UserBaseInfo.fromObject(object.userBaseInfo);
          }
          if (null != object.userCoin) {
            if ("object" !== typeof object.userCoin) throw TypeError(".protoLogin.LoginResponse.userCoin: object expected");
            message.userCoin = $root.protoLogin.UserCurrencyInfo.fromObject(object.userCoin);
          }
          if (null != object.reconnectionInfo) {
            if ("object" !== typeof object.reconnectionInfo) throw TypeError(".protoLogin.LoginResponse.reconnectionInfo: object expected");
            message.reconnectionInfo = $root.protoLogin.ReconnectionInfo.fromObject(object.reconnectionInfo);
          }
          if (null != object.userSocial) {
            if ("object" !== typeof object.userSocial) throw TypeError(".protoLogin.LoginResponse.userSocial: object expected");
            message.userSocial = $root.protoLogin.UserSocial.fromObject(object.userSocial);
          }
          null != object.isFlag && (message.isFlag = object.isFlag >>> 0);
          null != object.announcements && (message.announcements = String(object.announcements));
          return message;
        };
        LoginResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.code = 0;
            object.openId = "";
            object.sessionKey = "";
            object.invitation = 0;
            object.parentId = 0;
            object.ip = "";
            object.location = "";
            object.iosReview = false;
            object.isBlack = false;
            object.notice = "";
            object.shareUrl = "";
            object.nonMemberRecharge = false;
            object.userDomain = null;
            object.userBaseInfo = null;
            object.userCoin = null;
            object.reconnectionInfo = null;
            object.userSocial = null;
            object.isFlag = 0;
            object.announcements = "";
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.openId && message.hasOwnProperty("openId") && (object.openId = message.openId);
          null != message.sessionKey && message.hasOwnProperty("sessionKey") && (object.sessionKey = message.sessionKey);
          null != message.invitation && message.hasOwnProperty("invitation") && (object.invitation = message.invitation);
          null != message.parentId && message.hasOwnProperty("parentId") && (object.parentId = message.parentId);
          null != message.ip && message.hasOwnProperty("ip") && (object.ip = message.ip);
          null != message.location && message.hasOwnProperty("location") && (object.location = message.location);
          null != message.iosReview && message.hasOwnProperty("iosReview") && (object.iosReview = message.iosReview);
          null != message.isBlack && message.hasOwnProperty("isBlack") && (object.isBlack = message.isBlack);
          null != message.notice && message.hasOwnProperty("notice") && (object.notice = message.notice);
          null != message.shareUrl && message.hasOwnProperty("shareUrl") && (object.shareUrl = message.shareUrl);
          null != message.nonMemberRecharge && message.hasOwnProperty("nonMemberRecharge") && (object.nonMemberRecharge = message.nonMemberRecharge);
          null != message.userDomain && message.hasOwnProperty("userDomain") && (object.userDomain = $root.protoLogin.UserDomain.toObject(message.userDomain, options));
          null != message.userBaseInfo && message.hasOwnProperty("userBaseInfo") && (object.userBaseInfo = $root.protoLogin.UserBaseInfo.toObject(message.userBaseInfo, options));
          null != message.userCoin && message.hasOwnProperty("userCoin") && (object.userCoin = $root.protoLogin.UserCurrencyInfo.toObject(message.userCoin, options));
          null != message.reconnectionInfo && message.hasOwnProperty("reconnectionInfo") && (object.reconnectionInfo = $root.protoLogin.ReconnectionInfo.toObject(message.reconnectionInfo, options));
          null != message.userSocial && message.hasOwnProperty("userSocial") && (object.userSocial = $root.protoLogin.UserSocial.toObject(message.userSocial, options));
          null != message.isFlag && message.hasOwnProperty("isFlag") && (object.isFlag = message.isFlag);
          null != message.announcements && message.hasOwnProperty("announcements") && (object.announcements = message.announcements);
          return object;
        };
        LoginResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return LoginResponse;
      }();
      protoLogin.RoomCreateRequest = function() {
        function RoomCreateRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        RoomCreateRequest.prototype.appId = 0;
        RoomCreateRequest.prototype.gameId = 0;
        RoomCreateRequest.prototype.userId = "";
        RoomCreateRequest.prototype.deviceId = "";
        RoomCreateRequest.prototype.maxRounds = 0;
        RoomCreateRequest.prototype.roomConfig = "";
        RoomCreateRequest.prototype.coreVersion = "";
        RoomCreateRequest.prototype.clubId = 0;
        RoomCreateRequest.prototype.clubRoomType = 0;
        RoomCreateRequest.create = function create(properties) {
          return new RoomCreateRequest(properties);
        };
        RoomCreateRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.appId && Object.hasOwnProperty.call(message, "appId") && writer.uint32(8).int32(message.appId);
          null != message.gameId && Object.hasOwnProperty.call(message, "gameId") && writer.uint32(16).int32(message.gameId);
          null != message.userId && Object.hasOwnProperty.call(message, "userId") && writer.uint32(26).string(message.userId);
          null != message.deviceId && Object.hasOwnProperty.call(message, "deviceId") && writer.uint32(34).string(message.deviceId);
          null != message.maxRounds && Object.hasOwnProperty.call(message, "maxRounds") && writer.uint32(40).uint32(message.maxRounds);
          null != message.roomConfig && Object.hasOwnProperty.call(message, "roomConfig") && writer.uint32(50).string(message.roomConfig);
          null != message.coreVersion && Object.hasOwnProperty.call(message, "coreVersion") && writer.uint32(58).string(message.coreVersion);
          null != message.clubId && Object.hasOwnProperty.call(message, "clubId") && writer.uint32(64).uint32(message.clubId);
          null != message.clubRoomType && Object.hasOwnProperty.call(message, "clubRoomType") && writer.uint32(72).uint32(message.clubRoomType);
          return writer;
        };
        RoomCreateRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RoomCreateRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoLogin.RoomCreateRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.appId = reader.int32();
              break;

             case 2:
              message.gameId = reader.int32();
              break;

             case 3:
              message.userId = reader.string();
              break;

             case 4:
              message.deviceId = reader.string();
              break;

             case 5:
              message.maxRounds = reader.uint32();
              break;

             case 6:
              message.roomConfig = reader.string();
              break;

             case 7:
              message.coreVersion = reader.string();
              break;

             case 8:
              message.clubId = reader.uint32();
              break;

             case 9:
              message.clubRoomType = reader.uint32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        RoomCreateRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        RoomCreateRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.appId && message.hasOwnProperty("appId") && !$util.isInteger(message.appId)) return "appId: integer expected";
          if (null != message.gameId && message.hasOwnProperty("gameId") && !$util.isInteger(message.gameId)) return "gameId: integer expected";
          if (null != message.userId && message.hasOwnProperty("userId") && !$util.isString(message.userId)) return "userId: string expected";
          if (null != message.deviceId && message.hasOwnProperty("deviceId") && !$util.isString(message.deviceId)) return "deviceId: string expected";
          if (null != message.maxRounds && message.hasOwnProperty("maxRounds") && !$util.isInteger(message.maxRounds)) return "maxRounds: integer expected";
          if (null != message.roomConfig && message.hasOwnProperty("roomConfig") && !$util.isString(message.roomConfig)) return "roomConfig: string expected";
          if (null != message.coreVersion && message.hasOwnProperty("coreVersion") && !$util.isString(message.coreVersion)) return "coreVersion: string expected";
          if (null != message.clubId && message.hasOwnProperty("clubId") && !$util.isInteger(message.clubId)) return "clubId: integer expected";
          if (null != message.clubRoomType && message.hasOwnProperty("clubRoomType") && !$util.isInteger(message.clubRoomType)) return "clubRoomType: integer expected";
          return null;
        };
        RoomCreateRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.protoLogin.RoomCreateRequest) return object;
          var message = new $root.protoLogin.RoomCreateRequest();
          null != object.appId && (message.appId = 0 | object.appId);
          null != object.gameId && (message.gameId = 0 | object.gameId);
          null != object.userId && (message.userId = String(object.userId));
          null != object.deviceId && (message.deviceId = String(object.deviceId));
          null != object.maxRounds && (message.maxRounds = object.maxRounds >>> 0);
          null != object.roomConfig && (message.roomConfig = String(object.roomConfig));
          null != object.coreVersion && (message.coreVersion = String(object.coreVersion));
          null != object.clubId && (message.clubId = object.clubId >>> 0);
          null != object.clubRoomType && (message.clubRoomType = object.clubRoomType >>> 0);
          return message;
        };
        RoomCreateRequest.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.appId = 0;
            object.gameId = 0;
            object.userId = "";
            object.deviceId = "";
            object.maxRounds = 0;
            object.roomConfig = "";
            object.coreVersion = "";
            object.clubId = 0;
            object.clubRoomType = 0;
          }
          null != message.appId && message.hasOwnProperty("appId") && (object.appId = message.appId);
          null != message.gameId && message.hasOwnProperty("gameId") && (object.gameId = message.gameId);
          null != message.userId && message.hasOwnProperty("userId") && (object.userId = message.userId);
          null != message.deviceId && message.hasOwnProperty("deviceId") && (object.deviceId = message.deviceId);
          null != message.maxRounds && message.hasOwnProperty("maxRounds") && (object.maxRounds = message.maxRounds);
          null != message.roomConfig && message.hasOwnProperty("roomConfig") && (object.roomConfig = message.roomConfig);
          null != message.coreVersion && message.hasOwnProperty("coreVersion") && (object.coreVersion = message.coreVersion);
          null != message.clubId && message.hasOwnProperty("clubId") && (object.clubId = message.clubId);
          null != message.clubRoomType && message.hasOwnProperty("clubRoomType") && (object.clubRoomType = message.clubRoomType);
          return object;
        };
        RoomCreateRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return RoomCreateRequest;
      }();
      protoLogin.RoomCreateResponse = function() {
        function RoomCreateResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        RoomCreateResponse.prototype.code = 0;
        RoomCreateResponse.prototype.roomId = 0;
        RoomCreateResponse.prototype.serverIp = "";
        RoomCreateResponse.prototype.serverPort = "";
        RoomCreateResponse.prototype.payGold = 0;
        RoomCreateResponse.create = function create(properties) {
          return new RoomCreateResponse(properties);
        };
        RoomCreateResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(8).uint32(message.code);
          null != message.roomId && Object.hasOwnProperty.call(message, "roomId") && writer.uint32(16).int32(message.roomId);
          null != message.serverIp && Object.hasOwnProperty.call(message, "serverIp") && writer.uint32(26).string(message.serverIp);
          null != message.serverPort && Object.hasOwnProperty.call(message, "serverPort") && writer.uint32(34).string(message.serverPort);
          null != message.payGold && Object.hasOwnProperty.call(message, "payGold") && writer.uint32(40).int32(message.payGold);
          return writer;
        };
        RoomCreateResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        RoomCreateResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoLogin.RoomCreateResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.code = reader.uint32();
              break;

             case 2:
              message.roomId = reader.int32();
              break;

             case 3:
              message.serverIp = reader.string();
              break;

             case 4:
              message.serverPort = reader.string();
              break;

             case 5:
              message.payGold = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        RoomCreateResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        RoomCreateResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.roomId && message.hasOwnProperty("roomId") && !$util.isInteger(message.roomId)) return "roomId: integer expected";
          if (null != message.serverIp && message.hasOwnProperty("serverIp") && !$util.isString(message.serverIp)) return "serverIp: string expected";
          if (null != message.serverPort && message.hasOwnProperty("serverPort") && !$util.isString(message.serverPort)) return "serverPort: string expected";
          if (null != message.payGold && message.hasOwnProperty("payGold") && !$util.isInteger(message.payGold)) return "payGold: integer expected";
          return null;
        };
        RoomCreateResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoLogin.RoomCreateResponse) return object;
          var message = new $root.protoLogin.RoomCreateResponse();
          null != object.code && (message.code = object.code >>> 0);
          null != object.roomId && (message.roomId = 0 | object.roomId);
          null != object.serverIp && (message.serverIp = String(object.serverIp));
          null != object.serverPort && (message.serverPort = String(object.serverPort));
          null != object.payGold && (message.payGold = 0 | object.payGold);
          return message;
        };
        RoomCreateResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.code = 0;
            object.roomId = 0;
            object.serverIp = "";
            object.serverPort = "";
            object.payGold = 0;
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.roomId && message.hasOwnProperty("roomId") && (object.roomId = message.roomId);
          null != message.serverIp && message.hasOwnProperty("serverIp") && (object.serverIp = message.serverIp);
          null != message.serverPort && message.hasOwnProperty("serverPort") && (object.serverPort = message.serverPort);
          null != message.payGold && message.hasOwnProperty("payGold") && (object.payGold = message.payGold);
          return object;
        };
        RoomCreateResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return RoomCreateResponse;
      }();
      return protoLogin;
    }();
    module.exports = $root;
    cc._RF.pop();
  }, {
    "protobufjs/minimal": 8
  } ],
  protoPaodekuai: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4942ICe3dAOb2q2bx13F/O", "protoPaodekuai");
    "use strict";
    var $protobuf = require("protobufjs/minimal");
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    $root.protoPaodekuai = function() {
      var protoPaodekuai = {};
      protoPaodekuai.Player = function() {
        function Player(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        Player.prototype.seat = 0;
        Player.prototype.player = "";
        Player.prototype.info = "";
        Player.prototype.readyState = 0;
        Player.prototype.isOnline = 0;
        Player.prototype.score = 0;
        Player.prototype.isBaodan = 0;
        Player.prototype.cardsLen = 0;
        Player.create = function create(properties) {
          return new Player(properties);
        };
        Player.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.seat && Object.hasOwnProperty.call(message, "seat") && writer.uint32(8).int32(message.seat);
          null != message.player && Object.hasOwnProperty.call(message, "player") && writer.uint32(18).string(message.player);
          null != message.info && Object.hasOwnProperty.call(message, "info") && writer.uint32(26).string(message.info);
          null != message.readyState && Object.hasOwnProperty.call(message, "readyState") && writer.uint32(32).int32(message.readyState);
          null != message.isOnline && Object.hasOwnProperty.call(message, "isOnline") && writer.uint32(40).int32(message.isOnline);
          null != message.score && Object.hasOwnProperty.call(message, "score") && writer.uint32(48).int32(message.score);
          null != message.isBaodan && Object.hasOwnProperty.call(message, "isBaodan") && writer.uint32(56).int32(message.isBaodan);
          null != message.cardsLen && Object.hasOwnProperty.call(message, "cardsLen") && writer.uint32(64).int32(message.cardsLen);
          return writer;
        };
        Player.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Player.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.Player();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.seat = reader.int32();
              break;

             case 2:
              message.player = reader.string();
              break;

             case 3:
              message.info = reader.string();
              break;

             case 4:
              message.readyState = reader.int32();
              break;

             case 5:
              message.isOnline = reader.int32();
              break;

             case 6:
              message.score = reader.int32();
              break;

             case 7:
              message.isBaodan = reader.int32();
              break;

             case 8:
              message.cardsLen = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        Player.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        Player.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.seat && message.hasOwnProperty("seat") && !$util.isInteger(message.seat)) return "seat: integer expected";
          if (null != message.player && message.hasOwnProperty("player") && !$util.isString(message.player)) return "player: string expected";
          if (null != message.info && message.hasOwnProperty("info") && !$util.isString(message.info)) return "info: string expected";
          if (null != message.readyState && message.hasOwnProperty("readyState") && !$util.isInteger(message.readyState)) return "readyState: integer expected";
          if (null != message.isOnline && message.hasOwnProperty("isOnline") && !$util.isInteger(message.isOnline)) return "isOnline: integer expected";
          if (null != message.score && message.hasOwnProperty("score") && !$util.isInteger(message.score)) return "score: integer expected";
          if (null != message.isBaodan && message.hasOwnProperty("isBaodan") && !$util.isInteger(message.isBaodan)) return "isBaodan: integer expected";
          if (null != message.cardsLen && message.hasOwnProperty("cardsLen") && !$util.isInteger(message.cardsLen)) return "cardsLen: integer expected";
          return null;
        };
        Player.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.Player) return object;
          var message = new $root.protoPaodekuai.Player();
          null != object.seat && (message.seat = 0 | object.seat);
          null != object.player && (message.player = String(object.player));
          null != object.info && (message.info = String(object.info));
          null != object.readyState && (message.readyState = 0 | object.readyState);
          null != object.isOnline && (message.isOnline = 0 | object.isOnline);
          null != object.score && (message.score = 0 | object.score);
          null != object.isBaodan && (message.isBaodan = 0 | object.isBaodan);
          null != object.cardsLen && (message.cardsLen = 0 | object.cardsLen);
          return message;
        };
        Player.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.seat = 0;
            object.player = "";
            object.info = "";
            object.readyState = 0;
            object.isOnline = 0;
            object.score = 0;
            object.isBaodan = 0;
            object.cardsLen = 0;
          }
          null != message.seat && message.hasOwnProperty("seat") && (object.seat = message.seat);
          null != message.player && message.hasOwnProperty("player") && (object.player = message.player);
          null != message.info && message.hasOwnProperty("info") && (object.info = message.info);
          null != message.readyState && message.hasOwnProperty("readyState") && (object.readyState = message.readyState);
          null != message.isOnline && message.hasOwnProperty("isOnline") && (object.isOnline = message.isOnline);
          null != message.score && message.hasOwnProperty("score") && (object.score = message.score);
          null != message.isBaodan && message.hasOwnProperty("isBaodan") && (object.isBaodan = message.isBaodan);
          null != message.cardsLen && message.hasOwnProperty("cardsLen") && (object.cardsLen = message.cardsLen);
          return object;
        };
        Player.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Player;
      }();
      protoPaodekuai.EnterRoomRequest = function() {
        function EnterRoomRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        EnterRoomRequest.prototype.roomId = 0;
        EnterRoomRequest.prototype.player = "";
        EnterRoomRequest.prototype.info = "";
        EnterRoomRequest.create = function create(properties) {
          return new EnterRoomRequest(properties);
        };
        EnterRoomRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.roomId && Object.hasOwnProperty.call(message, "roomId") && writer.uint32(8).uint32(message.roomId);
          null != message.player && Object.hasOwnProperty.call(message, "player") && writer.uint32(26).string(message.player);
          null != message.info && Object.hasOwnProperty.call(message, "info") && writer.uint32(34).string(message.info);
          return writer;
        };
        EnterRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        EnterRoomRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.EnterRoomRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.roomId = reader.uint32();
              break;

             case 3:
              message.player = reader.string();
              break;

             case 4:
              message.info = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        EnterRoomRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        EnterRoomRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.roomId && message.hasOwnProperty("roomId") && !$util.isInteger(message.roomId)) return "roomId: integer expected";
          if (null != message.player && message.hasOwnProperty("player") && !$util.isString(message.player)) return "player: string expected";
          if (null != message.info && message.hasOwnProperty("info") && !$util.isString(message.info)) return "info: string expected";
          return null;
        };
        EnterRoomRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.EnterRoomRequest) return object;
          var message = new $root.protoPaodekuai.EnterRoomRequest();
          null != object.roomId && (message.roomId = object.roomId >>> 0);
          null != object.player && (message.player = String(object.player));
          null != object.info && (message.info = String(object.info));
          return message;
        };
        EnterRoomRequest.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.roomId = 0;
            object.player = "";
            object.info = "";
          }
          null != message.roomId && message.hasOwnProperty("roomId") && (object.roomId = message.roomId);
          null != message.player && message.hasOwnProperty("player") && (object.player = message.player);
          null != message.info && message.hasOwnProperty("info") && (object.info = message.info);
          return object;
        };
        EnterRoomRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return EnterRoomRequest;
      }();
      protoPaodekuai.EnterRoomResponse = function() {
        function EnterRoomResponse(properties) {
          this.player = [];
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        EnterRoomResponse.prototype.code = 0;
        EnterRoomResponse.prototype.roomId = 0;
        EnterRoomResponse.prototype.roomKwargs = "";
        EnterRoomResponse.prototype.roomOwner = "";
        EnterRoomResponse.prototype.roomOwnerInfo = "";
        EnterRoomResponse.prototype.roomState = 0;
        EnterRoomResponse.prototype.gameRolls = 0;
        EnterRoomResponse.prototype.player = $util.emptyArray;
        EnterRoomResponse.create = function create(properties) {
          return new EnterRoomResponse(properties);
        };
        EnterRoomResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(8).int32(message.code);
          null != message.roomId && Object.hasOwnProperty.call(message, "roomId") && writer.uint32(16).uint32(message.roomId);
          null != message.roomKwargs && Object.hasOwnProperty.call(message, "roomKwargs") && writer.uint32(26).string(message.roomKwargs);
          null != message.roomOwner && Object.hasOwnProperty.call(message, "roomOwner") && writer.uint32(34).string(message.roomOwner);
          null != message.roomOwnerInfo && Object.hasOwnProperty.call(message, "roomOwnerInfo") && writer.uint32(42).string(message.roomOwnerInfo);
          null != message.roomState && Object.hasOwnProperty.call(message, "roomState") && writer.uint32(48).int32(message.roomState);
          null != message.gameRolls && Object.hasOwnProperty.call(message, "gameRolls") && writer.uint32(56).int32(message.gameRolls);
          if (null != message.player && message.player.length) for (var i = 0; i < message.player.length; ++i) $root.protoPaodekuai.Player.encode(message.player[i], writer.uint32(66).fork()).ldelim();
          return writer;
        };
        EnterRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        EnterRoomResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.EnterRoomResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.code = reader.int32();
              break;

             case 2:
              message.roomId = reader.uint32();
              break;

             case 3:
              message.roomKwargs = reader.string();
              break;

             case 4:
              message.roomOwner = reader.string();
              break;

             case 5:
              message.roomOwnerInfo = reader.string();
              break;

             case 6:
              message.roomState = reader.int32();
              break;

             case 7:
              message.gameRolls = reader.int32();
              break;

             case 8:
              message.player && message.player.length || (message.player = []);
              message.player.push($root.protoPaodekuai.Player.decode(reader, reader.uint32()));
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        EnterRoomResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        EnterRoomResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.roomId && message.hasOwnProperty("roomId") && !$util.isInteger(message.roomId)) return "roomId: integer expected";
          if (null != message.roomKwargs && message.hasOwnProperty("roomKwargs") && !$util.isString(message.roomKwargs)) return "roomKwargs: string expected";
          if (null != message.roomOwner && message.hasOwnProperty("roomOwner") && !$util.isString(message.roomOwner)) return "roomOwner: string expected";
          if (null != message.roomOwnerInfo && message.hasOwnProperty("roomOwnerInfo") && !$util.isString(message.roomOwnerInfo)) return "roomOwnerInfo: string expected";
          if (null != message.roomState && message.hasOwnProperty("roomState") && !$util.isInteger(message.roomState)) return "roomState: integer expected";
          if (null != message.gameRolls && message.hasOwnProperty("gameRolls") && !$util.isInteger(message.gameRolls)) return "gameRolls: integer expected";
          if (null != message.player && message.hasOwnProperty("player")) {
            if (!Array.isArray(message.player)) return "player: array expected";
            for (var i = 0; i < message.player.length; ++i) {
              var error = $root.protoPaodekuai.Player.verify(message.player[i]);
              if (error) return "player." + error;
            }
          }
          return null;
        };
        EnterRoomResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.EnterRoomResponse) return object;
          var message = new $root.protoPaodekuai.EnterRoomResponse();
          null != object.code && (message.code = 0 | object.code);
          null != object.roomId && (message.roomId = object.roomId >>> 0);
          null != object.roomKwargs && (message.roomKwargs = String(object.roomKwargs));
          null != object.roomOwner && (message.roomOwner = String(object.roomOwner));
          null != object.roomOwnerInfo && (message.roomOwnerInfo = String(object.roomOwnerInfo));
          null != object.roomState && (message.roomState = 0 | object.roomState);
          null != object.gameRolls && (message.gameRolls = 0 | object.gameRolls);
          if (object.player) {
            if (!Array.isArray(object.player)) throw TypeError(".protoPaodekuai.EnterRoomResponse.player: array expected");
            message.player = [];
            for (var i = 0; i < object.player.length; ++i) {
              if ("object" !== typeof object.player[i]) throw TypeError(".protoPaodekuai.EnterRoomResponse.player: object expected");
              message.player[i] = $root.protoPaodekuai.Player.fromObject(object.player[i]);
            }
          }
          return message;
        };
        EnterRoomResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          (options.arrays || options.defaults) && (object.player = []);
          if (options.defaults) {
            object.code = 0;
            object.roomId = 0;
            object.roomKwargs = "";
            object.roomOwner = "";
            object.roomOwnerInfo = "";
            object.roomState = 0;
            object.gameRolls = 0;
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.roomId && message.hasOwnProperty("roomId") && (object.roomId = message.roomId);
          null != message.roomKwargs && message.hasOwnProperty("roomKwargs") && (object.roomKwargs = message.roomKwargs);
          null != message.roomOwner && message.hasOwnProperty("roomOwner") && (object.roomOwner = message.roomOwner);
          null != message.roomOwnerInfo && message.hasOwnProperty("roomOwnerInfo") && (object.roomOwnerInfo = message.roomOwnerInfo);
          null != message.roomState && message.hasOwnProperty("roomState") && (object.roomState = message.roomState);
          null != message.gameRolls && message.hasOwnProperty("gameRolls") && (object.gameRolls = message.gameRolls);
          if (message.player && message.player.length) {
            object.player = [];
            for (var j = 0; j < message.player.length; ++j) object.player[j] = $root.protoPaodekuai.Player.toObject(message.player[j], options);
          }
          return object;
        };
        EnterRoomResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return EnterRoomResponse;
      }();
      protoPaodekuai.EnterRoomOtherResponse = function() {
        function EnterRoomOtherResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        EnterRoomOtherResponse.prototype.code = 0;
        EnterRoomOtherResponse.prototype.player = null;
        EnterRoomOtherResponse.create = function create(properties) {
          return new EnterRoomOtherResponse(properties);
        };
        EnterRoomOtherResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(8).uint32(message.code);
          null != message.player && Object.hasOwnProperty.call(message, "player") && $root.protoPaodekuai.Player.encode(message.player, writer.uint32(18).fork()).ldelim();
          return writer;
        };
        EnterRoomOtherResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        EnterRoomOtherResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.EnterRoomOtherResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.code = reader.uint32();
              break;

             case 2:
              message.player = $root.protoPaodekuai.Player.decode(reader, reader.uint32());
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        EnterRoomOtherResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        EnterRoomOtherResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.player && message.hasOwnProperty("player")) {
            var error = $root.protoPaodekuai.Player.verify(message.player);
            if (error) return "player." + error;
          }
          return null;
        };
        EnterRoomOtherResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.EnterRoomOtherResponse) return object;
          var message = new $root.protoPaodekuai.EnterRoomOtherResponse();
          null != object.code && (message.code = object.code >>> 0);
          if (null != object.player) {
            if ("object" !== typeof object.player) throw TypeError(".protoPaodekuai.EnterRoomOtherResponse.player: object expected");
            message.player = $root.protoPaodekuai.Player.fromObject(object.player);
          }
          return message;
        };
        EnterRoomOtherResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.code = 0;
            object.player = null;
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.player && message.hasOwnProperty("player") && (object.player = $root.protoPaodekuai.Player.toObject(message.player, options));
          return object;
        };
        EnterRoomOtherResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return EnterRoomOtherResponse;
      }();
      protoPaodekuai.OnlineStatusResponse = function() {
        function OnlineStatusResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        OnlineStatusResponse.prototype.player = "";
        OnlineStatusResponse.prototype.status = false;
        OnlineStatusResponse.create = function create(properties) {
          return new OnlineStatusResponse(properties);
        };
        OnlineStatusResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.player && Object.hasOwnProperty.call(message, "player") && writer.uint32(10).string(message.player);
          null != message.status && Object.hasOwnProperty.call(message, "status") && writer.uint32(16).bool(message.status);
          return writer;
        };
        OnlineStatusResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        OnlineStatusResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.OnlineStatusResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.player = reader.string();
              break;

             case 2:
              message.status = reader.bool();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        OnlineStatusResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        OnlineStatusResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.player && message.hasOwnProperty("player") && !$util.isString(message.player)) return "player: string expected";
          if (null != message.status && message.hasOwnProperty("status") && "boolean" !== typeof message.status) return "status: boolean expected";
          return null;
        };
        OnlineStatusResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.OnlineStatusResponse) return object;
          var message = new $root.protoPaodekuai.OnlineStatusResponse();
          null != object.player && (message.player = String(object.player));
          null != object.status && (message.status = Boolean(object.status));
          return message;
        };
        OnlineStatusResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.player = "";
            object.status = false;
          }
          null != message.player && message.hasOwnProperty("player") && (object.player = message.player);
          null != message.status && message.hasOwnProperty("status") && (object.status = message.status);
          return object;
        };
        OnlineStatusResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return OnlineStatusResponse;
      }();
      protoPaodekuai.ReconnectResponse = function() {
        function ReconnectResponse(properties) {
          this.pCards = [];
          this.tableCards = [];
          this.player = [];
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        ReconnectResponse.prototype.pCards = $util.emptyArray;
        ReconnectResponse.prototype.isOpen = 0;
        ReconnectResponse.prototype.tableUuid = "";
        ReconnectResponse.prototype.tableCards = $util.emptyArray;
        ReconnectResponse.prototype.tableCardType = "";
        ReconnectResponse.prototype.code = 0;
        ReconnectResponse.prototype.roomId = 0;
        ReconnectResponse.prototype.roomKwargs = "";
        ReconnectResponse.prototype.roomOwner = "";
        ReconnectResponse.prototype.roomOwnerInfo = "";
        ReconnectResponse.prototype.roomState = 0;
        ReconnectResponse.prototype.gameRolls = 0;
        ReconnectResponse.prototype.player = $util.emptyArray;
        ReconnectResponse.create = function create(properties) {
          return new ReconnectResponse(properties);
        };
        ReconnectResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          if (null != message.pCards && message.pCards.length) {
            writer.uint32(10).fork();
            for (var i = 0; i < message.pCards.length; ++i) writer.int32(message.pCards[i]);
            writer.ldelim();
          }
          null != message.tableUuid && Object.hasOwnProperty.call(message, "tableUuid") && writer.uint32(18).string(message.tableUuid);
          if (null != message.tableCards && message.tableCards.length) {
            writer.uint32(26).fork();
            for (var i = 0; i < message.tableCards.length; ++i) writer.int32(message.tableCards[i]);
            writer.ldelim();
          }
          null != message.tableCardType && Object.hasOwnProperty.call(message, "tableCardType") && writer.uint32(34).string(message.tableCardType);
          null != message.roomOwnerInfo && Object.hasOwnProperty.call(message, "roomOwnerInfo") && writer.uint32(42).string(message.roomOwnerInfo);
          null != message.roomState && Object.hasOwnProperty.call(message, "roomState") && writer.uint32(48).int32(message.roomState);
          null != message.gameRolls && Object.hasOwnProperty.call(message, "gameRolls") && writer.uint32(56).int32(message.gameRolls);
          if (null != message.player && message.player.length) for (var i = 0; i < message.player.length; ++i) $root.protoPaodekuai.Player.encode(message.player[i], writer.uint32(66).fork()).ldelim();
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(72).int32(message.code);
          null != message.roomId && Object.hasOwnProperty.call(message, "roomId") && writer.uint32(80).uint32(message.roomId);
          null != message.roomKwargs && Object.hasOwnProperty.call(message, "roomKwargs") && writer.uint32(90).string(message.roomKwargs);
          null != message.roomOwner && Object.hasOwnProperty.call(message, "roomOwner") && writer.uint32(98).string(message.roomOwner);
          null != message.isOpen && Object.hasOwnProperty.call(message, "isOpen") && writer.uint32(104).int32(message.isOpen);
          return writer;
        };
        ReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ReconnectResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ReconnectResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.pCards && message.pCards.length || (message.pCards = []);
              if (2 === (7 & tag)) {
                var end2 = reader.uint32() + reader.pos;
                while (reader.pos < end2) message.pCards.push(reader.int32());
              } else message.pCards.push(reader.int32());
              break;

             case 13:
              message.isOpen = reader.int32();
              break;

             case 2:
              message.tableUuid = reader.string();
              break;

             case 3:
              message.tableCards && message.tableCards.length || (message.tableCards = []);
              if (2 === (7 & tag)) {
                var end2 = reader.uint32() + reader.pos;
                while (reader.pos < end2) message.tableCards.push(reader.int32());
              } else message.tableCards.push(reader.int32());
              break;

             case 4:
              message.tableCardType = reader.string();
              break;

             case 9:
              message.code = reader.int32();
              break;

             case 10:
              message.roomId = reader.uint32();
              break;

             case 11:
              message.roomKwargs = reader.string();
              break;

             case 12:
              message.roomOwner = reader.string();
              break;

             case 5:
              message.roomOwnerInfo = reader.string();
              break;

             case 6:
              message.roomState = reader.int32();
              break;

             case 7:
              message.gameRolls = reader.int32();
              break;

             case 8:
              message.player && message.player.length || (message.player = []);
              message.player.push($root.protoPaodekuai.Player.decode(reader, reader.uint32()));
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        ReconnectResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        ReconnectResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.pCards && message.hasOwnProperty("pCards")) {
            if (!Array.isArray(message.pCards)) return "pCards: array expected";
            for (var i = 0; i < message.pCards.length; ++i) if (!$util.isInteger(message.pCards[i])) return "pCards: integer[] expected";
          }
          if (null != message.isOpen && message.hasOwnProperty("isOpen") && !$util.isInteger(message.isOpen)) return "isOpen: integer expected";
          if (null != message.tableUuid && message.hasOwnProperty("tableUuid") && !$util.isString(message.tableUuid)) return "tableUuid: string expected";
          if (null != message.tableCards && message.hasOwnProperty("tableCards")) {
            if (!Array.isArray(message.tableCards)) return "tableCards: array expected";
            for (var i = 0; i < message.tableCards.length; ++i) if (!$util.isInteger(message.tableCards[i])) return "tableCards: integer[] expected";
          }
          if (null != message.tableCardType && message.hasOwnProperty("tableCardType") && !$util.isString(message.tableCardType)) return "tableCardType: string expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.roomId && message.hasOwnProperty("roomId") && !$util.isInteger(message.roomId)) return "roomId: integer expected";
          if (null != message.roomKwargs && message.hasOwnProperty("roomKwargs") && !$util.isString(message.roomKwargs)) return "roomKwargs: string expected";
          if (null != message.roomOwner && message.hasOwnProperty("roomOwner") && !$util.isString(message.roomOwner)) return "roomOwner: string expected";
          if (null != message.roomOwnerInfo && message.hasOwnProperty("roomOwnerInfo") && !$util.isString(message.roomOwnerInfo)) return "roomOwnerInfo: string expected";
          if (null != message.roomState && message.hasOwnProperty("roomState") && !$util.isInteger(message.roomState)) return "roomState: integer expected";
          if (null != message.gameRolls && message.hasOwnProperty("gameRolls") && !$util.isInteger(message.gameRolls)) return "gameRolls: integer expected";
          if (null != message.player && message.hasOwnProperty("player")) {
            if (!Array.isArray(message.player)) return "player: array expected";
            for (var i = 0; i < message.player.length; ++i) {
              var error = $root.protoPaodekuai.Player.verify(message.player[i]);
              if (error) return "player." + error;
            }
          }
          return null;
        };
        ReconnectResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.ReconnectResponse) return object;
          var message = new $root.protoPaodekuai.ReconnectResponse();
          if (object.pCards) {
            if (!Array.isArray(object.pCards)) throw TypeError(".protoPaodekuai.ReconnectResponse.pCards: array expected");
            message.pCards = [];
            for (var i = 0; i < object.pCards.length; ++i) message.pCards[i] = 0 | object.pCards[i];
          }
          null != object.isOpen && (message.isOpen = 0 | object.isOpen);
          null != object.tableUuid && (message.tableUuid = String(object.tableUuid));
          if (object.tableCards) {
            if (!Array.isArray(object.tableCards)) throw TypeError(".protoPaodekuai.ReconnectResponse.tableCards: array expected");
            message.tableCards = [];
            for (var i = 0; i < object.tableCards.length; ++i) message.tableCards[i] = 0 | object.tableCards[i];
          }
          null != object.tableCardType && (message.tableCardType = String(object.tableCardType));
          null != object.code && (message.code = 0 | object.code);
          null != object.roomId && (message.roomId = object.roomId >>> 0);
          null != object.roomKwargs && (message.roomKwargs = String(object.roomKwargs));
          null != object.roomOwner && (message.roomOwner = String(object.roomOwner));
          null != object.roomOwnerInfo && (message.roomOwnerInfo = String(object.roomOwnerInfo));
          null != object.roomState && (message.roomState = 0 | object.roomState);
          null != object.gameRolls && (message.gameRolls = 0 | object.gameRolls);
          if (object.player) {
            if (!Array.isArray(object.player)) throw TypeError(".protoPaodekuai.ReconnectResponse.player: array expected");
            message.player = [];
            for (var i = 0; i < object.player.length; ++i) {
              if ("object" !== typeof object.player[i]) throw TypeError(".protoPaodekuai.ReconnectResponse.player: object expected");
              message.player[i] = $root.protoPaodekuai.Player.fromObject(object.player[i]);
            }
          }
          return message;
        };
        ReconnectResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.arrays || options.defaults) {
            object.pCards = [];
            object.tableCards = [];
            object.player = [];
          }
          if (options.defaults) {
            object.tableUuid = "";
            object.tableCardType = "";
            object.roomOwnerInfo = "";
            object.roomState = 0;
            object.gameRolls = 0;
            object.code = 0;
            object.roomId = 0;
            object.roomKwargs = "";
            object.roomOwner = "";
            object.isOpen = 0;
          }
          if (message.pCards && message.pCards.length) {
            object.pCards = [];
            for (var j = 0; j < message.pCards.length; ++j) object.pCards[j] = message.pCards[j];
          }
          null != message.tableUuid && message.hasOwnProperty("tableUuid") && (object.tableUuid = message.tableUuid);
          if (message.tableCards && message.tableCards.length) {
            object.tableCards = [];
            for (var j = 0; j < message.tableCards.length; ++j) object.tableCards[j] = message.tableCards[j];
          }
          null != message.tableCardType && message.hasOwnProperty("tableCardType") && (object.tableCardType = message.tableCardType);
          null != message.roomOwnerInfo && message.hasOwnProperty("roomOwnerInfo") && (object.roomOwnerInfo = message.roomOwnerInfo);
          null != message.roomState && message.hasOwnProperty("roomState") && (object.roomState = message.roomState);
          null != message.gameRolls && message.hasOwnProperty("gameRolls") && (object.gameRolls = message.gameRolls);
          if (message.player && message.player.length) {
            object.player = [];
            for (var j = 0; j < message.player.length; ++j) object.player[j] = $root.protoPaodekuai.Player.toObject(message.player[j], options);
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.roomId && message.hasOwnProperty("roomId") && (object.roomId = message.roomId);
          null != message.roomKwargs && message.hasOwnProperty("roomKwargs") && (object.roomKwargs = message.roomKwargs);
          null != message.roomOwner && message.hasOwnProperty("roomOwner") && (object.roomOwner = message.roomOwner);
          null != message.isOpen && message.hasOwnProperty("isOpen") && (object.isOpen = message.isOpen);
          return object;
        };
        ReconnectResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ReconnectResponse;
      }();
      protoPaodekuai.ReadyRequest = function() {
        function ReadyRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        ReadyRequest.prototype.player = "";
        ReadyRequest.create = function create(properties) {
          return new ReadyRequest(properties);
        };
        ReadyRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.player && Object.hasOwnProperty.call(message, "player") && writer.uint32(10).string(message.player);
          return writer;
        };
        ReadyRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ReadyRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ReadyRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.player = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        ReadyRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        ReadyRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.player && message.hasOwnProperty("player") && !$util.isString(message.player)) return "player: string expected";
          return null;
        };
        ReadyRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.ReadyRequest) return object;
          var message = new $root.protoPaodekuai.ReadyRequest();
          null != object.player && (message.player = String(object.player));
          return message;
        };
        ReadyRequest.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          options.defaults && (object.player = "");
          null != message.player && message.hasOwnProperty("player") && (object.player = message.player);
          return object;
        };
        ReadyRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ReadyRequest;
      }();
      protoPaodekuai.ReadyResponse = function() {
        function ReadyResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        ReadyResponse.prototype.code = 0;
        ReadyResponse.prototype.uuid = "";
        ReadyResponse.create = function create(properties) {
          return new ReadyResponse(properties);
        };
        ReadyResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(8).int32(message.code);
          null != message.uuid && Object.hasOwnProperty.call(message, "uuid") && writer.uint32(18).string(message.uuid);
          return writer;
        };
        ReadyResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ReadyResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ReadyResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.code = reader.int32();
              break;

             case 2:
              message.uuid = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        ReadyResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        ReadyResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.uuid && message.hasOwnProperty("uuid") && !$util.isString(message.uuid)) return "uuid: string expected";
          return null;
        };
        ReadyResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.ReadyResponse) return object;
          var message = new $root.protoPaodekuai.ReadyResponse();
          null != object.code && (message.code = 0 | object.code);
          null != object.uuid && (message.uuid = String(object.uuid));
          return message;
        };
        ReadyResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.code = 0;
            object.uuid = "";
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.uuid && message.hasOwnProperty("uuid") && (object.uuid = message.uuid);
          return object;
        };
        ReadyResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ReadyResponse;
      }();
      protoPaodekuai.DealResponse = function() {
        function DealResponse(properties) {
          this.cards = [];
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        DealResponse.prototype.cards = $util.emptyArray;
        DealResponse.create = function create(properties) {
          return new DealResponse(properties);
        };
        DealResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          if (null != message.cards && message.cards.length) {
            writer.uint32(10).fork();
            for (var i = 0; i < message.cards.length; ++i) writer.int32(message.cards[i]);
            writer.ldelim();
          }
          return writer;
        };
        DealResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        DealResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.DealResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.cards && message.cards.length || (message.cards = []);
              if (2 === (7 & tag)) {
                var end2 = reader.uint32() + reader.pos;
                while (reader.pos < end2) message.cards.push(reader.int32());
              } else message.cards.push(reader.int32());
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        DealResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        DealResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.cards && message.hasOwnProperty("cards")) {
            if (!Array.isArray(message.cards)) return "cards: array expected";
            for (var i = 0; i < message.cards.length; ++i) if (!$util.isInteger(message.cards[i])) return "cards: integer[] expected";
          }
          return null;
        };
        DealResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.DealResponse) return object;
          var message = new $root.protoPaodekuai.DealResponse();
          if (object.cards) {
            if (!Array.isArray(object.cards)) throw TypeError(".protoPaodekuai.DealResponse.cards: array expected");
            message.cards = [];
            for (var i = 0; i < object.cards.length; ++i) message.cards[i] = 0 | object.cards[i];
          }
          return message;
        };
        DealResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          (options.arrays || options.defaults) && (object.cards = []);
          if (message.cards && message.cards.length) {
            object.cards = [];
            for (var j = 0; j < message.cards.length; ++j) object.cards[j] = message.cards[j];
          }
          return object;
        };
        DealResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return DealResponse;
      }();
      protoPaodekuai.StartChuPaiResponse = function() {
        function StartChuPaiResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        StartChuPaiResponse.prototype.cardType = "";
        StartChuPaiResponse.prototype.uuid = "";
        StartChuPaiResponse.prototype.isFirst = "";
        StartChuPaiResponse.prototype.find_333x = "";
        StartChuPaiResponse.prototype.expireSeconds = "";
        StartChuPaiResponse.create = function create(properties) {
          return new StartChuPaiResponse(properties);
        };
        StartChuPaiResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.cardType && Object.hasOwnProperty.call(message, "cardType") && writer.uint32(10).string(message.cardType);
          null != message.uuid && Object.hasOwnProperty.call(message, "uuid") && writer.uint32(18).string(message.uuid);
          null != message.isFirst && Object.hasOwnProperty.call(message, "isFirst") && writer.uint32(26).string(message.isFirst);
          null != message.find_333x && Object.hasOwnProperty.call(message, "find_333x") && writer.uint32(34).string(message.find_333x);
          null != message.expireSeconds && Object.hasOwnProperty.call(message, "expireSeconds") && writer.uint32(42).string(message.expireSeconds);
          return writer;
        };
        StartChuPaiResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        StartChuPaiResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.StartChuPaiResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.cardType = reader.string();
              break;

             case 2:
              message.uuid = reader.string();
              break;

             case 3:
              message.isFirst = reader.string();
              break;

             case 4:
              message.find_333x = reader.string();
              break;

             case 5:
              message.expireSeconds = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        StartChuPaiResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        StartChuPaiResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.cardType && message.hasOwnProperty("cardType") && !$util.isString(message.cardType)) return "cardType: string expected";
          if (null != message.uuid && message.hasOwnProperty("uuid") && !$util.isString(message.uuid)) return "uuid: string expected";
          if (null != message.isFirst && message.hasOwnProperty("isFirst") && !$util.isString(message.isFirst)) return "isFirst: string expected";
          if (null != message.find_333x && message.hasOwnProperty("find_333x") && !$util.isString(message.find_333x)) return "find_333x: string expected";
          if (null != message.expireSeconds && message.hasOwnProperty("expireSeconds") && !$util.isString(message.expireSeconds)) return "expireSeconds: string expected";
          return null;
        };
        StartChuPaiResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.StartChuPaiResponse) return object;
          var message = new $root.protoPaodekuai.StartChuPaiResponse();
          null != object.cardType && (message.cardType = String(object.cardType));
          null != object.uuid && (message.uuid = String(object.uuid));
          null != object.isFirst && (message.isFirst = String(object.isFirst));
          null != object.find_333x && (message.find_333x = String(object.find_333x));
          null != object.expireSeconds && (message.expireSeconds = String(object.expireSeconds));
          return message;
        };
        StartChuPaiResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.cardType = "";
            object.uuid = "";
            object.isFirst = "";
            object.find_333x = "";
            object.expireSeconds = "";
          }
          null != message.cardType && message.hasOwnProperty("cardType") && (object.cardType = message.cardType);
          null != message.uuid && message.hasOwnProperty("uuid") && (object.uuid = message.uuid);
          null != message.isFirst && message.hasOwnProperty("isFirst") && (object.isFirst = message.isFirst);
          null != message.find_333x && message.hasOwnProperty("find_333x") && (object.find_333x = message.find_333x);
          null != message.expireSeconds && message.hasOwnProperty("expireSeconds") && (object.expireSeconds = message.expireSeconds);
          return object;
        };
        StartChuPaiResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return StartChuPaiResponse;
      }();
      protoPaodekuai.ChuPaiRequest = function() {
        function ChuPaiRequest(properties) {
          this.cards = [];
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        ChuPaiRequest.prototype.cards = $util.emptyArray;
        ChuPaiRequest.create = function create(properties) {
          return new ChuPaiRequest(properties);
        };
        ChuPaiRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          if (null != message.cards && message.cards.length) {
            writer.uint32(10).fork();
            for (var i = 0; i < message.cards.length; ++i) writer.int32(message.cards[i]);
            writer.ldelim();
          }
          return writer;
        };
        ChuPaiRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ChuPaiRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ChuPaiRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.cards && message.cards.length || (message.cards = []);
              if (2 === (7 & tag)) {
                var end2 = reader.uint32() + reader.pos;
                while (reader.pos < end2) message.cards.push(reader.int32());
              } else message.cards.push(reader.int32());
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        ChuPaiRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        ChuPaiRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.cards && message.hasOwnProperty("cards")) {
            if (!Array.isArray(message.cards)) return "cards: array expected";
            for (var i = 0; i < message.cards.length; ++i) if (!$util.isInteger(message.cards[i])) return "cards: integer[] expected";
          }
          return null;
        };
        ChuPaiRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.ChuPaiRequest) return object;
          var message = new $root.protoPaodekuai.ChuPaiRequest();
          if (object.cards) {
            if (!Array.isArray(object.cards)) throw TypeError(".protoPaodekuai.ChuPaiRequest.cards: array expected");
            message.cards = [];
            for (var i = 0; i < object.cards.length; ++i) message.cards[i] = 0 | object.cards[i];
          }
          return message;
        };
        ChuPaiRequest.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          (options.arrays || options.defaults) && (object.cards = []);
          if (message.cards && message.cards.length) {
            object.cards = [];
            for (var j = 0; j < message.cards.length; ++j) object.cards[j] = message.cards[j];
          }
          return object;
        };
        ChuPaiRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ChuPaiRequest;
      }();
      protoPaodekuai.ChuPaiResponse = function() {
        function ChuPaiResponse(properties) {
          this.cards = [];
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        ChuPaiResponse.prototype.cards = $util.emptyArray;
        ChuPaiResponse.prototype.cardType = "";
        ChuPaiResponse.prototype.uuid = "";
        ChuPaiResponse.prototype.res = 0;
        ChuPaiResponse.create = function create(properties) {
          return new ChuPaiResponse(properties);
        };
        ChuPaiResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          if (null != message.cards && message.cards.length) {
            writer.uint32(10).fork();
            for (var i = 0; i < message.cards.length; ++i) writer.int32(message.cards[i]);
            writer.ldelim();
          }
          null != message.cardType && Object.hasOwnProperty.call(message, "cardType") && writer.uint32(18).string(message.cardType);
          null != message.uuid && Object.hasOwnProperty.call(message, "uuid") && writer.uint32(26).string(message.uuid);
          null != message.res && Object.hasOwnProperty.call(message, "res") && writer.uint32(32).int32(message.res);
          return writer;
        };
        ChuPaiResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ChuPaiResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ChuPaiResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.cards && message.cards.length || (message.cards = []);
              if (2 === (7 & tag)) {
                var end2 = reader.uint32() + reader.pos;
                while (reader.pos < end2) message.cards.push(reader.int32());
              } else message.cards.push(reader.int32());
              break;

             case 2:
              message.cardType = reader.string();
              break;

             case 3:
              message.uuid = reader.string();
              break;

             case 4:
              message.res = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        ChuPaiResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        ChuPaiResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.cards && message.hasOwnProperty("cards")) {
            if (!Array.isArray(message.cards)) return "cards: array expected";
            for (var i = 0; i < message.cards.length; ++i) if (!$util.isInteger(message.cards[i])) return "cards: integer[] expected";
          }
          if (null != message.cardType && message.hasOwnProperty("cardType") && !$util.isString(message.cardType)) return "cardType: string expected";
          if (null != message.uuid && message.hasOwnProperty("uuid") && !$util.isString(message.uuid)) return "uuid: string expected";
          if (null != message.res && message.hasOwnProperty("res") && !$util.isInteger(message.res)) return "res: integer expected";
          return null;
        };
        ChuPaiResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.ChuPaiResponse) return object;
          var message = new $root.protoPaodekuai.ChuPaiResponse();
          if (object.cards) {
            if (!Array.isArray(object.cards)) throw TypeError(".protoPaodekuai.ChuPaiResponse.cards: array expected");
            message.cards = [];
            for (var i = 0; i < object.cards.length; ++i) message.cards[i] = 0 | object.cards[i];
          }
          null != object.cardType && (message.cardType = String(object.cardType));
          null != object.uuid && (message.uuid = String(object.uuid));
          null != object.res && (message.res = 0 | object.res);
          return message;
        };
        ChuPaiResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          (options.arrays || options.defaults) && (object.cards = []);
          if (options.defaults) {
            object.cardType = "";
            object.uuid = "";
            object.res = 0;
          }
          if (message.cards && message.cards.length) {
            object.cards = [];
            for (var j = 0; j < message.cards.length; ++j) object.cards[j] = message.cards[j];
          }
          null != message.cardType && message.hasOwnProperty("cardType") && (object.cardType = message.cardType);
          null != message.uuid && message.hasOwnProperty("uuid") && (object.uuid = message.uuid);
          null != message.res && message.hasOwnProperty("res") && (object.res = message.res);
          return object;
        };
        ChuPaiResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ChuPaiResponse;
      }();
      protoPaodekuai.BaoDanResponse = function() {
        function BaoDanResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        BaoDanResponse.prototype.msg = 0;
        BaoDanResponse.prototype.uuid = "";
        BaoDanResponse.create = function create(properties) {
          return new BaoDanResponse(properties);
        };
        BaoDanResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.msg && Object.hasOwnProperty.call(message, "msg") && writer.uint32(8).int32(message.msg);
          null != message.uuid && Object.hasOwnProperty.call(message, "uuid") && writer.uint32(18).string(message.uuid);
          return writer;
        };
        BaoDanResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        BaoDanResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.BaoDanResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.msg = reader.int32();
              break;

             case 2:
              message.uuid = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        BaoDanResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        BaoDanResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.msg && message.hasOwnProperty("msg") && !$util.isInteger(message.msg)) return "msg: integer expected";
          if (null != message.uuid && message.hasOwnProperty("uuid") && !$util.isString(message.uuid)) return "uuid: string expected";
          return null;
        };
        BaoDanResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.BaoDanResponse) return object;
          var message = new $root.protoPaodekuai.BaoDanResponse();
          null != object.msg && (message.msg = 0 | object.msg);
          null != object.uuid && (message.uuid = String(object.uuid));
          return message;
        };
        BaoDanResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.msg = 0;
            object.uuid = "";
          }
          null != message.msg && message.hasOwnProperty("msg") && (object.msg = message.msg);
          null != message.uuid && message.hasOwnProperty("uuid") && (object.uuid = message.uuid);
          return object;
        };
        BaoDanResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return BaoDanResponse;
      }();
      protoPaodekuai.ExitRoomRequest = function() {
        function ExitRoomRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        ExitRoomRequest.create = function create(properties) {
          return new ExitRoomRequest(properties);
        };
        ExitRoomRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          return writer;
        };
        ExitRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ExitRoomRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ExitRoomRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            tag >>> 3;
            reader.skipType(7 & tag);
          }
          return message;
        };
        ExitRoomRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        ExitRoomRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          return null;
        };
        ExitRoomRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.ExitRoomRequest) return object;
          return new $root.protoPaodekuai.ExitRoomRequest();
        };
        ExitRoomRequest.toObject = function toObject() {
          return {};
        };
        ExitRoomRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ExitRoomRequest;
      }();
      protoPaodekuai.ExitRoomResponse = function() {
        function ExitRoomResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        ExitRoomResponse.prototype.code = 0;
        ExitRoomResponse.prototype.player = "";
        ExitRoomResponse.prototype.type = 0;
        ExitRoomResponse.prototype.msg = 0;
        ExitRoomResponse.create = function create(properties) {
          return new ExitRoomResponse(properties);
        };
        ExitRoomResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(8).int32(message.code);
          null != message.player && Object.hasOwnProperty.call(message, "player") && writer.uint32(18).string(message.player);
          null != message.type && Object.hasOwnProperty.call(message, "type") && writer.uint32(24).int32(message.type);
          null != message.msg && Object.hasOwnProperty.call(message, "msg") && writer.uint32(32).int32(message.msg);
          return writer;
        };
        ExitRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        ExitRoomResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.ExitRoomResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.code = reader.int32();
              break;

             case 2:
              message.player = reader.string();
              break;

             case 3:
              message.type = reader.int32();
              break;

             case 4:
              message.msg = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        ExitRoomResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        ExitRoomResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.player && message.hasOwnProperty("player") && !$util.isString(message.player)) return "player: string expected";
          if (null != message.type && message.hasOwnProperty("type") && !$util.isInteger(message.type)) return "type: integer expected";
          if (null != message.msg && message.hasOwnProperty("msg") && !$util.isInteger(message.msg)) return "msg: integer expected";
          return null;
        };
        ExitRoomResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.ExitRoomResponse) return object;
          var message = new $root.protoPaodekuai.ExitRoomResponse();
          null != object.code && (message.code = 0 | object.code);
          null != object.player && (message.player = String(object.player));
          null != object.type && (message.type = 0 | object.type);
          null != object.msg && (message.msg = 0 | object.msg);
          return message;
        };
        ExitRoomResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.code = 0;
            object.player = "";
            object.type = 0;
            object.msg = 0;
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.player && message.hasOwnProperty("player") && (object.player = message.player);
          null != message.type && message.hasOwnProperty("type") && (object.type = message.type);
          null != message.msg && message.hasOwnProperty("msg") && (object.msg = message.msg);
          return object;
        };
        ExitRoomResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return ExitRoomResponse;
      }();
      protoPaodekuai.DismissRoomRequest = function() {
        function DismissRoomRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        DismissRoomRequest.create = function create(properties) {
          return new DismissRoomRequest(properties);
        };
        DismissRoomRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          return writer;
        };
        DismissRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        DismissRoomRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.DismissRoomRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            tag >>> 3;
            reader.skipType(7 & tag);
          }
          return message;
        };
        DismissRoomRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        DismissRoomRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          return null;
        };
        DismissRoomRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.DismissRoomRequest) return object;
          return new $root.protoPaodekuai.DismissRoomRequest();
        };
        DismissRoomRequest.toObject = function toObject() {
          return {};
        };
        DismissRoomRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return DismissRoomRequest;
      }();
      protoPaodekuai.DismissRoomResponse = function() {
        function DismissRoomResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        DismissRoomResponse.prototype.code = 0;
        DismissRoomResponse.prototype.flag = 0;
        DismissRoomResponse.create = function create(properties) {
          return new DismissRoomResponse(properties);
        };
        DismissRoomResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(8).int32(message.code);
          null != message.flag && Object.hasOwnProperty.call(message, "flag") && writer.uint32(16).uint32(message.flag);
          return writer;
        };
        DismissRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        DismissRoomResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.DismissRoomResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.code = reader.int32();
              break;

             case 2:
              message.flag = reader.uint32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        DismissRoomResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        DismissRoomResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.flag && message.hasOwnProperty("flag") && !$util.isInteger(message.flag)) return "flag: integer expected";
          return null;
        };
        DismissRoomResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.DismissRoomResponse) return object;
          var message = new $root.protoPaodekuai.DismissRoomResponse();
          null != object.code && (message.code = 0 | object.code);
          null != object.flag && (message.flag = object.flag >>> 0);
          return message;
        };
        DismissRoomResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.code = 0;
            object.flag = 0;
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.flag && message.hasOwnProperty("flag") && (object.flag = message.flag);
          return object;
        };
        DismissRoomResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return DismissRoomResponse;
      }();
      protoPaodekuai.PlayerVoteRequest = function() {
        function PlayerVoteRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        PlayerVoteRequest.prototype.flag = false;
        PlayerVoteRequest.create = function create(properties) {
          return new PlayerVoteRequest(properties);
        };
        PlayerVoteRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.flag && Object.hasOwnProperty.call(message, "flag") && writer.uint32(8).bool(message.flag);
          return writer;
        };
        PlayerVoteRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        PlayerVoteRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.PlayerVoteRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.flag = reader.bool();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        PlayerVoteRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        PlayerVoteRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.flag && message.hasOwnProperty("flag") && "boolean" !== typeof message.flag) return "flag: boolean expected";
          return null;
        };
        PlayerVoteRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.PlayerVoteRequest) return object;
          var message = new $root.protoPaodekuai.PlayerVoteRequest();
          null != object.flag && (message.flag = Boolean(object.flag));
          return message;
        };
        PlayerVoteRequest.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          options.defaults && (object.flag = false);
          null != message.flag && message.hasOwnProperty("flag") && (object.flag = message.flag);
          return object;
        };
        PlayerVoteRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return PlayerVoteRequest;
      }();
      protoPaodekuai.PlayerVoteResponse = function() {
        function PlayerVoteResponse(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        PlayerVoteResponse.prototype.code = 0;
        PlayerVoteResponse.prototype.player = "";
        PlayerVoteResponse.prototype.flag = 0;
        PlayerVoteResponse.prototype.type = 0;
        PlayerVoteResponse.create = function create(properties) {
          return new PlayerVoteResponse(properties);
        };
        PlayerVoteResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(8).int32(message.code);
          null != message.player && Object.hasOwnProperty.call(message, "player") && writer.uint32(18).string(message.player);
          null != message.flag && Object.hasOwnProperty.call(message, "flag") && writer.uint32(24).int32(message.flag);
          null != message.type && Object.hasOwnProperty.call(message, "type") && writer.uint32(32).int32(message.type);
          return writer;
        };
        PlayerVoteResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        PlayerVoteResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.PlayerVoteResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.code = reader.int32();
              break;

             case 2:
              message.player = reader.string();
              break;

             case 3:
              message.flag = reader.int32();
              break;

             case 4:
              message.type = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        PlayerVoteResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        PlayerVoteResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.player && message.hasOwnProperty("player") && !$util.isString(message.player)) return "player: string expected";
          if (null != message.flag && message.hasOwnProperty("flag") && !$util.isInteger(message.flag)) return "flag: integer expected";
          if (null != message.type && message.hasOwnProperty("type") && !$util.isInteger(message.type)) return "type: integer expected";
          return null;
        };
        PlayerVoteResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.PlayerVoteResponse) return object;
          var message = new $root.protoPaodekuai.PlayerVoteResponse();
          null != object.code && (message.code = 0 | object.code);
          null != object.player && (message.player = String(object.player));
          null != object.flag && (message.flag = 0 | object.flag);
          null != object.type && (message.type = 0 | object.type);
          return message;
        };
        PlayerVoteResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.code = 0;
            object.player = "";
            object.flag = 0;
            object.type = 0;
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.player && message.hasOwnProperty("player") && (object.player = message.player);
          null != message.flag && message.hasOwnProperty("flag") && (object.flag = message.flag);
          null != message.type && message.hasOwnProperty("type") && (object.type = message.type);
          return object;
        };
        PlayerVoteResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return PlayerVoteResponse;
      }();
      protoPaodekuai.SponsorVoteResponse = function() {
        function SponsorVoteResponse(properties) {
          this.agreevote = [];
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        SponsorVoteResponse.prototype.code = 0;
        SponsorVoteResponse.prototype.expireSeconds = 0;
        SponsorVoteResponse.prototype.totalTime = 0;
        SponsorVoteResponse.prototype.sponsor = "";
        SponsorVoteResponse.prototype.agreevote = $util.emptyArray;
        SponsorVoteResponse.prototype.timeCode = 0;
        SponsorVoteResponse.prototype.type = 0;
        SponsorVoteResponse.create = function create(properties) {
          return new SponsorVoteResponse(properties);
        };
        SponsorVoteResponse.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.code && Object.hasOwnProperty.call(message, "code") && writer.uint32(8).uint32(message.code);
          null != message.expireSeconds && Object.hasOwnProperty.call(message, "expireSeconds") && writer.uint32(16).int32(message.expireSeconds);
          null != message.totalTime && Object.hasOwnProperty.call(message, "totalTime") && writer.uint32(24).int32(message.totalTime);
          null != message.sponsor && Object.hasOwnProperty.call(message, "sponsor") && writer.uint32(34).string(message.sponsor);
          if (null != message.agreevote && message.agreevote.length) for (var i = 0; i < message.agreevote.length; ++i) $root.protoPaodekuai.SponsorVoteResponse.AgreeVote.encode(message.agreevote[i], writer.uint32(42).fork()).ldelim();
          null != message.timeCode && Object.hasOwnProperty.call(message, "timeCode") && writer.uint32(48).int32(message.timeCode);
          null != message.type && Object.hasOwnProperty.call(message, "type") && writer.uint32(56).int32(message.type);
          return writer;
        };
        SponsorVoteResponse.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        SponsorVoteResponse.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.SponsorVoteResponse();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.code = reader.uint32();
              break;

             case 2:
              message.expireSeconds = reader.int32();
              break;

             case 3:
              message.totalTime = reader.int32();
              break;

             case 4:
              message.sponsor = reader.string();
              break;

             case 5:
              message.agreevote && message.agreevote.length || (message.agreevote = []);
              message.agreevote.push($root.protoPaodekuai.SponsorVoteResponse.AgreeVote.decode(reader, reader.uint32()));
              break;

             case 6:
              message.timeCode = reader.int32();
              break;

             case 7:
              message.type = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        SponsorVoteResponse.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        SponsorVoteResponse.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.code && message.hasOwnProperty("code") && !$util.isInteger(message.code)) return "code: integer expected";
          if (null != message.expireSeconds && message.hasOwnProperty("expireSeconds") && !$util.isInteger(message.expireSeconds)) return "expireSeconds: integer expected";
          if (null != message.totalTime && message.hasOwnProperty("totalTime") && !$util.isInteger(message.totalTime)) return "totalTime: integer expected";
          if (null != message.sponsor && message.hasOwnProperty("sponsor") && !$util.isString(message.sponsor)) return "sponsor: string expected";
          if (null != message.agreevote && message.hasOwnProperty("agreevote")) {
            if (!Array.isArray(message.agreevote)) return "agreevote: array expected";
            for (var i = 0; i < message.agreevote.length; ++i) {
              var error = $root.protoPaodekuai.SponsorVoteResponse.AgreeVote.verify(message.agreevote[i]);
              if (error) return "agreevote." + error;
            }
          }
          if (null != message.timeCode && message.hasOwnProperty("timeCode") && !$util.isInteger(message.timeCode)) return "timeCode: integer expected";
          if (null != message.type && message.hasOwnProperty("type") && !$util.isInteger(message.type)) return "type: integer expected";
          return null;
        };
        SponsorVoteResponse.fromObject = function fromObject(object) {
          if (object instanceof $root.protoPaodekuai.SponsorVoteResponse) return object;
          var message = new $root.protoPaodekuai.SponsorVoteResponse();
          null != object.code && (message.code = object.code >>> 0);
          null != object.expireSeconds && (message.expireSeconds = 0 | object.expireSeconds);
          null != object.totalTime && (message.totalTime = 0 | object.totalTime);
          null != object.sponsor && (message.sponsor = String(object.sponsor));
          if (object.agreevote) {
            if (!Array.isArray(object.agreevote)) throw TypeError(".protoPaodekuai.SponsorVoteResponse.agreevote: array expected");
            message.agreevote = [];
            for (var i = 0; i < object.agreevote.length; ++i) {
              if ("object" !== typeof object.agreevote[i]) throw TypeError(".protoPaodekuai.SponsorVoteResponse.agreevote: object expected");
              message.agreevote[i] = $root.protoPaodekuai.SponsorVoteResponse.AgreeVote.fromObject(object.agreevote[i]);
            }
          }
          null != object.timeCode && (message.timeCode = 0 | object.timeCode);
          null != object.type && (message.type = 0 | object.type);
          return message;
        };
        SponsorVoteResponse.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          (options.arrays || options.defaults) && (object.agreevote = []);
          if (options.defaults) {
            object.code = 0;
            object.expireSeconds = 0;
            object.totalTime = 0;
            object.sponsor = "";
            object.timeCode = 0;
            object.type = 0;
          }
          null != message.code && message.hasOwnProperty("code") && (object.code = message.code);
          null != message.expireSeconds && message.hasOwnProperty("expireSeconds") && (object.expireSeconds = message.expireSeconds);
          null != message.totalTime && message.hasOwnProperty("totalTime") && (object.totalTime = message.totalTime);
          null != message.sponsor && message.hasOwnProperty("sponsor") && (object.sponsor = message.sponsor);
          if (message.agreevote && message.agreevote.length) {
            object.agreevote = [];
            for (var j = 0; j < message.agreevote.length; ++j) object.agreevote[j] = $root.protoPaodekuai.SponsorVoteResponse.AgreeVote.toObject(message.agreevote[j], options);
          }
          null != message.timeCode && message.hasOwnProperty("timeCode") && (object.timeCode = message.timeCode);
          null != message.type && message.hasOwnProperty("type") && (object.type = message.type);
          return object;
        };
        SponsorVoteResponse.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        SponsorVoteResponse.AgreeVote = function() {
          function AgreeVote(properties) {
            if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
          }
          AgreeVote.prototype.player = "";
          AgreeVote.create = function create(properties) {
            return new AgreeVote(properties);
          };
          AgreeVote.encode = function encode(message, writer) {
            writer || (writer = $Writer.create());
            null != message.player && Object.hasOwnProperty.call(message, "player") && writer.uint32(10).string(message.player);
            return writer;
          };
          AgreeVote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
          };
          AgreeVote.decode = function decode(reader, length) {
            reader instanceof $Reader || (reader = $Reader.create(reader));
            var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.protoPaodekuai.SponsorVoteResponse.AgreeVote();
            while (reader.pos < end) {
              var tag = reader.uint32();
              switch (tag >>> 3) {
               case 1:
                message.player = reader.string();
                break;

               default:
                reader.skipType(7 & tag);
              }
            }
            return message;
          };
          AgreeVote.decodeDelimited = function decodeDelimited(reader) {
            reader instanceof $Reader || (reader = new $Reader(reader));
            return this.decode(reader, reader.uint32());
          };
          AgreeVote.verify = function verify(message) {
            if ("object" !== typeof message || null === message) return "object expected";
            if (null != message.player && message.hasOwnProperty("player") && !$util.isString(message.player)) return "player: string expected";
            return null;
          };
          AgreeVote.fromObject = function fromObject(object) {
            if (object instanceof $root.protoPaodekuai.SponsorVoteResponse.AgreeVote) return object;
            var message = new $root.protoPaodekuai.SponsorVoteResponse.AgreeVote();
            null != object.player && (message.player = String(object.player));
            return message;
          };
          AgreeVote.toObject = function toObject(message, options) {
            options || (options = {});
            var object = {};
            options.defaults && (object.player = "");
            null != message.player && message.hasOwnProperty("player") && (object.player = message.player);
            return object;
          };
          AgreeVote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
          };
          return AgreeVote;
        }();
        return SponsorVoteResponse;
      }();
      return protoPaodekuai;
    }();
    module.exports = $root;
    cc._RF.pop();
  }, {
    "protobufjs/minimal": 8
  } ]
}, {}, [ "AppConfig", "AssetsScene", "ConstConfig", "ErrorCodeConfig", "EventConfig", "HttpConfig", "ResConfig", "SceneConfig", "TipsConfig", "ViewConfig", "BackGroundCmp", "ContentCmp", "EntryBase", "SceneBase", "ViewBase", "UISuperItem", "UISuperLayout", "UISuperScrollView", "HttpBaseProto", "HttpLoginProto", "HttpMessageHelp", "JsonRemoteProxy", "BundleManager", "EventManager", "LoadingManager", "LogManager", "NativeManager", "PlatformDisManager", "ResourcesManager", "SceneManager", "SoundManager", "ViewManager", "WxMinManager", "LSCmdDelayManager", "LSManager", "BaseSocketProcesser", "BaseSocketReader", "BaseSocketWriter", "SocketBase", "SocketConfig", "WsSocket", "EventInfo", "Listener", "Pack", "SceneInfo", "ViewInfo", "protoLogin", "ArrayUtils", "ByteArray", "DataParser", "SpineUtils", "StringUtils", "ToolUtils", "Utf8Utils", "GameConfigInfo", "ModelCenter", "ReconnectionInfo", "StaCnfInfo", "UserInfo", "HallEntry", "HallScene", "HallView", "GuideView", "ListItem", "ListView", "LSCommand", "LSListener", "LSProcesser", "LSReader", "LSWriter", "InitReg", "LoginEntry", "LoginScene", "LoginView", "DownloadGameView", "GameLoaderBase", "GameLoaderManager", "RoomEntry", "RoomScene", "RmcmSmallSettlement", "GameCommonConfig", "GameMapConfig", "GSCmdDelayManager", "GSManager", "PdkInit", "PdkRoomLayer", "PdkConstant", "PdkResConfig", "PdkGameData", "PdkCommand", "PdkListener", "PdkProcesser", "PdkReader", "PdkWriter", "protoPaodekuai", "SplashScene", "MessageView" ]);