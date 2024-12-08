import React from "react";
import { Navbar, Dropdown, Button } from "flowbite-react";
import AppSidebar from "../../components/Sidebar";

const DashBoard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 mt-1">
      {/* Sidebar */}
      <AppSidebar/>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <Navbar className="bg-white shadow px-6 py-4">
          <Navbar.Brand href="/dashboard">
            <span className="text-gray-700 text-xl font-bold">Dashboard</span>
          </Navbar.Brand>
          <div className="flex items-center space-x-4">
            <Button color="red" size="sm" className="shadow-lg">
              Add New
            </Button>
            <Dropdown label="Admin" inline>
              <Dropdown.Item href="/profile">Profile</Dropdown.Item>
              <Dropdown.Item href="/settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Widgets */}
          <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold">Total Adoptions</h2>
            <p className="text-3xl font-bold mt-2">345</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold">New Users</h2>
            <p className="text-3xl font-bold mt-2">87</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold">Animals Available</h2>
            <p className="text-3xl font-bold mt-2">123</p>
          </div>
        </div>

        {/* Table & Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {/* Table */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-gray-700 text-xl font-bold mb-4">Recent Adoptions</h2>
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="text-gray-600 text-sm font-medium border-b">
                  <th className="py-2 px-4 text-left">Animal</th>
                  <th className="py-2 px-4 text-left">Adopter</th>
                  <th className="py-2 px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">Bella</td>
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">Dec 5, 2024</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4">Max</td>
                  <td className="py-2 px-4">Jane Smith</td>
                  <td className="py-2 px-4">Dec 4, 2024</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Buddy</td>
                  <td className="py-2 px-4">Sarah Lee</td>
                  <td className="py-2 px-4">Dec 2, 2024</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Chart */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-gray-700 text-xl font-bold mb-4">Adoptions Over Time</h2>
            <div className="h-48 bg-gradient-to-b from-gray-200 to-gray-300 rounded-lg flex justify-center items-center">
              <p className="text-gray-600">Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
