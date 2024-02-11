interface ProjectProps {
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const Project = ({ name, icon, isSelected, onClick }: ProjectProps) => {
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

export default Project;