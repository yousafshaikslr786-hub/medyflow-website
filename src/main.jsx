import "@fontsource/inter";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
