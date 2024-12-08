import React from "react";
import { Sidebar } from "flowbite-react";
import { useSelector } from "react-redux"; // If you're using Redux for state management

const AppSidebar = () => {
  const { currentUser } = useSelector((state) => state?.user); // Access current user from Redux or context

  // Check if the current user is an admin
  const isAdmin = currentUser?.role === "admin"; // You can adjust this based on your data structure
   console.log("currentUser", currentUser)
  return (
    <div className="w-64 h-screen bg-gradient-to-b from-red-500 to-pink-500 text-white shadow-lg">
      <Sidebar aria-label="Sidebar Navigation">
        {/* Logo */}
        <div className="px-6 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <span role="img" aria-label="paw print" className="text-2xl text-red-500">
                🐾
              </span>
            </div>
            <h1 className="text-2xl font-bold">Stray Help</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* Common Links for All Users */}
            <Sidebar.Item
              href="/dashboard"
              icon={() => <i className="fas fa-home text-lg"></i>}
              className="hover:bg-red-400"
            >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/profile"
              icon={() => <i className="fas fa-user text-lg"></i>}
              className="hover:bg-red-400"
            >
              Profile
            </Sidebar.Item>

            {/* Admin Only Links */}
            {isAdmin && (
              <>
                <Sidebar.Item
                  href="/analytics"
                  icon={() => <i className="fas fa-chart-bar text-lg"></i>}
                  className="hover:bg-red-400"
                >
                  Analytics
                </Sidebar.Item>
                <Sidebar.Item
                  href="/settings"
                  icon={() => <i className="fas fa-cog text-lg"></i>}
                  className="hover:bg-red-400"
                >
                  Settings
                </Sidebar.Item>
              </>
            )}

            {/* User Only Links */}
            {!isAdmin && (
              <>
                <Sidebar.Item
                  href="/my-pets"
                  icon={() => <i className="fas fa-paw text-lg"></i>}
                  className="hover:bg-red-400"
                >
                  My Pets
                </Sidebar.Item>
                <Sidebar.Item
                  href="/adopted-pets"
                  icon={() => <i className="fas fa-heart text-lg"></i>}
                  className="hover:bg-red-400"
                >
                  Adopted Pets
                </Sidebar.Item>
              </>
            )}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
