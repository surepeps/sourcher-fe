import React, {useEffect, useState} from 'react'
import ApiService from '../../../../helpers/http/apiService'
import Publications from '../others/Publications'
import SociaNetwork from '../others/SociaNetwork'
import { useRequestLoading } from '../../../../context/LoadingContext'


function Links({ProfileData}) {
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
      <SociaNetwork ProfileData={ProfileData} />

      { allPubications ? <Publications allPubications={allPubications} isMyAccount={true} fetLinks={fetLinks}/> : '' }
      
    </div>
  )
}

export default Links