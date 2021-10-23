const { ccclass, property } = cc._decorator;

@ccclass
export default class BackGroundCmp extends cc.Component {

    start() {
        // 注意：挂载该组件的节点不能添加widget组件
        let showAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        let realWidth = this.node.width * showAll;
        let realHeight = this.node.height * showAll;
        this.node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
    }

}
