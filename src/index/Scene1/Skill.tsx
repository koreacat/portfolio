import { useState } from "react";

interface SkillProps {
  name: string;
  icon?: React.ReactNode;
  bg?: string;
}

const Skill = ({ name, icon, bg }: SkillProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        className={`overflow-hidden flex items-center justify-center w-10 h-10 rounded-lg bg-${bg}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon}
      </div>
      {showTooltip && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs p-2 rounded opacity-100 transition-opacity duration-300 pointer-events-auto">
          <div className="absolute w-3 h-3 bg-gray-700 transform -rotate-45 top-6 left-1/2 -translate-x-1/2" />
          {name}
        </div>
      )}
    </div>
  );
}

export default Skill;