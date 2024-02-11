import TransitionContent, { TransitionContentEnum } from '@/components/TransitionContent'
import React, { useState } from 'react';
import Topbar from './Topbar';
import Screen from './Screen';
import Menu from './Menu';
import { ProjectEnum, ProjectType } from '@/constant/ProjectEnum';

interface Scene1Props {
  isTransitionEnd: boolean;
}

const Scene1 = ({ isTransitionEnd }: Scene1Props) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(ProjectEnum.PROFILE);

  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in"] : TransitionContentEnum["fade-out"];
  }

  return (
    <TransitionContent type={getTransitionType()} className="relative flex flex-wrap flex-col items-center justify-center w-full h-full">
      <Topbar />

      <Screen selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      <Menu selectedProject={selectedProject} isTransitionEnd={isTransitionEnd} />
    </TransitionContent>
  )
}

export default Scene1;