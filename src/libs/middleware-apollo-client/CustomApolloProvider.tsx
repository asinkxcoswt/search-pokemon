import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app/",
  cache: new InMemoryCache(),
});

export interface CustomApolloProviderProps {
  children: React.ReactNode;
}

export function CustomApolloProvider({ children }: CustomApolloProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
