import ViewBase from "../core/external/ViewBase";
import { EventConfig } from "../config/EventConfig";
import ViewManager from "../core/manager/ViewManager";
import { ViewConfig } from "../config/ViewConfig";
import ToolUtils from "../core/utils/ToolUtils";
import HttpMessageHelp from "../core/http/HttpMessageHelp";
import { HttpConfig } from "../config/HttpConfig";
import { AppConfig } from "../AppConfig";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HallView extends ViewBase {

    start () {
        this.initView(true);

        let versionLabel = this.toolUtils.getNodeByName(this.node, "hall_version");
        versionLabel.getComponent(cc.Label).string = AppConfig.version;
        
        let roomCreator = this.toolUtils.getNodeByName(this.node, "hall_create");
        roomCreator.on("click", this.onCreatorRoom, this);
    }

    onCreatorRoom () {
        cc.log("创建房间");
        let roomSet = {"app_id":90,"game_type":368,"aa":0,"chairs":2,"club":0,"wf_id":1,"wf_type":0,"base_score":1,"max_rounds":10,"watch":0,"must_put":1,"tuo_guan":0,"choice_banker":1,"first_put":1,"show_card_len":2,"AAAABC":1,"AAAABCD":1,"AAAB":1,"AAAB2":1,"AAAA":1,"sameID":1,"hongshi":1,"fangzuobi":1,"bomb_A":1,"put_2":1,"bomb_3":1,"bomb_x":3,"mt_1":1,"mt_2":1,"mt_3":1,"mt_4":1,"mt_5":1,"AABB":1,"AAABBB":1,"end_put":"11","wanfa":"1111","mingtang":"11111"};
        HttpMessageHelp.getInstance().sendMessage(HttpConfig.LOGIN_CREATEROOM, roomSet);
    }

    onEvent ( event:any ) {
        let data = event.getUserData();
        switch (event.getName()) {
            case EventConfig.HALL_DOWNLOADGAME:
                ViewManager.getInstance().showView(ViewConfig.DOWNLOADGAMEVIEW);
                break;
        }
    }
    
}
