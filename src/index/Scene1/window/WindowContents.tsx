import { ProjectContents, ProjectType } from "@/constant/ProjectEnum";
import { WindowModeEnum, WindowModeType } from "@/constant/WindowModeEnum";
import React, { useEffect, useRef } from "react";

interface WindowContentsProps {
  windowMode: WindowModeType;
  windowContentsState: ProjectType | null;
}

const WindowContents = ({ windowMode, windowContentsState }: WindowContentsProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.scrollTop = 0;
    }
  }, [windowContentsState]);

  const getWindowStyle = () => {
    if (windowMode === WindowModeEnum.NOMAL) return 'h-window-normal-contents-phone md:h-window-normal-contents-pc';
    if (windowMode === WindowModeEnum.MAXIMIZED) return 'h-window-maximized-contents-phone md:h-window-maximized-contents-pc';
  }

  return (
    <div ref={ref} className={`overflow-y-auto overflow-x-hidden rounded-b-lg px-4 py-2 text-black md:px-16 md:py-4 ${getWindowStyle()}`}>
      {ProjectContents[windowContentsState]}
    </div>
  )
}

export default WindowContents;