import React from 'react'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ExpertRegister() {
  return (
    <div className='pt-6'>
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left">Expert Sign Up</div>
      <p>We aim to create a networking/collaboration ground for African Women Experts like you to contribute your voices to our stories</p>

      <form onSubmit={formik.handleSubmit} className='pt-14 lg:pt-20 px-2'>
        {/* Render form fields using map or a component */}
        {[
          { name: 'first_name', label: 'First Name' },
          { name: 'last_name', label: 'Last Name' },
          { name: 'email', label: 'EEWXEmail' },
          { name: 'phone_number', label: 'Phone Number' },
          { name: 'cat_id', label: 'Select Category', options: categories },
          { name: 'industry_id', label: 'Choose Industry', options: industries },
          { name: 'title_id', label: 'Choose Title', options: titles },
          { name: 'password', label: 'Password', type: 'password' },
          { name: 'confirm_password', label: 'Confirm Password', type: 'password' },
        ].map((field) => (
          <div key={field.name} className="mb-5">
            <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor={field.name}>
              {field.label}
              {formik.touched[field.name] && formik.errors[field.name] && (
                <span className="text-red-500 text-xs">{formik.errors[field.name]}</span>
              )}
            </label>
            {field.options ? (
              <select
                value={formik.values[field.name]}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name={field.name}
                id={field.name}
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline ${getInputClass(field.name)}`}
              >
                <option value="">Select an option</option>
                {field.options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.title}
                  </option>
                ))}
              </select>
            ) : (
              <input
                value={formik.values[field.name]}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                id={field.name}
                name={field.name}
                type={field.type || 'text'}
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline ${getInputClass(field.name)}`}
                placeholder={field.placeholder || field.label}
              />
            )}
          </div>
        ))}

        <div className="mt-10">
          <button
            type="submit"
            className='w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
          >
            Sign Up
          </button>
        </div>

        <div className="flex justify-center pt-6 text-md">
          <p> Already have an account? <NavLink to='/login' className='text-awimGreen'>Login</NavLink> </p>
        </div>
      </form>
    </div>
  )
}

export default ExpertRegister