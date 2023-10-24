import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRequestLoading } from '../../../../context/LoadingContext';
import { useAuth } from '../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Step4({ userData, moveToNext }) {
  const { setRequestLoading } = useRequestLoading();
  const { updateUserData } = useAuth();
  const navigate = useNavigate();

  const formFields = [
    {
      name: 'beyoundMediaEngage',
      label: 'Beyond media engagement, are there other opportunities you would like SourceHer to have available?',
      type: 'text',
    },
    {
      name: 'nominateFemaleEmail',
      label: 'Would you like to nominate any other African female expert within your network? (Optional)',
      type: 'email',
    },
    {
      name: 'i_am_african_expert',
      label: 'I am an African female expert and I am willing to be featured in this database',
      type: 'checkbox',
    },
    {
      name: 'agree_information',
      label: 'I agree that the information provided is accurate and can be used by African Women in Media, Fojo Media Institute, and her partners for the purpose of the gender expert roster',
      type: 'checkbox',
    },
  ];

  const initialValues = {
    beyoundMediaEngage: '',
    nominateFemaleEmail: '',
    i_am_african_expert: false,
    agree_information: false,
  };

  const validationSchema = Yup.object().shape({
    beyoundMediaEngage: Yup.string().required('This field is required'),
    nominateFemaleEmail: Yup.string().email('Invalid email address'),
    agree_information: Yup.bool().oneOf([true], 'You must agree to the information usage'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setRequestLoading(true);

        // Convert the checkboxes to '1' or '0'
        const checkboxFields = ['i_am_african_expert', 'agree_information'];
        checkboxFields.forEach((field) => {
          values[field] = values[field] ? '1' : '0';
        });

        // Add expert_status key to the object before sending
        values.expert_status = 0;

        await updateUserData({ updatedUserData: values });

        // Redirect user if needed
        navigate(`/sh/${userData.username}`);
        
      } catch (error) {
        console.error(error);
      } finally {
        setRequestLoading(false);
      }
    },
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <div className="px-2">
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div className="w-full mb-5" key={field.name}>
            {field.type === 'checkbox' ? (
              <div className='flex gap-2 items-start'>
                <input
                  type={field.type}
                  className="w-5 h-5 rounded-lg checked:text-white checked:bg-textPurple"
                  name={field.name}
                  id={field.name}
                  checked={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor={field.name} className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2">
                  {field.label}
                </label>
              </div>
            ) : (
              <>
                <label htmlFor={field.name} className="flex gap-1 items-center text-gray-700 text-xs lg:text-sm font-semibold mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
                  id={field.name}
                  name={field.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field.name]}
                />
              </>
            )}
            {touched[field.name] && errors[field.name] && (
              <div className="text-red-600 text-sm pt-2">{errors[field.name]}</div>
            )}
          </div>
        ))}
        <div className="mt-10 flex flex-col gap-5">
          <button type="submit" className="w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
            Submit
          </button>

          <button
            onClick={() => moveToNext(0, 3)}
            type="button"
            className="w-full py-5 rounded-lg px-4 text-sm border border-awimGreen text-awimGreen hover-bg-awimGreen hover-text-textWhite focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Skip for Later
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step4;
