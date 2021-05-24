/*
 * @Descripttion: 字符串帮助类
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-08-24 22:06:09
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

 export default class Utf8Utils {

    private static _ins : Utf8Utils = null;

    static getInstance () : Utf8Utils {
        if (!this._ins) {
            this._ins = new Utf8Utils();
        }
        return this._ins;
    }
    
    private _encode (stringToEncode:any, insertBOM:any) : any {
        stringToEncode = stringToEncode.replace(/\r\n/g, "\n");
        let utftext:any = [];
        if (insertBOM == true)
        {
            utftext[0] = 0xef;
            utftext[1] = 0xbb;
            utftext[2] = 0xbf;
        }

        for (let n = 0; n < stringToEncode.length; n++) {
            let c = stringToEncode.charCodeAt(n);
            if (c < 128) {
                utftext[utftext.length] = c;
            }else if ((c > 127) && (c < 2048)) {
                utftext[utftext.length] = (c >> 6) | 192;
                utftext[utftext.length] = (c & 63) | 128;
            }else {
                utftext[utftext.length]= (c >> 12) | 224;
                utftext[utftext.length]= ((c >> 6) & 63) | 128;
                utftext[utftext.length]= (c & 63) | 128;
            }
        }
        return utftext;
    }

    /**
     * Encode javascript string as utf8 byte array
     */
    encode ( stringToEncode:any ) {
        return this._encode( stringToEncode, false);
    }

    /**
     * Encode javascript string as utf8 byte array, with a BOM at the start
     */
    encodeWithBOM ( stringToEncode:any ) {
        return this._encode(stringToEncode, true);
    }

    /**
     * Decode utf8 byte array to javascript string....
     */
    decode ( dotNetBytes:any ) {
        let result:any = "";
        let i:any = 0;
        let c:any = 0;
        let c2:any = 0;
        let c3:any = 0;

        // Perform byte-order check.
        if( dotNetBytes.length >= 3 ) {
            if(   (dotNetBytes[0] & 0xef) == 0xef
                && (dotNetBytes[1] & 0xbb) == 0xbb
                && (dotNetBytes[2] & 0xbf) == 0xbf ) {
                // Hmm byte stream has a BOM at the start, we'll skip this.
                i= 3;
            }
        }

        while( i < dotNetBytes.length ) {
            c= dotNetBytes[i]&0xff;

            if( c < 128 ) {
                result+= String.fromCharCode(c);
                i++;
            }
            else if( (c > 191) && (c < 224) ) {
                if( i+1 >= dotNetBytes.length )
                    throw "Un-expected encoding error, UTF-8 stream truncated, or incorrect";
                c2= dotNetBytes[i+1]&0xff;
                result+= String.fromCharCode( ((c&31)<<6) | (c2&63) );
                i+=2;
            }
            else {
                if( i+2 >= dotNetBytes.length  || i+1 >= dotNetBytes.length )
                    throw "Un-expected encoding error, UTF-8 stream truncated, or incorrect";
                c2= dotNetBytes[i+1]&0xff;
                c3= dotNetBytes[i+2]&0xff;
                result+= String.fromCharCode( ((c&15)<<12) | ((c2&63)<<6) | (c3&63) );
                i+=3;
            }
        }
        return result;
    }
 }