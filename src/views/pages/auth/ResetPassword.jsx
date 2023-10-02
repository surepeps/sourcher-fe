import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const { setRequestLoading } = useRequestLoading();
  const { resetPassword } = useAuth();

  useEffect(() => {
    if (!token || token === '') {
      navigate('/login');
      toast.error("Invalid token");
    }
  }, [navigate, token]);

  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/,
        'Password must contain at least 9 characters, including at least one alphabet, one number, and one special character (@$!%*?&)'
      ),
    confirm_password: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirm_password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setRequestLoading(true);
      try {
        // Add the token to the data sent to the endpoint
        const dataToSend = {
          ...values,
          token,
        };
        await resetPassword(dataToSend);
        navigate('/login');
      } catch (error) {
        console.error('Error during password reset:', error);
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
    <div className='font-notoSans pt-6'>
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left">Reset Password</div>

      <form onSubmit={formik.handleSubmit} className='pt-14 lg:pt-20 px-2'>
        <div className="mb-8">
          <label className="flex justify-between text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
            New Password
            {formik.touched.newPassword && formik.errors.newPassword && (
              <span className="text-red-500 text-xs">{formik.errors.newPassword}</span>
            )}
          </label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={formik.values.newPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`w-full py-5 rounded-lg px-4 text-sm border text-gray-700 ${getInputClass('newPassword')}`}
            placeholder='New Password'
          />
        </div>

        <div className="mb-8">
          <label className="flex justify-between text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
            Confirm Password
            {formik.touched.confirm_password && formik.errors.confirm_password && (
              <span className="text-red-500 text-xs">{formik.errors.confirm_password}</span>
            )}
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={formik.values.confirm_password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`w-full py-5 rounded-lg px-4 text-sm border text-gray-700 ${getInputClass('confirm_password')}`}
            placeholder='Confirm Password'
          />
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className='w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
