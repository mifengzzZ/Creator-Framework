import HttpBaseProto from "./HttpBaseProto";
import { protoLogin } from "../third/protobuf/protoLogin";
import { AppConfig } from "../../AppConfig";
import ToolUtils from "../utils/ToolUtils";
import EventManager from "../manager/EventManager";
import { EventConfig } from "../../config/EventConfig";
import EventInfo from "../package/EventInfo";
import ModelCenter from "../../data/ModelCenter";

export default class HttpLoginProto extends HttpBaseProto {

    loginRequest(data: any): any {
        let msg = protoLogin.LoginRequest.create();
        msg.openId = data.openId;
        msg.channel = AppConfig.channel;
        msg.appId = AppConfig.appId;
        msg.deviceId = AppConfig.deviceId;
        msg.verId = AppConfig.version;
        msg.location = "暂未定位";

        return protoLogin.LoginRequest.encode(msg).finish();
    }

    loginResponse(data: string) {
        let uint8Arr = ToolUtils.getInstance().base64ToUint8Array(data);
        let result = protoLogin.LoginResponse.decode(uint8Arr);
        cc.log("loginResponse result : ", result);
        if (result.code === 1) {
            ModelCenter.getInstance().userInfo.parseLoginData(result);
            ModelCenter.getInstance().reconnectionInfo.initInfo(result);
            EventManager.getInstance().dispatchEvent(new EventInfo(EventConfig.LOGIN_SERVER_READY));
        }
    }

    createRoomRequest(data: any): any {
        let msg = protoLogin.RoomCreateRequest.create();
        msg.appId = AppConfig.appId;
        msg.gameId = data.game_type;
        msg.userId = ModelCenter.getInstance().userInfo._uid;
        msg.deviceId = AppConfig.deviceId;
        msg.maxRounds = data.max_rounds;
        msg.coreVersion = AppConfig.coreVersion;
        msg.roomConfig = JSON.stringify(data);
        ModelCenter.getInstance().reconnectionInfo.setGameId(data.game_type);
        return protoLogin.RoomCreateRequest.encode(msg).finish();
    }

    createRoomResponse(data: any) {
        let uint8Arr = ToolUtils.getInstance().base64ToUint8Array(data);
        let result = protoLogin.RoomCreateResponse.decode(uint8Arr);
        cc.log("createRoomResponse result : ", result);
        if (result.code === 1) {
            ModelCenter.getInstance().reconnectionInfo.setInfo(result.serverIp, result.serverPort, result.roomId, false);
            EventManager.getInstance().dispatchEvent(new EventInfo(EventConfig.HALL_DOWNLOADGAME));
        }
    }

}
