/*
 * @Descripttion: 注册场景(场景信息)
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-08-24 21:35:27
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

export default class SceneInfo {

    tsPath : string = "";
    firePath : string = "";
    
    constructor (tsPath:string, firePath:string) {
        this.tsPath = tsPath;
        this.firePath = firePath;
    }

}
