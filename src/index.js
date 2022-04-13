import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom"
import {createRoot} from 'react-dom/client';

// Call make Server
makeServer();

const container =document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);
