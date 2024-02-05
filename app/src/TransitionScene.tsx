import { ReactNode, useState, Children } from "react";

interface TransitionSceneProps {
  children?: ReactNode;
}

const TransitionScene = ({ children }: TransitionSceneProps) => {
  const [index, setIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleWheel = (e: React.WheelEvent) => {
    if (isTransitioning) return;
    const wheel = e.deltaY;
    const newIndex = index + (wheel > 0 ? 1 : -1);
    const length = Children.count(children);

    if (newIndex >= 0 && newIndex < length) {
      setIndex(newIndex);
      setIsTransitioning(true);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="w-full h-full overflow-hidden" onTransitionEnd={handleTransitionEnd} onWheel={handleWheel}>
      <div
        className="w-full scrollArea"
        style={{ transition: 'all 1s ease-in-out', transform: `translate3d(0, -${index * 100}vh, 0)` }}>
        {children}
      </div>
    </div>
  )
}

export default TransitionScene;