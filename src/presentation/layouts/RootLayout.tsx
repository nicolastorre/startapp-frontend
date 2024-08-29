import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const RootLayout: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; {currentYear} startapp</p>
      </footer>
    </div>
  );
};

export default RootLayout;
