import TransitionContent, { TransitionContentEnum, TransitionContentType } from "@/components/TransitionContent";


interface Scene0Props {
  isTransitionEnd: boolean;
}

export default function Scene0({ isTransitionEnd }: Scene0Props) {
  const initDelay = 2;

  const getDelay = (num: number) => {
    return initDelay + num * 0.25 + 's';
  }

  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in-down"] : TransitionContentEnum["fade-out"];
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full md:gap-8 select-none">
      <TransitionContent className="text-my-bg-color text-4xl md:text-5xl" type={getTransitionType()} fadeInDelay={getDelay(0)}>
        안녕하세요!
      </TransitionContent>

      <div className="flex flex-wrap items-center flex-col gap-1 mt-3">
        <TransitionContent className="text-my-bg-color group w-fit text-sm md:text-base" type={getTransitionType()} fadeInDelay={getDelay(4)}>
          프론트엔드 개발자 지경민입니다.
        </TransitionContent>

        <TransitionContent className="text-my-bg-color group w-fit text-sm md:text-base" type={getTransitionType()} fadeInDelay={getDelay(5)}>
          포트폴리오를 통해 저에 대해 자세히 알려드릴게요.
        </TransitionContent>

        <TransitionContent className="text-my-bg-color group w-fit text-sm md:text-base" type={getTransitionType()} fadeInDelay={getDelay(6)}>
          스크롤을 아래로 내려주세요.
        </TransitionContent>
      </div>
    </div>
  )
}
