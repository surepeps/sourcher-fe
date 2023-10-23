import React, { useState, useEffect, useCallback } from 'react';
import ApiService from '../../../../helpers/http/apiService';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useModal } from '../../../../context/ModalService';
import UploadAvatar from '../../../modals/account/UploadAvatar';
import ImageCropperModal from '../../../modals/account/ImageCropperModal';



function Step1({userData,config}) {
  const [industries, setIndustries] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const api = new ApiService();

  const {openModal, closeModal} = useModal();


  

  useEffect(() => {
    const fetchData = async (url, stateSetter) => {
      try {
        const response = await api.getWithOutToken(url);
        stateSetter(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchData('/service/industries', setIndustries);
    fetchData('/service/titles', setTitles);
  }, []);

  const languages = [
    {
      id: 1,
      title: 'English'
    },
    {
      id: 2,
      title: 'Spanish'
    },
    {
      id: 3,
      title: 'French'
    },
    {
      id: 4,
      title: 'German'
    },
    {
      id: 5,
      title: 'Chinese'
    },
    {
      id: 6,
      title: 'Japanese'
    },
    {
      id: 7,
      title: 'Korean'
    },
    {
      id: 8,
      title: 'Arabic'
    },
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
      console.log('Form submitted with values:', values);
    },
  });

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  }, []);

  const formFields = [
    {
      label: 'Choose Title',
      name: 'title',
      options: titles,
    },
    {
      label: 'Choose Industry',
      name: 'industry',
      options: industries,
    },
    {
      label: 'Choose your preferred interview language',
      name: 'interviewLanguage',
      options: languages,
    },
  ];

  const imageURL = userData.avatar ? `${config.fileURL}${userData.avatar}` : null;

  const showUploadModal = () => {
      openModal(<UploadAvatar previousImgWOURL={userData.avatar} previousImage={imageURL} closeModal={closeModal} />)
  }

  return (
    <div className="px-2">
      <form onSubmit={formik.handleSubmit}>
        <ImagePicker imageURL={imageURL} userData={userData} showUploadModal={showUploadModal} selectedImage={selectedImage} handleImageChange={handleImageChange} />
        {formFields.map((field) => (
          <FormField key={field.name} label={field.label} name={field.name} options={field.options} formik={formik} />
        ))}
        <TextField label="Professional Bio" name="professionalBio" formik={formik} />
        <div className="mt-10">
          <button type="submit" className="w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

const ImagePicker = ({ selectedImage, handleImageChange, showUploadModal, imageURL, userData }) => (
  <div className="cursor-pointer imagePicker flex gap-6 items-center">
    <label onClick={showUploadModal} className="imageShow mb-5 lg:w-32 lg:h-32 w-28 h-28 bg-awimGray80 rounded-full flex justify-center items-center" style={{ backgroundImage: `url(${imageURL})` }}>
      {/* <input type="file" id="imageUpload" name="imageUpload" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} /> */}
      {userData.avatar ? '' : (
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
      )}
    </label>
    <div className="flex gap-3 flex-col">
      <h2 className="text-lg lg:text-2xl text-awimGreen">Upload Image</h2>
      <h4 className="text-sm lg:text-lg">Supports only PNG & JPEG</h4>
      <p className="text-sm text-awimGray80">max of 2mb</p>
    </div>
  </div>
);


const FormField = ({ label, name, options, formik }) => (
  <div className="mb-5">
    <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor={name}>
      {label}
      <span className="text-red-500 text-xs">*</span>
    </label>
    <select
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
    >
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
    {formik.touched[name] && formik.errors[name] && (
      <ErrorMessage message={formik.errors[name]} />
    )}
  </div>
);

const TextField = ({ label, name, formik }) => (
  <div className="mb-5">
    <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor={name}>
      {label}
      <span className="text-red-500 text-xs">*</span>
    </label>
    <textarea
      name={name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[name]}
      className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
      cols="30"
      rows="7"
    ></textarea>
    {formik.touched[name] && formik.errors[name] && (
      <ErrorMessage message={formik.errors[name]} />
    )}
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="text-red-500 text-xs">{message}</div>
);

export default Step1;
