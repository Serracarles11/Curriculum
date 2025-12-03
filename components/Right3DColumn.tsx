'use client';

import * as THREE from 'three';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, useGLTF, OrbitControls } from '@react-three/drei';

type GLTFResult = {
  nodes: Record<string, any>;
  materials: Record<string, any>;
};

function Laptop(props: any) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF('/mac-draco.glb') as unknown as GLTFResult;

  // Portátil flotando suavemente
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!group.current) return;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 4) / 20 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 10,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      Math.sin(t / 2) * 0.15,
      0.1
    );
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          {/* Pantalla sin HTML encima, solo material */}
          <mesh
            material={
              materials['screen'] ??
              materials['screen.001'] ??
              materials['matte.001'] ??
              Object.values(materials)[0]
            }
            geometry={nodes['Cube008_2'].geometry}
          />
        </group>
      </group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  );
}

export default function Right3DColumn() {
  return (
    // contenedor de la columna derecha
    <div className="flex flex-col items-center justify-center w-full h-[40rem]">
      {/* el portátil flotando, ocupando todo el alto/ancho */}
      <div className="w-full h-full">
        <Canvas
          camera={{ position: [0, 0.6, 6], fov: 35 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />

          <Suspense fallback={null}>
            {/* portátil centrado y mirando hacia delante */}
            <group
              rotation={[0.25, 0, 0]}   // ← SIN Math.PI, ya mira al frente
              position={[0, -0.5, 0]}
              scale={0.2}                 // más grande
            >
              <Laptop />
            </group>

            <Environment preset="city" />
          </Suspense>

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2.4}
            maxPolarAngle={Math.PI / 2.0}
          />
        </Canvas>
      </div>
    </div>
  );
}


// Precarga del modelo
useGLTF.preload('/mac-draco.glb');
