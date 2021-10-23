/*
 * @Author: your name
 * @Date: 2021-02-22 08:22:41
 * @LastEditTime: 2021-10-23 16:00:52
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \TsBasicFrame\assets\scripts\hall\list\ListItem.ts
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class ListItem extends cc.Component {

    @property(cc.Label)
    labelIdx: cc.Label = null;

    private _index: number;
    private _remove: Function;

    onShow(info: any, index: number, remove: Function) {
        this._index = index;
        this._remove = remove;
        this.labelIdx.string = info.message;
    }

    private onClick() {
        cc.log("点击");
    }

    private onRemove() {

    }
}
