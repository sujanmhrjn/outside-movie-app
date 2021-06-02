import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import './assets/scss/tailwind.css';
import './assets/scss/style.scss';
ReactDOM.render(
  <App userName="Developer" lang="TypeScript" />,
  document.getElementById("root")
);