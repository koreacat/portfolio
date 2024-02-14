interface ProjectProps {
  name: string;
  icon: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const Project = ({ name, icon, isSelected, onClick }: ProjectProps) => {
  return (
    <div className="mb-2 flex w-[21%] select-none flex-col items-center justify-center gap-2 md:mb-0 md:w-auto">
      {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
      <div className={`flex size-24 cursor-pointer items-center justify-center overflow-hidden rounded hover:bg-white hover:bg-opacity-5 ${isSelected && 'bg-white bg-opacity-10 outline outline-gray-600'}`} onClick={onClick}>
        {icon}
      </div>
      <div className={`rounded-sm px-1 text-center text-xs ${isSelected && 'bg-blue-700'}`}>
        {name}
      </div>
    </div>
  );
}

export default Project;