import React from 'react'
import { NavLink } from 'react-router-dom'


function Login() {
  return (
    <div className='pt-6'>
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left">Welcome Back!👋</div>
      
      <form action="" className='pt-14 lg:pt-20 px-2'>
        
        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input type="text" className='w-full py-5 rounded-lg px-4 text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline' placeholder='yourId@email.com'/>
        </div>


        <div className="mb-8">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Password
          </label>
          <input type="password" className='w-full py-5 rounded-lg px-4 text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline' placeholder='Password'/>
        </div>

        <div className="flex justify-end">
          <NavLink className='text-textPurple font-semibold'>Forgot Password?</NavLink>
        </div>

        <div className="remember flex gap-3 items-center pt-4">
          <input type="checkbox" className='h-5 w-5 checked:bg-awimGreen rounded-md appearance-none focus:outline-none focus:shadow-outline' name="" id="rememberMe" />
          <label className="text-md font-semibold" htmlFor="rememberMe">Remember me</label>
        </div>


        <div className="mt-10">
          <button type="submit" className='w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'>Log in</button>
        </div>

        <div className="flex justify-center pt-6 text-md">
          <p> Don’t have an account? <NavLink className='text-awimGreen' to='/register' >Sign Up</NavLink> </p>
        </div>


      </form>

    </div>
  )
}

export default Login