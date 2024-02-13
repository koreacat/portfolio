import IconClose from "@/components/icon/IconClose";
import IconMaxi from "@/components/icon/IconMaxi";
import IconMini from "@/components/icon/IconMini";
import { ProjectType } from "@/constant/ProjectEnum";
import { WindowModeEnum, WindowModeType } from "@/constant/WindowModeEnum";

interface WindowBarProps {
  windowMode: WindowModeType;
  setSelectedProject: React.Dispatch<React.SetStateAction<ProjectType>>;
  setWindowMode: React.Dispatch<React.SetStateAction<WindowModeType>>;
}

const WindowBar = ({ windowMode, setSelectedProject, setWindowMode }: WindowBarProps) => {
  return (
    <div className={`flex items-center h-6 md:h-10 bg-gray-200 gap-1 px-4 ${windowMode === 'NOMAL' && 'rounded-t-xl'}`}>
      <button className="windowBtn flex items-center justify-center size-3 rounded-full bg-red-500 hover:bg-red-600" onClick={() => setSelectedProject(null)}>
        <IconClose />
      </button>
      <button className="windowBtn flex items-center justify-center size-3 rounded-full bg-yellow-500 hover:bg-yellow-600" onClick={() => setWindowMode(WindowModeEnum.NOMAL)}>
        <IconMini />
      </button>
      <button className="windowBtn flex items-center justify-center size-3 rounded-full bg-green-500 hover:bg-green-600" onClick={() => setWindowMode(WindowModeEnum.MAXIMIZED)}>
        <IconMaxi />
      </button>
    </div>
  )
}

export default WindowBar;