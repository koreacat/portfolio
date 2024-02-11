import TransitionContent, { TransitionContentEnum } from '@/components/TransitionContent';
import Skill from './Skill';
import { SkillEnum, SkillIcon, SkillList } from '@/constant/SkillEnum';
import { ProjectSkillList, ProjectType } from '@/constant/ProjectEnum';

interface MenuProps {
  isTransitionEnd: boolean;
  selectedProject: ProjectType;
}

const Menu = ({ isTransitionEnd, selectedProject }: MenuProps) => {
  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in-up"] : TransitionContentEnum["fade-out"];
  }

  const getSkillEls = () => {
    return SkillList.map((skill) => {
      const bg = ((skill === SkillEnum.ReactQuery) || (skill === SkillEnum.Zustand)) ? 'bg-white' : undefined;
      const pointBg = ((skill === SkillEnum.Mobx) || (skill === SkillEnum.Recoil)) ? 'bg-yellow-500' : 'bg-green-500';
      const isActive = !!ProjectSkillList[selectedProject]?.find((skillType) => skillType === skill);

      if (!isActive) return null;

      return (
        <Skill name={skill} icon={SkillIcon[skill]} bg={bg} pointBg={pointBg} isActive={isActive} />
      )
    })
  }

  return (
    <TransitionContent type={getTransitionType()} fadeInDelay='.5s' className='absolute bottom-1 right-0 left-0 flex items-start justify-center gap-2 w-fit mx-auto bg-white rounded-xl bg-opacity-30 p-2 pb-1'>
      {getSkillEls()}
    </TransitionContent>
  )
}

export default Menu;