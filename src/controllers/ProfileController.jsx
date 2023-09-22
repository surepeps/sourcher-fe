import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MyProfile from '../views/pages/account/MyProfile';
import ApiService from '../helpers/http/apiService';
import { responseCatcher } from '../helpers/http/response';



function ProfileController({config, userData, isLoggedIn, skeleton: Skeleton, Error_404: Error_404, ...rest}) {
    const [isProfileData, setIsProfileData] = useState(null);
    const [pgLoading, setPgLoading] = useState(true);

    const { username } = useParams();

    const api = new ApiService();

    useEffect(() => {
        async function fetchProfile(username) {
          try{
            const response = await api.getWithOutToken(`/profile/${username}`)
            setIsProfileData(response.data.user)
          }catch(err){
            responseCatcher(err)
          }finally{
            setPgLoading(false)
          }
         
        }

        fetchProfile(username);

    },[username,isLoggedIn, userData])

    

  return (
    <div>
      {
        pgLoading ? (<Skeleton />) : 
        isProfileData ? (<MyProfile config={config} iamLoggedIn={isLoggedIn ?? false} myData={userData ?? null} ProfileData={isProfileData} />) : <Error_404 />
      }
    </div>
  )
}

export default ProfileController