import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "./ctx.jsx";
import "./index.css";
// Always open on the Home page after a reload, at the top
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
if (location.pathname !== "/" || location.search || location.hash)
  history.replaceState(null, "", "/");
scrollTo(0, 0);
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>,
);
