import React from 'react'
import { NavLink } from 'react-router-dom'

function SignUp() {
  return (
    <div className=" flex items-center justify-center h-screen">
        <div className="w-1/2 px-32">
          <h3 className="text-4xl mb-3">
            Welcome to <span className="text-green-400 font-semibold">Quizzy</span>
          </h3>
          <h4 className="text-2xl mb-5">Create your account</h4>
          <form autoComplete="off"  method="post" className='flex flex-col gap-3'>
            <input
              className="input input-bordered input-md w-full"
              type="text"
              placeholder="Full Name"
              name="fullname"
            />
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
              value="Create My Account"
            />
          </form>
          <div className='flex flex-row mt-5 gap-2'>
          <p>Already have an account?</p>
          <NavLink to="/login" className='text-green-400'>Login</NavLink>
          </div>
        </div>
      </div>
  )
}

export default SignUp