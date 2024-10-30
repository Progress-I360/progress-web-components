import { html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "./button.styles";
import "../icon/icon";

export type ButtonSize = "extra-small" | "medium" | "small";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonVariant =
  | "clear"
  | "danger"
  | "ghost"
  | "info"
  | "primary"
  | "success"
  | "tip"
  | "warning";

@customElement("pwc-button")
export class Button extends LitElement {
  static styles = style;

  @property()
  busy: boolean | undefined;

  @property()
  disabled: boolean | undefined;

  @property()
  fullWidth: boolean | undefined;

  @property()
  icon: string | undefined;

  @property()
  label: string | undefined;

  @property()
  onClick: (() => void) | undefined;

  @property()
  size: ButtonSize = "medium";

  @property()
  type: ButtonType = "button";

  @property()
  variant: ButtonVariant = "clear";

  protected render() {
    return html` <button
      @click=${this.disabled || this.busy ? nothing : this.onClick}
      ${this.disabled ? "disabled" : nothing}
      class="${this.getClasses()}"
      type=${this.type}
    >
      ${this.busy
        ? html`<pwc-icon
            duotone=${true}
            iconKey="spinner-third"
            size=${this.size}
            spin=${true}
            variant=${this.getIconVariant()}
            weight="solid"
          />`
        : html`<slot name="icon">
              ${this.icon
                ? html`<pwc-icon
                    iconKey=${this.icon}
                    size=${this.size}
                    variant=${this.getIconVariant()}
                    weight="regular"
                  />`
                : nothing}
            </slot>
            <slot>
              ${this.label
                ? html`<span class="label">${this.label}</span>`
                : nothing}
            </slot>`}
    </button>`;
  }

  private getClasses() {
    return classMap({
      busy: !!this.busy,
      disabled: !!this.disabled,
      ["full-width"]: !!this.fullWidth,
      icon: !!this.icon || !!this.busy,
      label: !!this.label,
      [this.size]: true,
      [this.variant]: !this.disabled,
    });
  }
  private getIconVariant() {
    switch (this.variant) {
      case "clear":
      case "ghost":
        return "normal";
      default:
        return "inverse";
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pwc-button": Button;
  }
}
