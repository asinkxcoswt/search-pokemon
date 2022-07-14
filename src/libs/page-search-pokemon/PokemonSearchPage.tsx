import { useSearchPokemonByName } from "@data-pokemon";
import { LoadingOverlay } from "@ui-loading";
import { useSearchParams } from "react-router-dom";
import { PokemonSearchCardInfo } from "./components/PokemonSearchCardInfo/PokemonSearchCardInfo";
import { PokemonSearchCardNotFound } from "./components/PokemonSearchCardNotFound/PokemonSearchCardNotFound";
import { PokemonSearchCardPlaceholder } from "./components/PokemonSearchCardPlaceholder/PokemonSearchCardPlaceholder";
import { PokemonSearchInput } from "./components/PokemonSearchInput/PokemonSearchInput";

export interface PokemonSearchPageProps {}

export function PokemonSearchPage(props: PokemonSearchPageProps) {
  const [params, setParams] = useSearchParams();
  const name = params.get("name") ?? "";
  const { result, loading } = useSearchPokemonByName(name);

  return (
    <div className="container mx-auto px-4 pt-4 flex flex-col items-center  md:max-w-xl ">
      <PokemonSearchInput
        value={name}
        onSubmit={(value) => {
          setParams({ name: value });
        }}
      />
      <div className="relative w-full mt-4">
        {loading && <LoadingOverlay />}
        {result.status === "EMPTY" && <PokemonSearchCardPlaceholder />}
        {result.status === "NOT_FOUND" && <PokemonSearchCardNotFound />}
        {result.status === "FOUND" && (
          <PokemonSearchCardInfo
            pokemon={result.pokemon}
            onSelectEvolution={(selectedPokemonName) => {
              setParams({ name: selectedPokemonName });
            }}
          />
        )}
      </div>
    </div>
  );
}
