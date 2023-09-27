import React from 'react'
import ExpertProfile from './expert/ExpertProfile'
import UserProfile from './user_level/UserProfile'
import ProfileBanner from './ProfileBanner';
import NonLoggedProfile from './NonLoggedProfile';



function MyProfile({...rest}) {
  const { iamLoggedIn, myData, ProfileData } = rest;

  const {account_type} = ProfileData;

  const allData = {
    ...rest,
    iamLoggedIn: iamLoggedIn,
    isMyAccount: ProfileData.id === myData?.id,
    isProfileExpert: account_type === 'expert',
    isProfileLevel2: account_type === 'user_2',
    isProfileLevel1: account_type === 'user',
    isMyAccountExpert: myData?.account_type === 'expert',
    isMyAccountLevel1: myData?.account_type === 'user',
    isMyAccountLevel2: myData?.account_type === 'user_2',
  }

  return (
    <div className='w-full'>
      <ProfileBanner allData={allData} />
      <div className='max-w-screen-2xl relative mx-auto px-4 py-10 font-notoSans'>
        {
          !iamLoggedIn ? <NonLoggedProfile allData={allData} /> :
          account_type === 'user' || account_type === 'user_2' ? <UserProfile allData={allData} /> : <ExpertProfile allData={allData} />

        }
      </div>
      
    </div>
  )
}

export default MyProfile