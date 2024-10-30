import { type Preview } from "@storybook/web-components";
import { html } from "lit";
import "../src/primitves/root/root";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      options: [
        { name: "dark", value: "#181b1f" },
        { name: "light", value: "#e2e6e9" },
      ],
    },
  },
  tags: ["autodocs"],
  initialGlobals: {
    backgrounds: {
      value: "0",
    },
  },
  decorators: [
    (story, ctx) =>
      html`<pwc-root
        defaultTheme="${ctx.globals.backgrounds.value === "0"
          ? "dark"
          : "light"}"
        >${story()}</pwc-root
      >`,
  ],
};

export default preview;
