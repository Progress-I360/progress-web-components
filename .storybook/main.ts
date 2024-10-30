import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  features: {
    backgroundsStoryGlobals: true,
  },
  docs: {
    defaultName: "Docs",
  },
};
export default config;
