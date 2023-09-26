import React from 'react'

function Overview({ProfileData}) {
  return (
    <div className='text-md flex flex-col gap-5'>
      <div className="topC">
                <h2 className="text-xl font-semibold">Professional Bio</h2>
            </div>
        <p className="">
            {ProfileData?.about}
        </p>
    </div>
  )
}

export default Overview