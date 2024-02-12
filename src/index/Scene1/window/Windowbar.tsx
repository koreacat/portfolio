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
      <button className="size-3 rounded-full bg-red-500 cursor-pointer" onClick={() => setSelectedProject(null)} />
      <button className="size-3 rounded-full bg-yellow-500" onClick={() => setWindowMode(WindowModeEnum.NOMAL)} />
      <button className="size-3 rounded-full bg-green-500" onClick={() => setWindowMode(WindowModeEnum.MAXIMIZED)} />
    </div>
  )
}

export default WindowBar;