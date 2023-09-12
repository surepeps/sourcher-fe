import React from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <div className='pt-6'>
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left">Sign Up</div>
      
      <form action="" className='pt-14 lg:pt-20 px-2'>
        
        <div className="mb-5">
          <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="username">
            First Name
          </label>
          <input type="text" className='w-full py-5 rounded-lg px-4 text-xs lg:text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline' placeholder='Hassan'/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="username">
            Last Name
          </label>
          <input type="text" className='w-full py-5 rounded-lg px-4 text-xs lg:text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline' placeholder='Tijani'/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input type="email" className='w-full py-5 rounded-lg px-4 text-xs lg:text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline' placeholder='yourId@email.com'/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="username">
            Phone Number
          </label>
          <input type="email" className='w-full py-5 rounded-lg px-4 text-xs lg:text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline' placeholder='yourId@email.com'/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="username">
            Select Category
          </label>
          <select name="" id="" className='w-full py-5 rounded-lg px-4 text-xs lg:text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline'>
            <option value="">Fintech</option>
            <option value="">Health</option>
            <option value=""></option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="username">
            Choose Industry
          </label>
          <select name="" id="" className='w-full py-5 rounded-lg px-4 text-xs lg:text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline'>
            <option value="">Fintech</option>
            <option value="">Health</option>
            <option value=""></option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="username">
            Choose Title
          </label>
          <select name="" id="" className='w-full py-5 rounded-lg px-4 text-xs lg:text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline'>
            <option value="">Fintech</option>
            <option value="">Health</option>
            <option value=""></option>
          </select>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="username">
            Password
          </label>
          <input type="password" className='w-full py-5 rounded-lg px-4 text-xs lg:text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline' placeholder='Password'/>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="username">
           Confirm Password
          </label>
          <input type="password" className='w-full py-5 rounded-lg px-4 text-xs lg:text-sm border text-gray-700 border-[#969595] focus:outline-none focus:shadow-outline' placeholder='Password'/>
        </div>

        <div className="mt-10">
          <button type="submit" className='w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'>Sign Up</button>
        </div>

        <div className="flex justify-center pt-6 text-md">
          <p> Already have an account? <NavLink to='/login' className='text-awimGreen' >Login</NavLink> </p>
        </div>


      </form>

    </div>
  )
}

export default Register