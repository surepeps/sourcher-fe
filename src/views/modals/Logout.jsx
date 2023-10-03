import React from 'react'
import { NavLink } from 'react-router-dom'

function Logout({closeModal}) {
  return (
    <div className='font-notoSans'>
        <h1 className='text-awimRed text-xl font-bold'>Log Out</h1>

        <div className="mainDiv mt-10">
            <p className='text-md font-semibold'>Are you sure you want to Logout?</p>

            <div className="btns flex flex-col gap-5 mt-10">
                <NavLink onClick={closeModal} to='/logout' className='w-full py-3 px-6 text-center text-md text-white font-semibold border bg-awimRed hover:bg-transparent hover:text-awimRed transition duration-300 ease-in-out border-awimRed rounded-lg'>
                    Log Out
                </NavLink>

                <NavLink onClick={closeModal} className='w-full py-3 px-6 text-center text-md text-awimGreen font-semibold hover:bg-awimGreen hover:text-white transition duration-300 ease-in-out border border-awimGreen rounded-lg'>
                    Go Back
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Logout