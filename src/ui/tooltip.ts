import {
  TooltipOpts,
  Position,
  positions,
  Trigger,
  triggers,
  PagePosition,
} from "../types/tooltip";
import UI from "../ui";
import { clamp } from "../utils/utils";

export default class Tooltip {
  showed = false;

  target: HTMLElement;
  anchor: HTMLElement;
  content: string | HTMLElement;
  position: Position;
  trigger: Trigger;
  parentElement: HTMLElement;
  layoutRoot: HTMLElement;
  offsetX: number;
  offsetY: number;
  hidden: boolean;
  autoLayout: boolean;

  pageWidth!: number;
  pageHeight!: number;
  maxWidth?: number;
  backgroundColor?: string;
  borderRadius?: number;

  container?: HTMLElement;
  onResizeObserver?: ResizeObserver;

  constructor({
    target,
    anchor = undefined,
    content = "",
    position = "top",
    trigger = "hover",
    offset = 4,
    maxWidth = undefined,
    hidden = false,
    autoLayout = true,
    backgroundColor = undefined,
    borderRadius = undefined,
    parentElement = document.body,
    layoutRoot = document.documentElement,
  }: TooltipOpts) {
    if (!(target instanceof HTMLElement)) {
      throw new Error("target must be a valid HTMLElement");
    }

    this.target = target;
    this.anchor = anchor instanceof HTMLElement ? anchor : target;
    this.content = content;
    if (typeof offset === "number") {
      this.offsetY = this.offsetX = offset;
    } else {
      this.offsetX = offset.x;
      this.offsetY = offset.y;
    }
    this.hidden = hidden;
    this.autoLayout = autoLayout;
    this.trigger = Tooltip.validateTrigger(trigger) ? trigger : "hover";
    this.position = Tooltip.validatePos(position) ? position : "top";
    this.parentElement = parentElement;
    this.layoutRoot = layoutRoot;
    this.borderRadius = borderRadius;
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
    this.pageWidth = this.layoutRoot.clientWidth;
    this.pageHeight = this.layoutRoot.clientHeight;
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

    if (this.borderRadius !== undefined) {
      this.container.style.borderRadius = `${this.borderRadius}px`;
    }

    if (this.hidden) {
      this.container.hidden = true;
    }

    this.container.style.opacity = "1";
    this.onResizeObserver?.observe(this.layoutRoot);
    return this;
  }

  updatePos() {
    if (!this.container) {
      return this;
    }

    let { top, left } = this.calcPos(this.autoLayout);
    const maxWidth =
      this.maxWidth ??
      clamp(this.pageWidth - left - this.offsetX, 0, this.pageWidth);
    this.container.style.transform = `translate(${left}px, ${top}px)`;
    this.container.style.maxWidth = `${maxWidth}px`;
    return this;
  }

  calcPos(autoLayout = true): PagePosition {
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
    } = this.anchor.getBoundingClientRect();
    const { width, height } = this.container.getBoundingClientRect();
    switch (this.position) {
      case "top": {
        const pTop = clamp(top - height - this.offsetY, 0, this.pageHeight);
        if (autoLayout && pTop + this.offsetY < height) {
          this.position = "bottom";
          return this.calcPos(false);
        }

        return {
          top: pTop,
          left: clamp(left - width / 2 + widthTarget / 2, 0, this.pageWidth),
        };
      }
      case "right": {
        const pLeft = clamp(right + this.offsetX, 0, this.pageWidth);
        if (autoLayout && pLeft + width > this.pageWidth) {
          this.position = "left";
          return this.calcPos(false);
        }

        return {
          top: clamp(top + (heightTarget - height) / 2, 0, this.pageHeight),
          left: pLeft,
        };
      }
      case "bottom": {
        const pTop = clamp(bottom + this.offsetY, 0, this.pageHeight);
        if (autoLayout && pTop + height > this.pageHeight) {
          this.position = "top";
          return this.calcPos(false);
        }

        return {
          top: pTop,
          left: clamp(left - width / 2 + widthTarget / 2, 0, this.pageWidth),
        };
      }
      case "left": {
        const pLeft = clamp(left - width - this.offsetX, 0, this.pageWidth);
        if (autoLayout && pLeft + width > left) {
          this.position = "right";
          return this.calcPos(false);
        }

        return {
          top: clamp(top + (heightTarget - height) / 2, 0, this.pageHeight),
          left: pLeft,
        };
      }
      default:
        return { top: 0, left: 0 };
    }
  }

  private destroy(instant = false) {
    if (!this.container) {
      return this;
    }

    this.showed = false;
    this.onResizeObserver?.disconnect();
    if (instant) {
      this.container.remove();
      return this;
    }

    const container = this.container;
    container.style.opacity = "0";
    container.addEventListener(
      "transitionend",
      () => {
        container?.remove();
      },
      {
        once: true,
      },
    );

    return this;
  }
}
