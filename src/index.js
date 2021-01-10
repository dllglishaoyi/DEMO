import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './assets/scss/base.scss'
import 'antd/dist/antd.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
