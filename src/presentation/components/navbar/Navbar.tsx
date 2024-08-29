import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
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
          <Link
            to="/login"
            className="text-white font-semibold hover:bg-blue-700 px-3 py-2 rounded-md ml-4"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
