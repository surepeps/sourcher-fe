import React, {useEffect, useState} from 'react'
import SociaNetwork from '../others/SociaNetwork'
import Publications from '../others/Publications';
import ApiService from '../../../../helpers/http/apiService';
import { useRequestLoading } from '../../../../context/LoadingContext';


function Links({allData}) {
  const {ProfileData, myData, config, isProfileLevel1, isProfileLevel2, isMyAccount} = allData;
  const api = new ApiService();
  const [allPubications, setAllPublications] = useState(null);

  const { setRequestLoading } = useRequestLoading();
  

  const fetLinks = async () => {
    try {
      setRequestLoading(true)
      const resp = await api.getWithToken("/publication/getAll");
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

  return (
    <div className='font-notoSans mt-5'>
      { isMyAccount ? <SociaNetwork ProfileData={ProfileData} /> : '' }

      { allPubications ? <Publications allPubications={allPubications} isMyAccount={isMyAccount} fetLinks={fetLinks}/> : '' }
      
      
    </div>
  )
}

export default Links