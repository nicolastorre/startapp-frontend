import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/auth/useAuthContext";
import { useAuthMethod } from "../../hooks/auth/useAuthMethod";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { connection } = useAuthContext();

  const { logout } = useAuthMethod();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav className="bg-blue-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-white text-2xl font-bold">
            <Link to="/">STARTAPP</Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col lg:flex-row lg:ml-auto text-white">
              <Link
                to="/"
                className="lg:mx-4 my-2 lg:my-0 text-sm font-semibold hover:bg-blue-700 px-3 py-2 rounded-md"
              >
                Home
              </Link>
              {connection?.isAuthenticated ? (
                <>
                  {" "}
                  <Link
                    to="/dashboard"
                    className="lg:mx-4 my-2 lg:my-0 text-sm font-semibold hover:bg-blue-700 px-3 py-2 rounded-md"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="lg:mx-4 my-2 lg:my-0 text-sm font-semibold hover:bg-blue-700 px-3 py-2 rounded-md"
                  >
                    Profile
                  </Link>
                </>
              ) : null}
              {!connection?.isAuthenticated ? (
                <Link
                  to="/login"
                  className="lg:mx-4 my-2 lg:my-0 text-sm font-semibold hover:bg-blue-700 px-3 py-2 rounded-md"
                >
                  Login
                </Link>
              ) : null}
              {connection?.isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="lg:mx-4 my-2 lg:my-0 text-sm font-semibold hover:bg-blue-700 px-3 py-2 rounded-md"
                >
                  Logout
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
