import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { PokemonSearchCardNotFound } from "./PokemonSearchCardNotFound";

export default {
  title: "page-search-pokemon/PokemonSearchCardNotFound",
  component: PokemonSearchCardNotFound,
} as ComponentMeta<typeof PokemonSearchCardNotFound>;

const Template: ComponentStory<typeof PokemonSearchCardNotFound> = (args) => (
  <PokemonSearchCardNotFound {...args} />
);

export const Default = Template.bind({});
Default.args = {};
