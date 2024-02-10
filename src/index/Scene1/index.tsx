'use client'

import TransitionContent, { TransitionContentType } from '@/components/TransitionText'

interface Scene1Props {
  transitionType: TransitionContentType;
}

const Scene1 = ({ transitionType }: Scene1Props) => {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center w-full h-full">
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