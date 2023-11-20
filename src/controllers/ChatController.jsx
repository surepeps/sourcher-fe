import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ApiService from '../helpers/http/apiService';
import { responseCatcher } from '../helpers/http/response';
import MyChat from '../views/pages/chat/MyChat';
import { useRequestLoading } from '../context/LoadingContext';


function ChatController({config, userData, isLoggedIn, skeleton: Skeleton, Error_404: Error_404, ...rest}) {
    const [isProfileData, setIsProfileData] = useState(null);
    const [contactMessages, setContactMessages] = useState(null);
    const [showContactsBar, setShowContactsBar] = useState(false);
    const [allContacts, setAllContacts] = useState(null);
    const [pgLoading, setPgLoading] = useState(true);

    const { username } = useParams();

    const { setRequestLoading } = useRequestLoading();

    const api = new ApiService();

    // Fetch user Data check if user is existing
    const fetchProfile = async (username) => {
        try{
          const response = await api.getWithOutToken(`/profile/${username}`)
          setIsProfileData(response.data.user)
        }catch(err){
          responseCatcher(err)
        }finally{
          setPgLoading(false)
        }
       
    }


    useEffect(() => {
        async function fetchChatData(username) {
            setRequestLoading(true);
            try {
                const getContacts = await api.getWithToken('/chat/getContacts');
                setAllContacts(getContacts.data)
                if (username) {
                    setShowContactsBar(true);
                    await fetchProfile(username);
                    const response = await api.getWithToken(`/chat/${username}`);
                    setContactMessages(response.data);
                }else{
                    setShowContactsBar(false);
                }
            } catch (err) {
                responseCatcher(err);
            } finally {
                setPgLoading(false);
                setRequestLoading(false)
            }
        }
    
        fetchChatData(username);
    
    }, [username,isLoggedIn, userData]);

  return (
    <div>
        {
            pgLoading ? (<Skeleton />) : 
            isProfileData || !username ? (<MyChat config={config} username={username ?? null} contactMessages={contactMessages} showContactsBar={showContactsBar} allContacts={allContacts} iamLoggedIn={isLoggedIn ?? false} myData={userData ?? null} ProfileData={isProfileData} />) : <Error_404 />
        }
    </div>
  )
}

export default ChatController