import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';

function Login() {
  const { setRequestLoading } = useRequestLoading();
  const { login } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left">Welcome Back!👋</div>

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

        <div className="mb-8">
          <label className="flex justify-between text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-500 text-xs">{formik.errors.password}</span>
            )}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`w-full py-5 rounded-lg px-4 text-sm border text-gray-700 ${getInputClass('password')}`}
            placeholder='Password'
          />
        </div>

        <div className="flex justify-end">
          <NavLink className='text-textPurple font-semibold' to='/forgot-password'>Forgot Password?</NavLink>
        </div>

        <div className="remember flex gap-3 items-center pt-4">
          <input type="checkbox" className='h-5 w-5 checked:bg-awimGreen rounded-md appearance-none focus:outline-none focus:shadow-outline' name="rememberMe" id="rememberMe" />
          <label className="text-md font-semibold" htmlFor="rememberMe">Remember me</label>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className='w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
          >
            Log in
          </button>
        </div>

        <div className="flex justify-center pt-6 text-md">
          <p>Don’t have an account? <NavLink className='text-awimGreen' to='/register'>Sign Up</NavLink></p>
        </div>

      </form>
    </div>
  );
}

export default Login;
