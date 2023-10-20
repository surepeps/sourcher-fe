import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';
import ApiService from '../../../helpers/http/apiService';
import { useModal } from '../../../context/ModalService';
import SuccessRegistered from '../../modals/SuccessRegistered';

function Register() {
  const { setRequestLoading } = useRequestLoading();
  const { register } = useAuth();

  const api = new ApiService();

  const { openModal } = useModal();

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone_number: Yup.string().required('Phone Number is required'),
    cat_id: Yup.string().required('Category is required'),
    industry_id: Yup.string().required('Industry is required'),
    title_id: Yup.string().required('Title is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^0-9a-zA-Z]).*$/, 'Password must have at least one number, one letter, and one special character')
      .required('Password is required'),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      cat_id: '',
      industry_id: '',
      title_id: '',
      password: '',
      confirm_password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setRequestLoading(true);
      const registrationResult = await register(values);
      
      if (registrationResult.success) {
        // Registration was successful, open the modal
        openModal(<SuccessRegistered />);
        resetForm(); // Clear form fields after successful registration
      } else {
        // Registration failed, show an error message
        console.log('Error during registration:', registrationResult.message);
      }
      
      setRequestLoading(false);
    },
  });

  // Initialize state for categories, industries, and titles
  const [categories, setCategories] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchData = async (url, stateSetter) => {
      try {
        const response = await api.getWithOutToken(url);
        stateSetter(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    // Fetch data from API endpoints
    fetchData('/service/categories', setCategories);
    fetchData('/service/industries', setIndustries);
    fetchData('/service/titles', setTitles);
  },[]);

  const getInputClass = (fieldName) => {
    return formik.touched[fieldName]
      ? formik.errors[fieldName]
        ? 'border border-red-500'
        : 'border border-green-500'
      : 'border border-[#969595]';
  };

  return (
    <div className='pt-6'>
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left">Sign Up</div>

      <form onSubmit={formik.handleSubmit} className='pt-14 lg:pt-20 px-2'>
        {/* Render form fields using map or a component */}
        {[
          { name: 'first_name', label: 'First Name' },
          { name: 'last_name', label: 'Last Name' },
          { name: 'email', label: 'Email' },
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
  );
}

export default Register;
