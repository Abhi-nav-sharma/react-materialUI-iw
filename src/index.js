import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import App from "./App";
import { red, blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: red
  }
});

const darkTheme = createTheme({
  palette: {
    primary: blue
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
