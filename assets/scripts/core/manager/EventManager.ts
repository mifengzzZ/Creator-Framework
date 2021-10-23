import Listener from "../package/Listener";

export default class EventManager {

/**
 * private
 */
    // 事件监听数组
    private _listenerList : Listener[] = [];

    private static _ins : EventManager = null;

    static getInstance () : EventManager {
        if (!this._ins) {
            this._ins = new EventManager();
        }
        return this._ins;
    }

    /**
     * 事件的排序规则(从小到大-越小优先级越高)
     * @param leftListener 
     * @param rightListener 
     */
    sort (leftListener:any, rightListener:any) : any {
        return leftListener.getPriority() < rightListener.getPriority();
    }

    /**
     * 分发事件
     * @param event
     */
    dispatchEvent (event:any) {
        if (!event) {
            cc.log("EventManager : invaild param in dispatchEvent");
            return;
        }

        let length = this._listenerList.length;
        for (let index = 0; index < length; index++) {
            const listener = this._listenerList[index];
            if (listener._target && listener._target.onEvent && event.getName()) {
                listener._target.onEvent(event);
            }
        }
    }

    /**
     * 注册事件监听
     * @param target 
     * @param priority 
     */
    registerListener (target:any, priority?:any) {
        if (!target) {
            cc.log("EventManager : invaild param in registerListener");
            return;
        }

        // 判断事件监听tag是否已经在列表中,如果在(不需要监听)
        let length = this._listenerList.length;
        for (let index = 0; index < length; index++) {
            if (this._listenerList[index].getTarget() === target) {
                return;
            }
        }

        // 将事件添加到列表中
        priority = priority || 0;
        this._listenerList.push(new Listener(target, priority));
        // sort() 返回值：对数组的引用,请注意,数组在原数组上进行排序,不生成副本
        this._listenerList.sort(this.sort);
    }
    
    /**
     * 将事件监听数组中移除监听对象
     * @param target 
     */
    unRegisterEvent (target:any) {
        let length = this._listenerList.length;
        for (let index = 0; index < length; index++) {
            if (this._listenerList[index].getTarget() === target) {
                this._listenerList.slice(index, 1);
            }
        }
    }

}
