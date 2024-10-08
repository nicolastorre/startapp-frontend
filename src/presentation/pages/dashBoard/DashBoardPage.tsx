import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex-1 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Card 1</h2>
          <p className="text-gray-700">Some information about this section.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Card 2</h2>
          <p className="text-gray-700">Some information about this section.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Card 3</h2>
          <p className="text-gray-700">Some information about this section.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
