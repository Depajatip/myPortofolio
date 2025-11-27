import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import emailjs from "@emailjs/browser";

// Initialize EmailJS with the public key from env (safe for client)
emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
