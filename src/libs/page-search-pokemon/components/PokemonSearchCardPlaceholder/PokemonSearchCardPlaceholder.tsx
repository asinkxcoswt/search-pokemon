import { PlainCard } from "@ui-cards";
import { Card } from "flowbite-react";

export interface PokemonSearchCardPlaceholderProps {}

export function PokemonSearchCardPlaceholder(
  props: PokemonSearchCardPlaceholderProps
) {
  return (
    <PlainCard>
      <div className="flex flex-col items-center">
        <img
          className="mb-3 w-36 rounded-md"
          src="data:image/png;base64,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"
          alt="Which Pokemon"
        />
        <h5 className="mb-1 text-lg font-normal text-gray-900 dark:text-white text-center">
          Please enter a Pokemon name
        </h5>
      </div>
    </PlainCard>
  );
}
