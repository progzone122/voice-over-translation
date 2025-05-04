import UI from "../../ui";
import { EventImpl } from "../../core/eventImpl";
import type { HotkeyButtonProps } from "../../types/components/hotkeyButton";
import { localizationProvider } from "../../localization/localizationProvider";

export default class HotkeyButton {
  container: HTMLElement;
  button: HTMLElement;

  private onChange = new EventImpl();

  private _labelHtml: string;
  private _key: string | null;

  constructor({ labelHtml, key = null }: HotkeyButtonProps) {
    this._labelHtml = labelHtml;
    this._key = key;

    const elements = this.createElements();
    this.container = elements.container;
    this.button = elements.button;
  }

  private keydownHandle = (event: KeyboardEvent) => {
    event.preventDefault();
    const key = event.code === "Escape" ? null : event.code;
    this.button.removeAttribute("data-status");
    this.key = key;
  };

  private createElements() {
    const container = UI.createEl("vot-block", ["vot-hotkey"]);
    const label = UI.createEl("vot-block", ["vot-hotkey-label"]);
    label.textContent = this._labelHtml;

    const button = UI.createEl("vot-block", ["vot-hotkey-button"]);
    button.textContent = this.keyText;
    button.onclick = () => console.log("click onclick");
    button.addEventListener("click", () => {
      console.log("click");
      button.dataset.status = "active";
      document.addEventListener("keydown", this.keydownHandle, {
        once: true,
      });
    });

    container.append(label, button);
    return { container, button, label };
  }

  addEventListener(
    type: "change",
    listener: (key: string | null) => void,
  ): this {
    this.onChange.addListener(listener);

    return this;
  }

  removeEventListener(
    type: "change",
    listener: (key: string | null) => void,
  ): this {
    this.onChange.removeListener(listener);

    return this;
  }

  set hidden(isHidden: boolean) {
    this.container.hidden = isHidden;
  }

  get hidden() {
    return this.container.hidden;
  }

  get key() {
    return this._key;
  }

  get keyText() {
    return (
      this._key?.replace("Key", "").replace("Digit", "") ??
      localizationProvider.get("None")
    );
  }

  /**
   * If you set a different new value, it will trigger the change event
   */
  set key(newKey: string | null) {
    if (this._key === newKey) {
      return;
    }

    this._key = newKey;
    this.button.textContent = this.keyText;
    this.onChange.dispatch(this._key);
  }
}
