interface SkillProps {
  name: string;
  icon?: React.ReactNode;
  bg?: string;
}

const Skill = ({ name, icon, bg, }: SkillProps) => {
  return (
    <div className={`skill relative flex flex-col items-center gap-1 px-1`} >
      <div className={`skillIconArea overflow-hidden flex items-center justify-center size-10 rounded-xl transition-all duration-300 ${bg}`}>
        {icon}
      </div>
      <div className="tooltip absolute bottom-20 left-1/2 hidden -translate-x-1/2 bg-gray-700 text-white text-xs p-2 rounded opacity-100 transition-opacity duration-300 ">
        <div className="absolute size-3 bg-gray-700 transform -rotate-45 top-6 left-1/2 -translate-x-1/2" />
        {name}
      </div>
    </div>
  );
}

export default Skill;