/*
 * @Descripttion: 如果在这里注册,则listener处理不到
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-05 23:36:31
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------
// 外部引入
import BaseSocketProcesser from "../core/net/base/BaseSocketProcesser";
import LSCmdDelayManager from "../core/net/LSCmdDelayManager";

//------------------------------------------------------------------------------------

export default class LSProcesser extends BaseSocketProcesser {

    initFuncMap () {
        this.initCmdDelayManager(LSCmdDelayManager.getInstance());
    }

}
