import { render } from "lit-html";

import UI from "../../ui";

import { SelectLabelProps } from "../../types/components/selectLabel";
import { LitHtml } from "../../types/components/shared";

export default class SelectLabel {
  container: HTMLElement;
  icon: HTMLElement;

  private _labelText: string;
  private _icon?: LitHtml;

  constructor({ labelText, icon }: SelectLabelProps) {
    this._labelText = labelText;
    this._icon = icon;

    const elements = this.createElements();
    this.container = elements.container;
    this.icon = elements.icon;
  }

  private createElements() {
    const container = UI.createEl("vot-block", ["vot-select-label"]);
    container.textContent = this._labelText;

    const icon = UI.createEl("vot-block", ["vot-select-label-icon"]);
    if (this._icon) {
      render(this._icon, icon);
    }
    container.appendChild(icon);

    return {
      container,
      icon,
    };
  }

  set hidden(isHidden: boolean) {
    this.container.hidden = isHidden;
  }

  get hidden() {
    return this.container.hidden;
  }
}
