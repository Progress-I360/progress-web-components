import { Meta, StoryObj } from "@storybook/web-components";
import "./button";
import { expect, userEvent } from "@storybook/test";
import { within } from "shadow-dom-testing-library";

export default {
  component: "pwc-button",
  parameters: {
    docs: {
      description: {
        component: `A button component for user actions and form submission.`,
      },
    },
  },
  argTypes: {
    busy: {
      control: "boolean",
      description:
        "If set to true, shows a spinner icon and makes the button unclickable.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "If set to true, disables button.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      control: "boolean",
      description:
        "If set to true, button will take up full width of container.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
    },
    icon: {
      control: "text",
      description:
        "Icon key (fontawesome) to display on button. For full control of the icon, use the icon slot.",
      type: { name: "string" },
    },
    label: {
      control: "text",
      description:
        "Text to display on button. For full control of the button contents, use the default slot.",
      type: { name: "string" },
    },
    size: {
      control: "select",
      options: ["extra-small", "medium", "small"],
      description: "Size of button.",
      table: {
        type: { name: "string" },
        defaultValue: { summary: "medium" },
      },
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
      table: {
        type: { name: "string" },
        defaultValue: { summary: "clear" },
      },
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    label: "Button",
  },
  play: async ({ canvasElement }) => {
    //this is just to play with the testing feature. not for prime time.
    const canvas = within(canvasElement),
      button = canvas.queryByShadowRole<HTMLButtonElement>("button");

    expect(button).toBeTruthy();

    if (button) {
      userEvent.click(button);
    }
  },
};
