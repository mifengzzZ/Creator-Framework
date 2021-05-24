/*
 * @Descripttion: HTTP 返回处理基类
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-05 23:36:31
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

export default class HttpBaseProto {

    checkCodeResult ( result:any ) : boolean {
        let code = result.getCode();

        if (code !== 1) {
            cc.log("请求错误 : " + code);
            return false;
        }

        return true;
    }

}
