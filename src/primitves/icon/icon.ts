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

  @property({ reflect: true })
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
      <div class=${this.getOuterDivClasses()}>
        <div
          class=${this.getInnerDivClasses()}
          style="mask-image:url(../src/static/images/${this.weight}/${this
            .iconKey}.svg);-webkit-mask-image:url(../src/static/images/${this
            .weight}/${this.iconKey}.svg);"
        />
      </div>
    `;
  }

  private getOuterDivClasses() {
    return classMap({
      outer: true,
      [this.size]: true,
    });
  }
  private getInnerDivClasses() {
    return classMap({
      inner: true,
      [this.size]: true,
      spin: this.spin,
      [this.variant]: true,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pwc-icon": Icon;
  }
}
