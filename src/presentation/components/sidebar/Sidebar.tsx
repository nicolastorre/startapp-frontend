import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-blue-500 text-white p-6">
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded hover:bg-blue-700"
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/admin/users"
              className="block px-3 py-2 rounded hover:bg-blue-700"
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
