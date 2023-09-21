import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MyUserProfile from '../views/pages/components/account/MyUserProfile';
import ApiService from '../helpers/http/apiService';



function ProfileController({config, userData, isLoggedIn}) {
    const [isProfileData, setIsProfileData] = useState(null);

    const { username } = useParams();

    const api = new ApiService();

    useEffect(() => {
        

    },[username,isLoggedIn, userData])


    console.log(userData)
    

  return (
    <div>
        <MyUserProfile />
    </div>
  )
}

export default ProfileController