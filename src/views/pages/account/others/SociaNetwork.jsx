import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function SociaNetwork({ProfileData}) {
    const {facebook,google,twitter,linkedin,youtube,instagram} = ProfileData;
  return (
    <form className='flex justify-between gap-10 lg:gap-20 flex-col lg:flex-row'>
        <div className="leftF w-full flex flex-col gap-5">

            <div className="singleF flex flex-col gap-2 w-full">
                <label className='text-sm font-semibold' htmlFor="">Linkedln URL</label>
                <div className="formGroup flex w-full">
                    <label htmlFor="" className='h-full py-5 text-sm px-8 rounded-l-lg bg-[#F9FAFB]'>https://</label>
                    <input type="text" className='h-auto px-3 lg:w-6/12 w-full rounded-r-lg border border-[#D9D9D9] text-sm' />
                </div>
                
            </div>

            <div className="singleF flex flex-col gap-2 w-full">
                <label className='text-sm font-semibold' htmlFor="">Twitter</label>
                <div className="formGroup flex ">
                    <label htmlFor="" className='h-full py-5 text-sm px-8 rounded-l-lg bg-[#F9FAFB]'>https://</label>
                    <input type="text" className='h-auto px-3 lg:w-6/12 w-full rounded-r-lg border border-[#D9D9D9] text-sm' />
                </div>
                
            </div>

            <div className="singleF flex flex-col gap-2">
                <label className='text-sm font-semibold' htmlFor="">Instagram</label>
                <div className="formGroup flex ">
                    <label htmlFor="" className='h-full py-5 text-sm px-8 rounded-l-lg bg-[#F9FAFB]'>https://</label>
                    <input type="text" className='h-auto px-3 lg:w-6/12 w-full rounded-r-lg border border-[#D9D9D9] text-sm' />
                </div>
                
            </div>

            <div className="singleF flex flex-col gap-2">
                <label className='text-sm font-semibold' htmlFor="">Personal/Any Website URL</label>
                <div className="formGroup flex ">
                    <label htmlFor="" className='h-full py-5 text-sm px-8 rounded-l-lg bg-[#F9FAFB]'>https://</label>
                    <input type="text" className='h-auto px-3 lg:w-6/12 w-full rounded-r-lg border border-[#D9D9D9] text-sm' />
                </div>
                
            </div>

        </div>

        <div className="rightF">
            <button className='border whitespace-nowrap border-awimGreen bg-awimGreen text-white text-sm hover:text-awimGreen hover:bg-transparent transition duration-300 ease-in-out rounded-lg px-8 py-3'>
                Update Links
            </button>
        </div>

    </form>
  )
}

export default SociaNetwork