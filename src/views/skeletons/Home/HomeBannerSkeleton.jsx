import React from 'react'

function HomeBannerSkeleton() {
  return (
    <div className='bg-no-repeat bg-cardBg bg-center bg-cover px-4 flex flex-col gap-6 lg:gap-8 justify-center items-center pt-36 lg:pb-36 pb-14 font-semibold font-notoSans'>
      <h1 className="h-8 bg-textWhite rounded-lg w-full md:w-10/12 lg:w-8/12 xl:w-4/12 text-center leading-snug"> </h1>
      <p className="bg-textWhite h-6 rounded-lg md:w-6/12 xl:w-4/12 lg:w-5/12 w-full text-center px-4 lg:px-10 leading-7 lg:leading-8 font-normal"></p>

      <div className="lg:w-[40%] w-[92%] px-2 mx-auto bg-bgColor h-14 rounded-xl py-2 mt-5 lg:mt-8 lg:mb-10 flex lg:flex-row flex-col gap-3">

        
        <div className="right flex lg:flex-row flex-col lg:gap-10 gap-5"></div>

      </div>
    </div>
  )
}

export default HomeBannerSkeleton