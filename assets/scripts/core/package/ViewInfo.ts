/*
 * @Author: your name
 * @Date: 2021-02-22 08:22:41
 * @LastEditTime: 2021-10-23 16:05:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \TsBasicFrame\assets\scripts\core\package\ViewInfo.ts
 */
export default class ViewInfo {

    tsPath: string = "";
    prefab: cc.Prefab = null;
    zOrder: number = 0;

    constructor(tsPath: string, prefab: cc.Prefab, zOrder?: number) {
        this.tsPath = tsPath;
        this.prefab = prefab;
        this.zOrder = zOrder || 0;
    }

}
