import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        await axios.get("https://quizzy-backend-gnv8.onrender.com/v1/auth/verify", {
          withCredentials: true,
        });
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    verifyAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://quizzy-backend-gnv8.onrender.com/v1/auth/logout",
        {},
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-green-600 transition-all duration-300 ease-in-out transform hover:scale-105">
          Quizzy
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/how-to-play"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            How to Play
          </Link>
          <Link
            to="/aboutus"
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            About Us
          </Link>
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600  transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600  transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
