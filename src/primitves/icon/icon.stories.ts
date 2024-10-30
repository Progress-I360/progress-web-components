import { Meta, StoryObj } from "@storybook/web-components";
import "./icon";

export default {
  component: "pwc-icon",
  parameters: {
    docs: {
      description: {
        component: `A component for displaying FontAwesome font icons.`,
      },
    },
  },
  argTypes: {
    duotone: {
      control: "boolean",
      description: "If set to true, icon will be two-toned.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
    },
    iconKey: {
      control: "text",
      description: "Icon key from FontAwesome.",
      type: { name: "string", required: true },
    },
    size: {
      control: "select",
      options: ["extra-small", "large", "medium", "small"],
      description: "Icon size. Default is small",
      table: {
        type: { name: "string" },
        defaultValue: { summary: "medium" },
      },
    },
    spin: {
      control: "boolean",
      description: "If set to true, icon will rotate.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
    },
    variant: {
      control: "select",
      options: [
        "danger",
        "inactive",
        "info",
        "inverse",
        "maintenance",
        "normal",
        "success",
        "tip",
        "unknown",
        "warning",
      ],
      description: "Icon color variant. Default is normal.",
      table: {
        type: { name: "string" },
        defaultValue: { summary: "normal" },
      },
    },
    weight: {
      control: "select",
      options: ["regular", "solid"],
      description: "Icon font weight. Default is regular",
      table: {
        type: { name: "string" },
        defaultValue: { summary: "regular" },
      },
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    iconKey: "plus",
  },
};
