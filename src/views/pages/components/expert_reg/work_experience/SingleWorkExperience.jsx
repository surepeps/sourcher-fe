import React from 'react'

function SingleWorkExperience({ experience, onEditWorkExperience, deleteWorkExperience, disabled }) {
  return (
    <div className={`singleWorkExperience mb-5 rounded-xl border border-awimGray80 p-3 flex justify-between ${disabled ? 'opacity-50' : ''}`}>
      <div className="leftCC flex items-center justify-between gap-3">
        
        <div className="flex p-4 justify-center items-center">
          <svg width="11" height="122" viewBox="0 0 11 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5.5" cy="5.5" r="5.5" fill="#591664"/>
            <rect x="4.5" y="15" width="2" height="11" rx="1" fill="#591664"/>
            <rect x="4.5" y="31" width="2" height="6" rx="1" fill="#591664"/>
            <rect x="4.5" y="42" width="2" height="11" rx="1" fill="#591664"/>
            <rect x="4.5" y="58" width="2" height="6" rx="1" fill="#591664"/>
            <rect x="4.5" y="69" width="2" height="11" rx="1" fill="#591664"/>
            <rect x="4.5" y="85" width="2" height="6" rx="1" fill="#591664"/>
            <rect x="4.5" y="96" width="2" height="11" rx="1" fill="#591664"/>
            <circle cx="5.5" cy="116.5" r="5.5" fill="#591664"/>
          </svg>
        </div>

        <div className="flex flex-col gap-10 justify-between">
          <div className="topR">
            <h2 className='title text-bold'>{experience.job_title} at {experience.company_name} </h2>
            <p className='text-md uppercase text-awimGray80'>APR 2020 - PRESENT</p>
          </div>

          <div className="bottomR">
            <p className='description'>{experience.job_description}</p>
          </div>
        </div>

      </div>
      {!disabled && (
        <div className="rightCC flex flex-col justify-between">
          <span onClick={() => onEditWorkExperience(experience)} className="editIcon text-awimGreen cursor-pointer">
            <svg className='fill-current' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 18.333H2.5C2.15833 18.333 1.875 18.0497 1.875 17.708C1.875 17.3663 2.15833 17.083 2.5 17.083H17.5C17.8417 17.083 18.125 17.3663 18.125 17.708C18.125 18.0497 17.8417 18.333 17.5 18.333Z" fill="fill-current"/>
              <path d="M15.8495 2.90005C14.2328 1.28338 12.6495 1.24172 10.9912 2.90005L9.98283 3.90838C9.89949 3.99172 9.86616 4.12505 9.89949 4.24172C10.5328 6.45005 12.2995 8.21672 14.5078 8.85005C14.5412 8.85838 14.5745 8.86672 14.6078 8.86672C14.6995 8.86672 14.7828 8.83338 14.8495 8.76672L15.8495 7.75838C16.6745 6.94172 17.0745 6.15005 17.0745 5.35005C17.0828 4.52505 16.6828 3.72505 15.8495 2.90005Z" fill="fill-current"/>
              <path d="M13.0089 9.60768C12.7673 9.49101 12.5339 9.37435 12.3089 9.24102C12.1256 9.13268 11.9506 9.01602 11.7756 8.89102C11.6339 8.79935 11.4673 8.66602 11.3089 8.53268C11.2923 8.52435 11.2339 8.47435 11.1673 8.40768C10.8923 8.17435 10.5839 7.87435 10.3089 7.54102C10.2839 7.52435 10.2423 7.46602 10.1839 7.39102C10.1006 7.29102 9.95892 7.12435 9.83392 6.93268C9.73392 6.80768 9.61726 6.62435 9.50892 6.44102C9.37559 6.21602 9.25892 5.99102 9.14226 5.75768C8.98929 5.4299 8.55908 5.33253 8.30331 5.5883L3.61726 10.2743C3.50892 10.3827 3.40892 10.591 3.38392 10.7327L2.93392 13.9243C2.85059 14.491 3.00892 15.0243 3.35892 15.3827C3.65892 15.6743 4.07559 15.8327 4.52559 15.8327C4.62559 15.8327 4.72559 15.8243 4.82559 15.8077L8.02559 15.3577C8.17559 15.3327 8.38392 15.2327 8.48392 15.1243L13.1777 10.4306C13.4284 10.1799 13.3342 9.74863 13.0089 9.60768Z" fill="fill-current"/>
            </svg>
          </span>

          <span onClick={() => deleteWorkExperience(experience.id)} className='text-red-500 cursor-pointer'>
            <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4974 1.66666C5.90573 1.66666 2.16406 5.40832 2.16406 9.99999C2.16406 14.5917 5.90573 18.3333 10.4974 18.3333C15.0891 18.3333 18.8307 14.5917 18.8307 9.99999C18.8307 5.40832 15.0891 1.66666 10.4974 1.66666ZM13.7641 10.625H7.0974C6.75573 10.625 6.4724 10.3417 6.4724 9.99999C6.4724 9.65832 6.75573 9.37499 7.0974 9.37499H13.7641C14.1057 9.37499 14.3891 9.65832 14.3891 9.99999C14.3891 10.3417 14.1141 10.625 13.7641 10.625Z" fill="fill-current"/>
            </svg>
          </span>
        </div>
        )
      }
      
    </div>
  )
}

export default SingleWorkExperience