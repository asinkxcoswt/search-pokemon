import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PlainCard } from "./PlainCard";

export default {
  title: "ui-cards/PlainCard",
  component: PlainCard,
} as ComponentMeta<typeof PlainCard>;

const Template: ComponentStory<typeof PlainCard> = (args) => (
  <PlainCard {...args}>
    <div className="bg-red-50">Hello World!</div>
  </PlainCard>
);

export const Shadowless = Template.bind({});
Shadowless.args = {};

export const WithShadow = Template.bind({});
WithShadow.args = {
  shadow: true,
};
