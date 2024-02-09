'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Duck(props) {
  const { scene } = useGLTF('/duck.glb')

  useFrame((state, delta) => (scene.rotation.y += delta / 5))

  return <primitive object={scene} {...props} />
}
