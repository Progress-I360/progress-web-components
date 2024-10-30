import { i as Y, h as Z, k as y, D as k } from "./lit-element-CPYlYYac.js";
import { n as a, t as rr } from "./property-6LaJjAvW.js";
import { R as er } from "./class-map-CXre9d5K.js";
const ar = Y`
  button {
    align-items: center;
    border: 0;
    border-radius: var(--border-radius-2);
    cursor: pointer;
    display: inline-flex;
    gap: var(--size-0);
    justify-content: center;
  }
  button.full-width {
    width: 100%;
  }
  button span.label {
    font-family: var(--font-family-Source-Sans-Pro);
    font-size: var(--font-size-sm);
    font-style: normal;
    font-weight: var(--font-weight-semi-bold);
    line-height: var(--font-line-height-sm);
  }
  button span.icon {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button.icon {
    padding: var(--size-8);
  }
  button.medium.label {
    min-width: 4.5rem;
    padding: var(--size-8) var(--size-16);
  }
  button.medium.icon.label {
    gap: var(--size-8);
    padding: var(--size-8) var(--size-12) var(--size-8) var(--size-8);
  }
  button.small.icon {
    padding: var(--size-4);
  }
  button.small.label {
    min-width: 4rem;
    padding: var(--size-4) var(--size-12);
  }
  button.small.icon.label {
    gap: var(--size-4);
    padding: var(--size-4) var(--size-8) var(--size-4) var(--size-4);
  }
  button.extra-small.icon {
    padding: var(--size-0);
  }
  button.extra-small.label {
    font-size: var(--font-size-xs);
    min-width: 3.4375rem;
    padding: var(--size-0) var(--size-8);
  }
  button.extra-small.icon.label {
    gap: var(--size-4);
    padding: var(--size-0) var(--size-4) var(--size-0) var(--size-2);
  }
  button.disabled {
    background: var(--color-background-disabled);
    color: var(--color-text-disabled);
    cursor: not-allowed;
    pointer-events: none;
  }
  button.busy {
    cursor: not-allowed;
    pointer-events: none;
  }
  button.clear {
    background: var(--color-background-surface-subtle-default);
    color: var(--color-text-base);
  }
  button.clear:hover,
  button.clear[hover] {
    background: var(--color-background-surface-subtle-hovered);
  }
  button.clear:active,
  button.clear[active] {
    background: var(--color-background-surface-subtle-pressed);
  }
  button.clear.disabled {
    background: var(--color-background-surface-subtle-default);
  }
  button.ghost {
    background: var(--color-background-surface-alpha-default);
    color: var(--color-text-base);
  }
  button.ghost:hover,
  button.ghost[hover] {
    background: var(--color-background-surface-alpha-hovered);
  }
  button.ghost:active,
  button.ghost[active] {
    background: var(--color-background-surface-alpha-pressed);
  }
  button.danger {
    background: var(--color-background-accent-red-bold-default);
    color: var(--color-text-inverse);
  }
  button.danger:hover,
  button.danger[hover] {
    background: var(--color-background-accent-red-bold-hovered);
  }
  button.danger:active,
  button.danger[active] {
    background: var(--color-background-accent-red-bold-pressed);
  }
  button.info {
    background: var(--color-background-accent-blue-bold-default);
    color: var(--color-text-inverse);
  }
  button.info:hover,
  button.info[hover] {
    background: var(--color-background-accent-blue-bold-hovered);
  }
  button.info:active,
  button.info[active] {
    background: var(--color-background-accent-blue-bold-pressed);
  }
  button.primary {
    background: var(--color-background-brand-default);
    color: var(--color-text-inverse);
  }
  button.primary:hover,
  button.primary[hover] {
    background: var(--color-background-brand-hovered);
  }
  button.primary:active,
  button.primary[active] {
    background: var(--color-background-brand-pressed);
  }
  button.success {
    background: var(--color-background-accent-green-bold-default);
    color: var(--color-text-inverse);
  }
  button.success:hover,
  button.success[hover] {
    background: var(--color-background-accent-green-bold-hovered);
  }
  button.success:active,
  button.success[active] {
    background: var(--color-background-accent-green-bold-pressed);
  }
  button.tip {
    background: var(--color-background-accent-purple-bold-default);
    color: var(--color-text-inverse);
  }
  button.tip:hover,
  button.tip[hover] {
    background: var(--color-background-accent-purple-bold-hovered);
  }
  button.tip:active,
  button.tip[active] {
    background: var(--color-background-accent-purple-bold-pressed);
  }
  button.warning {
    background: var(--color-background-accent-orange-bold-default);
    color: var(--color-text-inverse);
  }
  button.warning:hover,
  button.warning[hover] {
    background: var(--color-background-accent-orange-bold-hovered);
  }
  button.warning:active,
  button.warning[active] {
    background: var(--color-background-accent-orange-bold-pressed);
  }
`;
var or = Object.defineProperty,
  tr = Object.getOwnPropertyDescriptor,
  e = (z, t, m, n) => {
    for (
      var o = n > 1 ? void 0 : n ? tr(t, m) : t, f = z.length - 1, h;
      f >= 0;
      f--
    )
      (h = z[f]) && (o = (n ? h(t, m, o) : h(o)) || o);
    return n && o && or(t, m, o), o;
  };
