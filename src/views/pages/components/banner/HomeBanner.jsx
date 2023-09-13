import React from 'react'

function HomeBanner({config}) {
  return (
    <div className='bg-no-repeat bg-center bg-cover flex flex-col gap-6 lg:gap-8 justify-center items-center py-36 font-semibold font-notoSans' style={{ backgroundImage: `url(${config.homeBanner})`}}>
      <h1 className="lg:text-6xl text-4xl text-textWhite w-full lg:w-4/12 text-center leading-snug"> Find & Connect with Experts </h1>
      <p className="text-textWhite text-sm lg:text-md lg:w-4/12 w-full text-center px-4 lg:px-14 leading-7 lg:leading-8 font-normal">We empower your journey by connecting you with accomplished female experts across diverse disciplines.</p>

      <div className="lg:w-auto w-[92%] px-2 mx-auto bg-bgColor rounded-xl py-2 mt-5 lg:mt-8 mb-10 flex lg:flex-row flex-col gap-3">
        
        <div className="flex gap-2 px-2 items-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.44">
            <path d="M10.5423 19.9375C5.36315 19.9375 1.14648 15.7208 1.14648 10.5417C1.14648 5.3625 5.36315 1.14583 10.5423 1.14583C15.7215 1.14583 19.9382 5.3625 19.9382 10.5417C19.9382 15.7208 15.7215 19.9375 10.5423 19.9375ZM10.5423 2.52083C6.11482 2.52083 2.52148 6.12333 2.52148 10.5417C2.52148 14.96 6.11482 18.5625 10.5423 18.5625C14.9698 18.5625 18.5632 14.96 18.5632 10.5417C18.5632 6.12333 14.9698 2.52083 10.5423 2.52083Z" fill="#0F172A"/>
            <path d="M20.167 20.8541C19.9928 20.8541 19.8186 20.7899 19.6811 20.6524L17.8478 18.8191C17.582 18.5533 17.582 18.1133 17.8478 17.8474C18.1136 17.5816 18.5536 17.5816 18.8195 17.8474L20.6528 19.6808C20.9186 19.9466 20.9186 20.3866 20.6528 20.6524C20.5153 20.7899 20.3411 20.8541 20.167 20.8541Z" fill="#0F172A"/>
            </g>
          </svg>
          <input type="text" className='border-none w-full text-sm forceOutlineNone focus:outline-none' placeholder='Search for experts' />
        </div>

        
        
        <div className="right flex lg:flex-row flex-col lg:gap-10 gap-5">
        <div className="lg:h-full lg:w-0.5 bg-[#0F172A13] w-full h-0.5 rounded-xl"></div>

          <select className='focus:outline-none border-none text-sm lg:text-md forceOutlineNone py-0 w-full lg:w-[130px]' name="" id="">
            <option value="">Country</option>
            <option value="">Nigeria</option>
            <option value="">Nigeria jbjjnjnnnjn njn</option>
            <option value="">Nigeria</option>
            <option value="">Nigeria</option>
            <option value="">Nigeria</option>
          </select>

          <div className="line lg:h-full lg:w-0.5 bg-[#0F172A13] w-full h-0.5 rounded-xl"></div>

          <select className='border-none py-0 text-sm lg:text-md' name="" id="">
            <option value="">Expertise</option>
            <option value="">Nigeria</option>
            <option value="">Nigeria</option>
            <option value="">Nigeria</option>
            <option value="">Nigeria</option>
            <option value="">Nigeria</option>
            <option value="">Nigeria</option>
          </select>

          <div className="line lg:h-full lg:w-0.5 bg-[#0F172A13] w-full h-0.5 rounded-xl"></div>

          <div className="btn">
            <button className='bg-awimGreen w-full text-textWhite text-sm hover:text-awimGreen hover:bg-textWhite transition duration-300 ease-in-out border hover:border-awimGreen lg:py-3 py-4 px-8 rounded-lg'>Search</button>
          </div>

        </div>

        

        

      </div>
    </div>
  )
}

export default HomeBanner