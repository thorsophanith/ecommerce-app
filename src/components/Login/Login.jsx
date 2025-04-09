import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './Login.css'

function Login({setShowLogin}) {
    const [currState, setCurrState] = useState("Login")
  return (
    <div className='absolute top-0 z-40 px-4 w-full h-full bg-[#00000063]'>
        <div className='topsit max-w-[400px] max-md:w-[90%] z-40 h-auto m-auto px-4 p-5 bg-white shadow-2xl shadow-sky-400 rounded-2xl'>
        <form action="" className=''>
            <div className='flex justify-between px-2'>
            <h3 className='text-lg font-bold'>{currState}</h3>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className='cursor-pointer rounded-full hover:bg-sky-500 bg-sky-300 hover:outline-4 outline-sky-500 duration-300 p-1 w-6 h-6'/>
            </div>
    <div className="mb-6 md:py-8">
      {currState==="Login"?<></>
      :<><label for="name" className="block text-gray-800 font-bold">Your Name:</label><input type='text' placeholder='your name' required className='mb-6 w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'/></>}
      <label for="name" className="block text-gray-800 font-bold">Email:</label>
      <input type='email' placeholder='your email' required className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'/>
      <label for="name" className="block text-gray-800 font-bold mt-6">Password:</label>
      <input type='password' placeholder='password' required className='w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600'/>
    </div>
    <button className='cursor-pointer py-1 px-4 rounded-2xl bg-blue-500'>{currState==="Sign Up"?"Create account":"Login"}</button>
    <div className='p-2'>
    <div className='py-3 flex gap-3'>
        <input type="checkbox" required />
        <p className='text-gray-500'>By continuing, i agree to the teams of use</p>
    </div>
    
    {currState==="Login"
    ?<p className='text-gray-500'>create a new account? <span onClick={()=>setCurrState("Sign Up")} className='border-b text-blue-700 cursor-pointer'>Click here</span> </p>
    :<p className='text-gray-500'>Already have an account? <span onClick={()=>setCurrState("Login")} className='border-b text-blue-700 cursor-pointer'>Click here</span> </p>
    }
    </div>
  </form>
  
        </div>
    </div>
  )
}

export default Login