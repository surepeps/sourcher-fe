import React from 'react';

const ProfessionalSection = ({ formik, index, removeSection }) => {
  const prof = formik.values.professional[index];

  return (
    <div key={index} className="professional transition duration-300 ease-in-out">
      <div className="singleProf mb-8 lg:gap-10 gap-4 flex-col lg:flex-row flex justify-between">
        <div className="leftP w-full flex gap-7 mb-2 flex-col">
          <div className="inoF w-full flex gap-2 flex-col">
            <label className='text-sm' htmlFor={`professional[${index}].professional_description`}>Professional Association (Optional)</label>
            <textarea
              name={`professional[${index}].professional_description`}
              onChange={formik.handleChange}
              value={prof.professional_description}
              placeholder="Professional Association (Optional)"
              className='w-full border border-awimInputBorder rounded-lg'
            />
          </div>
          <div className="flex lg:gap-8 gap-3 flex-col lg:flex-row">
            <div className="inoF w-full flex gap-2 flex-col">
              <label className='text-sm' htmlFor={`professional[${index}].professional_role`}>Professional Role/Title</label>
              <input
                type="text"
                name={`professional[${index}].professional_role`}
                onChange={formik.handleChange}
                value={prof.professional_role}
                placeholder="Professional Role/Title"
                className='rounded-lg border border-awimInputBorder py-4 px-6 w-full focus:outline-none text-sm'
              />
              {formik.touched.professional?.[index]?.professional_role && formik.errors.professional?.[index]?.professional_role && (
                <span className="error text-xs text-red-800">{formik.errors.professional[index].professional_role}</span>
              )}
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
              {formik.touched.professional?.[index]?.duration && formik.errors.professional?.[index]?.duration && (
                <span className="error text-xs text-red-800">{formik.errors.professional[index].duration}</span>
              )}
            </div>
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

export default ProfessionalSection;
