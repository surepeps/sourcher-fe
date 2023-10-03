import React from 'react'
import { NavLink } from 'react-router-dom'

function Overview({ProfileData, config}) {
  return (
    <div className='text-md flex flex-col gap-5'>
      <div className="topSec">
        <div className="topC">
          <h2 className="text-xl font-semibold pb-3">Professional Bio</h2>
        </div>
        <p className="">
            {ProfileData?.about}
        </p>
      </div>
      <div className="bottomSec flex py-14 flex-col gap-5 justify-center items-center">
        <span>
          <img src={config.emptyData} alt="" />
        </span>
        <div className="textD flex flex-col justify-center items-center w-full lg:w-2/5 gap-3">
          <h4 className="text-lg font-semibold">Unable To View More Information</h4>
          <p className='text-center'>In order to view more information about this Account, click on the button below to create an account</p>
          <NavLink to='/register' className='bg-awimGreen rounded-lg border flex justify-center items-center border-awimGreen text-white py-3 px-6 hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out'>Create an Account</NavLink>
        </div>
      </div>
      
    </div>
  )
}

export default Overview