import { Meta, StoryObj } from "@storybook/web-components";
import "./body";

export default {
  component: "pwc-body",
  parameters: {
    docs: {
      description: {
        component: `A text component for body text.`,
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      description: "Color variant of the text.",
      options: [
        "base",
        "subtle",
        "subtler",
        "subtlest",
        "disabled",
        "clear",
        "inverse",
        "red-base",
        "red-subtle",
        "orange-base",
        "orange-subtle",
        "yellow-base",
        "yellow-subtle",
        "green-base",
        "green-subtle",
        "mint-base",
        "mint-subtle",
        "teal-base",
        "teal-subtle",
        "blue-base",
        "blue-subtle",
        "purple-base",
        "purple-subtle",
        "magenta-base",
        "magenta-subtle",
        "gray-base",
        "gray-subtle",
      ],
      table: {
        type: { name: "string" },
        defaultValue: { summary: "base" },
      },
    },
    content: {
      control: "text",
      description:
        "Text content to display. For full control of the contents, use the default slot.",
      type: { name: "string" },
    },
    variant: {
      control: "select",
      description: "Size and weight variant of the text.",
      options: [
        "sm-regular",
        "sm-semi-bold",
        "sm-bold",
        "xs-regular",
        "xs-semi-bold",
        "xs-bold",
        "xxs-semi-bold",
      ],
      table: {
        type: { name: "string" },
        defaultValue: { summary: "sm-regular" },
      },
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    content: "This is a body text.",
  },
};
