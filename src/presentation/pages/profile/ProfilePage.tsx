import React from "react";

const ProfilePage: React.FC = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold mb-6">User Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Information */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-bold">Name:</span> {user.name}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Email:</span> {user.email}
            </p>
          </div>

          {/* Account Settings */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <ul className="space-y-3">
              <li>
                <button className="w-full text-left text-blue-500 hover:underline">
                  Change Password
                </button>
              </li>
              <li>
                <button className="w-full text-left text-blue-500 hover:underline">
                  Update Email
                </button>
              </li>
              <li>
                <button className="w-full text-left text-blue-500 hover:underline">
                  Delete Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
