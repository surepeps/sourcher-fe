import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';


function ProfessionalProfile({allData}) {
  const {ProfileData, myData, config, isProfileLevel1, isProfileLevel2, isMyAccount} = allData;
  const [isAllow, setIsAllow] = useState(false);

  const allowToAddProfessions = () => {
    setIsAllow(true);
  }

  const validationSchema = Yup.object().shape({
    sections: Yup.array().of(
      Yup.object().shape({
        professionalAssociation: Yup.string(),
        professionalRole: Yup.string().required('Professional Role is required'),
        duration: Yup.string().required('Duration is required'),
        jobRoleTitle: Yup.string().required('Job Role/Title is required'),
        companyName: Yup.string().required('Company Name is required'),
        startDate: Yup.date().required('Start Date is required'),
        endDate: Yup.date().required('End Date is required'),
        jobDescription: Yup.string().required('Job Description is required'),
      })
    ),
  });
  
  const initialValues = {
    sections: [
      {
        professionalAssociation: '',
        professionalRole: '',
        duration: '',
        jobRoleTitle: '',
        companyName: '',
        startDate: '',
        endDate: '',
        stillWorkHere: false,
        jobDescription: '',
      },
    ],
  };
  
  

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Send data to your API here
      console.log(values.sections);
    },
  });

  const addSection = () => {
    formik.values.sections.push({
      professionalAssociation: '',
      professionalRole: '',
      duration: '',
      jobRoleTitle: '',
      companyName: '',
      startDate: '',
      endDate: '',
      stillWorkHere: false,
      jobDescription: '',
    });
    formik.setValues({ ...formik.values });
  };

  const removeSection = (index) => {
    formik.values.sections.splice(index, 1);
    formik.setValues({ ...formik.values });
  };
  

  return (
    <div className='font-notoSans'>

      {/* Upgrade to level Two */}
      { 
        isMyAccount && isProfileLevel1 ? (
          <div className="border-2 cursor-pointer flex flex-col gap-6 lg:gap-10 w-full lg:w-3/5 border-dashed border-awimYellow rounded-lg bg-awimLightYellow p-8 ">
            <div className="flex justify-between items-end gap-2">
              <div className="flex flex-col gap-3">
                <h2 className="text-awimYellow text-lg lg:text-2xl font-semibold">Upgrade to Level 2</h2>
                <p className='text-sm lg:text-md'>Upgrade your account to get full excess to experts</p>
              </div>
              <div className="lll">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3955 24.115C10.1739 24.115 9.95219 24.0333 9.77719 23.8583C9.43885 23.52 9.43885 22.96 9.77719 22.6217L17.3839 15.015C17.9439 14.455 17.9439 13.545 17.3839 12.985L9.77719 5.37833C9.43885 5.03999 9.43885 4.47999 9.77719 4.14166C10.1155 3.80333 10.6755 3.80333 11.0139 4.14166L18.6205 11.7483C19.2155 12.3433 19.5539 13.1483 19.5539 14C19.5539 14.8517 19.2272 15.6567 18.6205 16.2517L11.0139 23.8583C10.8389 24.0217 10.6172 24.115 10.3955 24.115Z" fill="#F1A24C"/>
                </svg>
              </div>
            
            </div>

            
            <div className="w-full bg-awimGray80 rounded-full h-4 dark:bg-gray-700">
              <div className="bg-awimYellow h-4 rounded-full" style={{width: '45%'}}></div>
            </div>
          </div>
        ) : ''
      }

      {
        !isAllow ? 
        (
          <div className="bottomSec flex py-20 flex-col gap-5 justify-center items-center">
            <span>
              <img src={config.emptyData} alt="" />
            </span>
            <div className="textD flex flex-col justify-center items-center w-full lg:w-2/5 gap-3">
              <h4 className="text-lg font-semibold">No Result Found</h4>
              <p className='text-center'>You have not added a professional profile, Click on the button below to add your professional profile</p>
              <button onClick={allowToAddProfessions} className='bg-awimGreen rounded-lg border flex gap-2 mt-2 justify-center items-center border-awimGreen text-white py-3 px-6 hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out'>
                  <svg className='fill-current' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0013 1.66669C5.40964 1.66669 1.66797 5.40835 1.66797 10C1.66797 14.5917 5.40964 18.3334 10.0013 18.3334C14.593 18.3334 18.3346 14.5917 18.3346 10C18.3346 5.40835 14.593 1.66669 10.0013 1.66669ZM13.3346 10.625H10.6263V13.3334C10.6263 13.675 10.343 13.9584 10.0013 13.9584C9.65964 13.9584 9.3763 13.675 9.3763 13.3334V10.625H6.66797C6.3263 10.625 6.04297 10.3417 6.04297 10C6.04297 9.65835 6.3263 9.37502 6.66797 9.37502H9.3763V6.66669C9.3763 6.32502 9.65964 6.04169 10.0013 6.04169C10.343 6.04169 10.6263 6.32502 10.6263 6.66669V9.37502H13.3346C13.6763 9.37502 13.9596 9.65835 13.9596 10C13.9596 10.3417 13.6763 10.625 13.3346 10.625Z" fill="fill-current"/>
                  </svg>
                Add Professional Profile
              </button>
            </div>
          </div>
        ) : 
        (
          <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Dynamic Form</h1>
      <form onSubmit={formik.handleSubmit}>
        {formik.values.sections.map((section, index) => (
          <div key={index} className="mb-6 p-4 border border-gray-300 rounded">
            <div className="mb-2">
              <label>Professional Association (Optional)</label>
              <input
                type="text"
                name={`sections[${index}].professionalAssociation`}
                className="w-full border rounded-md p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={section.professionalAssociation}
              />
            </div>
            <div className="mb-2">
              <label>Professional Role/Title</label>
              <input
                type="text"
                name={`sections[${index}].professionalRole`}
                className="w-full border rounded-md p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={section.professionalRole}
              />
              <p className="text-red-600">
                {formik.touched.sections?.[index]?.professionalRole &&
                  formik.errors.sections?.[index]?.professionalRole}
              </p>
            </div>
            <div className="mb-2">
              <label>Duration</label>
              <input
                type="text"
                name={`sections[${index}].duration`}
                className="w-full border rounded-md p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={section.duration}
              />
              <p className="text-red-600">
                {formik.touched.sections?.[index]?.duration &&
                  formik.errors.sections?.[index]?.duration}
              </p>
            </div>

            {/* Second Section */}
            <div className="mb-2">
              <label>Job Role/Title</label>
              <input
                type="text"
                name={`sections[${index}].jobRoleTitle`}
                className="w-full border rounded-md p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={section.jobRoleTitle}
              />
              <p className="text-red-600">
                {formik.touched.sections?.[index]?.jobRoleTitle &&
                  formik.errors.sections?.[index]?.jobRoleTitle}
              </p>
            </div>
            <div className="mb-2">
              <label>Company Name</label>
              <input
                type="text"
                name={`sections[${index}].companyName`}
                className="w-full border rounded-md p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={section.companyName}
              />
              <p className="text-red-600">
                {formik.touched.sections?.[index]?.companyName &&
                  formik.errors.sections?.[index]?.companyName}
              </p>
            </div>
            <div className="mb-2">
              <label>Start Date</label>
              <input
                type="date"
                name={`sections[${index}].startDate`}
                className="w-full border rounded-md p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={section.startDate}
              />
              <p className="text-red-600">
                {formik.touched.sections?.[index]?.startDate &&
                  formik.errors.sections?.[index]?.startDate}
              </p>
            </div>
            <div className="mb-2">
              <label>End Date</label>
              <input
                type="date"
                name={`sections[${index}].endDate`}
                className="w-full border rounded-md p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={section.endDate}
              />
              <p className="text-red-600">
                {formik.touched.sections?.[index]?.endDate &&
                  formik.errors.sections?.[index]?.endDate}
              </p>
            </div>
            <div className="mb-2">
              <label>
                I still work here
                <input
                  type="checkbox"
                  name={`sections[${index}].stillWorkHere`}
                  className="ml-2"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={section.stillWorkHere}
                />
              </label>
            </div>
            <div className="mb-2">
              <label>Job Description</label>
              <textarea
                name={`sections[${index}].jobDescription`}
                rows="3"
                className="w-full border rounded-md p-2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={section.jobDescription}
              />
              <p className="text-red-600">
                {formik.touched.sections?.[index]?.jobDescription &&
                  formik.errors.sections?.[index]?.jobDescription}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeSection(index)}
              className="bg-red-500 text-white rounded-md px-2 py-1"
            >
              Remove Section
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSection}
          className="bg-green-500 text-white rounded-md px-2 py-1 mt-2"
        >
          Add Section
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-2 py-1 mt-4"
        >
          Save
        </button>
      </form>
    </div>
        )
      }
      



    </div>
  )
}

export default ProfessionalProfile