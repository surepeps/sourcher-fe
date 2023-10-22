import React, { useState, useEffect } from 'react';
import ApiService from '../../../../helpers/http/apiService';
import { useFormik } from 'formik';
import * as Yup from 'yup';


function Step1() {
  // Initialize state for categories, industries, and titles
  const [industries, setIndustries] = useState([]);
  const [titles, setTitles] = useState([]);

  const api = new ApiService();

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
    fetchData('/service/industries', setIndustries);
    fetchData('/service/titles', setTitles);
  },[]);

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
  ];

  const validationSchema = Yup.object().shape({
      title: Yup.string().required('Title is required'),
      industry: Yup.string().required('Industry is required'),
      interviewLanguage: Yup.string().required('Interview language is required'),
      professionalBio: Yup.string().required('Professional bio is required'),
  });

  const formik = useFormik({
    initialValues: {
        title: '',
        industry: '',
        interviewLanguage: '',
        professionalBio: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        // Add your form submission logic here
        console.log('Form submitted with values:', values);
    },
  });


  return (
    <div className='px-2'>
      <form onSubmit={formik.handleSubmit}>
        <div className="cursor-pointer flex gap-6 items-center">

          <div className="imageShow mb-5 lg:w-32 lg:h-32 w-28 h-28 bg-awimGray80 rounded-full flex justify-center items-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1213_937)">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 0C20.0407 0.0124155 16.2164 1.44041 13.218 4.026C10.92 6.006 9.255 8.586 8.826 11.175C3.798 12.285 0 16.665 0 21.954C0 28.098 5.124 33 11.343 33H22.5V17.121L16.062 23.562C15.7803 23.8437 15.3983 24.0019 15 24.0019C14.6017 24.0019 14.2197 23.8437 13.938 23.562C13.6563 23.2803 13.4981 22.8983 13.4981 22.5C13.4981 22.1017 13.6563 21.7197 13.938 21.438L22.938 12.438C23.0773 12.2983 23.2429 12.1875 23.4251 12.1119C23.6073 12.0362 23.8027 11.9973 24 11.9973C24.1973 11.9973 24.3927 12.0362 24.5749 12.1119C24.7571 12.1875 24.9227 12.2983 25.062 12.438L34.062 21.438C34.3437 21.7197 34.5019 22.1017 34.5019 22.5C34.5019 22.8983 34.3437 23.2803 34.062 23.562C33.7803 23.8437 33.3983 24.0019 33 24.0019C32.6017 24.0019 32.2197 23.8437 31.938 23.562L25.5 17.121V33H38.064C43.506 33 48 28.71 48 23.319C48 18.411 44.274 14.412 39.498 13.737C38.769 5.997 32.07 0 24 0ZM22.5 43.5V33H25.5V43.5C25.5 43.8978 25.342 44.2794 25.0607 44.5607C24.7794 44.842 24.3978 45 24 45C23.6022 45 23.2206 44.842 22.9393 44.5607C22.658 44.2794 22.5 43.8978 22.5 43.5Z" fill="#004C3F"/>
              </g>
              <defs>
              <clipPath id="clip0_1213_937">
              <rect width="48" height="48" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </div>

          <div className="flex gap-3 flex-col">
            <h2 className="text-lg lg:text-2xl text-awimGreen">Upload Image</h2>
            <h4 className='text-sm lg:text-lg'>Supports only PNG & JPEG</h4>
            <p className="text-sm text-awimGray80">max of 2mb</p>
          </div>
        </div>

        <div className="mb-5">
            <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="">
                Choose Title
                <span className="text-red-500 text-xs">*</span>
            </label>
            <select
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
            >
                <option value="">Select an option</option>
                {titles.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.title}
                    </option>
                ))}
            </select>
            {formik.touched.title && formik.errors.title && (
                <div className="text-red-500 text-xs">{formik.errors.title}</div>
            )}
        </div>

        <div className="mb-5">
            <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="">
                Choose Industry
                <span className="text-red-500 text-xs">*</span>
            </label>
            <select
                name="industry"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.industry}
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
            >
                <option value="">Select an option</option>
                {industries.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.title}
                    </option>
                ))}
            </select>
            {formik.touched.industry && formik.errors.industry && (
                <div className="text-red-500 text-xs">{formik.errors.industry}</div>
            )}
        </div>

        <div className="mb-5">
            <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="">
                Choose your preferred interview language
                <span className="text-red-500 text-xs">*</span>
            </label>
            <select
                name="interviewLanguage"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.interviewLanguage}
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
            >
                <option value="">Select an option</option>
                {languages.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {formik.touched.interviewLanguage && formik.errors.interviewLanguage && (
                <div className="text-red-500 text-xs">{formik.errors.interviewLanguage}</div>
            )}
        </div>

        <div className="mb-5">
            <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor="">
                Professional Bio
                <span className="text-red-500 text-xs">*</span>
            </label>
            <textarea
                name="professionalBio"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.professionalBio}
                className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
                cols="30"
                rows="7"
            ></textarea>
            {formik.touched.professionalBio && formik.errors.professionalBio && (
                <div className="text-red-500 text-xs">{formik.errors.professionalBio}</div>
            )}
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className='w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
          >
            Next
          </button>
        </div>


      </form>
    </div>
  )
}

export default Step1