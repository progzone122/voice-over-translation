import {
  TooltipOpts,
  Position,
  positions,
  Trigger,
  triggers,
} from "../types/tooltip";
import UI from "../ui";

export default class Tooltip {
  showed = false;

  content: string | HTMLElement;
  position: Position;
  trigger: Trigger;
  parentElement: HTMLElement;
  offset: number;

  container?: HTMLElement;
  onResizeObserver?: ResizeObserver;
  target: HTMLElement;

  constructor({
    target,
    content = "",
    position = "top",
    trigger = "hover",
    offset = 4,
    parentElement = document.body,
  }: TooltipOpts) {
    if (!(target instanceof HTMLElement)) {
      throw new Error("target must be a valid HTMLElement");
    }

    this.target = target;
    this.content = content;
    this.offset = offset;
    this.trigger = Tooltip.validateTrigger(trigger) ? trigger : "hover";
    this.position = Tooltip.validatePos(position) ? position : "top";
    this.parentElement = parentElement;
    this.init();
  }

  static validatePos(position: Position) {
    return positions.includes(position);
  }

  static validateTrigger(trigger: Trigger) {
    return triggers.includes(trigger);
  }

  onResize = () => {
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

  init() {
    if (this.trigger === "click") {
      this.target.addEventListener("pointerdown", this.onClick);
      return this;
    }

    this.target.addEventListener("mouseenter", this.onMouseEnter);
    this.target.addEventListener("mouseleave", this.onMouseLeave);
    this.target.addEventListener("pointerdown", this.onHoverPointerDown);
    this.target.addEventListener("pointerup", this.onHoverPointerUp);

    this.onResizeObserver = new ResizeObserver(this.onResize);

    return this;
  }

  release() {
    this.destroy();
    if (this.trigger === "click") {
      this.target.addEventListener("pointerdown", this.onClick);
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
    this.container.style.opacity = "1";
    this.onResizeObserver?.observe(this.parentElement);
    return this;
  }

  updatePos() {
    if (!this.container) {
      return this;
    }

    const { top, left } = this.calcPos();
    this.container.style.top = `${top}px`;
    this.container.style.left = `${left}px`;
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
          top: top - height - this.offset,
          left: left - width / 2 + widthTarget / 2,
        };
      case "right":
        return {
          top: top + (heightTarget - height) / 2,
          left: right + this.offset,
        };
      case "bottom":
        return {
          top: bottom + this.offset,
          left: left - width / 2 + widthTarget / 2,
        };
      case "left":
        return {
          top: top + (heightTarget - height) / 2,
          left: left - width - this.offset,
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
    this.container.style.opacity = "0";
    this.onResizeObserver?.disconnect();

    setTimeout(
      () => {
        if (!this.container || this.showed) {
          return this;
        }

        this.container.remove();
        this.container = undefined;
      },
      instant ? 0 : 500,
    );

    return this;
  }
}
