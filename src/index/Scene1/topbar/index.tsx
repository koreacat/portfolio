import IconGear from "@/components/icon/IconGear";
import { ProjectType } from "@/constant/ProjectEnum";
import useAnimationFrame from "@/hooks/useAnimationFrame";
import useClickOutside from "@/hooks/useClickOutside";
import { useEffect, useRef, useState } from "react";

function formatDate(date: Date, type: 'PC' | 'Phone'): string {
  const pcOptions = {
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Seoul",
  } as Intl.DateTimeFormatOptions;

  const phoneOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Seoul",
  } as Intl.DateTimeFormatOptions;
  return date.toLocaleString("ko-KR", type === 'PC' ? pcOptions : phoneOptions);
}

interface TopbarProps {
  isTransitionEnd: boolean;
  selectedProject: ProjectType;
  handleRestart: () => void;
  handleShutDown: () => void;
}

const Topbar = ({
  isTransitionEnd,
  selectedProject,
  handleRestart,
  handleShutDown,
}: TopbarProps) => {
  const ref = useRef();
  const [menu, setMenu] = useState<'main' | null>(null);
  const isOpen = (menuType: 'main' | null) => menuType === menu;
  const [date, setDate] = useState(new Date());

  useClickOutside(ref, () => setMenu(null));

  useEffect(() => {
    setMenu(null);
  }, [isTransitionEnd, selectedProject])

  useAnimationFrame(() => {
    setDate(new Date());
  });

  return (
    <div className='absolute top-0 inset-x-0 flex items-center justify-between w-full h-6 bg-white bg-opacity-5 text-sm pl-2 pr-4'>
      <div className="relative flex h-full">
        <button className={`flex h-full w-6 px-1 justify-center items-center hover:bg-white hover:bg-opacity-10 ${isOpen('main') && 'bg-white bg-opacity-20'}`} onClick={() => setMenu(isOpen('main') ? null : 'main')}>
          <IconGear />
        </button>
        {
          menu && (
            <div ref={ref} className="absolute top-full flex flex-col items-start w-32 bg-white bg-opacity-80 text-black shadow-black shadow-2xl">
              <button className="py-1 pl-3 text-left w-full hover:bg-blue-600 hover:text-white" type="button" onClick={handleRestart}>다시시작...</button>
              <button className="py-1 pl-3 text-left w-full hover:bg-blue-600 hover:text-white" type="button" onClick={handleShutDown}>종료...</button>
            </div>
          )
        }
      </div>
      <div className="m-auto md:m-0">
        <div className="hidden md:flex">{formatDate(date, 'PC')}</div>
        <div className="md:hidden">{formatDate(date, 'Phone')}</div>
      </div>
    </div >
  )
}

export default Topbar;