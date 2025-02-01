import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Header from "../../conponents/Header/Header";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/v1/auth/user", {
          withCredentials: true,
        });
        setUserData(response.data);
      } catch (error) {
        toast.error("Failed to fetch user data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* User Profile Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-2xl text-green-600">
                  {userData.fullname[0].toUpperCase()}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold">{userData.fullname}</h2>
                <p className="text-gray-500">{userData.email}</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500">Member since</p>
              <p className="font-medium">
                {new Date(userData.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Quiz Statistics Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Quiz Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Total Points</span>
                <span className="font-semibold text-green-600">
                  {userData.points}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <Link
                to="/quiz"
                className="block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Start New Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}