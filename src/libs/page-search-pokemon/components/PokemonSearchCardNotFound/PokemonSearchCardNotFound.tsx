import { PlainCard } from "@ui-cards";

export interface PokemonSearchCardNotFoundProps {}

export function PokemonSearchCardNotFound(
  props: PokemonSearchCardNotFoundProps
) {
  return (
    <PlainCard>
      <div className="flex flex-col items-center">
        <img
          className="mb-3 w-36 rounded-md"
          src="https://web.rmutp.ac.th/mct/panya-l/panya-MT/img/GoDuck.png"
          alt="Which Pokemon"
        />
        <h5 className="mb-1 text-lg font-normal text-gray-900 dark:text-white text-center">
          Pokemon not found
        </h5>
      </div>
    </PlainCard>
  );
}
