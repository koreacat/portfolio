import React, { ReactNode, cloneElement, isValidElement } from "react";

export enum TransitionContentEnum {
  'fade-in' = 'fade-in',
  'fade-out' = 'fade-out',
}

export type TransitionContentType = keyof typeof TransitionContentEnum;

interface TransitionContentProps {
  children?: ReactNode;
  className?: string;
  type: TransitionContentType;
  fadeInDelay?: string;
  fadeOutDelay?: string;
  style?: React.CSSProperties;
}

const TransitionContent = ({ children, className, type, fadeInDelay, fadeOutDelay, style }: TransitionContentProps) => {
  if (!children) return null;

  const getClassName = () => {
    if (type === TransitionContentEnum["fade-in"]) return `${className} opacity-0 animate-fade-in `;
    if (type === TransitionContentEnum["fade-out"]) return `${className} opacity-100 animate-fade-out `;
  }

  const getStyle = () => {
    if (type === TransitionContentEnum["fade-in"]) return { animationFillMode: 'forwards', animationDelay: fadeInDelay };
    if (type === TransitionContentEnum["fade-out"]) return { animationFillMode: 'forwards', animationDelay: fadeOutDelay };
  }

  return <div className={getClassName()} style={{ ...style, ...getStyle() }}>{children}</div>;
};

export default TransitionContent;