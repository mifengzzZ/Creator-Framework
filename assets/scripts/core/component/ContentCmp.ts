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
