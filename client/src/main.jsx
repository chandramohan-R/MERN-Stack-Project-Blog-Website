import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bs-brain/components/footers/footer-2/assets/css/footer-2.css';


// Initialize Firebase

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
