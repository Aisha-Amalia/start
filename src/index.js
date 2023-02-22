

import React from "react";
import { createRoot } from "react-dom/client";
import "./App.scss";
import App from "./App.js";




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
























// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./App.scss";
// import App from"./App";


// ReactDOM.render(

// <App />,

// document.getElementById("root")

// );



