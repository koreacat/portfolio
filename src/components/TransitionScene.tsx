'use client'

import React, { ReactNode, useState, Children } from "react";

interface TransitionWrapProps {
  children?: ReactNode;
}

const TransitionWrap = ({ children }: TransitionWrapProps) => {
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
        className="w-full scrollArea "
        style={{ transition: isTransitioning ? 'transform .75s ease-in-out' : undefined, transform: `translate3d(0, -${index * 100}vh, 0)` }}>
        {children}
      </div>
    </div>
  )
}

interface SceneProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Scene = (props: SceneProps) => {
  return (
    <div {...props} className={`shrink-0 w-screen h-screen text-my-color ${props?.className}`}>
      {props?.children}
    </div>
  )
}

export const Transition = Object.assign(TransitionWrap, {
  Scene: Scene,
});