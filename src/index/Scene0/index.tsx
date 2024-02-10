import TransitionContent, { TransitionContentType } from "@/components/TransitionText";

interface Scene0Props {
  transitionType: TransitionContentType;
}

export default function Scene0({ transitionType }: Scene0Props) {

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full h-full md:gap-8">
      <TransitionContent className="text-my-bg-color text-4xl md:text-5xl" type={transitionType} fadeInDelay="3s">
        안녕하세요!
      </TransitionContent>

      <div className="flex flex-wrap items-center flex-col gap-1 mt-3">
        <TransitionContent className="text-my-bg-color group w-fit text-sm md:text-base" type={transitionType} fadeInDelay="4.50s">
          프론트엔드 개발자 지경민입니다.
        </TransitionContent>

        <TransitionContent className="text-my-bg-color group w-fit text-sm md:text-base" type={transitionType} fadeInDelay="4.75s">
          방문해주셔서 감사합니다.
        </TransitionContent>

        <TransitionContent className="text-my-bg-color group w-fit text-sm md:text-base" type={transitionType} fadeInDelay="5s">
          스크롤을 아래로 내려주세요.
        </TransitionContent>
      </div>
    </div>
  )
}
