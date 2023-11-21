import React from 'react'

function ProfileBannerSkeleton() {
  return (
    <div className="w-full divide-gray-200 rounded animate-pulse dark:divide-gray-700 dark:border-gray-700">
        <div className='w-full bg-gray-300 relative h-auto flex py-4'>
            <img src='' className='absolute left-0 top-0 bottom-0' alt=""  />
            <div className="max-w-screen-2xl mx-auto w-full md:items-center items-start px-4 flex lg:py-24 pt-20 pb-14 gap-7 md:flex-row flex-col justify-between">

                <div className="flex items-center relative lg:flex-row w-full flex-col gap-10">
                    <div className="imgContIcon relative">
                        <div className="circle w-[170px] mt-7 lg:mt-1 -ml-14 lg:ml-0 h-[170px] xl:w-[250px] xl:h-[250px] rounded-full border border-bgColor">
                            <img src='' alt="" className='w-full h-full rounded-full' />
                        </div>

                        <span className='cursor-pointer absolute bottom-3 lg:bottom-8 right-3'>
                            <div className="rounded-full bg-bgColor w-[36px] h-[36px] lg:w-[46px] lg:h-[46px]"></div>
                        </span>
                        

                    </div>
                    
                
                    <div className="nameCountrySocial w-full">
                        
                        <div className="nameFlag w-auto flex gap-4 pb-4 items-center">
                            <h1 className="h-3 w-52 bg-textWhite rounded-lg"></h1>
                            <div className='!w-[41px] !h-[25px]'></div>
                        </div>

                        <div className='w-[55%] flex flex-col gap-1'>
                            <span className='h-3 w-32 bg-textWhite rounded-lg'></span>

                            <div className={`social px-5 mt-3 py-3 h-7 bg-textWhite rounded-lg flex w-[80%] lg:w-[55%] gap-6 justify-between`}></div>
                            
                        </div>
                
                        
                    </div>

                </div>

                <div className="btnMessage relative w-full flex justify-end">
                    <div className='text-md bg-bgColor h-10 w-32 shadow-none items-center rounded-lg px-4 py-3 flex gap-2 hover:bg-transparent hover:text-textWhite transition duration-300 ease-in-out text-textPurple'>
                        
                    </div>
                </div>
                

                
                
            </div>
        </div>
    </div>
  )
}

export default ProfileBannerSkeleton