import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import "./styles/cursor-shadow.css";
import "./styles/moving-card.css";
import "./styles/text-hover.css";
import "./styles/gradient-card.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
