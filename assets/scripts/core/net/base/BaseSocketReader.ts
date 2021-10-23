export default class BaseSocketReader {

    s_saveReaderFuncMap : any = null;

    constructor () {
        this.s_saveReaderFuncMap = {};
        //@ts-ignore
        this.initFuncMap();
    }

    bindMethodToCmd (cmd:any, func:any) {
        this.s_saveReaderFuncMap[cmd] = func;
    }

    readPacket (cmd:any, pack:any) : any {
        if (this.s_saveReaderFuncMap[cmd]) {
            return this.s_saveReaderFuncMap[cmd](pack, cmd);
        }
        return null;
    }

}
