/*
 * @Descripttion: 注册视图基类
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-13 20:08:55
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */

import { BdnmConfig } from "../../config/ResConfig";
import BundleManager from "../manager/BundleManager";
import LogManager from "../manager/LogManager";

export default class EntryBase {

    logUtil : LogManager = LogManager.getInstance();
    bundleMgr : BundleManager = BundleManager.getInstance();
    bodyBundleRes : any = BundleManager.getInstance().getBundleResByName(BdnmConfig.body);

}
