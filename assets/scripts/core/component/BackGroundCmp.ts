/*
 * @Descripttion: 背景自适应缩放组件(SHOW_ALL模式)
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-08-24 11:36:00
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

const {ccclass, property} = cc._decorator;

@ccclass
export default class BackGroundCmp extends cc.Component {

    start () {
        // 注意：挂载该组件的节点不能添加widget组件
        let showAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        let realWidth = this.node.width * showAll;
        let realHeight = this.node.height * showAll;
        this.node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
    }

}
