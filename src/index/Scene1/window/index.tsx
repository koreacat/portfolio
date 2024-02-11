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
    if (windowMode === WindowModeEnum.NOMAL) return 'top-12 w-fit max-w-3xl';
    if (windowMode === WindowModeEnum.MAXIMIZED) return 'w-full bottom-0';
  }

  const handleAnimationEnd = () => {
    if (selectedProject === null) setWindowContentsState(null);
  }

  if (!windowContentsState) return null;

  return (
    <TransitionContent
      type={getTransitionType()}
      onAnimationEnd={handleAnimationEnd}
      className={`absolute rounded-xl bg-white shadow-black shadow-2xl ${getWindowStyle()}`}
      onWheel={e => e.stopPropagation()}
      style={{
        height: windowMode === 'NOMAL' ? 'calc(100% - 200px)' : 'calc(100% - 24px)',
        minHeight: windowMode === 'NOMAL' ? '360px' : undefined,
      }}
    >
      <WindowBar setSelectedProject={setSelectedProject} setWindowMode={setWindowMode} />
      <WindowContents windowContentsState={windowContentsState} />
    </TransitionContent>
  )
}

export default Window;