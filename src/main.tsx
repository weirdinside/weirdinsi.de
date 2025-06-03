import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ImagePreviewProvider from "./Contexts/ImagePreviewContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ImagePreviewProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ImagePreviewProvider>
  </StrictMode>
);
