import React, {useEffect, useState} from 'react'
import ApiService from '../../../../helpers/http/apiService'
import { useRequestLoading } from '../../../../context/LoadingContext'
import SociaNetwork from '../../account/others/SociaNetwork';
import Publications from '../../account/others/Publications';
import { useAuth } from '../../../../context/AuthContext';

 
function Step3({userData, setCurrentStep}) {
  const [allPubications, setAllPublications] = useState(null);
  const [activateNextButton, setActivateNextButton] = useState(true);

  const { setRequestLoading } = useRequestLoading();

  const api = new ApiService();

  const {updateUserData} = useAuth()

  const fetLinks = async () => {
    try {
      setRequestLoading(true)
      const resp = await api.getWithToken("/publication/getAll");
    
      resp.data.length > 0 ? setActivateNextButton(false) : setActivateNextButton(true);
      setAllPublications(resp.data);
    } catch (error) {
      console.log(error)
    }finally{
      setRequestLoading(false)
    }
  }

  useEffect(() => {
    fetLinks();
  },[]);

  // Move to next Step
  const moveToNext = async () => {
    try {
      setRequestLoading(true);

      const userData = {
        expert_status: 4
      };

      await updateUserData({updatedUserData:userData});

      setCurrentStep(3);
    } catch (error) {
      console.error(error);
    }finally{
      setRequestLoading(false);
    }
  }

  return (
    <div className="px-2">

      <SociaNetwork ProfileData={userData} />

      { allPubications ? <Publications allPubications={allPubications} isMyAccount={true} fetLinks={fetLinks}/> : ''}
      

      <div className="mt-10 flex flex-col gap-5">
        <button disabled={activateNextButton} onClick={moveToNext} type="button" className="w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
          Next
        </button>

        <button onClick={moveToNext} type="button" className="w-full py-5 rounded-lg px-4 text-sm border border-awimGreen text-awimGreen hover:bg-awimGreen hover:text-textWhite focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
          Skip for Later
        </button>
      </div>

    </div>
  )
}

export default Step3