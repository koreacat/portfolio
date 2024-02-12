import { ProjectContents, ProjectType } from "@/constant/ProjectEnum";
import { WindowModeEnum, WindowModeType } from "@/constant/WindowModeEnum";
import React from "react";

interface WindowContentsProps {
  windowMode: WindowModeType;
  windowContentsState: ProjectType | null;
}

const WindowContents = ({ windowMode, windowContentsState }: WindowContentsProps) => {
  const getWindowStyle = () => {
    if (windowMode === WindowModeEnum.NOMAL) return 'h-window-normal-contents-phone md:h-window-normal-contents-pc';
    if (windowMode === WindowModeEnum.MAXIMIZED) return 'h-window-maximized-contents-phone md:h-window-maximized-contents-pc';
  }

  return (
    <div className={`overflow-x-hidden overflow-y-auto text-black py-2 px-4 md:py-4 md:px-16 rounded-b-lg ${getWindowStyle()}`}>
      {ProjectContents[windowContentsState]}
    </div>
  )
}

export default WindowContents;