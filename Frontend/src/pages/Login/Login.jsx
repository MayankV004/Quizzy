import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/v1/auth/login",
        credentials,
        {
          withCredentials: true
        }
      );
      if (res.data.message === "success") {
        toast.success("Logged in successfully!");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "Login failed");
    }
  };

  return (
    <div className="w-full flex items-center justify-center h-screen ">
      <div className="w-1/3">
        <h4 className="text-2xl capitalize mb-5">Login your account</h4>
        <form
          autoComplete="off"
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <input
            className="input input-bordered input-md w-full"
            type="email"
            placeholder="Email"
            name="email"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <input
            className="input input-bordered input-md w-full"
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <input
            className="btn btn-block bg-green-400 hover:bg-green-500 text-white"
            type="submit"
            value="Login"
          />
        </form>

        <div className="mt-5 gap-3">
          <NavLink to="/signUp" className="text-green-400 hover:underline">
            Dont't have an account?
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
