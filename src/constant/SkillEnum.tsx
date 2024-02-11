import IconJS from '@/components/icon/IconJS';
import IconTS from '@/components/icon/IconTS';
import IconReact from '@/components/icon/IconReact';
import IconNextJS from '@/components/icon/IconNextJS';
import IconReactQuery from '@/components/icon/IconReactQuery';
import IconZustand from '@/components/icon/IconZustand';
import IconMobx from '@/components/icon/IconMobx';
import IconRecoil from '@/components/icon/IconRecoil';

export enum SkillEnum {
  JS = 'JS',
  TS = 'TS',
  React = 'React',
  NextJS = 'NextJS',
  ReactQuery = 'ReactQuery',
  Zustand = 'Zustand',
  Mobx = 'Mobx',
  Recoil = 'Recoil',
}

export type SkillType = keyof typeof SkillEnum;

export const SkillList = Object.keys(SkillEnum) as SkillType[];

export const SkillIcon: Record<SkillType, React.ReactNode> = {
  [SkillEnum.JS]: <IconJS />,
  [SkillEnum.TS]: <IconTS />,
  [SkillEnum.React]: <IconReact />,
  [SkillEnum.NextJS]: <IconNextJS />,
  [SkillEnum.ReactQuery]: <IconReactQuery />,
  [SkillEnum.Zustand]: <IconZustand />,
  [SkillEnum.Mobx]: <IconMobx />,
  [SkillEnum.Recoil]: <IconRecoil />,
}
