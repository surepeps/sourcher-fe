import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  professional: Yup.array().of(
    Yup.object().shape({
      association: Yup.string(),
      title: Yup.string().required('Title is required'),
      duration: Yup.string(),
    })
  ),
  workExperience: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required('Title is required'),
      company: Yup.string().required('Company name is required'),
      startDate: Yup.string().required('Start date is required'),
      endDate: Yup.string().when('stillWorking', {
        is: false,
        then: Yup.string().required('End date is required'),
        otherwise: Yup.string(),
      }),
      stillWorking: Yup.boolean(),
      description: Yup.string(),
    })
  ),
});

const initialValues = {
  professional: [{ association: '', title: '', duration: '' }],
  workExperience: [
    {
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      stillWorking: false,
      description: '',
    },
  ],
};

const Links = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form Values:', values);
    },
  });

  const addProfessionalSection = () => {
    formik.setFieldValue('professional', [
      ...formik.values.professional,
      { association: '', title: '', duration: '' },
    ]);
  };

  const removeProfessionalSection = (index) => {
    const updatedProfessional = [...formik.values.professional];
    updatedProfessional.splice(index, 1);
    formik.setFieldValue('professional', updatedProfessional);
  };

  const addWorkExperienceSection = () => {
    formik.setFieldValue('workExperience', [
      ...formik.values.workExperience,
      {
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        stillWorking: false,
        description: '',
      },
    ]);
  };

  const removeWorkExperienceSection = (index) => {
    const updatedWorkExperience = [...formik.values.workExperience];
    updatedWorkExperience.splice(index, 1);
    formik.setFieldValue('workExperience', updatedWorkExperience);
  };

  return (
    <div>

      <form onSubmit={formik.handleSubmit}>
        {/* Professional Sections */}
        <div>
          {formik.values.professional.map((prof, index) => (
            <div key={index} className="professional">
              <div className="singleProf mb-8 lg:gap-10 gap-4 flex-col lg:flex-row flex justify-between">
                <div className="leftP w-full flex gap-7 mb-2 flex-col">
                  <div className="inoF w-full flex gap-2 flex-col">
                    <label className='text-sm' htmlFor={`professional[${index}].association`}>Professional Association (Optional)</label>
                    <textarea
                      name={`professional[${index}].association`}
                      onChange={formik.handleChange}
                      value={prof.association}
                      placeholder="Professional Association (Optional)"
                      className='w-full border border-awimInputBorder rounded-lg'
                    />
                  </div>
                  <div className="flex lg:gap-8 gap-3 flex-col lg:flex-row">
                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor={`professional[${index}].title`}>Professional Role/Title</label>
                      <input
                        type="text"
                        name={`professional[${index}].title`}
                        onChange={formik.handleChange}
                        value={prof.title}
                        placeholder="Professional Role/Title"
                        className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm'
                      />
                    </div>
                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor={`professional[${index}].duration`}>Duration</label>
                      <input
                        type="text"
                        name={`professional[${index}].duration`}
                        onChange={formik.handleChange}
                        value={prof.duration}
                        placeholder="Duration"
                        className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm'
                      />
                    </div>
                  </div>
                </div>
                <div className="rightP flex items-start gap-5">
                  <button
                    type="button"
                    onClick={() => removeProfessionalSection(index)}
                    className='flex gap-2 hover:bg-red-600 hover:text-white border-red-600 text-red-600 font-semibold text-sm transition duration-300 ease-in-out rounded-lg px-4 py-3 border'
                  >
                    <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4974 1.66666C5.90573 1.66666 2.16406 5.40832 2.16406 9.99999C2.16406 14.5917 5.90573 18.3333 10.4974 18.3333C15.0891 18.3333 18.8307 14.5917 18.8307 9.99999C18.8307 5.40832 15.0891 1.66666 10.4974 1.66666ZM13.7641 10.625H7.0974C6.75573 10.625 6.4724 10.3417 6.4724 9.99999C6.4724 9.65832 6.75573 9.37499 7.0974 9.37499H13.7641C14.1057 9.37499 14.3891 9.65832 14.3891 9.99999C14.3891 10.3417 14.1141 10.625 13.7641 10.625Z" fill="fill-current"/>
                    </svg>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className='py-3 px-6 rounded-lg border border-awimGreen hover:bg-awimGreen hover:text-white text-awimGreen text-sm flex gap-2 transition duration-300 ease-in-out'
                  >
                    <svg className='fill-current' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0156 1.59158H5.98229C4.21563 1.59158 2.76562 3.04158 2.76562 4.80825V16.5499C2.76562 18.0499 3.84063 18.6833 5.15729 17.9583L9.22396 15.6999C9.65729 15.4583 10.3573 15.4583 10.7823 15.6999L14.849 17.9583C16.1656 18.6916 17.2406 18.0583 17.2406 16.5499V4.80825C17.2323 3.04158 15.7906 1.59158 14.0156 1.59158ZM13.0156 7.52492L9.68229 10.8583C9.55729 10.9833 9.39896 11.0416 9.24063 11.0416C9.08229 11.0416 8.92396 10.9833 8.79896 10.8583L7.54896 9.60825C7.30729 9.36658 7.30729 8.96658 7.54896 8.72492C7.79063 8.48325 8.19063 8.48325 8.43229 8.72492L9.24063 9.53325L12.1323 6.64158C12.374 6.39992 12.774 6.39992 13.0156 6.64158C13.2573 6.88325 13.2573 7.28325 13.0156 7.52492Z" fill="fill-current"/>
                    </svg>
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Button to Add Professional Section */}
          <button type="button" onClick={addProfessionalSection}>
            Add Another Professional Association
          </button>
        </div>

        <div className="line my-10 w-full bg-[#0F172A13] h-0.5 rounded-xl"></div>

        {/* Work Experience Sections */}
        <div>
          {formik.values.workExperience.map((exp, index) => (
            <div key={index} className='workexperence'>
              <div className="singleWork mb-8 lg:gap-10 gap-4 flex-col lg:flex-row flex justify-between">
                <div className="leftC w-full flex gap-7 mb-2 flex-col">
                  <div className="flex lg:gap-8 gap-3 flex-col lg:flex-row">
                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor={`workExperience[${index}].title`}>Job Role/Title</label>
                      <input
                        type="text"
                        name={`workExperience[${index}].title`}
                        onChange={formik.handleChange}
                        value={exp.title}
                        placeholder="Job Role/Title"
                        className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm'
                      />
                      {formik.touched.workExperience?.[index]?.title && formik.errors.workExperience?.[index]?.title && (
                        <div className="error">{formik.errors.workExperience[index].title}</div>
                      )}
                    </div>
                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor={`workExperience[${index}].company`}>Company Name</label>
                      <input
                        type="text"
                        name={`workExperience[${index}].company`}
                        onChange={formik.handleChange}
                        value={exp.company}
                        placeholder="Company Name"
                        className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm'
                      />
                      {formik.touched.workExperience?.[index]?.company && formik.errors.workExperience?.[index]?.company && (
                        <div className="error">{formik.errors.workExperience[index].company}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex lg:gap-8 gap-3 flex-col lg:flex-row">
                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor={`workExperience[${index}].startDate`}>Start Date</label>
                      <input
                        type="text"
                        name={`workExperience[${index}].startDate`}
                        onChange={formik.handleChange}
                        value={exp.startDate}
                        placeholder="Start Date"
                        className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm'
                      />
                      {formik.touched.workExperience?.[index]?.startDate && formik.errors.workExperience?.[index]?.startDate && (
                        <div className="error">{formik.errors.workExperience[index].startDate}</div>
                      )}
                    </div>
                    <div className="inoF w-full flex gap-2 flex-col">
                      <label className='text-sm' htmlFor={`workExperience[${index}].endDate`}>End Date</label>
                      <input
                        type="text"
                        name={`workExperience[${index}].endDate`}
                        onChange={formik.handleChange}
                        value={exp.endDate}
                        placeholder="End Date"
                        className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm'
                      />
                      {formik.touched.workExperience?.[index]?.endDate && formik.errors.workExperience?.[index]?.endDate && (
                        <div className="error">{formik.errors.workExperience[index].endDate}</div>
                      )}
                    </div>
                  </div>
                  <div className="checkInpt">
                    <input
                      type="checkbox"
                      name={`workExperience[${index}].stillWorking`}
                      onChange={formik.handleChange}
                      checked={exp.stillWorking}
                    />
                    <label htmlFor={`workExperience[${index}].stillWorking`}>I still work here</label>
                  </div>
                  <div className="inoF w-full flex gap-2 flex-col">
                    <label className='text-sm' htmlFor={`workExperience[${index}].description`}>Job Description</label>
                    <textarea
                      name={`workExperience[${index}].description`}
                      onChange={formik.handleChange}
                      value={exp.description}
                      placeholder="Job Description"
                      className='w-full border border-awimInputBorder rounded-lg'
                    />
                  </div>
                </div>
                <div className="rightP flex items-start gap-5">
                  <button
                    type="button"
                    onClick={() => removeWorkExperienceSection(index)}
                    className='flex gap-2 hover:bg-red-600 hover:text-white border-red-600 text-red-600 font-semibold text-sm transition duration-300 ease-in-out rounded-lg px-4 py-3 border'
                  >
                    <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4974 1.66666C5.90573 1.66666 2.16406 5.40832 2.16406 9.99999C2.16406 14.5917 5.90573 18.3333 10.4974 18.3333C15.0891 18.3333 18.8307 14.5917 18.8307 9.99999C18.8307 5.40832 15.0891 1.66666 10.4974 1.66666ZM13.7641 10.625H7.0974C6.75573 10.625 6.4724 10.3417 6.4724 9.99999C6.4724 9.65832 6.75573 9.37499 7.0974 9.37499H13.7641C14.1057 9.37499 14.3891 9.65832 14.3891 9.99999C14.3891 10.3417 14.1141 10.625 13.7641 10.625Z" fill="fill-current"/>
                    </svg>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className='py-3 px-6 rounded-lg border border-awimGreen hover:bg-awimGreen hover:text-white text-awimGreen text-sm flex gap-2 transition duration-300 ease-in-out'
                  >
                    <svg className='fill-current' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.0156 1.59158H5.98229C4.21563 1.59158 2.76562 3.04158 2.76562 4.80825V16.5499C2.76562 18.0499 3.84063 18.6833 5.15729 17.9583L9.22396 15.6999C9.65729 15.4583 10.3573 15.4583 10.7823 15.6999L14.849 17.9583C16.1656 18.6916 17.2406 18.0583 17.2406 16.5499V4.80825C17.2323 3.04158 15.7906 1.59158 14.0156 1.59158ZM13.0156 7.52492L9.68229 10.8583C9.55729 10.9833 9.39896 11.0416 9.24063 11.0416C9.08229 11.0416 8.92396 10.9833 8.79896 10.8583L7.54896 9.60825C7.30729 9.36658 7.30729 8.96658 7.54896 8.72492C7.79063 8.48325 8.19063 8.48325 8.43229 8.72492L9.24063 9.53325L12.1323 6.64158C12.374 6.39992 12.774 6.39992 13.0156 6.64158C13.2573 6.88325 13.2573 7.28325 13.0156 7.52492Z" fill="fill-current"/>
                    </svg>
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Button to Add Work Experience Section */}
          <button type="button" onClick={addWorkExperienceSection}>
            Add Another Work Experience
          </button>
        </div>

        <button type="submit" className='bg-awimGreen text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out mt-8'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Links;
