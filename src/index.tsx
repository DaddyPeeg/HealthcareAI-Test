import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/index.css";
import { RecoilRoot } from "recoil";
import { RouterProviderComponent } from "./providers/router-provider";
import ToastContainer from "@components/common/ToastContainer";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <ApolloProvider client={apolloClient}>
      <ToastContainer />
      <RouterProviderComponent />
    </ApolloProvider>
  </RecoilRoot>
);
