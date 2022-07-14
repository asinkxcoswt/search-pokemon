import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoadingOverlay } from "./LoadingOverlay";

export default {
  title: "ui-loading/LoadingOverlay",
  component: LoadingOverlay,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => {
      return (
        <div className="h-96  ">
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof LoadingOverlay>;

const Template: ComponentStory<typeof LoadingOverlay> = (args) => (
  <LoadingOverlay {...args} />
);

export const Default = Template.bind({});
Default.args = {};
