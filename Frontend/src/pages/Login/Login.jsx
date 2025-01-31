import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="w-full flex items-center justify-center h-screen ">
    <div className="w-1/3">
      <h4 className="text-2xl capitalize mb-5">Login your account</h4>
      <form autoComplete="off" className="flex flex-col gap-5" >
        <input
          className="input input-bordered input-md w-full"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className="input input-bordered input-md w-full"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="btn btn-block bg-green-400 hover:bg-green-500 text-white"
          type="submit"
          value="Login"
        />
      </form>

      <div className='mt-5 gap-3'>
      <NavLink to="/signUp" className='text-green-400 hover:underline'>Dont't have an account?</NavLink>
      </div>
    </div>
  </div>
  );
}

export default Login;
