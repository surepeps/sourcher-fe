import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ApiService from '../../../helpers/http/apiService';
import { toast } from 'react-toastify';
import IsDoneSpinner from '../../miscellaneous/IsDoneSpinner';


function AddOrEditPublication({ fetLinks, publication, closeModal }) {
  const api = new ApiService();
  const [isDone, setIsDone] = useState(false)
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Publication Title is required'),
    url: Yup.string()
      .url('Invalid URL format')
      .required('Publication URL is required'),
  });

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      title: publication?.title || '',
      url: publication?.url || '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsDone(true)
        if (publication?.id) {
          // If publication has an ID, it's an update
          await api.putWithToken(`/publication/update/${publication.id}`, values);
          toast.success('Publication updated successfully');
        } else {
          // If no ID, it's an add
          await api.postWithToken('/publication/add', values);
          toast.success('Publication added successfully');
        }
        resetForm();
        closeModal();
        fetLinks();
      } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred');
      }finally{
        setIsDone(false);
      }
    },
  });

  return (
    <div className="font-notoSans">
      <h2 className="text-lg font-semibold">
        {publication?.id ? 'Edit Publication' : 'Add New Publication'}
      </h2>

      <form onSubmit={formik.handleSubmit} className="mt-5">
        <div className="flex gap-3 flex-col mb-4">
          <label className="text-sm" htmlFor="title">
            Publication Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="text-sm border border-[#969595] py-4 px-6 rounded-lg focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-600 text-xs">{formik.errors.title}</div>
          )}
        </div>

        <div className="flex gap-3 flex-col mb-6">
          <label className="text-sm" htmlFor="url">
            Publication URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            className="text-sm border border-[#969595] py-4 px-6 rounded-lg focus:outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
          />
          {formik.touched.url && formik.errors.url && (
            <div className="text-red-600 text-xs">{formik.errors.url}</div>
          )}
        </div>

        <div className="flex gap-3 flex-col mb-4">
          {
            isDone ? <IsDoneSpinner mainClassName='px-6 py-3 text-sm text-white border bg-awimGreen border-awimGreen hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out rounded-lg' /> :
            <button type="submit" className="bg-awimGreen border border-awimGreen text-sm text-white hover:text-awimGreen hover:bg-transparent rounded-lg transition duration-300 ease-in-out py-4 px-6">
            {publication?.id ? 'Update Publication' : 'Add Publication'}
            </button>
          }
          
        </div>
      </form>
    </div>
  );
}

export default AddOrEditPublication;
