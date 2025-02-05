import {
  TooltipOpts,
  Position,
  positions,
  Trigger,
  triggers,
} from "../types/tooltip";
import UI from "../ui";
import { clamp } from "../utils/utils";

export default class Tooltip {
  showed = false;

  content: string | HTMLElement;
  position: Position;
  trigger: Trigger;
  parentElement: HTMLElement;
  offset: number;
  hidden: boolean;

  pageWidth!: number;
  pageHeight!: number;
  maxWidth?: number;
  backgroundColor?: string;

  container?: HTMLElement;
  onResizeObserver?: ResizeObserver;
  target: HTMLElement;

  constructor({
    target,
    content = "",
    position = "top",
    trigger = "hover",
    offset = 4,
    maxWidth = undefined,
    hidden = false,
    backgroundColor = undefined,
    parentElement = document.body,
  }: TooltipOpts) {
    if (!(target instanceof HTMLElement)) {
      throw new Error("target must be a valid HTMLElement");
    }

    this.target = target;
    this.content = content;
    this.offset = offset;
    this.hidden = hidden;
    this.trigger = Tooltip.validateTrigger(trigger) ? trigger : "hover";
    this.position = Tooltip.validatePos(position) ? position : "top";
    this.parentElement = parentElement;
    this.maxWidth = maxWidth;
    this.backgroundColor = backgroundColor;
    this.updatePageSize();
    this.init();
  }

  static validatePos(position: Position) {
    return positions.includes(position);
  }

  static validateTrigger(trigger: Trigger) {
    return triggers.includes(trigger);
  }

  setPosition(position: Position) {
    this.position = Tooltip.validatePos(position) ? position : "top";
    this.updatePos();
    return this;
  }

  setContent(content: string | HTMLElement) {
    this.content = content;
    this.destroy();
    return this;
  }

  onResize = () => {
    this.updatePageSize();
    this.updatePos();
  };

  onClick = () => {
    this.showed ? this.destroy() : this.create();
  };

  onHoverPointerDown = (e: PointerEvent) => {
    if (e.pointerType === "mouse") {
      return;
    }

    this.create();
  };

  onHoverPointerUp = (e: PointerEvent) => {
    if (e.pointerType === "mouse") {
      return;
    }

    this.destroy();
  };

  onMouseEnter = () => {
    this.create();
  };

  onMouseLeave = () => {
    this.destroy();
  };

  updatePageSize() {
    this.pageWidth = document.documentElement.clientWidth;
    this.pageHeight = document.documentElement.clientHeight;
    return this;
  }

  init() {
    this.onResizeObserver = new ResizeObserver(this.onResize);
    if (this.trigger === "click") {
      this.target.addEventListener("pointerdown", this.onClick);
      return this;
    }

    this.target.addEventListener("mouseenter", this.onMouseEnter);
    this.target.addEventListener("mouseleave", this.onMouseLeave);
    this.target.addEventListener("pointerdown", this.onHoverPointerDown);
    this.target.addEventListener("pointerup", this.onHoverPointerUp);

    return this;
  }

  release() {
    this.destroy();
    if (this.trigger === "click") {
      this.target.removeEventListener("pointerdown", this.onClick);
      return this;
    }

    this.target.removeEventListener("mouseenter", this.onMouseEnter);
    this.target.removeEventListener("mouseleave", this.onMouseLeave);
    this.target.removeEventListener("pointerdown", this.onHoverPointerDown);
    this.target.removeEventListener("pointerup", this.onHoverPointerUp);
    return this;
  }

  private create() {
    this.showed = true;
    this.container = UI.createEl("vot-block", ["vot-tooltip"], this.content);
    this.container.setAttribute("role", "tooltip");
    this.container.dataset.trigger = this.trigger;
    this.container.dataset.position = this.position;
    this.parentElement.appendChild(this.container);

    this.updatePos();
    if (this.backgroundColor !== undefined) {
      this.container.style.backgroundColor = this.backgroundColor;
    }

    if (this.hidden) {
      this.container.hidden = true;
    }

    this.container.style.opacity = "1";
    this.onResizeObserver?.observe(document.documentElement);
    return this;
  }

  updatePos() {
    if (!this.container) {
      return this;
    }

    const { top, left } = this.calcPos();
    const maxWidth =
      this.maxWidth ??
      clamp(this.pageWidth - left - this.offset, 0, this.pageWidth);
    this.container.style.top = `${top}px`;
    this.container.style.left = `${left}px`;
    this.container.style.maxWidth = `${maxWidth}px`;
    return this;
  }

  calcPos() {
    if (!this.container) {
      return { top: 0, left: 0 };
    }

    const {
      left,
      right,
      top,
      bottom,
      width: widthTarget,
      height: heightTarget,
    } = this.target.getBoundingClientRect();
    const { width, height } = this.container.getBoundingClientRect();

    switch (this.position) {
      case "top":
        return {
          top: clamp(top - height - this.offset, 0, this.pageHeight),
          left: clamp(left - width / 2 + widthTarget / 2, 0, this.pageWidth),
        };
      case "right":
        return {
          top: clamp(top + (heightTarget - height) / 2, 0, this.pageHeight),
          left: clamp(right + this.offset, 0, this.pageWidth),
        };
      case "bottom":
        return {
          top: clamp(bottom + this.offset, 0, this.pageHeight),
          left: clamp(left - width / 2 + widthTarget / 2, 0, this.pageWidth),
        };
      case "left":
        return {
          top: clamp(top + (heightTarget - height) / 2, 0, this.pageHeight),
          left: clamp(left - width - this.offset, 0, this.pageWidth),
        };
      default:
        return { top: 0, left: 0 };
    }
  }

  private destroy(instant = false) {
    if (!this.container) {
      return this;
    }

    this.showed = false;
    const container = this.container;
    container.style.opacity = "0";
    this.onResizeObserver?.disconnect();

    setTimeout(
      () => {
        if (!container) {
          return this;
        }

        container.remove();
      },
      instant ? 0 : 500,
    );

    return this;
  }
}
