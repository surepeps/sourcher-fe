import React from 'react'

function UpgradeForm() {
  return (
    <div>
        <div className="border-2 cursor-pointer flex flex-col gap-6 lg:gap-10 w-full lg:w-3/5 border-dashed border-awimYellow rounded-lg bg-awimLightYellow p-8 ">
            <div className="flex justify-between items-end gap-2">
              <div className="flex flex-col gap-3">
                <h2 className="text-awimYellow text-lg lg:text-2xl font-semibold">Upgrade to Level 2</h2>
                <p className='text-sm lg:text-md'>Upgrade your account to get full excess to experts</p>
              </div>
              <div className="lll">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3955 24.115C10.1739 24.115 9.95219 24.0333 9.77719 23.8583C9.43885 23.52 9.43885 22.96 9.77719 22.6217L17.3839 15.015C17.9439 14.455 17.9439 13.545 17.3839 12.985L9.77719 5.37833C9.43885 5.03999 9.43885 4.47999 9.77719 4.14166C10.1155 3.80333 10.6755 3.80333 11.0139 4.14166L18.6205 11.7483C19.2155 12.3433 19.5539 13.1483 19.5539 14C19.5539 14.8517 19.2272 15.6567 18.6205 16.2517L11.0139 23.8583C10.8389 24.0217 10.6172 24.115 10.3955 24.115Z" fill="#F1A24C"/>
                </svg>
              </div>
            
            </div>

            
            <div className="w-full bg-awimGray80 rounded-full h-4 dark:bg-gray-700">
              <div className="bg-awimYellow h-4 rounded-full" style={{width: '45%'}}></div>
            </div>
          </div>
    </div>
  )
}

export default UpgradeForm