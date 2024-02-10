import TransitionContent, { TransitionContentEnum } from '@/components/TransitionText'
import React, { useState } from 'react';
import Topbar from './Topbar';
import Screen from './Screen';
import Menu from './Menu';

interface Scene1Props {
  isTransitionEnd: boolean;
}

const Scene1 = ({ isTransitionEnd }: Scene1Props) => {
  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in"] : TransitionContentEnum["fade-out"];
  }

  return (
    <TransitionContent type={getTransitionType()} className="relative flex flex-wrap flex-col items-center justify-center w-full h-full">
      <Topbar />

      <Screen />

      <Menu isTransitionEnd={isTransitionEnd} />
    </TransitionContent>
  )
}

export default Scene1;