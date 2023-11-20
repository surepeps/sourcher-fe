import React from 'react'

function SingleLeftChat({config}) {
  return (
    <div className="leftChatter flex flex-col gap-3 py-4">
        <div className="topChatter flex gap-3">
            <div className="imgSec h-10 lg:w-10 w-12 rounded-full">
                <img src={config.noImage} className='w-full h-full rounded-full' alt="" />
            </div>
            <div className="messageCt p-2 bg-[#F9FAFB] rounded-lg lg:w-[50%] w-full">
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Tristique magnis duis velit suscipit. At orci gravida purus amet eget cursus nunc elit gravida. Cursus lectus mi massa adipiscing. Sit ut laoreet duis.</p>
            </div>
        </div>
        <p className="time pl-14 text-xs">3:59 PM</p>
        
    </div>
  )
}

export default SingleLeftChat