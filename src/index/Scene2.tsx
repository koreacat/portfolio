import TransitionText, { TransitionTextType } from "@/components/TransitionText";

interface Scene2Props {
  transitionType: TransitionTextType;
}

export default function Scene2({ transitionType }: Scene2Props) {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center w-full h-full">
      <TransitionText className="text-white text-7xl" type={transitionType} fadeInDelay="0s">
        SKILL
      </TransitionText>

      <TransitionText className="text-my-color text-7xl" type={transitionType} fadeInDelay="0.25s">
        SKILL
      </TransitionText>

      <TransitionText className="text-black text-7xl" type={transitionType} fadeInDelay=".5s">
        SKILL
      </TransitionText>
    </div>
  )
}
