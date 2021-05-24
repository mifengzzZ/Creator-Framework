/*
 * @Descripttion: 动态资源缓存管理器
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-11-08 20:59:45
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

export default class ResourcesManager  {

    private static _ins : ResourcesManager = null;

    s_resources : Object = {};

    static getInstance () : ResourcesManager {
        if (!this._ins) {
            this._ins = new ResourcesManager();
        }
        return this._ins;
    }

    getGlobResources () : Object {
        return this.s_resources
    }

    cacheAllResources ( config:any[], callBack:Function ) {
        // 动态缓存资源请确保ref为1(统一)
        for (let index = 0; index < config.length; index++) {
            let value:any = config[index];
            for (const key in value) {
                let arr = value[key].split(".");
                cc.log(arr[0]);
                if (arr[1] === "prefab") {
                    cc.resources.load(arr[0], cc.Prefab, (err:any, prefab:cc.Prefab) => {
                        prefab.addRef();
                        this.s_resources[key] = prefab;
                        callBack();
                    });   

                } else if (arr[1] === "mp3") {
                    cc.resources.load(arr[0], cc.AudioClip, (err:any, audio:cc.AudioClip) => {
                        audio.addRef();
                        this.s_resources[key] = audio;
                        callBack();
                    });
                } else if (arr[1] === "png") {
                    cc.resources.load(arr[0], cc.SpriteFrame, (err:any, texture:cc.SpriteFrame) => {
                        this.s_resources[key] = texture;
                        callBack();
                    });
                } else if (arr[1] === "atlas") {
                    cc.resources.load(arr[0], sp.SkeletonData, (err:any, spine:sp.SkeletonData) => {
                        spine.addRef();
                        this.s_resources[key] = spine;
                        callBack();
                    });
                } else if (arr[1] === "plist") {
                    cc.resources.load(arr[0], cc.SpriteAtlas, (err:any, spriteAtlas:cc.SpriteAtlas) => {
                        spriteAtlas.addRef();
                        this.s_resources[key] = spriteAtlas;
                        callBack();
                    });
                }
            }
            
        }
    }

    
}
