/*
 * @Descripttion: Buffer帮助类
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-05 16:06:58
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

export default class ArrayUtils {

    private static _ins : ArrayUtils;

    static getInstance () : ArrayUtils {
        if (!this._ins) {
            this._ins = new ArrayUtils();
        }
        return this._ins;
    }

    /**
     * 合并两个ArrayBuffer
     * @param buff1 
     * @param buff2 
     */
    mergeArrayBuffer (buff1:any, buff2:any) : any {
        let len1 = buff1.byteLength;
        let len2 = buff2.byteLength;
        let ret = new ArrayBuffer(len1 + len2);
        let retI8a = new Int8Array(ret);
        let i8a = new Int8Array(buff1);
        let i = 0;
        for (i = 0; i < len1; i++) {
            retI8a[i] = i8a[i];
        }
        i8a = new Int8Array(buff2);
        for (i = 0; i < len2; i++) {
            retI8a[len1+i] = i8a[i];
        }
        return ret;
    }

    /**
     * 拷贝ArrayBuffer的数据返回一个新的ArrayBuffer
     * @param buff 
     * @param offset 
     * @param len 
     */
    copyArrayBuffer (buff:any, offset:any, len?:any) : any {
        let buffLen = buff.byteLength;
        let retArrayBuff = null;
        let retLen = len;
        if (!len) {
            len = buffLen - offset;
        }
        if (len === 0) {
            return null;
        }
        retArrayBuff = new ArrayBuffer(len);
        let reti8a = new Int8Array(retArrayBuff);
        let i8a = new Int8Array(buff, offset);
        for (let i = 0; i < len; i++) {
            reti8a[i] = i8a[i];
        }
        return retArrayBuff;
    }

    /**
     * 批量处理数组中的每个元素
     * @param arr 
     * @param filter 
     * @param processor 
     */
    executeElmArr (arr:any, filter:any, processor:any) : any {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            if (filter) {
                if (filter(arr[i])) {
                    processor(arr[i]);
                }
            }else {
                processor(arr[i]);
            }
        }
        return arr;
    }

    /**
     * arr中的每个元素传入processor处理然后替换掉arr中的元素
     * @param arr 
     * @param processor 
     */
    execRepArrElm (arr:any, processor:any) : any {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            arr[i] = processor(arr[i]);
        }
        return arr;
    }

    /**
     * 搜索数组元素
     * @param arr 
     * @param filter 
     * @param getAll 
     */
    searchElm (arr:any, filter:any, getAll:any) : any {
        if (!arr || !filter) return null;
        let len = arr.length;
        let ret:any = [];
        let elm:any;
        for (let i = 0; i < len; i++) {
            if (filter(arr[i])) {
                if (getAll) {
                    ret.push(arr[i]);
                }else {
                    return arr[i];
                }
            }
        }
        return ret;
    }

    /**
     * 随机获取数组元素
     * @param arr 
     */
    getRandomElm ( arr:any ) {
        if (arr) {
            let len = arr.length;
            if (len > 0) {
                return arr[parseInt((Math.random()*len).toString())];
            }
        }
    }

    /**
     * 数字转成拆分成对应的数字数组
     * @param value 
     * @param refArr 
     */
    numberToArray (value:any, refArr:any) : any {
        let ret:any = [];
        let arr = refArr;
        for (let i = arr.length-1; i >= 0; i--) {
            while (value >= arr[i]) {
                value -= arr[i];
                ret.push(arr[i]);
            }
        }
        return ret;
    }

    /**
     * 用obj的属性给originObj赋值
     * @param originObj 
     * @param obj 
     */
    copyPropertyUseObj (originObj:any, obj:any) {
        for (let property in obj) {
            if (originObj.hasOwnProperty(property)) {
                originObj[property] = obj[property];
            }
        }
    }

    findValueInArr (arr:any, value:any) : any {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == value) {
                return i;
            }
        }
        return -1;
    }

}
