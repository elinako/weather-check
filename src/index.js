import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const ms = 1620032400;
const mms = parseInt(`${ms}000`);
const date = new Date(mms).toString();

console.log("date", date);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
