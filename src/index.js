import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import configstore from "./redux/config/configstore";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  // backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  // backgroundColor: "#f0f0f0",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={lightTheme}>
    <Provider store={configstore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { ThemeProvider } from "styled-components";
// import App from "./App";

// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111",
// };

// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke",
// };

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={darkTheme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
