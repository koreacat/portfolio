import IconBuilder from "@/components/icon/IconBuilder";
import IconJobda from "@/components/icon/IconJobda";
import IconJobflex from "@/components/icon/IconJobflex";
import IconMollm from "@/components/icon/IconMollm";
import React from "react";
import { SkillEnum, SkillList, SkillType } from "./SkillEnum";

export enum ProjectEnum {
  'PROFILE' = 'PROFILE',
  'JOBDA' = 'JOBDA',
  'HR MOLLM' = 'HR MOLLM',
  '채용사이트 빌더' = '채용사이트 빌더',
  'JOBFLEX' = 'JOBFLEX',
}

export type ProjectType = keyof typeof ProjectEnum;

export const ProjectList = Object.keys(ProjectEnum) as ProjectType[];

export const ProjectIcon: Record<ProjectType, React.ReactNode> = {
  [ProjectEnum['PROFILE']]: <IconJobda />,
  [ProjectEnum['JOBDA']]: <IconJobda />,
  [ProjectEnum['HR MOLLM']]: <IconMollm />,
  [ProjectEnum['채용사이트 빌더']]: <IconBuilder />,
  [ProjectEnum['JOBFLEX']]: <IconJobflex />,
}

export const ProjectSkillList: Record<ProjectType, SkillType[]> = {
  [ProjectEnum['PROFILE']]: [...SkillList],
  [ProjectEnum['JOBDA']]: [SkillEnum.JS, SkillEnum.TS, SkillEnum.React, SkillEnum.ReactQuery, SkillEnum.Zustand],
  [ProjectEnum['HR MOLLM']]: [SkillEnum.TS, SkillEnum.React, SkillEnum.NextJS, SkillEnum.ReactQuery, SkillEnum.Zustand],
  [ProjectEnum['채용사이트 빌더']]: [SkillEnum.TS, SkillEnum.React, SkillEnum.NextJS, SkillEnum.ReactQuery, SkillEnum.Recoil],
  [ProjectEnum['JOBFLEX']]: [SkillEnum.JS, SkillEnum.React, SkillEnum.Mobx],
}