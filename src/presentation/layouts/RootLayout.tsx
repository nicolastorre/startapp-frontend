import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <header>
        <h1>startapp</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </nav>
      </header>

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
