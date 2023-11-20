import React from 'react'
import { NavLink } from 'react-router-dom'

function SingleContact({config, contactData}) {
  return (
    <NavLink to="" className="singleContact hover:bg-[#F2F4F7] cursor-pointer transition duration-300 ease-in-out p-3 mb-5 rounded-lg flex justify-between gap-1">
        <div className="imgSec">
            <img src={config.noImage} alt="" />
        </div>
        <div className="dataSec flex gap-5">
            <div className="nameData flex flex-col gap-1">
                <h3 className="userName font-semibold text-sm">Hassan Tijani</h3>
                <p className="LastMsg font-light text-sm">I'd definitely learn how to work aroun....</p>
            </div>
            <div className="timeCount flex flex-col gap-1">
                <p className="time text-xs">12.30</p>
                <p className="count p-1 text-xs bg-awimGreen rounded-full text-bgColor text-center">10</p>
            </div>
        </div>
    </NavLink>
  )
}

export default SingleContact