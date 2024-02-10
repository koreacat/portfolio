import TransitionContent, { TransitionContentEnum, TransitionContentType } from "@/components/TransitionText";

interface Scene2Props {
  isTransitionEnd: boolean;
}

export default function Scene2({ isTransitionEnd }: Scene2Props) {

  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in-down"] : TransitionContentEnum["fade-out-up"];
  }

  return (
    <div className="flex flex-wrap flex-col items-center justify-center w-full h-full">
      <TransitionContent className="text-white text-7xl" type={getTransitionType()} fadeInDelay="0s">
        PROJECT
      </TransitionContent>

      <TransitionContent className="text-my-color text-7xl" type={getTransitionType()} fadeInDelay="0.25s">
        PROJECT
      </TransitionContent>

      <TransitionContent className="text-black text-7xl" type={getTransitionType()} fadeInDelay=".5s">
        PROJECT
      </TransitionContent>
    </div>
  )
}
