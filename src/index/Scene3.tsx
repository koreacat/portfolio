import TransitionText, { TransitionTextType } from "@/components/TransitionText";

interface Scene3Props {
  transitionType: TransitionTextType;
}

export default function Scene3({ transitionType }: Scene3Props) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <TransitionText className="text-black text-7xl" type={transitionType} fadeInDelay="1s">
        CONTACT
      </TransitionText>
    </div>
  )
}
