import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useAuthMethod } from "../../hooks/useAuthMethod";

const Navbar: React.FC = () => {
  const { connection } = useAuthContext();

  const { logout } = useAuthMethod();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          startapp
        </Link>
        <div>
          <Link
            to="/"
            className="text-white font-semibold hover:bg-blue-700 px-3 py-2 rounded-md"
          >
            Home
          </Link>
          {connection?.isAuthenticated ? (
            <Link
              to="/dashboard"
              className="text-white font-semibold hover:bg-blue-700 px-3 py-2 rounded-md ml-4"
            >
              Dashboard
            </Link>
          ) : null}
          {!connection?.isAuthenticated ? (
            <Link
              to="/login"
              className="text-white font-semibold hover:bg-blue-700 px-3 py-2 rounded-md ml-4"
            >
              Login
            </Link>
          ) : null}
          {connection?.isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-white font-semibold hover:bg-blue-700 px-3 py-2 rounded-md ml-4"
            >
              Log out
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
