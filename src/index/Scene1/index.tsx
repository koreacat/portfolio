import TransitionContent, { TransitionContentEnum } from '@/components/TransitionContent'
import React, { useState } from 'react';
import Topbar from './topbar';
import Menu from './menu';
import { ProjectEnum, ProjectType } from '@/constant/ProjectEnum';
import Window from './window';
import Projects from './projects';

interface Scene1Props {
  isTransitionEnd: boolean;
}

const Scene1 = ({ isTransitionEnd }: Scene1Props) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(ProjectEnum.PROFILE);

  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in"] : TransitionContentEnum["fade-out"];
  }

  const handleWheel = (e: React.MouseEvent) => {
    if (selectedProject) e.stopPropagation();
  }

  return (
    <TransitionContent type={getTransitionType()} className="relative flex flex-wrap flex-col items-center justify-center w-full h-full" onWheel={handleWheel}>
      <Topbar />

      <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      <Menu isTransitionEnd={isTransitionEnd} selectedProject={selectedProject} />

      <Window isTransitionEnd={isTransitionEnd} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </TransitionContent>
  )
}

export default Scene1;