import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
      scale={0.75}
      position={[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
      </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <canvas
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gL={{ preserveDrawingBuffer: true }}
    >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
      enableZoom={false}
      maxPoLarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
      />
      <Computers />
    </Suspense>

    <Preload all />
    </canvas>
  )
}

export default ComputersCanvas;