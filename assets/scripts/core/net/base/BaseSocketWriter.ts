export default class BaseSocketWriter {

    s_clientWriterFuncMap:any = null;

    constructor () {
        this.s_clientWriterFuncMap = {};
        //@ts-ignore
        this.initFuncMap();
    }

    bindMethodToCmd (cmd:any, func:any) {
        this.s_clientWriterFuncMap[cmd] = func;
    }

    writePacket (cmd:any, info:any) : any {
        cc.log("------[writePacket] cmd : ", cmd.toString(16), " data : ", JSON.stringify(info));
        if (this.s_clientWriterFuncMap[cmd]) {
            return this.s_clientWriterFuncMap[cmd](info, cmd);
        }
        return null;
    }

}
