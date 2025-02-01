import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto h-[70px] px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-green-400 transition-all duration-300 ease-in-out hover:scale-105"
        >
          Quizzy
        </Link>
        <ul className="flex space-x-4 mr-3">
          <li>
            <Link to="/" className="text-gray-600 hover:text-green-400 ">
              How it works?
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-gray-600 hover:text-green-400">
              About us
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-600 hover:text-green-400">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-600 hover:text-green-400">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
