import { html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "./button.styles";
import "../body/body";
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
  size: ButtonSize = "medium";

  @property()
  type: ButtonType = "button";

  @property()
  variant: ButtonVariant = "clear";

  protected render() {
    return html` <button
      @click=${this.handleClick}
      ${this.disabled ? "disabled" : nothing}
      class="${this.getClasses()}"
      type=${this.type}
    >
      ${this.busy
        ? html`<pwc-icon
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
                ? html`<pwc-body
                    content="${this.label}"
                    color="${this.getLabelColor()}"
                    variant="${this.getLabelVariant()}"
                  />`
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
  private getLabelColor() {
    if (this.disabled) {
      return "disabled";
    }

    switch (this.variant) {
      case "clear":
      case "ghost":
        return "base";
      default:
        return "inverse";
    }
  }
  private getLabelVariant() {
    return this.size === "extra-small" ? "xs-semi-bold" : "sm-semi-bold";
  }
  private handleClick() {
    if (!this.disabled && !this.busy) {
      this.dispatchEvent(new Event("click", { bubbles: true, composed: true }));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pwc-button": Button;
  }
}