let r = class extends Z {
  constructor() {
    super(...arguments),
      (this.size = "small"),
      (this.type = "button"),
      (this.variant = "clear");
  }
  render() {
    return y` <button
      @click=${this.onClick}
      ${this.disabled ? "disabled" : k}
      class="${this.getClasses()}"
      type=${this.type}
    >
      ${
        this.icon || this.busy
          ? y`<pwc-icon
            iconKey=${this.busy ? "spinner-third" : this.icon}
          ></pwc-icon>`
          : k
      }
      ${this.label ? y`<span class="label">${this.label}</span>` : k}
    </button>`;
  }
  getClasses() {
    return er({
      busy: !!this.busy,
      disabled: !!this.disabled,
      "full-width": !!this.fullWidth,
      icon: !!this.icon || !!this.busy,
      label: !!this.label,
      [this.size]: !0,
      [this.variant]: !this.disabled,
    });
  }
};
r.styles = ar;
e([a()], r.prototype, "busy", 2);
e([a()], r.prototype, "disabled", 2);
e([a()], r.prototype, "fullWidth", 2);
e([a()], r.prototype, "icon", 2);
e([a()], r.prototype, "label", 2);
e([a()], r.prototype, "onClick", 2);
e([a()], r.prototype, "size", 2);
e([a()], r.prototype, "type", 2);
e([a()], r.prototype, "variant", 2);
r = e([rr("pwc-button")], r);
const lr = {
    component: "pwc-button",
    parameters: {
      docs: {
        description: {
          component: "A button component for user actions and form submission.",
        },
      },
    },
    argTypes: {
      busy: {
        control: "boolean",
        description:
          "If set to true, shows a spinner icon and makes the button unclickable.",
        table: {
          type: { summary: "boolean" },
          defaultValue: { summary: "false" },
        },
      },
      disabled: {
        control: "boolean",
        description: "If set to true, disables button.",
        table: {
          type: { summary: "boolean" },
          defaultValue: { summary: "false" },
        },
      },
      fullWidth: {
        control: "boolean",
        description:
          "If set to true, button will take up full width of container.",
        table: {
          type: { summary: "boolean" },
          defaultValue: { summary: "false" },
        },
      },
      icon: {
        control: "text",
        description: "Icon key (fontawesome) to display on button.",
        type: { name: "string" },
      },
      label: {
        control: "text",
        description: "Text to display on button.",
        type: { name: "string" },
      },
      onClick: {
        action: "clicked",
        description: "Function to call on click.",
        type: { name: "function" },
      },
      size: {
        control: "select",
        options: ["extra-small", "medium", "small"],
        description: "Size of button.",
        table: { type: { name: "string" }, defaultValue: { summary: "small" } },
      },
      type: {
        control: "select",
        options: ["button", "reset", "submit"],
        description: "Type of button.",
        table: {
          type: { name: "string" },
          defaultValue: { summary: "button" },
        },
      },
      variant: {
        control: "select",
        options: [
          "clear",
          "danger",
          "ghost",
          "info",
          "primary",
          "success",
          "tip",
          "warning",
        ],
        description: "Variant of button.",
        table: { type: { name: "string" }, defaultValue: { summary: "clear" } },
      },
    },
  },
  s = { args: { label: "Button" } },
  c = { args: { label: "Primary", variant: "primary" } },
  l = { args: { icon: "plus", label: "Add" } },
  i = { args: { label: "Clear", variant: "clear" } },
  u = { args: { label: "Ghost", variant: "ghost" } },
  d = { args: { label: "Danger", variant: "danger" } },
  b = { args: { label: "Warning", variant: "warning" } },
  p = { args: { label: "Success", variant: "success" } },
  g = { args: { label: "Info", variant: "info" } },
  v = { args: { label: "Tip", variant: "tip" } };
