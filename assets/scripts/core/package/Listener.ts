/*
 * @Descripttion: 注册监听的listener信息
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-08-24 21:35:27
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

export default class Listener {
    
    // 监听对象
    _target : any;
    // 优先级
    _priority : any;
    
    constructor(_target:any, _priority:any) {
        this._target = _target;
        this._priority = _priority;
    }

    getTarget () : any {
        return this._target;
    }

    getPriority () : any {
        return this._priority;
    }
}