import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://kapima-backend.herokuapp.com/",
    cache: new InMemoryCache(),
});

export default client;