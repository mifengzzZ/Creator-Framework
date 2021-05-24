/*
 * @Descripttion: 列表Item
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-13 09:54:59
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入

//------------------------------------------------------------------------------------

const {ccclass, property} = cc._decorator;

@ccclass
export default class ListItem extends cc.Component {

    @property (cc.Label)
    labelIdx : cc.Label = null;

    private _index : number;
    private _remove : Function;

    onShow (info:any, index:number, remove:Function) {
        this._index = index;
        this._remove = remove; 
        this.labelIdx.string = info.message;
    }

    private onClick () {
        cc.log("点击");
    }

    private onRemove () {

    }
}
