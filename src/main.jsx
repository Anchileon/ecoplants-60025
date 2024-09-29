import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom"; // Importa HashRouter
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAq68zglCISdR1rDjeTDrWmxc5xOmxaZLs",
  authDomain: "ecoplants-60025.firebaseapp.com",
  projectId: "ecoplants-60025",
  storageBucket: "ecoplants-60025.appspot.com",
  messagingSenderId: "297242925349",
  appId: "1:297242925349:web:2b096f2538b681e7ee22cc"
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
