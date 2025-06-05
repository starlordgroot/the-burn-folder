import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Smoke } from 'react-smoke';
import * as THREE from 'three';

const SmokeOverlay = () => {
  const smokeColor = useMemo(() => new THREE.Color('white'), []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      <Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <Smoke
          color={smokeColor}
          density={50}
          enableRotation={true}
          rotation={[0, 0, 0.2]}
        />
      </Canvas>
    </div>
  );
};

export default SmokeOverlay;