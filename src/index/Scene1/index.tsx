import TransitionContent, { TransitionContentEnum } from '@/components/TransitionContent'
import React, { useState } from 'react';
import Topbar from './topbar';
import Skills from './skills';
import { ProjectEnum, ProjectList, ProjectType } from '@/constant/ProjectEnum';
import Window from './window';
import Projects from './projects';
import useKeyDown from '@/hooks/useKeyDown';

interface Scene1Props {
  isTransitionEnd: boolean;
  handleRestart: () => void;
  handleShutDown: () => void;
}

const Scene1 = ({ isTransitionEnd, handleRestart, handleShutDown }: Scene1Props) => {
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
    if (!selectedProject) return;
    e.stopPropagation();

    const wheel = e.deltaY;
    const index = ProjectList.findIndex(project => project === selectedProject);
    const newIndex = index + (wheel > 0 ? 1 : -1);
    const length = ProjectList.length;

    if (newIndex >= 0 && newIndex < length) {
      setSelectedProject(ProjectList[newIndex]);
    }
  }

  return (
    <TransitionContent type={getTransitionType()} className="relative flex flex-wrap flex-col items-center justify-center size-full" onWheel={handleWheel}>
      <Projects selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      <Skills isTransitionEnd={isTransitionEnd} selectedProject={selectedProject} />

      <Window isTransitionEnd={isTransitionEnd} selectedProject={selectedProject} setSelectedProject={setSelectedProject} />

      <Topbar isTransitionEnd={isTransitionEnd} selectedProject={selectedProject} handleRestart={handleRestart} handleShutDown={handleShutDown} />
    </TransitionContent>
  )
}

export default Scene1;