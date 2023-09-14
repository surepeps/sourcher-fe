import React from 'react'

function Partners({config}) {
  return (
    <div className='max-w-screen-2xl mx-auto flex justify-center items-center px-8 py-12 font-notoSans flex-col gap-8'>
        
        <h2 className="lg:text-lg md:text-md text-sm font-semibold text-letterColor5">TRUSTED BY OUR AMAZING PARTNERS</h2>

        <div className="h-0.5 w-full bg-gradient-to-r from-[#0F172A02] via-[#0F172A20] to-[#0F172A02]"></div>

        <div className="Logos flex gap-8 lg:gap-24 items-center">
            <div className="partner">
                <img src={config.partner1} alt="" />
            </div>
            <div className="partner">
                <img src={config.partner2} alt="" />
            </div>
            <div className="partner">
                <img src={config.partner3} alt="" />
            </div>
            <div className="partner">
                <img src={config.partner4} alt="" />
            </div>
        </div>

        <div className="h-0.5 w-full bg-gradient-to-r from-[#0F172A02] via-[#0F172A20] to-[#0F172A02]"></div>

    </div>
  )
}

export default Partners