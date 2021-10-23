import ViewBase from "../../core/external/ViewBase";
import UISuperLayout from "../../core/external/listView/UISuperLayout";
import ListItem from "./ListItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ListView extends ViewBase {

    @property (UISuperLayout)
    layout : UISuperLayout = null;

    private _total : number = 50;
    private _datas : any[] = [];

    start () {
        for (let i = 0; i < this._total; i++) {
            this._datas.push({ message : i.toString() });
        }
        this.layout.total(this._datas.length);
    }

    private onRefreshEvent(node: cc.Node, index: number) {
        let info = this._datas[index]
        node.getComponent(ListItem).onShow(info, index, this.onRemove.bind(this))
    }

    private onRemove ( index:number ) {
        this._datas.splice(index, 1);
        this.layout.total(this._datas.length);
    }

    private onScrollEvent (node:any) {
        
    }
}
