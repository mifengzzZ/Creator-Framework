import BundleManager from "../manager/BundleManager";
import LogManager from "../manager/LogManager";

export default class EntryBase {

    logUtil: LogManager = LogManager.getInstance();
    bundleMgr: BundleManager = BundleManager.getInstance();

}
