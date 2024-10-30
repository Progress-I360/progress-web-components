import { i, h as d, k as c } from "./lit-element-CPYlYYac.js";
import { n as f, t as m } from "./property-6LaJjAvW.js";
const h = i`
  :host {
    background-color: var(--color-background-sunken);
    color: var(--color-text-base);
    font-family: var(--font-family-Source-Sans-Pro);
    font-size: var(--font-size-sm);
    font-style: normal;
    font-weight: var(--font-weight-regular);
    line-height: var(--font-line-height-sm);
  }
`;
var g = Object.defineProperty,
  v = Object.getOwnPropertyDescriptor,
  u = (e, t, l, r) => {
    for (
      var o = r > 1 ? void 0 : r ? v(t, l) : t, s = e.length - 1, n;
      s >= 0;
      s--
    )
      (n = e[s]) && (o = (r ? n(t, l, o) : n(o)) || o);
    return r && o && g(t, l, o), o;
  };
let a = class extends d {
  constructor() {
    super(...arguments), (this.defaultTheme = "dark");
  }
  render() {
    return c` <slot></slot> `;
  }
  connectedCallback() {
    super.connectedCallback();
    const e = document.querySelector("html"),
      t = localStorage.getItem("pwc-theme") || this.defaultTheme;
    e &&
      (e.classList.remove("pwc-light", "pwc-dark"),
      e.classList.add(`pwc-${t}`));
  }
};
a.styles = h;
u([f()], a.prototype, "defaultTheme", 2);
a = u([m("pwc-root")], a);
const k = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: "dark",
      options: [
        { name: "dark", value: "#181b1f" },
        { name: "light", value: "#e2e6e9" },
      ],
    },
  },
  tags: ["autodocs"],
  initialGlobals: { backgrounds: { value: "0" } },
  decorators: [
    (e, t) => c`<pwc-root
        defaultTheme="${t.globals.backgrounds.value === "0" ? "dark" : "light"}"
        >${e()}</pwc-root
      >`,
  ],
};
export { k as default };
