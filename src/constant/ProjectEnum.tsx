import IconBuilder from "@/components/icon/IconBuilder";
import IconJobda from "@/components/icon/IconJobda";
import IconJobflex from "@/components/icon/IconJobflex";
import IconMollm from "@/components/icon/IconMollm";

export enum ProjectEnum {
  'JOBDA' = 'JOBDA',
  'HR MOLLM' = 'HR MOLLM',
  '채용사이트 빌더' = '채용사이트 빌더',
  'JOBFLEX' = 'JOBFLEX',
}

export type ProjectType = keyof typeof ProjectEnum;

export const ProjectIcon = {
  [ProjectEnum['JOBDA']]: <IconJobda />,
  [ProjectEnum['HR MOLLM']]: <IconMollm />,
  [ProjectEnum['채용사이트 빌더']]: <IconBuilder />,
  [ProjectEnum['JOBFLEX']]: <IconJobflex />,
}