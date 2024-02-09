import React, { ReactNode, cloneElement, isValidElement } from "react";

export enum TransitionTextEnum {
  'fade-in' = 'fade-in',
  'fade-out' = 'fade-out',
}

export type TransitionTextType = keyof typeof TransitionTextEnum;

interface TransitionTextProps {
  children?: ReactNode;
  className?: string;
  type: TransitionTextType;
  fadeInDelay?: string;
  fadeOutDelay?: string;
}

const TransitionText = ({ children, className, type, fadeInDelay, fadeOutDelay }: TransitionTextProps) => {
  if (!children) return null;

  const getClassName = () => {
    if (type === TransitionTextEnum["fade-in"]) return `${className} opacity-0 animate-fade-in `;
    if (type === TransitionTextEnum["fade-out"]) return `${className} opacity-100 animate-fade-out `;
  }

  const getStyle = () => {
    if (type === TransitionTextEnum["fade-in"]) return { animationFillMode: 'forwards', animationDelay: fadeInDelay };
    if (type === TransitionTextEnum["fade-out"]) return { animationFillMode: 'forwards', animationDelay: fadeOutDelay };
  }

  return <div className={getClassName()} style={getStyle()}>{children}</div>;
};

export default TransitionText;