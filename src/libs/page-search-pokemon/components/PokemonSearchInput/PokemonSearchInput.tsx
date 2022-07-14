import { useState } from "react";
import { TbSearch } from "react-icons/tb";

export interface PokemonSearchInputProps {
  value: string;
  onSubmit: (value: string) => void;
}

export function PokemonSearchInput({
  value,
  onSubmit,
}: PokemonSearchInputProps) {
  const [internalValue, setInternalValue] =
    useState<string | undefined>(undefined);
  return (
    <form
      className=" w-full grid grid-cols-1 md:grid-cols-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit && internalValue) {
          onSubmit(internalValue);
          setInternalValue(undefined);
        }
      }}
    >
      <div className="relative col-span-1 md:col-span-5">
        <div className="absolute top-0 left-0 text-2xl h-full flex items-center ml-4">
          <TbSearch />
        </div>
        <input
          type="search"
          className="border-0 border-b-2 focus:ring-0 pl-14 w-full mr-4"
          value={internalValue ?? value}
          onChange={(e) => {
            setInternalValue(e.target.value);
          }}
        />
      </div>

      <div className="col-span-1 md:col-span-1 flex items-center justify-end">
        <button
          className="border-2 border-black rounded-md p-1 w-full md:w-20 mt-4 md:mt-0"
          type="submit"
          color="dark"
        >
          Search
        </button>
      </div>
    </form>
  );
}
