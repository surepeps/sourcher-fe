import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import ApiService from '../../../../../helpers/http/apiService';
import { useRequestLoading } from '../../../../../context/LoadingContext';

const validationSchema = Yup.object().shape({
  professional_role: Yup.string().required('Professional Role is required'),
  duration: Yup.string().required('Duration is required'),
});

function EditProfessional({ association, onCancel, deleteProfession, showDeleteButton, fetchAllData }) {
  const { setRequestLoading } = useRequestLoading();
  const api = new ApiService();

  const initialValues = {
    id: association?.id || null,
    professional_role: association?.professional_role || '',
    duration: association?.duration || '',
    professional_description: association?.professional_description || '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setRequestLoading(true);
        await api.postWithToken('/professional/add', { professionals: [values] });
        toast.success(`Professional Profile updated Successfully`);
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
    if (association) {
      formik.setValues(initialValues);
    }
  }, [association]);

  return (
    <div className="editProfessionas my-5 rounded-xl flex-col w-full border border-awimGray80 py-3 px-2 flex justify-between">
      <form onSubmit={formik.handleSubmit}>
        <div className="topRegion">
          <div className="flex lg:flex-row flex-col gap-5 mb-5">
            <div className="w-full">
              <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2" htmlFor="professionalRole">
                Professional Role/Title
                <span className="text-red-500 text-xs">*</span>
              </label>
              <input
                type="text"
                className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
                id="professional_role"
                name="professional_role"
                {...formik.getFieldProps('professional_role')}
              />
              {formik.errors.professional_role ? (
                  <div className="text-red-500 text-xs mt-1">{formik.errors.professional_role}</div>
                ) : null}
            </div>
            <div className="w-full">
              <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2" htmlFor="duration">
                Duration
                <span className="text-red-500 text-xs">*</span>
              </label>
              <input
                type="text"
                className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
                id="duration"
                name="duration"
                {...formik.getFieldProps('duration')}
              />
              {formik.errors.duration ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.duration}</div>
              ) : null}
            </div>
          </div>
          <div className="mb-5">
            <label className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2" htmlFor="professionalAssociation">
              Professional Association (Optional)
            </label>
            <textarea
              className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
              cols="30"
              rows="4"
              id="professional_description"
              name="professional_description"
              {...formik.getFieldProps('professional_description')}
            ></textarea>
            {formik.errors.professional_description ? (
                <div className="text-red-500 text-xs mt-1">{formik.errors.professional_description}</div>
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
                onClick={() => deleteProfession(association.id, onCancel)}
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
  );
}

export default EditProfessional;
