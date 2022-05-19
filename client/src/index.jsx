import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import axios from "axios";

var mountNode = document.getElementById("app");
const root = createRoot(mountNode);
root.render(<App tab="home" />);