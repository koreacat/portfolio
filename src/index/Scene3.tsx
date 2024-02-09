import TransitionText, { TransitionTextType } from "@/components/TransitionText";

interface Scene3Props {
  transitionType: TransitionTextType;
}

export default function Scene3({ transitionType }: Scene3Props) {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center w-full h-full">
      <TransitionText className="text-black text-7xl" type={transitionType} fadeInDelay="1s">
        CONTACT
      </TransitionText>

      <TransitionText className="text-black text-7xl" type={transitionType} fadeInDelay="1.5s">
        CONTACT
      </TransitionText>

      <TransitionText className="text-black text-7xl" type={transitionType} fadeInDelay="2s">
        CONTACT
      </TransitionText>
    </div>
  )
}
