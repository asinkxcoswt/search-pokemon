import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PokemonSearchInput } from "./PokemonSearchInput";

export default {
  title: "page-search-pokemon/PokemonSearchInput",
  component: PokemonSearchInput,
} as ComponentMeta<typeof PokemonSearchInput>;

const Template: ComponentStory<typeof PokemonSearchInput> = (args) => (
  <PokemonSearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
