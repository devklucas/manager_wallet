import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {ReleaseProvider} from "./provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReleaseProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ReleaseProvider>
);
