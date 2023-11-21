import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';
import IsDoneSpinner from '../../miscellaneous/IsDoneSpinner';
import { responseCatcher } from '../../../helpers/http/response';

function EditAboutMe({allData, closeModal}) {
    const [isDone, setIsDone] = useState(false)

    const { setRequestLoading } = useRequestLoading();
    const {updateUserData} = useAuth()

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        about: Yup.string().required('Professional Bio is required'),
    });

        // Define the formik object with initial values
    const formik = useFormik({
        initialValues: {
            about: allData.myData.about,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setRequestLoading(true);
            try {
                setIsDone(true);
                await updateUserData({updatedUserData:values});
                closeModal();
            } catch (error) {
                responseCatcher(error)
            }finally{
                setIsDone(false)
                setRequestLoading(false)
            }
        },
    });

  return (
    <div className='font-notoSans'>
        <div className="py-5">
            <h2 className='text-xl font-bold'>Edit Professional Bio</h2>
        </div>
        <div className="formDetails pt-3">

            <form onSubmit={formik.handleSubmit} className='flex flex-col w-full'>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="about">Professional Bio</label>
                    <textarea name="about" id="about" className='rounded-lg focus:outline-none py-3 text-sm' cols="30" value={formik.values.about} onChange={formik.handleChange} onBlur={formik.handleBlur} rows="10"></textarea>
                    {formik.touched.about && formik.errors.about && (
                        <span className="text-red-500 text-xs">{formik.errors.about}</span>
                    )}
                </div>

                <div className="btn mt-4">
                    {
                        isDone ? <IsDoneSpinner mainClassName='px-6 py-3 text-sm text-white border bg-awimGreen border-awimGreen hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out rounded-lg' /> :
                        <button type='submit' className='px-6 py-3 text-sm text-white border bg-awimGreen border-awimGreen hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out rounded-lg '>Update Professional Bio</button>
                    }
                </div>

            </form>

        </div>

    </div>
  )
}

export default EditAboutMe