import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AUTHSTORE } from "./authStorage";
import axios from "axios";
import { buildAxiosFetch } from "@lifeomic/axios-fetch";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = AUTHSTORE.get();
  // return the headers to the context so httpLink can read them
  // console.log('headers', headers);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_GRAPHQL_URL,
  onUploadProgress: (progressEvent) => {},
});

const fileUploadLink = createUploadLink({
  uri: import.meta.env.VITE_GRAPHQL_URL,
  fetch: (input, init) => {
    return buildAxiosFetch(axiosInstance)(input as RequestInfo, init);
  },
}) as ApolloLink;

export const apolloLinks = ApolloLink.from([authLink, fileUploadLink]);

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: apolloLinks,
  // set headers here
});
