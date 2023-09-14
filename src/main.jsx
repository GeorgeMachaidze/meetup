import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";
import App from "./App.jsx";
import "./index.css";
import { FavoritesContextProvider } from "./store/favorites-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </FavoritesContextProvider>
);
