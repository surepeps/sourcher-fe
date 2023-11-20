import React from 'react'

function ShowSingleExp({experience}) {

    const  formatDateToMonthYear = (date) => {
        const options = { year: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options).toUpperCase();
    }

  return (
    <div className={`singleWorkExperience mb-5 rounded-xl border border-awimGray80 p-1 flex justify-between`}>
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
            <p className='text-md uppercase text-awimGray40'>{formatDateToMonthYear(new Date(`${experience.start_date}`))} - {experience.still_work_there ? 'PRESENT' : formatDateToMonthYear(new Date(`${experience.end_date}`))}</p>
          </div>

          <div className="bottomR">
            <p className='description'>{experience.job_description}</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default ShowSingleExp