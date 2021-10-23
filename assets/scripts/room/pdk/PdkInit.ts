import GameLoaderBase from "../GameLoaderBase";
import PdkProcesser from "./lib/PdkProcesser";
import PdkReader from "./lib/PdkReader";
import PdkWriter from "./lib/PdkWriter";
import ViewManager from "../../core/manager/ViewManager";
import { ViewConfig } from "../../config/ViewConfig";
import ViewInfo from "../../core/package/ViewInfo";

window["PdkGameLoader"] = class PdkGameLoader extends GameLoaderBase {

    registerView ( gmBundle:any, cmBundle:any) {
        ViewManager.getInstance().registerCreator(ViewConfig.ROOMLAYER, new ViewInfo("PdkRoomLayer", gmBundle["pdkRoomLayer"]));

        ViewManager.getInstance().registerCreator(ViewConfig.ROOM_SMALLSETTLEMENT, new ViewInfo("RmcmSmallSettlement", cmBundle["rmcm_smallSettlement"]));
    }

    unRegisterView () {
        ViewManager.getInstance().unRegisterCreator(ViewConfig.ROOMLAYER);
        ViewManager.getInstance().unRegisterCreator(ViewConfig.ROOM_SMALLSETTLEMENT);
    }

    createProcesser () {
        return new PdkProcesser();
    }

    createReader () {
        return new PdkReader();
    }

    createWriter () {
        return new PdkWriter();
    }

}
