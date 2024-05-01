import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import SliderContext from "./layouts/SliderContext.tsx";
import "./styles/cursor-shadow.css";
import "./styles/globals.css";
import "./styles/gradient-card.css";
import "./styles/moving-card.css";
import "./styles/text-hover.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SliderContext>
      <App />
    </SliderContext>
  </React.StrictMode>
);
