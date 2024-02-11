import React, { ReactNode } from "react";

export enum TransitionContentEnum {
  'fade-in' = 'fade-in',
  'fade-in-up' = 'fade-in-up',
  'fade-in-down' = 'fade-in-down',
  'fade-out' = 'fade-out',
  'fade-out-up' = 'fade-out-up',
  'fade-out-shrink' = 'fade-out-shrink',
}

export type TransitionContentType = keyof typeof TransitionContentEnum;

interface TransitionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  type: TransitionContentType;
  fadeInDelay?: string;
  fadeOutDelay?: string;
  style?: React.CSSProperties;
}

const TransitionContent = ({ children, className, type, fadeInDelay, fadeOutDelay, style, ...props }: TransitionContentProps) => {
  if (!children) return null;

  const getClassName = () => {
    if (type === TransitionContentEnum["fade-in"]) return `${className} opacity-0 animate-fade-in`;
    if (type === TransitionContentEnum["fade-in-up"]) return `${className} opacity-0 animate-fade-in-up`;
    if (type === TransitionContentEnum["fade-in-down"]) return `${className} opacity-0 animate-fade-in-down`;
    if (type === TransitionContentEnum["fade-out"]) return `${className} opacity-100 animate-fade-out`;
    if (type === TransitionContentEnum["fade-out-up"]) return `${className} opacity-100 animate-fade-out-up`;
    if (type === TransitionContentEnum["fade-out-shrink"]) return `${className} opacity-100 animate-fade-out-shrink`;
  }

  const getStyle = () => {
    if (type === TransitionContentEnum["fade-in"]) return { animationFillMode: 'forwards', animationDelay: fadeInDelay };
    if (type === TransitionContentEnum["fade-in-up"]) return { animationFillMode: 'forwards', animationDelay: fadeInDelay };
    if (type === TransitionContentEnum["fade-in-down"]) return { animationFillMode: 'forwards', animationDelay: fadeInDelay };
    if (type === TransitionContentEnum["fade-out"]) return { animationFillMode: 'forwards', animationDelay: fadeOutDelay };
    if (type === TransitionContentEnum["fade-out-up"]) return { animationFillMode: 'forwards', animationDelay: fadeOutDelay };
    if (type === TransitionContentEnum["fade-out-shrink"]) return { animationFillMode: 'forwards', animationDelay: fadeOutDelay };
  }

  return <div {...props} className={getClassName()} style={{ ...style, ...getStyle() }}>{children}</div>;
};

export default TransitionContent;