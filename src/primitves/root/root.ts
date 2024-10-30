import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./root.styles";

export type Theme = "light" | "dark";

@customElement("pwc-root")
export class Root extends LitElement {
  static styles = style;

  @property()
  defaultTheme: Theme = "dark";

  render() {
    return html` <slot></slot> `;
  }

  connectedCallback() {
    super.connectedCallback();

    const el = document.querySelector("html");
    const theme = localStorage.getItem("pwc-theme") || this.defaultTheme;

    if (el) {
      el.classList.remove("pwc-light", "pwc-dark");
      el.classList.add(`pwc-${theme}`);
    }
  }
}
