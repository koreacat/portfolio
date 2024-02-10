'use client'

import TransitionContent, { TransitionContentEnum, TransitionContentType } from '@/components/TransitionText'

function formatDate(date: Date): string {
  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Seoul",
  } as Intl.DateTimeFormatOptions;
  return date.toLocaleString("ko-KR", options);
}

interface Scene1Props {
  isTransitionEnd: boolean;
}

const Scene1 = ({ isTransitionEnd }: Scene1Props) => {
  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in"] : TransitionContentEnum["fade-out"];
  }

  return (
    <TransitionContent type={getTransitionType()} className="relative flex flex-wrap flex-col items-center justify-center w-full h-full">

      <div className='absolute top-0 right-0 left-0 flex items-center justify-end w-full h-6 bg-white bg-opacity-5 text-sm pr-4'>
        <div>
          {formatDate(new Date())}
        </div>
      </div>

      <div>
        <div>React</div>
        <div>JS</div>
        <div>TS</div>
        <div>Next.js</div>
        <div>ReactQuery</div>
        <div>Zustand</div>
        <div>Mobx</div>
        <div>Recoil</div>
      </div>


    </TransitionContent>
  )
}

export default Scene1;