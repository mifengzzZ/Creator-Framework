/*
 * @Descripttion: 事件Info
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-08-24 21:27:17
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

export default class EventInfo {
    
    // 事件名
    _name : any;
    // 传递值
    _userData : any;

    constructor (_name:any, _userData?:any) {
        this._name = _name;
        this._userData = _userData;
    }

    getName () : any {
        return this._name;
    }

    getUserData () : any {
        return this._userData;
    }

}
