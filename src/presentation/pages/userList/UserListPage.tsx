import React from "react";
import { useGetUserList } from "../../hooks/user/useGetUserList";

const UserList: React.FC = () => {
  const { users, setUsers } = useGetUserList();
  console.log(users);

  const handleEdit = (userUuid: string) => {
    console.log(`Edit user with uuid: ${userUuid}`);
  };

  const handleDelete = (userUuid: string) => {
    console.log(`Delete user with uuid: ${userUuid}`);
  };

  return (
    <div className="flex-1 p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-6xl p-8">
        <h1 className="text-3xl font-bold mb-6">User List</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.uuid}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(user.uuid)}
                    className="text-blue-500 hover:text-blue-700 px-3 py-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.uuid)}
                    className="text-red-500 hover:text-red-700 px-3 py-1 ml-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
