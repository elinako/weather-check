import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const ms = 1620032400000;

const date = new Date(ms);

console.log("date", date.toString());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
