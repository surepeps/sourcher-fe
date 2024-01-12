import React from 'react'

function PendingAccount() {
  return (
    <div>
        <div className="border-2 cursor-pointer flex flex-col gap-6 lg:gap-10 w-full lg:w-3/5 border-dashed border-awimYellow rounded-lg bg-awimLightYellow p-8 ">
            <div className="flex justify-between items-end gap-2">
              <div className="flex flex-col gap-3">
                <h2 className="text-awimYellow text-lg lg:text-2xl font-semibold">Your Account is Pending for Approval</h2>
                <p className='text-sm lg:text-md'>Your account is pending for approval kindly check back.</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default PendingAccount