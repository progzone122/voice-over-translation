export const positions = ["left", "top", "right", "bottom"] as const;
export type Position = (typeof positions)[number];

export const triggers = ["hover", "click"] as const;
export type Trigger = (typeof triggers)[number];

export type TooltipOpts = {
  target: HTMLElement;
  content?: string | HTMLElement;
  position?: Position;
  trigger?: Trigger;
  offset?: number;
  parentElement?: HTMLElement;
};
