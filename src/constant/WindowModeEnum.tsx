export enum WindowModeEnum {
  NOMAL = 'NOMAL',
  MAXIMIZED = 'MAXIMIZED',
}

export type WindowModeType = keyof typeof WindowModeEnum;