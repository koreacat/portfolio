import TransitionContent, { TransitionContentEnum } from '@/components/TransitionContent'
import React, { useState } from 'react';
import Topbar from './topbar';
import Menu from './menu';
import { ProjectEnum, ProjectList, ProjectType } from '@/constant/ProjectEnum';
import Window from './window';
import Projects from './projects';
import useKeyDown from '@/hooks/useKeyDown';

interface Scene1Props {
  isTransitionEnd: boolean;
}

const Scene1 = ({ isTransitionEnd }: Scene1Props) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(ProjectEnum.PROFILE);

  useKeyDown({
    callback: (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    }
  });

  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in"] : TransitionContentEnum["fade-out"];
  }

  const handleWheel = (e: React.WheelEvent) => {
    const wheel = e.deltaY;
    const index = ProjectList.findIndex(project => project === selectedProject);
    const newIndex = index + (wheel > 0 ? 1 : -1);
    const length = ProjectList.length;

    if (selectedProject && newIndex >= 0 && newIndex < length) {
      e.stopPropagation();
      return setSelectedProject(ProjectList[newIndex]);
    }

    if (selectedProject) {
      e.stopPropagation();
    }
  }

  return (
    <TransitionContent type={getTransitionType()} className="relative flex flex-wrap flex-col items-center justify-center size-full" onWheel={handleWheel}>
      <Topbar />

      <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      <Menu isTransitionEnd={isTransitionEnd} selectedProject={selectedProject} />

      <Window isTransitionEnd={isTransitionEnd} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </TransitionContent>
  )
}

export default Scene1;