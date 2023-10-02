import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../../context/AuthContext';
import { useRequestLoading } from '../../../../context/LoadingContext';

// Reusable SocialLinkInput component
function SocialLinkInput({ label, name, value, onChange, error }) {
  const memoizedOnChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <div className="singleF flex flex-col gap-2 w-full">
      <label className='text-sm font-semibold' htmlFor={name}>{label}</label>
      <div className="formGroup flex w-full">
        <label htmlFor={name} className='h-full py-5 text-sm px-8 rounded-l-lg bg-[#F9FAFB]'>https://</label>
        <input
          type="text"
          id={name}
          name={name}
          className='h-auto px-3 lg:w-6/12 w-full rounded-r-lg border border-[#D9D9D9] text-sm'
          onChange={memoizedOnChange}
          value={value}
        />
      </div>
      {error && <div className="text-red-600 text-xs">{error}</div>}
    </div>
  );
}

function SociaNetwork({ ProfileData }) {
    const {updateUserData} = useAuth()
    const { setRequestLoading } = useRequestLoading();

  const socialLinks = [
    { name: 'linkedin', label: 'LinkedIn URL' },
    { name: 'twitter', label: 'Twitter URL' },
    { name: 'instagram', label: 'Instagram URL' },
    { name: 'webiste', label: 'Personal/Any Website URL' },
  ];

  // Custom validation function to ignore http:// or https://
  const urlValidation = Yup.string().test('is-url', 'Invalid URL', (value) => {
    if (!value) {
      return true; // Empty value is valid
    }
    // Check if the value starts with http:// or https:// and return true if it does
    return !value.startsWith('http://') && !value.startsWith('https://');
  });

  const validationSchema = Yup.object().shape(
    socialLinks.reduce((schema, { name }) => ({
      ...schema,
      [name]: urlValidation,
    }), {})
  );

  const formik = useFormik({
    initialValues: socialLinks.reduce((values, { name }) => ({
      ...values,
      [name]: ProfileData[name] || '',
    }), {}),
    validationSchema,
    onSubmit: (values) => {
      try {
        setRequestLoading(true);
        updateUserData({updatedUserData:values});
      } catch (error) {
        console.log(error)
      } finally {
        setRequestLoading(false);
      }
    },
  });

  return (
    <div className="f">
        <form onSubmit={formik.handleSubmit} className='flex justify-between gap-10 lg:gap-20 flex-col lg:flex-row'>
            <div className="w-full flex gap-8 flex-col">
                {socialLinks.map(({ name, label }) => (
                <SocialLinkInput
                    key={name}
                    label={label}
                    name={name}
                    value={formik.values[name]}
                    onChange={(value) => formik.setFieldValue(name, value)} // Update using setFieldValue
                    error={formik.touched[name] && formik.errors[name]}
                />
                ))}
            </div>

            <div className="rightF">
                <button className='border whitespace-nowrap border-awimGreen bg-awimGreen text-white text-sm hover:text-awimGreen hover:bg-transparent transition duration-300 ease-in-out rounded-lg px-8 py-3'>
                Update Links
                </button>
            </div>
        </form>

        <div className="line my-14 w-full bg-[#0F172A13] h-0.5 rounded-xl"></div>
    </div>
    
  );
}

export default SociaNetwork;
