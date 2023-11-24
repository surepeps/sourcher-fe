import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import ApiService from '../../../../../helpers/http/apiService';
import { useRequestLoading } from '../../../../../context/LoadingContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const validationSchema = Yup.object().shape({
  job_title: Yup.string().required('Title is required'),
  company_name: Yup.string().required('Company name is required'),
  start_date: Yup.string().required('Start date is required'),
  end_date: Yup.date().when('still_work_there', (stillWorkThere, schema) => {
    return stillWorkThere
      ? schema.nullable()
      : schema.required('End date is required if not still working there');
  }),
  still_work_there: Yup.boolean(),
  job_description: Yup.string().required('Job Description is required'),
});

function EditWorkExperience({ experience, onCancel, deleteWorkExperience, showDeleteButton, fetchAllData }) {
  const { setRequestLoading } = useRequestLoading();
  const api = new ApiService();

  const initialValues = {
    id: experience?.id || null,
    job_title: experience?.job_title || '',
    company_name: experience?.company_name || '',
    start_date: experience?.start_date || '',
    end_date: experience?.end_date || '',
    still_work_there: experience?.still_work_there || false,
    job_description: experience?.job_description || '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setRequestLoading(true);
        await api.postWithToken('/workExperience/add', { workExperiences: [values] });
        toast.success(`Work Experience Profile updated Successfully`);
        fetchAllData();
        onCancel();
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setRequestLoading(false);
      }
    },
  });

  useEffect(() => {
    if (experience) {
      formik.setValues(initialValues);
    }
  }, [experience]);

  return (
    <div className="editProfessionas my-5 rounded-xl flex-col w-full border border-awimGray80 py-3 px-2 flex justify-between">
      <form onSubmit={formik.handleSubmit}>
        <div className="topRegion">

          <div className="w-full mb-5">
            <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2" htmlFor="duration">
              Job Role/Title
              <span className="text-red-500 text-xs">*</span>
            </label>
            <input
              type="text"
              className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
              id="job_title"
              name="job_title"
              {...formik.getFieldProps('job_title')}
            />
            {formik.errors.job_title ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.job_title}</div>
            ) : null}
          </div>

          <div className="w-full mb-5">
            <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2" htmlFor="duration">
              Company Name
              <span className="text-red-500 text-xs">*</span>
            </label>
            <input
              type="text"
              className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
              id="company_name"
              name="company_name"
              {...formik.getFieldProps('company_name')}
            />
            {formik.errors.company_name ? (
              <div className="text-red-500 text-xs mt-1">{formik.errors.company_name}</div>
            ) : null}
          </div>

          <div className="flex lg:flex-row flex-col gap-5 mb-5">
            <div className="w-full">
              <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2" htmlFor="professionalRole">
                Start Date
                <span className="text-red-500 text-xs">*</span>
              </label>
              <DatePicker
                selected={formik.values.start_date}
                onChange={date => formik.setFieldValue('start_date', date)}
                placeholderText="Start Date"
                className="py-5 w-full rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
                dateFormat="dd-MM-yyyy"
                isClearable
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={25}
                maxDate={new Date()}
            />
              {formik.errors.start_date ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.start_date}</div>
                ) : null}
            </div>

            <div className="w-full">
              <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2" htmlFor="duration">
                End Date
                <span className="text-red-500 text-xs">*</span>
              </label>
              <DatePicker
                onChange={date => formik.setFieldValue('end_date', date)}
                selected={formik.values.end_date}
                placeholderText="End Date"
                className="py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
                dateFormat="dd-MM-yyyy"
                isClearable
                disabled={formik.values.still_work_there || false}
              />
              {formik.errors.end_date ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.end_date}</div>
              ) : null}
            </div>

          </div>

          <div className="w-full mb-5 flex gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 rounded-lg checked:text-white checked:bg-textPurple"
              name="still_work_there"
              id="still_work_there"
              checked={formik.values.still_work_there}
              {...formik.getFieldProps('still_work_there')}
            />
            <label htmlFor="still_work_there">I still work here</label>
          </div>

          <div className="mb-5">
            <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2" htmlFor="professionalAssociation">
            Job Description
            </label>
            <textarea
              className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
              cols="30"
              rows="4"
              id="job_description"
              name="job_description"
              {...formik.getFieldProps('job_description')}
            ></textarea>
            {formik.errors.job_description ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.job_description}</div>
              ) : null}
          </div>
        </div>
        <div className="bottomRegion flex gap-4 justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="w-full py-2 border border-awimLightPurple rounded-xl text-awimLightPurple text-sm hover:bg-awimLightPurple hover:text-textWhite transition duration-300 ease-in-out"
          >
            Cancel
          </button>
          {
            showDeleteButton && (
              <button
                type="button"
                className="w-full py-2 border border-red-500 text-red-500 text-sm rounded-xl hover:bg-red-500 hover:text-textWhite transition duration-300 ease-in-out"
                onClick={() => deleteWorkExperience(experience.id, onCancel)}
              >
                Delete
              </button>
            )
          }
          
          <button type="submit" className="w-full py-2 border border-awimGreen bg-awimGreen text-textWhite text-sm rounded-xl hover:opacity-50 transition duration-300 ease-in-out">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditWorkExperience