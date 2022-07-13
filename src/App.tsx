import { CustomApolloProvider } from "@middleware-apollo-client";
import { PokemonSearchPage } from "@page-search-pokemon";
import React from "react";
import "./App.css";

function App() {
  return (
    <CustomApolloProvider>
      <PokemonSearchPage />
    </CustomApolloProvider>
  );
}

export default App;
