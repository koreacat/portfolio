'use client'

import React, { ReactNode, useState, Children } from "react";

interface TransitionWrapProps {
  children?: ReactNode;
  onTransitionStart?: (index: number) => void;
  onTransitionEnd?: (index: number) => void;
}

const TransitionWrap = ({ children, onTransitionEnd, onTransitionStart }: TransitionWrapProps) => {
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [touchStartY, setTouchStartY] = useState<number>(0);

  const handleWheel = (e: React.WheelEvent) => {
    if (isTransitioning) return;

    const wheel = e.deltaY;
    const newIndex = index + (wheel > 0 ? 1 : -1);
    const length = Children.count(children);

    if (newIndex >= 0 && newIndex < length) {
      setIndex(newIndex);
      setIsTransitioning(true);
      onTransitionStart?.(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isTransitioning) return;

    const deltaY = e.touches[0].clientY - touchStartY;
    const threshold = 50; // Adjust this threshold as needed
    if (Math.abs(deltaY) > threshold) {
      const newIndex = index + (deltaY > 0 ? 1 : -1);
      const length = Children.count(children);

      if (newIndex >= 0 && newIndex < length) {
        setIndex(newIndex);
        setIsTransitioning(true);
        onTransitionStart?.(index);
      }
    }
  };

  const handleTouchEnd = () => {
    setTouchStartY(0);
  };

  const handleTransitionEnd = (index: number) => {
    setIsTransitioning(false);
    onTransitionEnd?.(index);
  };

  return (
    <div
      className="w-full h-full overflow-hidden"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTransitionEnd={() => handleTransitionEnd(index)}>
      <div
        className="w-full scrollArea"
        style={{
          transition: isTransitioning ? 'transform .75s ease-in-out' : undefined,
          transform: `translate3d(0, -${index * 100}vh, 0)`
        }}>
        {children}
      </div>
    </div>
  );
};


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