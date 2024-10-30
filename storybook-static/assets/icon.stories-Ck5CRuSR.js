import { i as f, h as d, k as v } from "./lit-element-CPYlYYac.js";
import { n as o, t as y } from "./property-6LaJjAvW.js";
import { R as m } from "./class-map-CXre9d5K.js";
const z = f`
  div.outer {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: center;
    & .large {
      height: var(--size-48);
      width: var(--size-48);
    }
    & .medium {
      height: var(--size-20);
      width: var(--size-20);
    }
    & .small {
      height: var(--size-20);
      width: var(--size-20);
    }
    & .extra-small {
      height: var(--size-16);
      width: var(--size-16);
    }
  }
  span.inner {
    font-family: var(--font-family-Font-Awesome-6-Pro);
    font-style: normal;
    text-align: center;
    & .large {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    & .medium {
      font-size: var(--font-size-md);
      line-height: var(--font-line-height-sm);
    }
    & .small {
      font-size: var(--font-size-sm);
      line-height: var(--font-line-height-xs);
    }
    & .extra-small {
      font-size: var(--font-size-xxs);
      line-height: var(--font-line-height-xs);
    }
    & .regular {
      font-weight: var(--font-weight-regular);
    }
    & .solid {
      font-weight: var(--font-weight-bold);
    }
  }
`;
var w = Object.defineProperty,
  x = Object.getOwnPropertyDescriptor,
  r = (c, s, a, i) => {
    for (
      var e = i > 1 ? void 0 : i ? x(s, a) : s, l = c.length - 1, h;
      l >= 0;
      l--
    )
      (h = c[l]) && (e = (i ? h(s, a, e) : h(e)) || e);
    return i && e && w(s, a, e), e;
  };
let t = class extends d {
  constructor() {
    super(...arguments),
      (this.iconKey = ""),
      (this.size = "small"),
      (this.variant = "normal"),
      (this.weight = "regular");
  }
  createRenderRoot() {
    return this;
  }
  render() {
    return v`
      <div class=${this.getOuterClasses()}>
        <span class=${this.getClasses()}></span>
      </div>
    `;
  }
  getClasses() {
    return m({
      [`fa-${this.iconKey}`]: !0,
      "fa-regular": this.weight === "regular",
      "fa-solid": this.weight === "solid",
      inner: !0,
      [this.size]: !0,
      [this.variant]: !0,
      [this.weight]: !0,
    });
  }
  getOuterClasses() {
    return m({ outer: !0, [this.size]: !0 });
  }
};
t.styles = z;
r([o()], t.prototype, "iconKey", 2);
r([o()], t.prototype, "size", 2);
r([o()], t.prototype, "variant", 2);
r([o()], t.prototype, "weight", 2);
t = r([y("pwc-icon")], t);
const b = {
    component: "pwc-icon",
    parameters: {
      docs: {
        description: {
          component: "An icon component for displaying svg icons.",
        },
      },
    },
    argTypes: {
      iconKey: {
        control: "text",
        description: "Icon key from FontAwesome.",
        type: { name: "string" },
      },
      size: {
        control: "select",
        options: ["extra-small", "medium", "large", "small"],
        description: "Size of icon.",
        table: { type: { name: "string" }, defaultValue: { summary: "small" } },
      },
      weight: {
        control: "select",
        options: ["regular", "solid"],
        description: "Icon font weight",
        table: {
          type: { name: "string" },
          defaultValue: { summary: "regular" },
        },
      },
    },
  },
  n = { args: { iconKey: "plus" } };
var g, u, p;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((g = n.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    iconKey: "plus"
  }
}`,
      ...((p = (u = n.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : p.source),
    },
  },
};
const C = ["Default"];
export { n as Default, C as __namedExportsOrder, b as default };
