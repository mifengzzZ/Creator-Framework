export default class HttpBaseProto {

    checkCodeResult(result: any): boolean {
        let code = result.getCode();

        if (code !== 1) {
            cc.log("请求错误 : " + code);
            return false;
        }

        return true;
    }

}
