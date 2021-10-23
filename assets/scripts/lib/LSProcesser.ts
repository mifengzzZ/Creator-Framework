import BaseSocketProcesser from "../core/net/base/BaseSocketProcesser";
import LSCmdDelayManager from "../core/net/LSCmdDelayManager";

export default class LSProcesser extends BaseSocketProcesser {

    initFuncMap () {
        this.initCmdDelayManager(LSCmdDelayManager.getInstance());
    }

}
