import ToolUtils from "./ToolUtils";

type TextureAtlasPage = {
    name: string;
    height: number;
    width: number;
    texture: sp_SkeletonTexture;
    magFilter: number;
    minFilter: number;
    uWrap: number;
    vWrap: number;
}

type _size = {
    width: number;
    height: number;
}

type sp_SkeletonTexture = {
    _image: _size; // 图集的宽高
    _texture: cc.Texture2D; // cocos 原始纹理类型

}

type TextureAtlasRegion = {
    degrees: number;    // 图集里面旋转的角度
    height: number;     // 图片在图集里面的高度
    u: number;          // 要裁剪的图片在图集中的 uv 坐标, 也就是 图片的四个顶点 在 整个图集中所占用的百分比.
    u2: number;
    v: number;
    v2: number;
    width: number;      // 图片在图集里面的宽度
    x: number;          // 图片在图集里面的x坐标
    y: number;
    index: number;
    name: string;       // 插槽名字
    offsetX: number;    // 裁剪出来的图片距离渲染尺寸的偏移量
    offsetY: number;
    originalHeight: number; // 图集的高度
    originalWidth: number;
    rotate: boolean; // 是否旋转

    page: TextureAtlasPage;
    renderObject: TextureAtlasRegion;
    texture: sp_SkeletonTexture;
}

export default class SpineUtils {

    private static _ins : SpineUtils = null;

    static getInstance () : SpineUtils {
        if (!this._ins) {
            this._ins = new SpineUtils();
        }
        return this._ins;
    }

    /**
     * 获取name节点下的sp.Skeleton组件对象
     * root：根节点
     * name: 子节点名称
     */
    getSkeletonObj (root:cc.Node, name:string) : sp.Skeleton {
        let rn = ToolUtils.getInstance().getNodeByName(root, name);
        return rn.getComponent(sp.Skeleton);
    }

    /**
     * 显示调试Slot信息
     */
    showSlotDebugInfo ( spine:sp.Skeleton ) {
        spine.debugSlots = true;
    }

    /**
     * 显示调试Bone信息
     */
    showBoneDebugInfo ( spine:sp.Skeleton ) {
        spine.debugBones = true;
    }

    /**
     * 显示调试Mesh信息
     */
    showMeshDebugInfo ( spine:sp.Skeleton ) {
        spine.debugMesh = true;
    }

    /**
     * 设置所有骨骼的动画播放速度0 - 1
     */
    setSpineAnimaPlayTime (spine:sp.Skeleton, time:number) {
        spine.timeScale = time;
    }

    /**
     * clearTrack
     */



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 换装部分

    /**
     * 通过Skin名称替换
     * 适用于全局
     */
    replaceSkinByName (skeleton:sp.Skeleton, skinName:string) : void {
        skeleton.setSkin(skinName);
        skeleton.setSlotsToSetupPose();
    }

    /**
     * 通过attachment名称替换
     * 适用于两个骨骼动画之间替换(sk2的attachment替换成sk1的attachment)
     */
    exchangeAtmtByName (sk1:sp.Skeleton, sk2:sp.Skeleton, attachmentArr:string[]) {
        for (let index = 0; index < attachmentArr.length; index++) {
            const element = attachmentArr[index];
            let slot1 = sk1.findSlot(element);
            let slot2 = sk2.findSlot(element);
            let attachment = slot2.getAttachment();
            slot1.setAttachment(attachment);
        }
    }
    
    /**
     * 通过region替换
     * @param sk 
     * @param slotName 
     * @param texture 
     */
    replaceRegionBySlotName(sk:sp.Skeleton, slotName:string, texture:cc.Texture2D, textureName:string) {
        
        let _s: _size = {
            width: texture.width,
            height: texture.height,
        }
        let sps: sp_SkeletonTexture = {
            _image: _s,
            _texture: texture,
        }
        let page: TextureAtlasPage = {
            name: textureName,
            height: texture.height,
            width: texture.width,
            texture: sps,
            magFilter: texture["_magFilter"],
            minFilter: texture["_minFilter"],
            uWrap: texture["_wrapS"],
            vWrap: texture["_wrapT"],
        }

        let region: TextureAtlasRegion = {
            degrees: 0,
            height: texture.height, // 裁剪的数据 宽高
            width: texture.width,
            index: -1,
            name: slotName,
            x: 0,
            y: 0,
            offsetX: 0,
            offsetY: 0,
            originalHeight: texture.height,
            originalWidth: texture.width,
            rotate: false,

            page: page,
            renderObject: null,
            texture: sps,

            u: 0,
            u2: 1,
            v: 0,
            v2: 1,
        };
        region.renderObject = region;

        let slot = sk.findSlot(slotName);
        let attachment = new sp.spine.RegionAttachment(slotName);
        attachment.setRegion(region);

        attachment.height = texture.height;
        attachment.width = texture.width;

        let half_width = texture.width / 2;
        let half_height = texture.height / 2;
        let offset : Float32Array = new Float32Array([-half_width, -half_height, -half_width, half_height, half_width, half_height, half_width, -half_height]);
        attachment.offset = offset; // slot.offset;
        attachment.path = slotName;
        slot.setAttachment(attachment);
    }

}
