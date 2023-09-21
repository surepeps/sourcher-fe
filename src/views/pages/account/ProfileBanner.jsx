import React from 'react'

function ProfileBanner({rest}) {
    const {config} = rest
  return (
    <div className='w-full bg-awimGreen h-auto relative'>
        <img src={config.profileBanner} className='' alt=""  />

    </div>
  )
}

export default ProfileBanner