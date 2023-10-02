import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';

function ForgotPassword() {
  const { setRequestLoading } = useRequestLoading();
  const { login } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setRequestLoading(true);
      try {
        await login(values);
      } catch (error) {
        // The error will be caught here if there's an issue with login.
        console.log('Error during login:', error);
      } finally {
        setRequestLoading(false);
      }
    },
  });

  const getInputClass = (fieldName) => {
    return formik.touched[fieldName]
      ? formik.errors[fieldName]
        ? 'border border-red-500'
        : 'border border-green-500'
      : 'border border-[#969595]';
  };

  return (
    <div className='pt-6'>
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left mb-6">Forgot Password?</div>
      <p className='text-lg'>An email will be sent with instructions to reset your password.</p>

      <form onSubmit={formik.handleSubmit} className='pt-14 lg:pt-20 px-2'>

        <div className="mb-8">
          <label className="flex justify-between text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-xs">{formik.errors.email}</span>
            )}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`w-full py-5 rounded-lg px-4 text-sm border text-gray-700 ${getInputClass('email')}`}
            placeholder='yourId@email.com'
          />
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className='w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
          >
            Continue
          </button>
        </div>

        <div className="flex justify-center pt-6 text-md">
          <p>Remember Password? <NavLink className='text-awimGreen' to='/login'>Login</NavLink></p>
        </div>

      </form>
    </div>
  )
}

export default ForgotPassword