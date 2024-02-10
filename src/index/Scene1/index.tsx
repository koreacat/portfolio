'use client'

import TransitionContent, { TransitionContentType } from '@/components/TransitionText'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Duck = dynamic(() => import('@/components/canvas/Duck').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className='flex w-full h-48 sm:h-64 flex-col items-center justify-center '>
      <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

interface Scene1Props {
  transitionType: TransitionContentType;
}

const Scene1 = ({ transitionType }: Scene1Props) => {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center w-full h-full">
      {/* <div className='relative h-48 w-full sm:h-96' onWheel={(e) => e.stopPropagation()}>
        <View orbit className='relative h-full sm:h-96 bg-red-100'>
          <Suspense fallback={null}>
            <Duck route='/blob' scale={1} position={[0, -1, 0]} />
            <Common />
          </Suspense>
        </View>
      </div> */}
      <TransitionContent className="text-white text-7xl" type={transitionType} fadeInDelay="0s">
        SKILL
      </TransitionContent>

      <TransitionContent className="text-my-color text-7xl" type={transitionType} fadeInDelay="0.25s">
        SKILL
      </TransitionContent>

      <TransitionContent className="text-black text-7xl" type={transitionType} fadeInDelay=".5s">
        SKILL
      </TransitionContent>
    </div>
  )
}

export default Scene1;