import ArrayUtils from "../utils/ArrayUtils";
import Pack from "../package/Pack";

export default class DataParser {

    _buffer : any;
    _headerSize : any;
    _callback : any;

    constructor ( callback:any ) {
        this._buffer = null;
        this._headerSize = 8;
        this._callback = callback;
    }

    parse ( arrBuffer:any ) {
        if (!arrBuffer) return;
        this._fillBuffer(arrBuffer);
        if (!this._checkHeader()) return;
        let pack = this._parseHeader(this._buffer);
        if (!this._checkBody(pack)) return;
        pack.data = ArrayUtils.getInstance().copyArrayBuffer(this._buffer, this._headerSize, pack.bodySize);
        this._parseBody(pack);

        let packTotalLen = this._headerSize + pack.bodySize;
        if (arrBuffer.byteLength > packTotalLen) {
            cc.log("byteLength > packTotalLen ---> 出现粘包");
            let buffer = ArrayUtils.getInstance().copyArrayBuffer(this._buffer, packTotalLen);
            this._buffer = null;
            this.parse(buffer);
        }else {
            this._buffer = null;
        }
    }

    _checkBody ( pack:any ) : any {
        if (pack.bodySize > this._buffer.byteLength - this._headerSize) {
            cc.log("---> body data not enough");
            return false;
        }
        return true;
    }

    _checkHeader () : any {
        if (this._buffer.byteLength < this._headerSize) {
            cc.log("--->buffer bytelength less header size min limit");
            return false;
        }
        return true;
    }

    _fillBuffer ( arrBuffer:any ) {
        if (!this._buffer) {
            this._buffer = arrBuffer;
        }else {
            this._buffer = ArrayUtils.getInstance().mergeArrayBuffer(this._buffer, arrBuffer);
        }
    }

    _parseHeader ( buff:any ) : any {
        let dv = new DataView(buff);
        let pack = new Pack();
        pack.bodySize = dv.getInt32(0);
        pack.bodySize -= this._headerSize;
        pack.cmd = dv.getInt32(4);
        return pack;
    }

    _parseBody ( pack:any ) {
        if (this._callback) {
            this._callback(pack);
        }
    }
}
