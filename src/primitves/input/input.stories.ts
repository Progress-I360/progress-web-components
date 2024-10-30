import { Meta, StoryObj } from "@storybook/web-components";
import "./input";

export default {
  component: "pwc-input",
  parameters: {
    docs: {
      description: {
        component: `An input component for user input. Best used in forms.`,
      },
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "If set to true, disables input.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
    },
    label: {
      control: "text",
      description: "Label to display above input.",
      type: { name: "string" },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for input.",
      type: { name: "string" },
    },
    size: {
      control: "select",
      options: ["normal", "small"],
      description: "Input size. Default is normal",
      table: {
        type: { name: "string" },
        defaultValue: { summary: "normal" },
      },
    },
    type: {
      control: "select",
      options: ["email", "password", "tel", "text", "url"],
      description: "Input type. Default is text",
      table: {
        type: { name: "string" },
        defaultValue: { summary: "text" },
      },
    },
    value: {
      control: "text",
      description: "Initial value of input.",
      type: { name: "string" },
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    label: "Label",
  },
};
