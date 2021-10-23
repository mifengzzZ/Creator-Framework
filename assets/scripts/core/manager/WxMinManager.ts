import { AppConfig } from "../../AppConfig";
import LogManager from "./LogManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WxMinManager {

    _wxOpenID : any = null;

    private static _ins : WxMinManager = null;

    // 被动转发的类型
    _shareModel : number = 2;

    // 微信开放文档指南-转发
    _id : string = '';  // 通过 MP 系统审核的图片编号
    _url : string = ''; // 通过 MP 系统审核的图片地址

    // 微信BannerAdConfig
    _wxBannerCfg = {
        bannerAd : null,
        bannerAd2 : null,
        windowWidth : null,
        windowHeight : null,
    };

    // 微信视频Config
    _wxVideoCfg = {
        videoBar : null,
        videoBar2 : null
    };

    static getInstance () : WxMinManager {
        if (!this._ins) {
            this._ins = new WxMinManager();
            this._ins.init();
        }
        return this._ins;
    }

    init () {
        if (!CC_WECHATGAME) return;

        this.setForwardVis(true);
        
        // 获取更多转发信息
        // 通过 wx.updateShareMenu 接口可修改转发属性。如果设置 withShareTicket 为 true ，会有以下效果
            // 1. 选择联系人的时候只能选择一个目标，不能多选
            // 2. 消息被转发出去之后，在会话窗口中无法被长按二次转发
            // 3. 消息转发的目标如果是一个群聊，则
                // 1. 会在转发成功的时候获得一个 shareTicket
                // 2. 每次用户从这个消息卡片进入的时候，也会获得一个 shareTicket，通过调用 wx.getShareInfo() 接口传入 shareTicket 可以获取群相关信息
        // 修改这个属性后，同时对主动转发和被动转发生效。
        //@ts-ignore
        // wx.updateShareMenu({
        //     withShareTicket: true
        //   })

        //@ts-ignore
        wx.onShow((res) => {
            console.log("------------------------- 唤起");
            LogManager.getInstance().log(res);
        });
        //@ts-ignore
        wx.onHide(() => {
            console.log("------------------------- 后台");
        });

        this.getStartAppOptions();
    }

    creatWxBannerAd ( callback:Function ) {
        if (!CC_WECHATGAME) return;

        /**
         * 创建之后再合适的地方调用show hide destory
         * 默认隐藏
        */
        //@ts-ignore
        if (typeof (wx) !== "undefined") {
            //@ts-ignore
            let winSize = wx.getSystemInfoSync({
                success ( res ) {
                    this._wxBannerCfg.windowWidth = res.windowWidth;
                    this._wxBannerCfg.windowHeight = res.windowHeight;
                }
            });
        }

        // 广告1
        if(this._wxBannerCfg.bannerAd === null) {
            console.log("创建广告1");
            // 广告
            //@ts-ignore
            this._wxBannerCfg.bannerAd = window.wx.createBannerAd({
                adUnitId: 'adunit-ce2d1811f7116b05',
                style: {
                    left: this._wxBannerCfg.windowWidth/2 - 150,
                    top: this._wxBannerCfg.windowHeight - 90,
                    // 这里有几点要说明，微信的广告是固定的大小比例，最小300的宽，宽度确定高度，所以不需要去管高度
                    width:  300,
                }
            });
            this._wxBannerCfg.bannerAd.onResize(() => {
                // 微信的广告位置是以左上角为坐标系的，因此在计算位置的时候需要进行相对应的判断，如上代码我是让他显示在屏幕之下，+0.1则是为了考虑到苹果机型的底边条
                this._wxBannerCfg.bannerAd.style.left = this._wxBannerCfg.windowWidth/2 - 150 + 0.1;
                this._wxBannerCfg.bannerAd.style.top = this._wxBannerCfg.windowHeight - this._wxBannerCfg.bannerAd.style.realHeight + 0.1;
            });
            this._wxBannerCfg.bannerAd.onError((res) => {
                console.log(res);
            });
            this._wxBannerCfg.bannerAd.onLoad(() => {
                console.log("广告1加载成功");
                callback();
            });
        }

    }

    creatWxVideoAd ( callback:Function ) {
        if (!CC_WECHATGAME) return;

        if (this._wxVideoCfg.videoBar === null) {
            //@ts-ignore
            this._wxVideoCfg.videoBar = wx.createRewardedVideoAd({
                adUnitId: 'adunit-ce2d1811f7116b05'
            });
            this._wxVideoCfg.videoBar.onError((res) => {
                console.log("video_1", res);
            });
            this._wxVideoCfg.videoBar.onLoad(() => {
                console.log('复活激励视频 广告加载成功')
            });
            this._wxVideoCfg.videoBar.onClose(res => {

                this._wxVideoCfg.videoBar.offClose()

                console.log('第一个视频回调')
                if (res && res.isEnded || res === undefined) {
                    console.log("正常播放结束，可以下发游戏奖励");
                } else {
                    console.log("播放中途退出，不下发游戏奖励");
                }

                callback();
            })

            // 接下来我们需要了解一件事情，微信的视频广告只要是在你需要的地方写上代码加载，实际上不需要考虑他的分辨率，因为他是一个全屏的广告并且右上角有个退出按钮，而且不会和微信分享一样不能获得回调函数，微信视频广告是可以判断是否播放完成的。
            // 是否是微信小游戏
            if (CC_WECHATGAME) {
                this._wxVideoCfg.videoBar.load()
                .then(() => this._wxVideoCfg.videoBar.show())
                .catch(err => console.log(err.errMsg));
            }

        }
    }

    /**
     * 开启转发或隐藏转发选项
     * 转发选项默认隐藏
     */
    setForwardVis ( vis:boolean ) {
        if (!CC_WECHATGAME) return;
        if (vis) {
            //@ts-ignore
            wx.showShareMenu();
            //@ts-ignore
            wx.onShareAppMessage(this.onShareAppMsgFunc.bind(this));
        } else {
            //@ts-ignore
            wx.hideShareMenu();
        }
    }
    
    /**
     * 被动点击转发按钮回调
     */
    onShareAppMsgFunc () : any {
        if (!CC_WECHATGAME) return;
        if (this._shareModel === 1) {
            // 用户点击了“转发”按钮，默认会将整个画布转发出去,可自定义标题
            return {
                title: '被动转发1'
            }   
        } else if (this._shareModel === 2) {
            // 使用 Canvas 内容作为转发图片
            // 如果不指定转发图片，默认会显示一个小程序的 logo。如果希望转发的时候显示 Canvas 的内容，可以使用 Canvas.toTempFilePath() 或 Canvas.toTempFilePathSync() 该接口有些机型会黑屏 来生成一张本地图片，然后把图片路径传给 imageUrl 参数。
            // 转发出来的消息卡片中，图片的最佳显示比例是 5：4。
            return {
                title: '被动转发2',
                //@ts-ignore
                imageUrl: cc.game.canvas.toTempFilePath({
                    x : 0,
                    y : 0,
                    width : cc.game.canvas.width,
                    height : cc.game.canvas.height,
                    destWidth : 500,
                    destHeight : 400,
                    fileType : "jpg",
                    quality : 1.0, // jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0
                    success : function (res) {
                        console.log(res.tempFilePath);
                    }
                })
            }
        } else if (this._shareModel === 3) {
            // 使用审核通过的转发图片
            // 定义
            //     开发者可以将转发图片提前通过 MP 系统上传，并由平台进行审核。审核通过的图片会下发对应的图片编号和图片地址，给到开发者调用。（图片编号和图片地址必须一起使用，缺一不可） 
                            // 注：审核通过的图片，并不完全代表无任何问题，线上的转发行为依然会受平台监管，请开发者遵守运营规范相关要求。
            // 调用
            //     在转发 wx.shareAppMessage 和 wx.onShareAppMessage 接口中，传入 imageUrlId 和 imageUrl 参数。
            //@ts-ignore
            wx.onShareAppMessage(function () {
                return {
                  imageUrlId: this._id,
                  imageUrl: this._url
                }
              });
        }
    }

    /**
     * 主动直接发送转发消息/图片
     */
    shareAppMsg ( title:string, type:number, obj:Object, id?:any, url?:any ) {
        if (!CC_WECHATGAME) return;

        if (type === 1) {
            //@ts-ignore
            wx.shareAppMessage({
                title: title
            })   
        } else if (type === 2) {
            let queryStr = "";
            let count = 0;
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (count > 0) {
                        queryStr += "&";
                    }
                    queryStr = queryStr + key + "=" + obj[key];
                    count += 1;
                }
            }
            LogManager.getInstance().log(queryStr);
            //@ts-ignore
            wx.shareAppMessage({
                title: title,
                query: queryStr,
                //@ts-ignore
                imageUrl: cc.game.canvas.toTempFilePath({
                    x : 0,
                    y : 0,
                    width : cc.game.canvas.width,
                    height : cc.game.canvas.height,
                    destWidth : 500,
                    destHeight : 400,
                    fileType : "jpg",
                    quality : 1.0, // jpg图片的质量，仅当 fileType 为 jpg 时有效。取值范围为 0.0（最低）- 1.0（最高），不含 0。不在范围内时当作 1.0
                    success : function (res) {
                        console.log(res.tempFilePath);
                    }
                })
            })   
        } else if (type === 3) {
            //@ts-ignore
            wx.shareAppMessage({
                imageUrlId: id,
                imageUrl: url
              })
        }
    }

    /**
     * 该接口可在第一次启动小游戏时获取额外参数
     * 热启动参数通过 wx.onShow 接口获取
     */
    getStartAppOptions () {
        //@ts-ignore
        let options = wx.getLaunchOptionsSync();
        LogManager.getInstance().log(options);
    }

