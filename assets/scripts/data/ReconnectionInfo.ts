export default class ReconnectionInfo {

    isReconnection : any = false;
    serverIP : any = null;
    serverPort : any = null;
    roomId : any = null;
    gameId : any = null;

    setGameId ( gameId:any ) {
        this.gameId = gameId;
    }

    setInfo ( serverIp:any, serverPort:any, roomId:any, isReconnection:any ) {
        this.isReconnection = isReconnection;
        this.serverIP = serverIp;
        this.serverPort = serverPort;
        this.roomId = roomId;
    }

    initInfo ( data:any ) {
        this.isReconnection = data.reconnectionInfo.state;
        this.serverIP = data.reconnectionInfo.serverIp;
        this.serverPort = data.reconnectionInfo.serverPort;
        this.roomId = data.reconnectionInfo.roomId;
        this.gameId = data.reconnectionInfo.gameId;
    }
    
}
