import * as THREE from 'three';
import MathEx from 'js-util/MathEx';

import vs from './glsl/shell.vs';
import fs from './glsl/shell.fs';

export default class Shell extends THREE.Mesh {
  constructor() {
    // Define Geometry
    const geometry = new THREE.BoxBufferGeometry(10, 10, 10);

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        time: {
          type: 'f',
          value: 0
        },
      },
      vertexShader: vs,
      fragmentShader: fs,
    });

    // Create Object3D
    super(geometry, material);
    this.name = 'Shell';
  }
  start() {
  }
  update(time) {
    this.material.uniforms.time.value += time;
  }
}