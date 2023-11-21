import React from 'react'

function SingleRightChatSkeleton() {
  return (
    <div className="rightChatter items-end w-full h-20 flex flex-col gap-3 py-4">
        <div className="topChatter w-full justify-end flex gap-3">
            <div className="messageCt p-2 bg-cardBg rounded-lg h-14 lg:w-[50%] w-full">
                <p className='text-sm text-bgColor'></p>
            </div>
        </div>
        <p className="time float-right text-xs"></p>
    </div>
  )
}

export default SingleRightChatSkeleton