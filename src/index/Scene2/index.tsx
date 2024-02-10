import TransitionContent, { TransitionContentType } from "@/components/TransitionText";

interface Scene2Props {
  transitionType: TransitionContentType;
}

export default function Scene2({ transitionType }: Scene2Props) {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center w-full h-full">
      <TransitionContent className="text-white text-7xl" type={transitionType} fadeInDelay="0s">
        PROJECT
      </TransitionContent>

      <TransitionContent className="text-my-color text-7xl" type={transitionType} fadeInDelay="0.25s">
        PROJECT
      </TransitionContent>

      <TransitionContent className="text-black text-7xl" type={transitionType} fadeInDelay=".5s">
        PROJECT
      </TransitionContent>
    </div>
  )
}
