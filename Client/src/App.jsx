import Header from "./components/Header";
import Clients from "./components/Clients";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import AddClientModel from "./components/AddClientModel";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: cache,
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientModel />

          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
