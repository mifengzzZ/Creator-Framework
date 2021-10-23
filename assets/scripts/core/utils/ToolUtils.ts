import LogManager from "../manager/LogManager";

export default class ToolUtils {

    private static _ins : ToolUtils = null;

    static getInstance () : ToolUtils {
        if (!this._ins) {
            this._ins = new ToolUtils();
        }
        return this._ins;
    }

    /**
     * base64转uint8Array
     */
    base64ToUint8Array ( base64String:any ) {
        let padding = '='.repeat((4 - base64String.length % 4) % 4);
        let base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
    
        let rawData = window.atob(base64);
        let outputArray = new Uint8Array(rawData.length);
    
        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    /**
     * uint8Array转base64
     */
    uint8arrayToBase64 ( u8Arr:any ) {
        let CHUNK_SIZE = 0x8000;
        let index = 0;
        let length = u8Arr.length;
        let result = '';
        let slice = null;
        while (index < length) {
            slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
            result += String.fromCharCode.apply(null, slice);
            index += CHUNK_SIZE;
        }
        return btoa(result);
    }
    
    /**
     * 获取父节点下的子节点
     */
    getNodeByName (root:any, name:string) : any {
        if (!root) {
            return null;
        }
        if (root.name === name) {
            return root;
        }
        for (let index = 0; index < root.childrenCount; index++) {
            const element = root.children[index];
            let res = this.getNodeByName(element, name);
            if (res !== null) {
                return res;
            }
        }
        return null;
    }

    /**
     * 根据ImgURL更新spriteFrame
     */
    setSpriteFrameByImgURL ( url:string, Img:cc.Node ) {
        if (url === "") {
            return;
        }
        cc.assetManager.loadRemote(url, cc.Texture2D, (err:any, texture:cc.Texture2D) => {
            let frame = new cc.SpriteFrame(texture);
            Img.getComponent(cc.Sprite).spriteFrame = frame;
        });
    }

    /**
     * 存储数据在本地
     * 所有数据存储字段 "userdata"
     * 如果想对本地存储数据加密可使用第三方库(encryptjs等)
     */
    setLocalData (key:string, data:any) {
        if (!key) {
            cc.log("------[ToolUtils] setLocalData key is null");
            return;
        }
        let jsondata = JSON.stringify(data);
        cc.sys.localStorage(key, jsondata);
    }

    /**
     * 获取存储在本地的数据
     */
    getLocalData ( key:string ) {
        var data = cc.sys.localStorage.getItem(key);
        if (!data) {
            return null;
        }
        data = JSON.parse(data);
        return data;
    }

    /**
     * 把 node1 移动到 node2的位置
     */
    moveN1toN2(node1: cc.Node, node2: cc.Node) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position))
    }
    
    /**
     * 获取把 node1移动到 node2位置后的坐标
     */
    convertNodeSpaceAR(node1: cc.Node, node2: cc.Node) : any {
        return node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    }

    /**
     * 获取固定范围随机数
     */
    getRandom ( m:number, n:number ) {
        return Math.floor(Math.random()*(m - n) + n);
    }

    /**
     * http请求
     */
    sendHttpRequest ( tp:string, url:string, callfunc?:Function ) {
        let req = new XMLHttpRequest();
        req.open(tp, url, true);
        req.onreadystatechange = () => {
            LogManager.getInstance().log("[ToolUtils] sendHttpRequest");
            LogManager.getInstance().log(req.readyState);
            LogManager.getInstance().log(req.status);
            if (req.readyState === 4 && (req.status >= 200 && req.status < 400)) {
                callfunc(req);
            }
        };
        req.send();
    }

    /**
     * 适配背景
     */
    scaleBackgroundBG ( node:cc.Node ) {
        let showAll = Math.min(cc.view.getCanvasSize().width / node.width, cc.view.getCanvasSize().height / node.height);
        let realWidth = node.width * showAll;
        let realHeight = node.height * showAll;
        node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight);
    }

    /**
     * 靠左
     */
    dockLeft (node:any, disX:number) {
        cc.log("cc.view.getCanvasSize().width : ", cc.view.getCanvasSize().width);
        let x = -cc.view.getCanvasSize().width + disX;
        cc.log("x : ", x);
        node.x = x;
    }

    /**
     * 靠右
     */
    dockRight (node:any, disX:number) {
        let x = cc.view.getCanvasSize().width - disX;
        node.x = x;
    }

    /**
     * 靠上
     */
    dockTop (node:any, disY:number) {
        let y = cc.view.getCanvasSize().height - disY;
        node.y = y;
    }

    /**
     * 靠下
     */
    dockDown (node:any, disY:number) {
        let y = -cc.view.getCanvasSize().height + disY;
        node.y = y;
    }

    // 左上
    dockLeftTop (node:any, disX:number, disY:number) {
        this.dockLeft(node, disX);
        this.dockTop(node, disY);
    }

    // 左下
    dockLeftDown (node:any, disX:number, disY:number) {
        this.dockLeft(node, disX);
        this.dockDown(node, disY);
    }

    // 右上
    dockRightTop (node:any, disX:number, disY:number) {
        this.dockRight(node, disX);
        this.dockTop(node, disY);
    }

    // 右下
    dockRightDown (node:any, disX:number, disY:number) {
        this.dockRight(node, disX);
        this.dockDown(node, disY);
    }

}
