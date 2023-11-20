import React from 'react'

function SingleRightChat() {
  return (
    <div className="rightChatter items-end flex flex-col gap-3 py-4">
        <div className="topChatter justify-end flex gap-3">
            <div className="messageCt p-2 bg-awimGreen rounded-lg w-full lg:w-[50%]">
                <p className='text-sm text-bgColor'>Lorem ipsum dolor sit amet consectetur. Tristique magnis duis velit suscipit. At orci gravida purus amet eget cursus nunc elit gravida. Cursus lectus mi massa adipiscing. Sit ut laoreet duis.</p>
            </div>
        </div>
        <p className="time float-right text-xs">3:59 PM</p>
    </div>
  )
}

export default SingleRightChat