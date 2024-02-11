import TransitionContent, { TransitionContentEnum } from "@/components/TransitionContent";
import { ProjectType } from "@/constant/ProjectEnum";
import { WindowModeEnum, WindowModeType } from "@/constant/WindowModeEnum";
import { useState } from "react";
import WindowBar from "./Windowbar";
import WindowContents from "./WindowContents";

interface WindowProps {
  isTransitionEnd: boolean;
  selectedProject: ProjectType;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const Window = ({ isTransitionEnd, selectedProject, setSelectedProject }: WindowProps) => {
  const [windowMode, setWindowMode] = useState<WindowModeType>(WindowModeEnum.NOMAL);

  const getTransitionType = () => {
    if (selectedProject === null) return TransitionContentEnum["fade-out-shrink"];
    return isTransitionEnd ? TransitionContentEnum["fade-in"] : TransitionContentEnum["fade-out"];
  }

  const getWindowStyle = () => {
    if (windowMode === WindowModeEnum.NOMAL) return 'w-fit max-w-6xl animate-scale-down';
    if (windowMode === WindowModeEnum.MAXIMIZED) return 'w-full h-full animate-scale-up';
  }

  return (
    <TransitionContent type={getTransitionType()}
      className={`absolute rounded-xl bg-white shadow-black shadow-2xl ${getWindowStyle()}`}>

      <WindowBar setSelectedProject={setSelectedProject} setWindowMode={setWindowMode} />

      <WindowContents selectedProject={selectedProject} />
    </TransitionContent>
  )
}

export default Window;