import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { AuthProvider } from "./context/AuthContext.jsx";
import { UserAccountProvider } from "./context/UserAccountContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { AlertProvider } from "./context/AlertContext.jsx";
import { GlobalMessageProvider } from "./context/GlobalMessageConntext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          {/* <UserAccountProvider> */}
            <AlertProvider>
              <GlobalMessageProvider>
            <App />
            </GlobalMessageProvider>
            </AlertProvider>
          {/* </UserAccountProvider> */}
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
