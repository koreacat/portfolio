import TransitionContent, { TransitionContentEnum } from "@/components/TransitionContent";
import { ProjectType } from "@/constant/ProjectEnum";
import { WindowModeEnum, WindowModeType } from "@/constant/WindowModeEnum";
import { useEffect, useState } from "react";
import WindowBar from "./Windowbar";
import WindowContents from "./WindowContents";

interface WindowProps {
  isTransitionEnd: boolean;
  selectedProject: ProjectType;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType>>;
}

const Window = ({ isTransitionEnd, selectedProject, setSelectedProject }: WindowProps) => {
  const [windowMode, setWindowMode] = useState<WindowModeType>(WindowModeEnum.NOMAL);
  const [windowContentsState, setWindowContentsState] = useState<ProjectType | null>(null);

  useEffect(() => {
    if (selectedProject === null) return;
    setWindowContentsState(selectedProject);
  }, [selectedProject]);

  const getTransitionType = () => {
    if (selectedProject === null) return TransitionContentEnum["fade-out-shrink"];
    return isTransitionEnd ? TransitionContentEnum["fade-in"] : TransitionContentEnum["fade-out"];
  }

  const getWindowStyle = () => {
    if (windowMode === WindowModeEnum.NOMAL) return 'top-9 md:top-12 w-fit h-window-normal-phone md:h-window-normal max-w-full min-h-[200px] rounded-xl md:max-w-3xl';
    if (windowMode === WindowModeEnum.MAXIMIZED) return 'w-full h-window-maximized bottom-0';
  }

  const handleAnimationEnd = () => {
    if (selectedProject === null) setWindowContentsState(null);
  }

  if (!windowContentsState) return null;

  return (
    <TransitionContent
      type={getTransitionType()}
      onAnimationEnd={handleAnimationEnd}
      className={`absolute bg-white md:shadow-2xl md:shadow-black ${getWindowStyle()}`}
      onWheel={e => e.stopPropagation()}
    >
      <WindowBar windowMode={windowMode} setSelectedProject={setSelectedProject} setWindowMode={setWindowMode} />
      <WindowContents windowMode={windowMode} windowContentsState={windowContentsState} />
    </TransitionContent>
  )
}

export default Window;