import React from 'react'

function SingleContactSkeleton() {
  return (
    <div className={`ingleContact bg-cardBg cursor-pointer transition duration-300 ease-in-out p-3 mb-5 rounded-lg flex justify-start gap-5`}>
        <div className="imgSec h-12 w-12 rounded-full">
            <div className='w-14 bg-cardBg h-14 rounded-full' ></div>
        </div>
        <div className="dataSec justify-between w-[80%] flex gap-5">
            <div className="nameData flex flex-col gap-1">
                <h3 className="userName font-semibold text-sm"></h3>
                <p className="LastMsg h-5 w-full bg-chatBg rounded"></p>
            </div>
            <div className="timeCount flex flex-col gap-1">
                <p className="time text-xs"></p>
            </div>
        </div>
    </div>
  )
}

export default SingleContactSkeleton