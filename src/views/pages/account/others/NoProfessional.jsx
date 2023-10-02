import React from 'react'

function NoProfessional({config, allowToAddProfessions}) {
  return (
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
  )
}

export default NoProfessional