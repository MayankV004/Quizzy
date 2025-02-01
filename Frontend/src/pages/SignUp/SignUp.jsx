import React, { useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'

function SignUp() {
  const [input , setInput] = useState({
    fullname: "",
    email:"",
    password:"",
    confirmPassword:""

  })
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/v1/auth/signup", input)
      if(res)
      {
        toast.success("Account created successfully!!")
        navigate("/login")
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className=" flex items-center justify-center h-screen">
        <div className="w-1/2 px-32">
          <h3 className="text-4xl mb-3">
            Welcome to <span className="text-green-400 font-semibold">Quizzy</span>
          </h3>
          <h4 className="text-2xl mb-5">Create your account</h4>
          <form autoComplete="off"  method="post" className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <input
              className="input input-bordered input-md w-full"
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={input.fullname}
              onChange={(e)=> setInput({...input , fullname:e.target.value})}
            />
            <input
              className="input input-bordered input-md w-full"
              type="email"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={(e)=> setInput({...input , email:e.target.value})}
            />
            <input
              className="input input-bordered input-md w-full"
              type="password"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={(e)=> setInput({...input , password:e.target.value})}
            />
            <input
              className="input input-bordered input-md w-full"
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={(e)=> setInput({...input , confirmPassword:e.target.value})}
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
