/*
 * @Descripttion: 注册视图(视图信息)
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-08-24 21:35:27
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

export default class ViewInfo {

    tsPath : string = "";
    prefab : cc.Prefab = null;
    zOrder : number = 0;

    constructor (tsPath:string, prefab:cc.Prefab, zOrder?:number) {
        this.tsPath = tsPath;
        this.prefab = prefab;
        this.zOrder = zOrder || 0;
    }
    
}
