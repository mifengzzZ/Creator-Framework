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
  Helloworld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
    cc._RF.pop();
  }, {} ],
  ziyu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46a75wIhsVKu6fHR8gc5TI3", "ziyu");
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
    var ziyu = function(_super) {
      __extends(ziyu, _super);
      function ziyu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.content = null;
        _this.score = 0;
        _this.allInfoList = [];
        _this.wxOpenID = null;
        return _this;
      }
      ziyu.prototype.onLoad = function() {
        var _this = this;
        if ("undefined" === typeof wx) return;
        wx.onMessage(function(data) {
          if (data.message) {
            var msg = JSON.parse(data.message);
            if ("showrank" === msg.type) _this.getFriendInfo(); else if ("clear" === msg.type) _this.content.removeAllChildren(); else if ("update" === msg.type) {
              _this.score = msg.score;
              _this.compareOldNewScore();
            } else "setOpenID" === msg.type && (_this.wxOpenID = msg.openid);
          }
        });
      };
      ziyu.prototype.compareOldNewScore = function() {
        var _this = this;
        wx.getUserCloudStorage({
          keyList: [ "score" ],
          success: function(res) {
            if (res.KVDataList.length) {
              var KVData = res.KVDataList[0];
              var storedScore = Number(KVData["value"]);
              if (_this.score > storedScore) {
                var newKVData = {
                  key: "score",
                  value: String(_this.score)
                };
                _this.setNewCloudScore(newKVData);
              }
            } else {
              var newKVData = {
                key: "score",
                value: String(_this.score)
              };
              _this.setNewCloudScore(newKVData);
            }
          },
          fail: function(res) {
            console.log(res);
          }
        });
      };
      ziyu.prototype.setNewCloudScore = function(newKVData) {
        console.log("\u8bbe\u7f6e\u65b0\u4e91\u6258\u7ba1\u5206\u6570");
        wx.setUserCloudStorage({
          KVDataList: [ newKVData ],
          success: function(res) {
            console.log("\u66f4\u65b0\u73a9\u5bb6\u5206\u6570\u6210\u529f\uff01");
          },
          fail: function(res) {
            console.log("\u5931\u8d25 : ", res);
          }
        });
      };
      ziyu.prototype.getFriendInfo = function() {
        var _this = this;
        this.allInfoList = [];
        wx.getFriendCloudStorage({
          keyList: [ "score" ],
          success: function(res) {
            console.log("\u83b7\u53d6\u597d\u53cb\u4fe1\u606f\u6210\u529f : ", res.data);
            for (var i = 0; i < res.data.length; i++) {
              var nickName = res.data[i].nickname;
              var avatarUrl = res.data[i].avatarUrl;
              var score = 0;
              res.data[i].KVDataList.length && (score = res.data[i].KVDataList[0]["value"]);
              _this.allInfoList.push({
                nickName: nickName,
                avatarUrl: avatarUrl,
                score: score
              });
            }
            _this.makeRanks();
          },
          fail: function(res) {
            console.log(res);
          }
        });
      };
      ziyu.prototype.makeRanks = function() {
        this.allInfoList.sort(function(a, b) {
          return b["score"] - a["score"];
        });
        for (var i = 0; i < this.allInfoList.length; i++) {
          var nickName = this.allInfoList[i]["nickName"];
          var avatarUrl = this.allInfoList[i]["avatarUrl"];
          var score = this.allInfoList[i]["score"];
          this.createItem(i + 1, nickName, avatarUrl, score);
        }
        console.log("\u6240\u6709\u73a9\u5bb6 : ", this.allInfoList);
      };
      ziyu.prototype.createItem = function(rank, nickName, avatarUrl, score) {
        console.log("\u521b\u5efaItem");
        var itemNode = cc.instantiate(this.item);
        itemNode.active = true;
        itemNode.children[0].getComponent(cc.Label).string = String(rank);
        itemNode.children[1].getComponent(cc.Label).string = score;
        itemNode.children[2].getComponent(cc.Label).string = nickName;
        console.log("avatarUrl : ", avatarUrl);
        cc.assetManager.loadRemote(avatarUrl, {
          ext: ".png"
        }, function(err, texture) {
          err && console.error(err);
          var w = itemNode.children[3].getContentSize().width;
          console.log("w : ", w);
          console.log("texture : ", texture);
          var scale = 1;
          scale = w >= texture.width ? texture.width / w : w / texture.width;
          console.log("scale : ", scale);
          itemNode.children[3].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
          itemNode.children[3].scale = scale;
        });
        this.content.addChild(itemNode);
      };
      __decorate([ property(cc.Prefab) ], ziyu.prototype, "item", void 0);
      __decorate([ property(cc.Node) ], ziyu.prototype, "content", void 0);
      ziyu = __decorate([ ccclass ], ziyu);
      return ziyu;
    }(cc.Component);
    exports.default = ziyu;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Helloworld", "ziyu" ]);