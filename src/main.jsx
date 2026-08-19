import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JobContext from "./storage/JobContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobContext>
      <App />
    </JobContext>
  </StrictMode>,
);
