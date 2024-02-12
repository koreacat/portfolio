import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, GroupProps } from '@react-three/fiber'
import { Environment, useGLTF, ContactShadows } from '@react-three/drei'
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'

function Mesh(props: { material: THREE.Material, geometry: THREE.Object3D.gremetry, position?: any }) {
  return (
    <mesh {...props} />
  )
}

function Model({ open, isInit, setIsInit, ...props }) {
  const groupRef = useRef<null | GroupProps>(null);
  const screenRef = useRef<null | GroupProps>(null);
  const { nodes, materials } = useGLTF('/mac-draco.glb');

  const newMaterial = new THREE.MeshStandardMaterial({ color: '#dddddd' });

  useEffect(() => {
    setIsInit(false);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    if (!screenRef.current) return;
    const t = state.clock.getElapsedTime();

    if (isInit) {
      groupRef.current.rotation.x = 0;
      groupRef.current.position.y = -4.3;
      groupRef.current.position.z = 0;
      screenRef.current.rotation.x = 1.575;
      return;
    }

    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.01);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, open ? -2.6 : -4.3, 0.01);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, open ? 35 : 0, 0.02);
    screenRef.current.rotation.x = THREE.MathUtils.lerp(screenRef.current.rotation.x, open ? -0.425 : 1.575, 0.02);
  })


  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* @ts-ignore */}
      <three.group ref={screenRef} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <Mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <Mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <Mesh material={newMaterial} geometry={nodes['Cube008_2'].geometry} />
        </group>
      </three.group>
      <Mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <Mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <Mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <Mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

interface PCProps {
  open: boolean;
}

const PC = ({ open }: PCProps) => {
  const [isInit, setIsInit] = useState(true);

  return (
    <div className='fixed flex items-center top-0 size-full opacity-0 md:opacity-100'>
      <web.main className='size-full min-h-[600px]'>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
          <group rotation={[0, Math.PI, 0]}>
            <Model open={open} isInit={isInit} setIsInit={setIsInit} />
          </group>
          <Environment preset="city" />
          <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
        </Canvas>
      </web.main>
    </div>
  )
}

export default PC;
