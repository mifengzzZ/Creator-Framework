export default class ViewInfo {

    script: string = "";
    prefab: ss.LOAD_RES_STRUCT = null;

    constructor(script: string, obj: ss.LOAD_RES_STRUCT) {
        this.script = script;
        this.prefab = obj;
    }

}
