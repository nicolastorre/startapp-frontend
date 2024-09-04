import React from "react";
import "./App.css";
import AppRoutes from "./presentation/routes/AppRoutes";
import { AuthProvider } from "./presentation/providers/AuthProvider";
import { UserProvider } from "./presentation/providers/UserProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
