import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ImagePreviewProvider from "./Contexts/ImagePreviewContext.tsx";
import MusicPlayerProvider from "./Contexts/MusicPlayerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MusicPlayerProvider>
      <ImagePreviewProvider>
        <BrowserRouter basename="">
          <App />
        </BrowserRouter>
      </ImagePreviewProvider>
    </MusicPlayerProvider>
  </StrictMode>
);
