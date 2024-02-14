import TransitionContent, { TransitionContentEnum } from "@/components/TransitionContent";


interface Scene0Props {
  isTransitionEnd: boolean;
}

export default function Scene0({ isTransitionEnd }: Scene0Props) {
  const getDelay = (num: number) => {
    return num * 0.25 + 's';
  }

  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in-down"] : TransitionContentEnum["fade-out"];
  }

  return (
    <div className="flex size-full select-none flex-col items-center justify-center gap-2 md:gap-8">
      <TransitionContent className="text-4xl text-my-bg-color md:text-5xl" type={getTransitionType()} fadeInDelay={getDelay(0)}>
        안녕하세요!
      </TransitionContent>

      <div className="mt-3 flex flex-col flex-wrap items-center gap-1">
        <TransitionContent className="group w-fit text-sm text-my-bg-color md:text-base" type={getTransitionType()} fadeInDelay={getDelay(3)}>
          프론트엔드 개발자 지경민입니다.
        </TransitionContent>

        <TransitionContent className="group w-fit text-sm text-my-bg-color md:text-base" type={getTransitionType()} fadeInDelay={getDelay(4)}>
          포트폴리오를 통해 저에 대해 자세히 알려드릴게요.
        </TransitionContent>

        <TransitionContent className="group w-fit text-sm text-my-bg-color md:text-base" type={getTransitionType()} fadeInDelay={getDelay(5)}>
          스크롤을 아래로 내려주세요.
        </TransitionContent>
      </div>
    </div>
  )
}
