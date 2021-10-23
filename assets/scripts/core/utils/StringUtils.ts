export default class StringUtils {

    private static _ins: StringUtils = null;

    static getInstance(): StringUtils {
        if (!this._ins) {
            this._ins = new StringUtils;
        }
        return this._ins;
    }

    substitute(str: string, replaceArr: any[]) {
        let len = replaceArr.length;
        let regE = null;
        for (let index = 0; index < len; index++) {
            regE = new RegExp('\\\{' + index + '\\\}', 'g');
            str = str.replace(regE, replaceArr[index]);
        }
        return str;
    }

}
