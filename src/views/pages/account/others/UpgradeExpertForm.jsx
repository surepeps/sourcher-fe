import React from 'react'

function UpgradeExpertForm() {
  return (
    <div>
        <div className="border-2 cursor-pointer flex flex-col gap-6 lg:gap-10 w-full lg:w-3/5 border-dashed border-awimYellow rounded-lg bg-awimLightYellow p-8 ">
            <div className="flex justify-between items-end gap-2">
              <div className="flex flex-col gap-3">
                <h2 className="text-awimYellow text-lg lg:text-2xl font-semibold">Complete your Expert Profile</h2>
                <p className='text-sm lg:text-md'>In order for your profile to be public/visible to other experts or users, you need to completely set-up your profile</p>
              </div>
            </div>

            
            <div className="w-full bg-awimGray80 rounded-full h-4 dark:bg-gray-700">
              <div className="bg-awimYellow h-4 rounded-full" style={{width: '45%'}}></div>
            </div>
          </div>
    </div>
  )
}

export default UpgradeExpertForm