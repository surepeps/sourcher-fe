import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiService from '../helpers/http/apiService';
import { responseCatcher } from '../helpers/http/response';
import MyChat from '../views/pages/chat/MyChat';
import { useRequestLoading } from '../context/LoadingContext';
import { toast } from 'react-toastify';


function ChatController({ config, userData, isLoggedIn, skeleton: Skeleton, Error_404: Error404, ...rest }) {
  const [isProfileData, setIsProfileData] = useState(null);
  const [contactMessages, setContactMessages] = useState(null);
  const [showContactsBar, setShowContactsBar] = useState(false);
  const [allContacts, setAllContacts] = useState(null);
  const [pgLoading, setPgLoading] = useState(true);

  const { username } = useParams();
  const { setRequestLoading } = useRequestLoading();
  const api = new ApiService();

  const navigate = useNavigate();

  // Fetch user Data and check if the user exists
  const fetchProfile = async (username) => {
    try {
      const response = await api.getWithOutToken(`/profile/${username}`);
      setIsProfileData(response.data.user);
    } catch (err) {
      responseCatcher(err);
    } finally {
      setPgLoading(false);
    }
  };

  const fetchContacts = async () => {
    try{
        const getContacts = await api.getWithToken('/chat/getContacts');
        setAllContacts(getContacts.data);

    }catch (err) {
        console.log("Error", err)
    }
  }

  const fetchChatData = async (username) => {
    setRequestLoading(true);

    try {
      
        await fetchContacts();

      if (username) {
        setShowContactsBar(true);
        await fetchProfile(username);
        const response = await api.getWithToken(`/chat/${username}`);
        setContactMessages(response.data);
      } else {
        setShowContactsBar(false);
      }
    } catch (err) {
      responseCatcher(err);
    } finally {
      setPgLoading(false);
      setRequestLoading(false);
    }
  };

  useEffect(() => {
    if (userData.account_type != "user") {
      fetchChatData(username);
    }else{
      toast.error("Sorry Upgrade your Account to access this page");
      navigate('/')
    }
  
  }, [username, isLoggedIn, userData]);

  return (
    <div>
      {pgLoading ? <Skeleton /> : (isProfileData || !username) ? (
        <MyChat
          config={config}
          username={username ?? null}
          contactMessages={contactMessages}
          showContactsBar={showContactsBar}
          allContacts={allContacts}
          iamLoggedIn={isLoggedIn ?? false}
          myData={userData ?? null}
          ProfileData={isProfileData}
          setContactMessages={setContactMessages}
          fetchContacts={fetchContacts}
        />
      ) : (
        <Error404 />
      )}
    </div>
  );
}

export default ChatController;
