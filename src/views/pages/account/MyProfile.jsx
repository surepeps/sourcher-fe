import React from 'react'
import ExpertProfile from './ExpertProfile'
import UserProfile from './UserProfile'
import ProfileBanner from './ProfileBanner';


function MyProfile({...rest}) {
  const { iamLoggedIn, myData, ProfileData } = rest;

  return (
    <div>
      <ProfileBanner rest={rest} />
      {
        ProfileData.account_type === 'user' || ProfileData.account_type === 'user_2' ? (<UserProfile />) : (<ExpertProfile />)
      }

    </div>
  )
}

export default MyProfile