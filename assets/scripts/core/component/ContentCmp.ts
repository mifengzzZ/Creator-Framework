/*
 * @Author: your name
 * @Date: 2021-02-22 08:22:41
 * @LastEditTime: 2021-10-23 16:09:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \TsBasicFrame\assets\scripts\core\component\ContentCmp.ts
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class ContentCmp extends cc.Component {

    start() {
        let showAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        let realWidth = this.node.width * showAll;
        let realHeight = this.node.height * showAll;
        this.node.width = this.node.width * (cc.view.getCanvasSize().width / realWidth);
        this.node.height = this.node.height * (cc.view.getCanvasSize().height / realHeight);
    }

}
