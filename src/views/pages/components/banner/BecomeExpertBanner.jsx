import React from 'react'

function BecomeExpertBanner({config}) {
  return (
    <div className='bg-awimPink70 py-24 w-full font-notoSans'>
        <div className='max-w-screen-2xl mx-auto flex flex-col pb-10 w-full items-center font-notoSans relative'>
            <div className="bg-textPurple rounded-xl flex justify-between ">
                <div className="flex flex-col gap-7 pl-20 pt-14 w-[40%]">
                    <h2 className="text-4xl text-textWhite">Become an Expert</h2>

                    <p className="text-lg text-textWhite ">Are you an accomplished professional looking to share your wisdom? Join our thriving community of experts.</p>

                    <button className="bg-textWhite py-2.5 w-[23%] rounded-xl text-md font-semibold">Join Us</button>
                </div>
                <div className="rounded-r-xl">
                    <img className='rounded-r-xl' src={config.BecomeExpertImage} alt="" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default BecomeExpertBanner