import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NormalLoader } from "./NormalLoader";

export default {
  title: "UI/NormalLoader",
  component: NormalLoader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NormalLoader>;

const Template: ComponentStory<typeof NormalLoader> = (args) => (
  <NormalLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
