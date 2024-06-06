import * as THREE from 'three';
import type { modelLoaderParams } from '../model-manager/model-manager.type';
// 函数库

/** 设置网络属性 */
export function setupMeshProperties(child: any): void {
    child.castShadow = true;
    child.receiveShadow = true;

    if (child.material.map !== null) {
        let mat = new THREE.MeshPhongMaterial();
        mat.shininess = 0;
        mat.name = child.material.name;
        mat.map = child.material.map;
        mat.map.anisotropy = 4;
        mat.aoMap = child.material.aoMap;
        mat.transparent = child.material.transparent;
        mat.skinning = child.material.skinning;
        child.material = mat;
    }
    // 储存旧值
    child.material.oldColor = child.material.color;
}

/** 设置模型位置 */
export function setupMeshTransform(mesh: any, Properties: modelLoaderParams): void {
    if (Properties.hasOwnProperty('scale')) {
        mesh.scale.set(Properties.scale.x, Properties.scale.y, Properties.scale.z);
    }
    if (Properties.hasOwnProperty('position')) {
        mesh.scale.set(Properties.position.x, Properties.position.y, Properties.position.z);
    }
    if (Properties.hasOwnProperty('rotation')) {
        mesh.scale.set(Properties.rotation.x, Properties.rotation.y, Properties.rotation.z);
    }
}
