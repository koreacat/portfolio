import React, { ReactNode, cloneElement, isValidElement } from "react";

export enum TransitionContentEnum {
  'fade-in' = 'fade-in',
  'fade-in-up' = 'fade-in-up',
  'fade-in-down' = 'fade-in-down',
  'fade-out' = 'fade-out',
  'fade-out-up' = 'fade-out-up',
}

export type TransitionContentType = keyof typeof TransitionContentEnum;

interface TransitionContentProps {
  children?: ReactNode;
  className?: string;
  type: TransitionContentType;
  fadeInDelay?: string;
  fadeOutDelay?: string;
  style?: React.CSSProperties;
  onTransitionEnd?: () => void;
}

const TransitionContent = ({ children, className, type, fadeInDelay, fadeOutDelay, style, onTransitionEnd }: TransitionContentProps) => {
  if (!children) return null;

  const getClassName = () => {
    if (type === TransitionContentEnum["fade-in"]) return `${className} opacity-0 animate-fade-in`;
    if (type === TransitionContentEnum["fade-in-up"]) return `${className} opacity-0 animate-fade-in-up`;
    if (type === TransitionContentEnum["fade-in-down"]) return `${className} opacity-0 animate-fade-in-down`;
    if (type === TransitionContentEnum["fade-out"]) return `${className} opacity-100 animate-fade-out`;
    if (type === TransitionContentEnum["fade-out-up"]) return `${className} opacity-100 animate-fade-out-up`;
  }

  const getStyle = () => {
    if (type === TransitionContentEnum["fade-in"]) return { animationFillMode: 'forwards', animationDelay: fadeInDelay };
    if (type === TransitionContentEnum["fade-in-up"]) return { animationFillMode: 'forwards', animationDelay: fadeInDelay };
    if (type === TransitionContentEnum["fade-in-down"]) return { animationFillMode: 'forwards', animationDelay: fadeInDelay };
    if (type === TransitionContentEnum["fade-out"]) return { animationFillMode: 'forwards', animationDelay: fadeOutDelay };
    if (type === TransitionContentEnum["fade-out-up"]) return { animationFillMode: 'forwards', animationDelay: fadeOutDelay };
  }

  return <div className={getClassName()} style={{ ...style, ...getStyle() }} onTransitionEnd={onTransitionEnd}>{children}</div>;
};

export default TransitionContent;