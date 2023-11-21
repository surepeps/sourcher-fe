import React from 'react'
import SingleExpertSkeleton from './SingleExpertSkeleton'


function ExplorExpertSkeleton() {
  return (
    <div className='max-w-screen-2xl mx-auto flex flex-col pb-20 px-4 justify-center items-center font-notoSans'>
      <div className="flex flex-col gap-5 lg:w-[40%] w-full text-center pb-10">
        <h1 className="w-[100%] bg-cardBg h-10 rounded-lg"></h1>
        <p className="w-[100%] bg-cardBg h-5 rounded-lg"></p>
      </div>

      <div className="overflow-x-auto ScrollableCont w-full relative pt-4 lg:pt-8">
        <ul className="flex gap-6 overflow-x-auto ScrollableCont">
            {
                Array.from({ length: 14 }).map((_, index) => (
                    <li
                    key={index}
                    className={`px-6 py-3 w-20 h-10 text-sm lg:text-md cursor-pointer flex items-center rounded-3xl bg-cardBg`}
                    >
                    </li>
                ))
            }

        </ul>

        <div
            className="absolute top-4 bottom-0 right-0 flex transition duration-300 ease-in-out items-center cursor-pointer"
           
          >
            <div width="72" height="73" className='rounded-full w-10 h-10 bg-cardBg'>
                
            </div>

          </div>

      </div>

      <div className="experts w-full pt-10">
        <div className="AllCards w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-4">
            {
                Array.from({ length: 4 }).map((_, index) => <SingleExpertSkeleton key={index} />)
            }

        </div>
        <div className="btnView flex justify-center pt-10">
           <button className='px-8 py-3 flex h-12 w-32 transition duration-300 ease-in-out gap-3 items-center rounded-xl text-sm border-2 bg-cardBg '>
              
              
           </button>
        </div>
      </div>
    </div>
  )
}

export default ExplorExpertSkeleton