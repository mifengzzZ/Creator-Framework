/*
 * @Descripttion: 读包体基类
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-05 23:18:59
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

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