//----------------------------------------------------------------------------------------------------------------------------------------
// 微信云服务
    
    /**
     * 微信云服务器-初始化
     * 小游戏端调用云函数前，需要初始云环境
     */
    wxCloudServer_Init () {
        LogManager.getInstance().log("微信云服务器-初始化");
        //@ts-ignore
        wx.cloud.init({
            // env 参数说明:
            //      env参数决定接下来小程序发起的云开发调用(wx.cloud.xxx)会默认请求到哪个云环境的资源
            //      此处请填写环境ID,环境ID可打开云控制台查看
            //      如使用默认环境(第一个创建的环境)
            // env: 'my-env-id',
            env: 'my-env-id',
            traceUser: true // 是否在将用户访问,记录到用户管理中,在控制台中可见(调试时可true)
        });
    }

    /**
     * 微信云服务器-获取OpenID
     * 调用云函数时,上下文中便可以得到玩家openid和uninid,
     *      玩家进入游戏就先调用此函数,得到玩家的openid用于后边更新玩家数据和获取世界排行的条件。
     */
    wxCloudServer_getOpenID () {
        LogManager.getInstance().log("微信云服务器-获取OpenID");
        //@ts-ignore
        wx.cloud.callFunction({
            name: 'getOpenId',
            success: (res:any) => {
                // 子域保存OpenID
                this._wxOpenID = res.result.openid;
                let obj = {type:"setOpenID", openid : this._wxOpenID };
                let msg = JSON.stringify(obj);
                LogManager.getInstance().log(msg);
                //@ts-ignore
                wx.postMessage({
                    message: msg
                });
            },
            fail: (err:any) => {
                LogManager.getInstance().log('Get openID faild with error : ');
                LogManager.getInstance().log(err);
            }
        });
    }

    /**
     * 微信云服务器-查询排行榜
     */
    wxCloudServerQueryRankTop10 ( ranktype, callBack ) {
        LogManager.getInstance().log("微信云服务器,查询排行榜");
        if (!this._wxOpenID) {
            LogManager.getInstance().log("微信OpenID不存在");
        }
        
        let province = undefined;
        // if (GlobalData.instance.userInfo) {
            // province = GlobalData.instance.userInfo.province;
        // }
        LogManager.getInstance().log("province:" + province);
        //@ts-ignore
        wx.cloud.callFunction({
            name: 'queryRankTop10',
            // data 字段的值为传入云函数的第一个参数 event
            data: {
                ranktype: ranktype,
                province: province
            },
            success: (res:any) => {
                if (res) {
                    LogManager.getInstance().log("返回数据成功 : ");
                    LogManager.getInstance().log("res");
                    callBack(ranktype, res.result.data);
                    return true;   
                }
            },
            fail: (err:any) => {
                LogManager.getInstance().log("QueryRankTop10 failed");
                LogManager.getInstance().log(err);
                return false;
            }
        });
    }

}
