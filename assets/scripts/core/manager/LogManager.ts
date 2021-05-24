/*
 * @Descripttion: 输出日志管理类(根据AppConfig中配置平台)
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-12-21 23:33:56
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

import { AppConfig } from "../../AppConfig";

// if (cc.sys.isNative) {
//     // @ts-ignore
//     window.__errorHandler = function (filename, lineNumber, message, error) {
//         let exception:any = {}
//         exception.filename = filename;
//         exception.lineNumber = lineNumber;
//         exception.message = message;
//         exception.error = error;
//         window["label"].string = JSON.stringify(exception);
//     };
// }

// if (cc.sys.isBrowser) {
//     window.onerror = function (...args) {
//         let exception:any = {}
//         exception.a = args[0];
//         exception.b = args[1];
//         exception.c =  args[2];
//         exception.d = args[3];
//         exception.e = args[4]["message"];
//         exception.f = args[4]["stack"];
//         window["label"].string = JSON.stringify(exception);
//     }
// }

const {ccclass, property} = cc._decorator;

@ccclass
export default class LogManager {

    private static _ins : LogManager = null;

    static getInstance () : LogManager {
        if (!this._ins) {
            this._ins = new LogManager();
        }
        return this._ins;
    }

    log ( obj:any ) {
        console.log(obj);
    }
    
}
