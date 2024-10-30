import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import style from "./icon.styles";

export type IconSize = "extra-small" | "large" | "medium" | "small";
export type IconVariant =
  | "danger"
  | "inactive"
  | "info"
  | "inverse"
  | "maintenance"
  | "normal"
  | "success"
  | "tip"
  | "unknown"
  | "warning";
export type IconWeight = "regular" | "solid";

@customElement("pwc-icon")
export class Icon extends LitElement {
  static styles = style;

  @property()
  duotone: boolean = false;

  @property()
  iconKey: string = "";

  @property()
  size: IconSize = "medium";

  @property()
  spin: boolean = false;

  @property()
  variant: IconVariant = "normal";

  @property()
  weight: IconWeight = "regular";

  protected render() {
    return html`
      <link rel="stylesheet" href="./src/static/css/fontawesome.css" />
      <div class=${this.getDivClasses()}>
        <span class=${this.getSpanClasses()} />
      </div>
    `;
  }

  private getDivClasses() {
    return classMap({
      [`${this.size}`]: true,
    });
  }
  private getSpanClasses() {
    return classMap({
      ["fa-duotone"]: this.duotone,
      [`fa-${this.iconKey}`]: true,
      [this.size]: true,
      ["fa-spin"]: this.spin,
      [this.variant]: true,
      [this.weight]: true,
      [`fa-${this.weight}`]: true,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pwc-icon": Icon;
  }
}
