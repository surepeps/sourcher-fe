import React from 'react'
import SociaNetwork from '../others/SociaNetwork'
import Publications from '../others/Publications';

function Links({allData}) {
  const {ProfileData, myData, config, isProfileLevel1, isProfileLevel2, isMyAccount} = allData;

  return (
    <div className='font-notoSans mt-5'>
      { isMyAccount ? <SociaNetwork ProfileData={ProfileData} /> : '' }

      <Publications />
      
    </div>
  )
}

export default Links