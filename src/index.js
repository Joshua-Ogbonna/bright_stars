import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import { store } from "./app/store";
import axios from "axios";
import { backendURL } from "./utils/links";

const user =
  sessionStorage.getItem("user") && JSON.parse(sessionStorage.getItem("user"));

axios.defaults.baseURL = backendURL;
axios.defaults.headers.common["user-id"] = user?._id;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={1500}
        placement="top-right"
      >
        <App />
      </ToastProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
