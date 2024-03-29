import React from "react";
import { SkillEnum, SkillList, SkillType } from "./SkillEnum";
import IconUser from "@/components/icon/IconUser";
import IconBuilder from "@/components/icon/IconBuilder";
import IconJobda from "@/components/icon/IconJobda";
import IconJobflex from "@/components/icon/IconJobflex";
import IconMollm from "@/components/icon/IconMollm";
import IconWamel from "@/components/icon/IconWamel";
import Profile from "@/index/Scene1/window/contents/Profile";
import Jobda from "@/index/Scene1/window/contents/Jobda";
import HRMollm from "@/index/Scene1/window/contents/HRMollm";
import Builder from "@/index/Scene1/window/contents/Builder";
import Jobflex from "@/index/Scene1/window/contents/Jobflex";
import Wamel from "@/index/Scene1/window/contents/Wamel";

export enum ProjectEnum {
  'PROFILE' = 'PROFILE',
  'JOBDA' = 'JOBDA',
  'HR MOLLM' = 'HR MOLLM',
  '채용사이트 빌더' = '채용사이트 빌더',
  'JOBFLEX' = 'JOBFLEX',
  // 'WAMEL' = 'WAMEL',
}

export type ProjectType = keyof typeof ProjectEnum;

export const ProjectList = Object.keys(ProjectEnum) as ProjectType[];

export const ProjectIcon: Record<ProjectType, React.ReactNode> = {
  [ProjectEnum['PROFILE']]: <IconUser />,
  [ProjectEnum['JOBDA']]: <IconJobda />,
  [ProjectEnum['HR MOLLM']]: <IconMollm />,
  [ProjectEnum['채용사이트 빌더']]: <IconBuilder />,
  [ProjectEnum['JOBFLEX']]: <IconJobflex />,
  // [ProjectEnum['WAMEL']]: <IconWamel />,
}

export const ProjectSkillList: Record<ProjectType, SkillType[]> = {
  [ProjectEnum['PROFILE']]: [...SkillList],
  [ProjectEnum['JOBDA']]: [SkillEnum.JS, SkillEnum.TS, SkillEnum.React, SkillEnum.NextJS, SkillEnum.ReactQuery, SkillEnum.Zustand],
  [ProjectEnum['HR MOLLM']]: [SkillEnum.TS, SkillEnum.React, SkillEnum.NextJS, SkillEnum.ReactQuery],
  [ProjectEnum['채용사이트 빌더']]: [SkillEnum.TS, SkillEnum.React, SkillEnum.NextJS, SkillEnum.ReactQuery, SkillEnum.Recoil, SkillEnum.Zustand],
  [ProjectEnum['JOBFLEX']]: [SkillEnum.JS, SkillEnum.TS, SkillEnum.React, SkillEnum.Mobx],
  // [ProjectEnum['WAMEL']]: [SkillEnum.TS, SkillEnum.React],
}

export const ProjectContents: Record<ProjectType, React.ReactNode> = {
  [ProjectEnum['PROFILE']]: <Profile />,
  [ProjectEnum['JOBDA']]: <Jobda />,
  [ProjectEnum['HR MOLLM']]: <HRMollm />,
  [ProjectEnum['채용사이트 빌더']]: <Builder />,
  [ProjectEnum['JOBFLEX']]: <Jobflex />,
  // [ProjectEnum['WAMEL']]: <Wamel />,
}