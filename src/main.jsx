import React from "react";
import ReactDOM from "react-dom/client";

import { AppContainer } from "./containers/AppContainer";
import { AppContextProvider } from "./context/AppContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <AppContainer />
    </AppContextProvider>
  </React.StrictMode>
);
