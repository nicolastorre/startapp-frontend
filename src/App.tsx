import React from "react";
import "./App.css";
import AppRoutes from "./presentation/routes/AppRoutes";
import { AuthProvider } from "./presentation/providers/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
