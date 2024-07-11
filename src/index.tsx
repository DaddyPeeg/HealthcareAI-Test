import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/index.css";
import { RecoilRoot } from "recoil";
import { RouterProviderComponent } from "./providers/router-provider";
import ToastContainer from "@components/common/ToastContainer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <ToastContainer />
    <RouterProviderComponent />
  </RecoilRoot>
);
