/*
 * @Descripttion: 游戏配置
 * @Author: Zhiping Jiang
 * @Information: 564371466@qq.com
 * @Date: 2020-09-13 20:08:55
 * @Belong: Copyright (c) 2020 564371466@qq.com All rights reserved.
 */
//------------------------------------------------------------------------------------

import { PdkResConfig } from "../pdk/config/PdkResConfig";

const GameMapConfig = [
    {
        gameid : 368,
        name : "跑得快",
        bundleName : "rPdk",
        clsName : "PdkGameLoader",
        appBdVer : "1.0.0",
        minGameBdVer : "1.0.0",
        resConfig : PdkResConfig,
    }
];

export {GameMapConfig};
