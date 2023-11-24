import React from 'react'

function AdsBanner({config}) {
  return (
    <div className='max-w-screen-2xl px-4 mx-auto font-notoSans'>
      <div className="w-full">
        <img src={config.conference} className='w-full' alt="" />
      </div>
    </div>
  )
}

export default AdsBanner