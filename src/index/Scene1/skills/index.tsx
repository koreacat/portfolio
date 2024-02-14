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
    const isActive = !!ProjectSkillList[menuProjectState]?.find((skillType) => skillType === skill);

    if (!isActive) return null;

    return (
      <Skill key={skill} name={skill} icon={SkillIcon[skill]} bg={bg} />
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
      className='skills absolute inset-x-0
        bottom-3 mx-2 flex items-start overflow-auto rounded-xl bg-white bg-opacity-30 p-2 md:mx-auto
        md:w-fit md:justify-center md:overflow-visible '
    >
      {skillEls}
    </TransitionContent>
  )
}

export default Skills;