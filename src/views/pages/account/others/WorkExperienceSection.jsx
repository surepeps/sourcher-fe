import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const WorkExperienceSection = ({
  formik,
  index,
  handleStillWorkingChange,
  removeSection,
  endDateDisabled
}) => {
  const exp = formik.values.workExperience[index];

  const handleEndDateChange = (date) => {
    // Check if the selected end_date is less than or equal to the start_date
    if (exp.start_date && date <= exp.start_date) {
      // You can display an error message or handle the error in your preferred way
      // For this example, I'm setting an error message in formik's errors object
      formik.setFieldError(`workExperience[${index}].end_date`, 'End date must be greater than start date');
    } else {
      // Clear any previous error message
      formik.setFieldError(`workExperience[${index}].end_date`, '');
      // Update the end_date in the formik values
      formik.setFieldValue(`workExperience[${index}].end_date`, date);
    }
  };

  return (
    <div key={index} className="workexperence">
      <div className="singleWork mb-8 lg:gap-10 gap-4 flex-col lg:flex-row flex justify-between">
        <div className="leftC w-full flex gap-7 mb-2 flex-col">
          <div className="flex lg:gap-8 gap-3 flex-col lg:flex-row">
            <div className="inoF w-full flex gap-2 flex-col">
              <label className='text-sm' htmlFor={`workExperience[${index}].job_title`}>Job Role/Title</label>
              <input
                type="text"
                name={`workExperience[${index}].job_title`}
                onChange={formik.handleChange}
                value={exp.job_title}
                placeholder="Job Role/Title"
                className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm'
              />
              {formik.touched.workExperience?.[index]?.job_title && formik.errors.workExperience?.[index]?.job_title && (
                <span className="error text-xs text-red-800">{formik.errors.workExperience[index].job_title}</span>
              )}
            </div>
            <div className="inoF w-full flex gap-2 flex-col">
              <label className='text-sm' htmlFor={`workExperience[${index}].company_name`}>Company Name</label>
              <input
                type="text"
                name={`workExperience[${index}].company_name`}
                onChange={formik.handleChange}
                value={exp.company_name}
                placeholder="Company Name"
                className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm'
              />
              {formik.touched.workExperience?.[index]?.company_name && formik.errors.workExperience?.[index]?.company_name && (
                <span className="error text-xs text-red-800">{formik.errors.workExperience[index].company_name}</span>
              )}
            </div>
          </div>
          <div className="flex lg:gap-8 gap-3 flex-col lg:flex-row">
            <div className="inoF w-full flex gap-2 flex-col">
              <label className='text-sm' htmlFor={`workExperience[${index}].start_date`}>Start Date</label>
              <DatePicker
                selected={exp.start_date}
                onChange={(date) => {
                formik.setFieldValue(`workExperience[${index}].start_date`, date);
                }}
                placeholderText="Start Date"
                className="rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm"
                dateFormat="dd-MM-yyyy"
                isClearable
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={25}
                maxDate={new Date()}
            />
              {formik.touched.workExperience?.[index]?.start_date && formik.errors.workExperience?.[index]?.start_date && (
                <span className="error text-xs text-red-800">{formik.errors.workExperience[index].start_date}</span>
              )}
            </div>
            <div className="inoF w-full flex gap-2 flex-col">
              <label className='text-sm' htmlFor={`workExperience[${index}].end_date`}>End Date</label>
              <DatePicker
                selected={exp.end_date}
                onChange={handleEndDateChange}
                placeholderText="End Date"
                className="rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm"
                dateFormat="dd-MM-yyyy"
                isClearable
                disabled={exp.still_work_there || endDateDisabled}
              />
              {formik.touched.workExperience?.[index]?.end_date && formik.errors.workExperience?.[index]?.end_date && (
                <span className="error text-xs text-red-800">{formik.errors.workExperience[index].end_date}</span>
              )}
            </div>
          </div>
          <div className="checkInpt flex gap-2">
            <input
              type="checkbox"
              className='w-5 h-5 rounded-lg checked:text-white checked:bg-textPurple'
              name={`workExperience[${index}].still_work_there`}
              onChange={handleStillWorkingChange}
              checked={exp.still_work_there}
            />
            <label htmlFor={`workExperience[${index}].still_work_there`}>I still work here</label>
          </div>
          <div className="inoF w-full flex gap-2 flex-col">
            <label className='text-sm' htmlFor={`workExperience[${index}].job_description`}>Job Description</label>
            <textarea
              name={`workExperience[${index}].job_description`}
              onChange={formik.handleChange}
              value={exp.job_description}
              placeholder="Job Description"
              className='w-full border border-awimInputBorder rounded-lg'
            />
            {formik.touched.workExperience?.[index]?.job_description && formik.errors.workExperience?.[index]?.job_description && (
              <span className="error text-xs text-red-800">{formik.errors.workExperience[index].job_description}</span>
            )}
          </div>
        </div>
        <div className="rightP flex items-start gap-5">
          <button
            type="button"
            onClick={removeSection}
            className='flex gap-2 hover:bg-red-600 hover:text-white border-red-600 text-red-600 font-semibold text-sm transition duration-300 ease-in-out rounded-lg px-4 py-3 border'
          >
            <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4974 1.66666C5.90573 1.66666 2.16406 5.40832 2.16406 9.99999C2.16406 14.5917 5.90573 18.3333 10.4974 18.3333C15.0891 18.3333 18.8307 14.5917 18.8307 9.99999C18.8307 5.40832 15.0891 1.66666 10.4974 1.66666ZM13.7641 10.625H7.0974C6.75573 10.625 6.4724 10.3417 6.4724 9.99999C6.4724 9.65832 6.75573 9.37499 7.0974 9.37499H13.7641C14.1057 9.37499 14.3891 9.65832 14.3891 9.99999C14.3891 10.3417 14.1141 10.625 13.7641 10.625Z" fill="fill-current"/>
            </svg>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceSection;
