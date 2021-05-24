/*
 * @Descripttion: 读取与写入数据包帮助类
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-08-24 22:06:09
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import {SocketConfig} from "../net/base/SocketConfig";
import Utf8Utils from "./Utf8Utils";

//------------------------------------------------------------------------------------

export default class ByteArray {
    
    bytesBuff : any;
    bytesBuffView : any;
    fmt : any;
    data : any;
    endian : any;
    position : any;
    length : any;

    constructor () {
        this.bytesBuff = null;
        this.bytesBuffView = null;
        this.fmt = [];
        this.data = [];
        this.endian = SocketConfig.endian;
        this.position = 0;
        this.length = 0;
    }

    destroy () {
        this.bytesBuff = null;
        this.fmt = null;
        this.data = null;
        this.bytesBuffView = null;
    }

    readByte () : any {
        let val = this.bytesBuffView.getInt8(this.position);
        this.position += 1;
        return val;
    }

    writeByte ( b:any ) {
        this.fmt.push('b');
        this.data.push(b);
        this.length += 1;
    }

    readShort () : any {
        let val = this.bytesBuffView.getInt16(this.position, this.endian);
        this.position += 2;
        return val;
    }

    writeShort ( h:any ) {
        this.fmt.push('h');
        this.data.push(h);
        this.length += 2;
    }

    readInt () : any {
        let val = this.bytesBuffView.getInt32(this.position, this.endian);
        this.position += 4;
        return val;
    }

    writeInt ( i:any ) {
        this.fmt.push('i');
        this.data.push(i);
        this.length += 4;
    }

    readDouble () {
        let val = this.bytesBuffView.getFloat64(this.position, this.endian);
        this.position += 8;
        return val;
    }

    writeDouble ( d:any ) {
        this.fmt.push('d');
        this.data.push(d);
        this.length += 8;
    }

    readString () : any {
        let l = this.readShort();
        if (l < 1) return '';
        let u8Arr = new Uint8Array(this.bytesBuff, this.position);
        let arr:any = [];
        for (let i = 0; i < l; i++) {
            arr[i] = u8Arr[i];
        }
        let ret = Utf8Utils.getInstance().decode(arr);
        this.position += 1;
        return ret;
    }

    writeMultiByte ( str:any ) {
        let len = str.lenth;
        for (let i = 0; i < len; i++) {
            this.writeByte(str.charCodeAt(i));
        }
    }

    _uintCharArrToString ( arr:any ) : any {
        let ret = '';
        for (let i = 0; i < arr.length; i++) {
            ret += String.fromCharCode(arr[i]);
        }
        return ret;
    }

    writeString (s:any, writelen:any) {
        let arr = Utf8Utils.getInstance().encode(s);
        if (writelen || typeof writelen === "undefined") {
            this.writeShort(arr.length);
        }
        this.fmt.push('s');
        this.data.push(this._uintCharArrToString(arr));
        this.length += arr.length;
    }

    getbytes () : any {
        if (this.bytesBuff) {
            return this.bytesBuff;
        }else {
            let buff = new ArrayBuffer(this.length);
            let buffView = new DataView(buff);
            let len = this.fmt.length;
            let dataType = '';
            let elm = 0;
            let index = 0;
            for (let i = 0; i < len; i++) {
                dataType = this.fmt[i];
                elm = this.data[i];
                if (dataType === 'b') {
                    buffView.setInt8(index, elm);
                    index += 1;
                }else if (dataType === 'h') {
                    buffView.setInt16(index, elm, this.endian);
                    index += 2;
                }else if (dataType === 'i') {
                    buffView.setInt32(index, elm, this.endian);
                    index += 4;
                }else if (dataType === 'd') {
                    buffView.setFloat64(index, elm, this.endian);
                    index += 8;
                }else if (dataType === 's') {
                    index += this._fillArryBuffWithString(elm, buff, index);
                }
            }
            return buff;
        }
    }

    _fillArryBuffWithString (strData:any, arryBuff:any, offset:any) : any {
        if (!strData){
            return;
        }
        let len = strData.length;
        let tempDataView = new DataView(arryBuff, offset);
        for (let i = 0; i < len; i++) {
            tempDataView.setUint8(i, strData.charCodeAt(i));
        }
        return len;
    }

}
