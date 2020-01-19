import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeContextProvider, ThemeContextConsumer } from "./themeContext";

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <ThemeContextProvider>
//     <App />
//   </ThemeContextProvider>,
//   document.getElementById("root")
// );
