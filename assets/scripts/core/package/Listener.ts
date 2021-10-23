export default class Listener {

    // 监听对象
    _target: any;
    // 优先级
    _priority: any;

    constructor(_target: any, _priority: any) {
        this._target = _target;
        this._priority = _priority;
    }

    getTarget(): any {
        return this._target;
    }

    getPriority(): any {
        return this._priority;
    }
}