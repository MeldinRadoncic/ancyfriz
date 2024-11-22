import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Layout from "./Components/Layout/Layout.jsx";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  BrowserRouter as Router,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);
root.render(
  <React.StrictMode>
    {/* Here we wrap the whole app in the BrowserRouter component. */}
    <BrowserRouter>
      {/* Here we are wraping whole app in the Layout component  */}
        <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
