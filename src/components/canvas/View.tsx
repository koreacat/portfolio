'use client'
import React, { forwardRef, ReactNode, Suspense, useImperativeHandle, useRef } from 'react'
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/components/canvas/helpers/Three'

interface CommonProps {
  color?: string;
}

export const Common = ({ color }: CommonProps) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight />
    {/* @ts-ignore */}
    <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />

    {/* @ts-ignore */}
    <pointLight position={[-10, -10, -10]} color='blue' decay={0.2} />

    {/* @ts-ignore */}
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </Suspense>
)

interface ViewProps {
  children?: ReactNode;
  orbit?: boolean;
  className?: string;
}

const View = forwardRef(({ children, orbit, ...props }: ViewProps, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})

View.displayName = 'View'

export { View }
