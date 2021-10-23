/*
 * @Descripttion: 弹框消息界面
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-06 13:07:12
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import ViewBase from "../core/external/ViewBase";
import ToolUtils from "../core/utils/ToolUtils";

//------------------------------------------------------------------------------------

const {ccclass, property} = cc._decorator;

@ccclass
export default class MessageView extends ViewBase {

    start () {
        this.initView();

        let contentLabel = ToolUtils.getInstance().getNodeByName(this.node, "contentTx");
        contentLabel.getComponent(cc.Label).string = this._userData.content;
        let yBtn = ToolUtils.getInstance().getNodeByName(this.node, "continue");
        let nBtn = ToolUtils.getInstance().getNodeByName(this.node, "cancel");
        yBtn.on("click", this.yCallBack, this);
        nBtn.on("click", this.nCallBack, this);
        yBtn.active = true;
        nBtn.active = true ;
        yBtn.x = 130;

        if (!this._userData.cancelCallBack && !this._userData.continueCallBack) {
            yBtn.active = false;
            nBtn.active = false;
        }

        if (!this._userData.cancelCallBack && this._userData.continueCallBack) {
            yBtn.x = 0;
            nBtn.active = false;
        }
    }

    yCallBack ( sender:any ) {
        this.close();
        if (this._userData.continueCallBack) {
            this._userData.continueCallBack();
        }
    }

    nCallBack ( sender:any ) {
        this.close();
        if (this._userData.cancelCallBack) {
            this._userData.cancelCallBack();
        }
    }
    
}