import { useEffect, useState } from "react";
import api from "../api/api";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setErrors] = useState("");

  useEffect(() => {
    console.log(`API url : ${import.meta.env.VITE_REACT_APP_API_URL}`);
    const fetchedUsers = async () => {
      try {
        setLoading(true);
        const res = await api.get("/getAllUsers");
        setUsers(res.data.data);
      } catch (err) {
        console.log("Error occurs", err);
        setErrors(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchedUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-indigo-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error)
    return (
      <p className="text-center mt-16 text-red-500 font-semibold">{error}</p>
    );

  return (
    <div className="mt-16 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
       Dashboard - All Users
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <tr>
              <th className="p-4">Avatar</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Created At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="p-4 flex justify-center items-center">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-300"
                  />
                </td>
                <td className="p-4 font-semibold text-center ">{user.name}</td>
                <td className="p-4 text-gray-600 text-center ">{user.email}</td>
                <td className="p-4 text-center ">
                  <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 font-medium">
                    {user.role}
                  </span>
                </td>
                <td className="p-4 text-gray-500 text-center ">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4 hover:shadow-lg transition-all"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-300"
            />
            <div>
              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
              <p className="text-xs mt-1">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                  {user.role}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
