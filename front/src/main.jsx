import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import RegisterProvider from "./contexts/RegisterContext";
import ClienteProvider from "./contexts/ClienteContext";
import ClientesProvider from "./contexts/ClienteContatos";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <ClienteProvider>

    <RegisterProvider>
    <ClientesProvider>
      <App />
    </ClientesProvider>

    </RegisterProvider>
    </ClienteProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
