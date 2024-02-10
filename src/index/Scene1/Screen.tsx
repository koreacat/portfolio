import { useState } from "react";
import IconBuilder from "@/components/icon/IconBuilder";
import IconJobda from "@/components/icon/IconJobda";
import IconJobflex from "@/components/icon/IconJobflex";
import IconMollm from "@/components/icon/IconMollm";

interface FileProps {
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const File = ({ name, icon, isSelected, onClick }: FileProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 select-none">
      <div className={`overflow-hidden flex items-center justify-center w-24 h-24 rounded hover:bg-white hover:bg-opacity-5 cursor-pointer ${isSelected && 'bg-white bg-opacity-10 outline outline-gray-600'}`} onClick={onClick}>
        {icon}
      </div>
      <div className={`text-xs px-1 rounded-sm ${isSelected && 'bg-blue-700'}`}>
        {name}
      </div>
    </div>
  );
}

export enum FileEnum {
  'JOBDA' = 'JOBDA',
  'HR MOLLM' = 'HR MOLLM',
  '채용사이트 빌더' = '채용사이트 빌더',
  'JOBFLEX' = 'JOBFLEX',
}

export type FileType = keyof typeof FileEnum;

const FileIcon = {
  [FileEnum['JOBDA']]: <IconJobda />,
  [FileEnum['HR MOLLM']]: <IconMollm />,
  [FileEnum['채용사이트 빌더']]: <IconBuilder />,
  [FileEnum['JOBFLEX']]: <IconJobflex />,
}

interface Screen { }

const Screen = ({ }: Screen) => {
  const [selectedFile, setSelectedFile] = useState<FileType | null>(null);

  const handleClick = (file: FileType) => {
    setSelectedFile(file);
  }

  const getFileEls = () => {
    return Object.keys(FileEnum).map((file: FileType) => {
      return (
        <File name={file} icon={FileIcon[file]} isSelected={selectedFile === file} onClick={() => handleClick(file)} />
      )
    })
  }

  return (
    <div className="relative w-full h-full pt-10 pb-20">

      <div className="absolute left-8 flex flex-col gap-6 ">
        {getFileEls()}
      </div>

    </div>
  )
}

export default Screen;