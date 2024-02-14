interface SkillProps {
  name: string;
  icon?: React.ReactNode;
  bg?: string;
  pointBg?: string;
  isActive?: boolean;
}

const Skill = ({ name, icon, bg, pointBg, isActive }: SkillProps) => {

  const handleClick = () => {
    console.log('click');
  }

  return (
    <button className={`skill relative flex flex-col items-center gap-1 px-1`} onClick={handleClick}>
      <div className={`skillIconArea flex size-10 items-center justify-center overflow-hidden rounded-xl transition-all duration-300 ${bg}`}>
        {icon}
      </div>
      <div className="tooltip absolute bottom-20 left-1/2 hidden -translate-x-1/2 rounded bg-gray-700 p-2 text-xs text-white opacity-100 transition-opacity duration-300 ">
        <div className="absolute left-1/2 top-6 size-3 -translate-x-1/2 -rotate-45 bg-gray-700" />
        {name}
      </div>
      <div className={`size-1 rounded-full ${isActive && pointBg}`} />
    </button>
  );
}

export default Skill;