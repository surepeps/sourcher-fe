import React, {useState} from 'react'
import { useData } from '../../../context/DataContext'
import SearchSelect from '../../miscellaneous/SearchSelect';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';
import IsDoneSpinner from '../../miscellaneous/IsDoneSpinner';



function EditBasicInfo({allData}) {
    const {categories, titles, industries} = useData();
    const {updateUserData} = useAuth()
    const [isDone, setIsDone] = useState(false)


    const { setRequestLoading } = useRequestLoading();

    const [selectedOption, setSelectedOption] = useState(null);

    const {ProfileData, myData, config, isProfileLevel1, isProfileLevel2, isMyAccount} = allData;

     // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    phone_number: Yup.string().required('Phone Number is required'),
    title_id: Yup.number().required('Title is required'),
    industry_id: Yup.number().required('Industry is required'),
    cat_id: Yup.number().required('Category is required'),
  });

  // Define the formik object with initial values
  const formik = useFormik({
    initialValues: {
      first_name: allData.myData.first_name,
      last_name: allData.myData.last_name,
      phone_number: allData.myData.phone_number,
      title_id: allData.myData.title_id,
      industry_id: allData.myData.industry_id,
      cat_id: allData.myData.cat_id,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        setRequestLoading(true);
        setIsDone(true)
        updateUserData({updatedUserData:values});
        setRequestLoading(false)
        setIsDone(false)
    },
  });

const transformDataToOptions = (data) => data.map((item) => ({label: item.title, value: item.id}));

  const transformedOptionsCat = transformDataToOptions(categories);
  const transformedOptionsTitles = transformDataToOptions(titles);
  const transformedOptionsIndus = transformDataToOptions(industries);

  return (
    <div className='font-notoSans'>
        <div className="py-5">
            <h2 className='text-xl font-bold'>Edit Basic Info</h2>
        </div>

        <div className="formDetails pt-3">
            <form onSubmit={formik.handleSubmit} className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="first_name">
                        First Name
                        {formik.touched.first_name && formik.errors.first_name && (
                            <span className="text-red-500 text-xs">{formik.errors.first_name}</span>
                        )} 
                    </label>
                    <input type="text" className='rounded-lg focus:outline-none py-3 text-sm' id='first_name' name='first_name' value={formik.values.first_name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="last_name">
                        Last Name
                        {formik.touched.last_name && formik.errors.last_name && (
                            <span className="text-red-500 text-xs">{formik.errors.last_name}</span>
                        )} 
                    </label>
                    <input type="text" className='rounded-lg focus:outline-none py-3 text-sm' id='last_name' name='last_name' value={formik.values.last_name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="phone_number">
                        Phone Number
                        {formik.touched.phone_number && formik.errors.phone_number && (
                            <span className="text-red-500 text-xs">{formik.errors.phone_number}</span>
                        )} 
                    </label>
                    <input type="text" className='rounded-lg focus:outline-none py-3 text-sm' id='phone_number' name='phone_number' value={formik.values.phone_number} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="title_id">
                        Title
                        {formik.touched.title_id && formik.errors.title_id && (
                            <span className="text-red-500 text-xs">{formik.errors.title_id}</span>
                        )}
                    </label>
                    <SearchSelect
                    classStyle='w-full rounded-lg text-sm h-full bg-red-300'
                    options={transformedOptionsTitles}
                    onChange={(selectedOption) => formik.setFieldValue('title_id', selectedOption ? selectedOption.value : null)}
                    value={transformedOptionsTitles.find(option => option.value === formik.values.title_id)}
                    />
                </div>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="industry_id">
                        Industry
                        {formik.touched.industry_id && formik.errors.industry_id && (
                            <span className="text-red-500 text-xs">{formik.errors.industry_id}</span>
                        )}
                    </label>
                    <SearchSelect
                    classStyle='w-full rounded-lg text-sm h-full bg-red-300'
                    options={transformedOptionsIndus}
                    onChange={(selectedOption) => formik.setFieldValue('industry_id', selectedOption ? selectedOption.value : null)}
                    value={transformedOptionsIndus.find(option => option.value === formik.values.industry_id)}
                    />
                </div>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="category_id">
                        Category
                        {formik.touched.category_id && formik.errors.category_id && (
                            <span className="text-red-500 text-xs">{formik.errors.category_id}</span>
                        )}
                    </label>
                    <SearchSelect
                    classStyle='w-full rounded-lg text-sm h-full bg-red-300'
                    options={transformedOptionsCat}
                    onChange={(selectedOption) => formik.setFieldValue('cat_id', selectedOption ? selectedOption.value : null)}
                    value={transformedOptionsCat.find(option => option.value === formik.values.cat_id)}
                    />
                </div>

                <div className="btn mt-4">
                    {
                        isDone ? <IsDoneSpinner mainClassName='px-6 py-3 text-sm text-white border bg-awimGreen border-awimGreen hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out rounded-lg' /> :
                        <button type='submit' className='px-6 py-3 text-sm text-white border bg-awimGreen border-awimGreen hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out rounded-lg '>Update Data</button>
                    }
                </div>

            </form>
        </div>
    </div>
  )
}

export default EditBasicInfo