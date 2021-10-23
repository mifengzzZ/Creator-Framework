/*
 * @Author: your name
 * @Date: 2021-02-22 08:22:41
 * @LastEditTime: 2021-10-23 15:29:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \TsBasicFrame\assets\scripts\room\common\RmcmSmallSettlement.ts
 */
import ViewBase from "../../core/external/ViewBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RmcmSmallSettlement extends ViewBase {

    start() {
        this.logUtil.log("RmcmSmallSettlement");
    }

}
