/*
 * @Descripttion: 新手引导界面
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-13 09:54:59
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import ViewBase from "../../core/external/ViewBase";

//------------------------------------------------------------------------------------

const {ccclass, property} = cc._decorator;

@ccclass
export default class GuideView extends ViewBase {

    _touchNode : cc.Node = null;

    start () {
        this.initView();

        this._touchNode = this.toolUtils.getNodeByName(this.node, "bg");

        let touch = this.toolUtils.getNodeByName(this.node, "touch");
        touch.on(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
    }

    onTouchStart ( event:cc.Event.EventTouch ) {
        let touchs = event.getTouches();
        let loc = touchs[0].getLocation();
        let pt = this._touchNode.convertToNodeSpaceAR(loc);
        let rect = cc.rect(-this._touchNode.width/2, -this._touchNode.height/2, this._touchNode.width, this._touchNode.height);

        // 判断触摸点是否在挖空区域内
        if (rect.contains(pt)) {
            cc.log("有效");
            return false;
        }

    }
    
}
