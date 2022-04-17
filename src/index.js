import React from "react";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom"
import {createRoot} from 'react-dom/client';
import { AuthProvider } from "./context/auth-context";
import { ProductProvider } from "./context/products-context";
import { CartProvider } from "./context/cartmanagement-context";

// Call make Server
makeServer();

const container =document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
         <App />
         </CartProvider>
    </ProductProvider>
    </AuthProvider>
    </Router>
  </React.StrictMode>
);
