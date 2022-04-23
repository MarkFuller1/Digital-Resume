import { ThemeProvider } from "@material-ui/core";
import React from "react";
import App from "./components/App";
import theme from "./theme";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
