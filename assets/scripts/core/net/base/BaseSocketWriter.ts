/*
 * @Descripttion: 写包体基类
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-05 22:53:56
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

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
