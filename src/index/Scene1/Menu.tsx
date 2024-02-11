import TransitionContent, { TransitionContentEnum } from '@/components/TransitionText';
import IconJS from '@/components/icon/IconJS';
import IconTS from '@/components/icon/IconTS';
import IconReact from '@/components/icon/IconReact';
import IconNextJS from '@/components/icon/IconNextJS';
import IconReactQuery from '@/components/icon/IconReactQuery';
import IconZustand from '@/components/icon/IconZustand';
import IconMobx from '@/components/icon/IconMobx';
import IconRecoil from '@/components/icon/IconRecoil';
import Skill from './Skill';

interface MenuProps {
  isTransitionEnd: boolean;
}

const Menu = ({ isTransitionEnd }: MenuProps) => {
  const getTransitionType = () => {
    return isTransitionEnd ? TransitionContentEnum["fade-in-up"] : TransitionContentEnum["fade-out"];
  }

  return (
    <TransitionContent type={getTransitionType()} fadeInDelay='.5s' className='absolute bottom-1 right-0 left-0 flex items-center justify-center gap-2 w-fit mx-auto bg-white rounded-xl bg-opacity-30 p-2 pb-3'>
      <Skill name={'JS'} icon={<IconJS />} />
      <Skill name={'TS'} icon={<IconTS />} />
      <Skill name={'react'} icon={<IconReact />} />
      <Skill name={'Next.js'} icon={<IconNextJS />} />
      <Skill name={'ReactQuery'} icon={<IconReactQuery />} bg={'white'} />
      <Skill name={'Zustand'} icon={<IconZustand />} bg={'white'} />
      <Skill name={'Mobx'} icon={<IconMobx />} />
      <Skill name={'Recoil'} icon={<IconRecoil />} />
    </TransitionContent>
  )
}

export default Menu;