var w, x, S;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((w = s.parameters) == null ? void 0 : w.docs),
    source: {
      originalSource: `{
  args: {
    label: "Button"
  }
}`,
      ...((S = (x = s.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : S.source),
    },
  },
};
var C, I, D;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((C = c.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource: `{
  args: {
    label: "Primary",
    variant: "primary"
  }
}`,
      ...((D = (I = c.parameters) == null ? void 0 : I.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var P, _, $;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((P = l.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  args: {
    icon: "plus",
    label: "Add"
  }
}`,
      ...(($ = (_ = l.parameters) == null ? void 0 : _.docs) == null
        ? void 0
        : $.source),
    },
  },
};
var T, V, W;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((T = i.parameters) == null ? void 0 : T.docs),
    source: {
      originalSource: `{
  args: {
    label: "Clear",
    variant: "clear"
  }
}`,
      ...((W = (V = i.parameters) == null ? void 0 : V.docs) == null
        ? void 0
        : W.source),
    },
  },
};
var O, j, G;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((O = u.parameters) == null ? void 0 : O.docs),
    source: {
      originalSource: `{
  args: {
    label: "Ghost",
    variant: "ghost"
  }
}`,
      ...((G = (j = u.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : G.source),
    },
  },
};
var A, B, R;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((A = d.parameters) == null ? void 0 : A.docs),
    source: {
      originalSource: `{
  args: {
    label: "Danger",
    variant: "danger"
  }
}`,
      ...((R = (B = d.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : R.source),
    },
  },
};
var E, F, K;
b.parameters = {
  ...b.parameters,
  docs: {
    ...((E = b.parameters) == null ? void 0 : E.docs),
    source: {
      originalSource: `{
  args: {
    label: "Warning",
    variant: "warning"
  }
}`,
      ...((K = (F = b.parameters) == null ? void 0 : F.docs) == null
        ? void 0
        : K.source),
    },
  },
};
var q, H, J;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((q = p.parameters) == null ? void 0 : q.docs),
    source: {
      originalSource: `{
  args: {
    label: "Success",
    variant: "success"
  }
}`,
      ...((J = (H = p.parameters) == null ? void 0 : H.docs) == null
        ? void 0
        : J.source),
    },
  },
};
var L, M, N;
g.parameters = {
  ...g.parameters,
  docs: {
    ...((L = g.parameters) == null ? void 0 : L.docs),
    source: {
      originalSource: `{
  args: {
    label: "Info",
    variant: "info"
  }
}`,
      ...((N = (M = g.parameters) == null ? void 0 : M.docs) == null
        ? void 0
        : N.source),
    },
  },
};
var Q, U, X;
v.parameters = {
  ...v.parameters,
  docs: {
    ...((Q = v.parameters) == null ? void 0 : Q.docs),
    source: {
      originalSource: `{
  args: {
    label: "Tip",
    variant: "tip"
  }
}`,
      ...((X = (U = v.parameters) == null ? void 0 : U.docs) == null
        ? void 0
        : X.source),
    },
  },
};
const ir = [
  "Default",
  "Primary",
  "Icon",
  "Clear",
  "Ghost",
  "Danger",
  "Warning",
  "Success",
  "Info",
  "Tip",
];
export {
  i as Clear,
  d as Danger,
  s as Default,
  u as Ghost,
  l as Icon,
  g as Info,
  c as Primary,
  p as Success,
  v as Tip,
  b as Warning,
  ir as __namedExportsOrder,
  lr as default,
};
