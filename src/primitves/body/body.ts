import { customElement, property } from "lit/decorators.js";
import style from "./body.styles";
import { html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";

export type BodyVariant =
  | "sm-regular"
  | "sm-semi-bold"
  | "sm-bold"
  | "xs-regular"
  | "xs-semi-bold"
  | "xs-bold"
  | "xxs-semi-bold";
export type BodyColor =
  | "base"
  | "subtle"
  | "subtler"
  | "subtlest"
  | "disabled"
  | "clear"
  | "inverse"
  | "red-base"
  | "red-subtle"
  | "orange-base"
  | "orange-subtle"
  | "yellow-base"
  | "yellow-subtle"
  | "green-base"
  | "green-subtle"
  | "mint-base"
  | "mint-subtle"
  | "teal-base"
  | "teal-subtle"
  | "blue-base"
  | "blue-subtle"
  | "purple-base"
  | "purple-subtle"
  | "magenta-base"
  | "magenta-subtle"
  | "gray-base"
  | "gray-subtle";

@customElement("pwc-body")
export class Body extends LitElement {
  static styles = style;

  @property()
  color: BodyColor = "base";

  @property()
  content: string | undefined;

  @property()
  variant: BodyVariant = "sm-regular";

  protected render() {
    return html`<span class="${this.getClasses()}">
      <slot>${this.content}</slot>
    </span>`;
  }

  private getClasses() {
    return classMap({
      ["extra-extra-small"]: this.variant.indexOf("xxs-") > -1,
      ["extra-small"]:
        this.variant.indexOf("xs-") > -1 && this.variant.indexOf("xxs-") === -1,
      small: this.variant.indexOf("sm-") > -1,
      regular: this.variant.indexOf("-regular") > -1,
      ["semi-bold"]: this.variant.indexOf("-semi-bold") > -1,
      bold:
        this.variant.indexOf("-bold") > -1 &&
        this.variant.indexOf("-semi-bold") === -1,
      [this.color]: true,
    });
  }
}
