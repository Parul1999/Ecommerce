import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom"
import {createRoot} from 'react-dom/client';
import { AuthProvider } from "./context/auth-context";
import { ProductProvider } from "./context/products-context";

// Call make Server
makeServer();

const container =document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <ProductProvider>
    <App />
    </ProductProvider>
    </AuthProvider>
    </Router>
  </React.StrictMode>
);
