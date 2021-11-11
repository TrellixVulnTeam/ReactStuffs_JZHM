import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/styles.scss";
//help normalize styles for each browser
import "normalize.css/normalize.css";

ReactDOM.render(<App />, document.getElementById("app"));
