import ToolUtils from "../core/utils/ToolUtils";

export default class UserInfo {

    _uid: string = null;
    _aid: number = 0;
    _name: string = "";
    _location: string = "中国";
    _userIP: string = "";
    _iconURL: string = "";
    _gender: number = 0;
    _round: number = 0;
    _regTime: 0;

    parseLoginData(data: any) {
        this._uid = data.userBaseInfo.uid;
        this._aid = data.userBaseInfo.aid;
        this._name = data.userBaseInfo.userNick;
        this._location = data.location;
        this._userIP = data.ip;
        this._iconURL = data.userBaseInfo.avatarUrl;

        if (cc.sys.isNative) {
            // 本地存储一个aid-发布白名单可用
            cc.sys.localStorage("userAid", this._aid);
        }
    }

    getUserInfo(): any {
        let info = {};
        info["name"] = this._name;
        info["iconUrl"] = this._iconURL;
        info["aid"] = this._aid;
        info["ip"] = this._userIP;
        info["location"] = this._location;
        info["uuid"] = this._uid;
        info["gender"] = this._gender;
        info["round"] = this._round;
        info["regTime"] = this._regTime;
        return info;
    }

}
