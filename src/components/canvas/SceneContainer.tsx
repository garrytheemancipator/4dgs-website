import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

const SceneContainer: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default SceneContainer;
