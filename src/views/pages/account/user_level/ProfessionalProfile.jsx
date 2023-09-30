import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';


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
          <div className="mt-10">
            
            {/* Professional */}
            <form className="professional">
              
              <div className="singleProf mb-8 lg:gap-10 gap-4 flex-col lg:flex-row flex justify-between">

                <div className="leftP w-full flex gap-7 mb-2 flex-col">

                  <div className="inoF w-full flex gap-2 flex-col">
                    <label className='text-sm' htmlFor="profession_association">Professional Association (Optional)</label>
                    <textarea name="" className='w-full border border-awimInputBorder rounded-lg' id="" cols="30" rows="4"></textarea>
                  </div>
                  
                  <div className="flex lg:gap-8 gap-3 flex-col lg:flex-row">
                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor="profession_role">Professional Role/Title</label>
                      <input type="text" className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm' />
                    </div>

                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor="profession_duration">Duration</label>
                      <input type="text" className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm' />
                    </div>
                  </div>

                </div>

                <div className="rightP flex items-start gap-5">
                  <button className='flex gap-2 hover:bg-red-600 hover:text-white border-red-600 text-red-600 font-semibold text-sm transition duration-300 ease-in-out rounded-lg px-4 py-3 border'>
                    <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4974 1.66666C5.90573 1.66666 2.16406 5.40832 2.16406 9.99999C2.16406 14.5917 5.90573 18.3333 10.4974 18.3333C15.0891 18.3333 18.8307 14.5917 18.8307 9.99999C18.8307 5.40832 15.0891 1.66666 10.4974 1.66666ZM13.7641 10.625H7.0974C6.75573 10.625 6.4724 10.3417 6.4724 9.99999C6.4724 9.65832 6.75573 9.37499 7.0974 9.37499H13.7641C14.1057 9.37499 14.3891 9.65832 14.3891 9.99999C14.3891 10.3417 14.1141 10.625 13.7641 10.625Z" fill="fill-current"/>
                    </svg>
                    Cancel
                  </button>

                  <button className='py-3 px-6 rounded-lg border border-awimGreen hover:bg-awimGreen hover:text-white text-awimGreen text-sm flex gap-2 transition duration-300 ease-in-out'>
                    <svg className='fill-current' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0156 1.59158H5.98229C4.21563 1.59158 2.76562 3.04158 2.76562 4.80825V16.5499C2.76562 18.0499 3.84063 18.6833 5.15729 17.9583L9.22396 15.6999C9.65729 15.4583 10.3573 15.4583 10.7823 15.6999L14.849 17.9583C16.1656 18.6916 17.2406 18.0583 17.2406 16.5499V4.80825C17.2323 3.04158 15.7906 1.59158 14.0156 1.59158ZM13.0156 7.52492L9.68229 10.8583C9.55729 10.9833 9.39896 11.0416 9.24063 11.0416C9.08229 11.0416 8.92396 10.9833 8.79896 10.8583L7.54896 9.60825C7.30729 9.36658 7.30729 8.96658 7.54896 8.72492C7.79063 8.48325 8.19063 8.48325 8.43229 8.72492L9.24063 9.53325L12.1323 6.64158C12.374 6.39992 12.774 6.39992 13.0156 6.64158C13.2573 6.88325 13.2573 7.28325 13.0156 7.52492Z" fill="fill-current"/>
                    </svg>
                    Save
                  </button>
                </div>


              </div>
              
              <NavLink className='text-awimGreen text-sm flex gap-2 mt-5 font-semibold items-center'> 
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9987 1.83331C5.94786 1.83331 1.83203 5.94915 1.83203 11C1.83203 16.0508 5.94786 20.1666 10.9987 20.1666C16.0495 20.1666 20.1654 16.0508 20.1654 11C20.1654 5.94915 16.0495 1.83331 10.9987 1.83331ZM14.6654 11.6875H11.6862V14.6666C11.6862 15.0425 11.3745 15.3541 10.9987 15.3541C10.6229 15.3541 10.3112 15.0425 10.3112 14.6666V11.6875H7.33203C6.9562 11.6875 6.64453 11.3758 6.64453 11C6.64453 10.6241 6.9562 10.3125 7.33203 10.3125H10.3112V7.33331C10.3112 6.95748 10.6229 6.64581 10.9987 6.64581C11.3745 6.64581 11.6862 6.95748 11.6862 7.33331V10.3125H14.6654C15.0412 10.3125 15.3529 10.6241 15.3529 11C15.3529 11.3758 15.0412 11.6875 14.6654 11.6875Z" fill="#004C3F"/>
                </svg>
                Add Another Professional Association
              </NavLink>

            </form>

            <div className="line my-10 w-full bg-[#0F172A13] h-0.5 rounded-xl"></div>

            {/* Work Experence */}
            <form className='workexperence'>

              <div className="singleWork mb-8 lg:gap-10 gap-4 flex-col lg:flex-row flex justify-between">
                <div className="leftC w-full flex gap-7 mb-2 flex-col">

                  <div className="flex lg:gap-8 gap-3 flex-col lg:flex-row">
                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor="profession_role">Job Role/Title</label>
                      <input type="text" className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm' />
                    </div>

                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor="profession_duration">Company Name</label>
                      <input type="text" className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm' />
                    </div>
                  </div>

                  <div className="flex lg:gap-8 gap-3 flex-col lg:flex-row">
                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor="profession_role">Start Date</label>
                      <input type="text" className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm' />
                    </div>

                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor="profession_duration">End Date</label>
                      <input type="text" className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm' />
                    </div>
                  </div>

                  <div className="checkInpt">
                    <input type="checkbox" className='' /> 
                    <label htmlFor="">I still work here</label>
                  </div>

                  <div className="inoF w-full flex gap-2 flex-col">
                    <label className='text-sm' htmlFor="profession_association">Job Description</label>
                    <textarea name="" className='w-full border border-awimInputBorder rounded-lg' id="" cols="30" rows="4"></textarea>
                  </div>

                </div>
                <div className="rightP flex items-start gap-5">
                  <button className='flex gap-2 hover:bg-red-600 hover:text-white border-red-600 text-red-600 font-semibold text-sm transition duration-300 ease-in-out rounded-lg px-4 py-3 border'>
                    <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4974 1.66666C5.90573 1.66666 2.16406 5.40832 2.16406 9.99999C2.16406 14.5917 5.90573 18.3333 10.4974 18.3333C15.0891 18.3333 18.8307 14.5917 18.8307 9.99999C18.8307 5.40832 15.0891 1.66666 10.4974 1.66666ZM13.7641 10.625H7.0974C6.75573 10.625 6.4724 10.3417 6.4724 9.99999C6.4724 9.65832 6.75573 9.37499 7.0974 9.37499H13.7641C14.1057 9.37499 14.3891 9.65832 14.3891 9.99999C14.3891 10.3417 14.1141 10.625 13.7641 10.625Z" fill="fill-current"/>
                    </svg>
                    Cancel
                  </button>

                  <button className='py-3 px-6 rounded-lg border border-awimGreen hover:bg-awimGreen hover:text-white text-awimGreen text-sm flex gap-2 transition duration-300 ease-in-out'>
                    <svg className='fill-current' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0156 1.59158H5.98229C4.21563 1.59158 2.76562 3.04158 2.76562 4.80825V16.5499C2.76562 18.0499 3.84063 18.6833 5.15729 17.9583L9.22396 15.6999C9.65729 15.4583 10.3573 15.4583 10.7823 15.6999L14.849 17.9583C16.1656 18.6916 17.2406 18.0583 17.2406 16.5499V4.80825C17.2323 3.04158 15.7906 1.59158 14.0156 1.59158ZM13.0156 7.52492L9.68229 10.8583C9.55729 10.9833 9.39896 11.0416 9.24063 11.0416C9.08229 11.0416 8.92396 10.9833 8.79896 10.8583L7.54896 9.60825C7.30729 9.36658 7.30729 8.96658 7.54896 8.72492C7.79063 8.48325 8.19063 8.48325 8.43229 8.72492L9.24063 9.53325L12.1323 6.64158C12.374 6.39992 12.774 6.39992 13.0156 6.64158C13.2573 6.88325 13.2573 7.28325 13.0156 7.52492Z" fill="fill-current"/>
                    </svg>
                    Save
                  </button>
                </div>
              </div>

              <NavLink className='text-awimGreen text-sm flex gap-2 mt-5 font-semibold items-center'> 
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9987 1.83331C5.94786 1.83331 1.83203 5.94915 1.83203 11C1.83203 16.0508 5.94786 20.1666 10.9987 20.1666C16.0495 20.1666 20.1654 16.0508 20.1654 11C20.1654 5.94915 16.0495 1.83331 10.9987 1.83331ZM14.6654 11.6875H11.6862V14.6666C11.6862 15.0425 11.3745 15.3541 10.9987 15.3541C10.6229 15.3541 10.3112 15.0425 10.3112 14.6666V11.6875H7.33203C6.9562 11.6875 6.64453 11.3758 6.64453 11C6.64453 10.6241 6.9562 10.3125 7.33203 10.3125H10.3112V7.33331C10.3112 6.95748 10.6229 6.64581 10.9987 6.64581C11.3745 6.64581 11.6862 6.95748 11.6862 7.33331V10.3125H14.6654C15.0412 10.3125 15.3529 10.6241 15.3529 11C15.3529 11.3758 15.0412 11.6875 14.6654 11.6875Z" fill="#004C3F"/>
                </svg>
                Add Another Work Experience
              </NavLink>

            </form>

          </div>
        )
      }
      



    </div>
  )
}

export default ProfessionalProfile