import React from 'react'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ExpertRegister() {
  return (
    <div className='pt-6'>
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left">Expert Sign Up</div>
      <p className='pt-4'>We aim to create a networking/collaboration ground for African Women Experts like you to contribute your voices to our stories</p>

      <form onSubmit="" className='pt-14 lg:pt-20 px-2'>
        {/* Render form fields using map or a component */}
        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="first_name">
              First Name
              <span className="text-red-500 text-xs">First Name is required</span>
          </label>

          <input
                value=""
                id="first_name"
                name="first_name"
                type='text'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter First Name"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="last_name">
              Last Name
              <span className="text-red-500 text-xs">Last Name is required</span>
          </label>

          <input
                value=""
                id="last_name"
                name="last_name"
                type='text'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Last Name"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="email_address">
              Email Address
              <span className="text-red-500 text-xs">Email Address is required</span>
          </label>

          <input
                value=""
                id="email_address"
                name="email_address"
                type='email'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Email Address"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="phone_number">
              Phone Number 
              <span className="text-red-500 text-xs">Phone Number is required</span>
          </label>

          <input
                value=""
                id="phone_number"
                name="phone_number"
                type='number'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Phone Number"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="country_code">
              Country of Origin
              <span className="text-red-500 text-xs">Country of Origin is required</span>
          </label>
          <select name="country_code" id="" className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="country_residence">
              Country of Residence
              <span className="text-red-500 text-xs">Country of Residence is required</span>
          </label>
          <select name="country_residence" id="" className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="city_town">
              City / Town
              <span className="text-red-500 text-xs">City/Town is required</span>
          </label>
          <select name="city_town" id="" className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="password">
              Password 
              <span className="text-red-500 text-xs">Password is required</span>
          </label>

          <input
                value=""
                id="password"
                name="password"
                type='password'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Password"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="c_password">
              Confirm Password 
              <span className="text-red-500 text-xs">Confirm Password is required</span>
          </label>

          <input
                value=""
                id="c_password"
                name="c_password"
                type='password'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Confirm Password"
              />

        </div>

      
        <div className="mt-10">
          <button
            type="submit"
            className='w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
          >
            Sign Up
          </button>
        </div>

        <div className="flex justify-center pt-6 text-md">
          <p> Already have an Expert account? <NavLink to='/login' className='text-awimGreen'>Login</NavLink> </p>
        </div>
      </form>
    </div>
  )
}

export default ExpertRegister