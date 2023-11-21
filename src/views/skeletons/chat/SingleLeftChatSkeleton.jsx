import React from 'react'

function SingleLeftChatSkeleton() {
  return (
    <div className="leftChatter flex w-full flex-col gap-3 py-4">
        <div className="topChatter flex gap-5">
            <div className="imgSec h-10 lg:w-10 w-12 rounded-full">
                <div className='w-14 h-14 bg-cardBg rounded-full' alt="" ></div>
            </div>
            <div className="messageCt p-2 bg-cardBg h-14  rounded-lg lg:w-[50%] w-full">
                <p className='text-sm'></p>
            </div>
        </div>
        <p className="time pl-14 text-xs"></p>
        
    </div>
  )
}

export default SingleLeftChatSkeleton