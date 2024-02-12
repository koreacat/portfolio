import TransitionContent, { TransitionContentEnum } from '@/components/TransitionContent';
import Skill from './Skill';
import { SkillEnum, SkillIcon, SkillList } from '@/constant/SkillEnum';
import { ProjectSkillList, ProjectType } from '@/constant/ProjectEnum';
import { useEffect, useState } from 'react';

interface MenuProps {
  isTransitionEnd: boolean;
  selectedProject: ProjectType;
}

const Skills = ({ isTransitionEnd, selectedProject }: MenuProps) => {
  const [menuProjectState, setMenuProjectState] = useState<ProjectType | null>(null);

  useEffect(() => {
    if (selectedProject === null) return;
    setMenuProjectState(selectedProject);
  }, [selectedProject]);

  const getTransitionType = () => {
    if (selectedProject === null) return TransitionContentEnum["fade-out-up"];
    return isTransitionEnd ? TransitionContentEnum["fade-in-up"] : TransitionContentEnum["fade-out-up"];
  }

  const skillEls = SkillList.map((skill) => {
    const bg = ((skill === SkillEnum.ReactQuery) || (skill === SkillEnum.Zustand)) ? 'bg-white' : undefined;
    const pointBg = ((skill === SkillEnum.Mobx) || (skill === SkillEnum.Recoil)) ? 'bg-yellow-500' : 'bg-green-500';
    const isActive = !!ProjectSkillList[menuProjectState]?.find((skillType) => skillType === skill);

    if (!isActive) return null;

    return (
      <Skill key={skill} name={skill} icon={SkillIcon[skill]} bg={bg} pointBg={pointBg} isActive={isActive} />
    )
  });

  const handleAnimationEnd = () => {
    if (selectedProject === null) setMenuProjectState(null);
  }

  if (!menuProjectState) return null;

  return (
    <TransitionContent
      type={getTransitionType()}
      onAnimationEnd={handleAnimationEnd}
      className='skills overflow-auto md:overflow-visible
        absolute bottom-3 inset-x-0 flex items-start mx-2 bg-white rounded-xl bg-opacity-30 p-2 pb-1
        md:justify-center md:w-fit md:mx-auto '
    >
      {skillEls}
    </TransitionContent>
  )
}

export default Skills;