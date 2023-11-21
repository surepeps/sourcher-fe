import React from 'react'

function PartnerSkeleton() {
  return (
    <div className='max-w-screen-2xl mx-auto flex justify-center items-center px-8 py-12 font-notoSans flex-col gap-8'>
        
        <h2 className="h-10 lg:w-[30%] w-full bg-cardBg rounded-lg"></h2>

        <div className="h-0.5 w-full bg-gradient-to-r from-[#0F172A02] via-[#0F172A20] to-[#0F172A02]"></div>

        <div className="Logos flex gap-8 lg:gap-24 items-center">
            <div className="partner h-14 w-14 lg:w-32 bg-cardBg rounded-lg"></div>
            <div className="partner h-14 w-14 lg:w-32 bg-cardBg rounded-lg"></div>
            <div className="partner h-14 w-14 lg:w-32 bg-cardBg rounded-lg"></div>
            <div className="partner h-14 w-14 lg:w-32 bg-cardBg rounded-lg"></div>
            <div className="partner h-14 w-14 lg:w-32 bg-cardBg rounded-lg"></div>
        </div>

        <div className="h-0.5 w-full bg-gradient-to-r from-[#0F172A02] via-[#0F172A20] to-[#0F172A02]"></div>

    </div>
  )
}

export default PartnerSkeleton