export default class EventInfo {

    // 事件名
    _name: any;
    // 传递值
    _userData: any;

    constructor(_name: any, _userData?: any) {
        this._name = _name;
        this._userData = _userData;
    }

    getName(): any {
        return this._name;
    }

    getUserData(): any {
        return this._userData;
    }

}
