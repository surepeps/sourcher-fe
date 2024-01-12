import React, {useState, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import SingleContact from './SingleContact'
import SingleRightChat from './SingleRightChat'
import SingleLeftChat from './SingleLeftChat'
import NoContactFound from './NoContactFound'
import { UserImageUrlCreator } from '../../../helpers/Helper'
import ApiService from '../../../helpers/http/apiService'
import { toast } from 'react-toastify'
import { responseCatcher } from '../../../helpers/http/response'
import PendingAccount from '../account/others/PendingAccount'


function MyChat({...rest}) {
    const [message, setMessage] = useState('');
    const inputRef = useRef(null);
    const [isSendingMsg, setIsSendMsg] = useState(false);

    const {config, showContactsBar, username, myData, setContactMessages, fetchContacts, ProfileData, allContacts, contactMessages} = rest;
    const api = new ApiService();

    const [searchQuery, setSearchQuery] = useState('');

    const filteredContacts = allContacts.filter((contact) => {
        const searchTerm = searchQuery.toLowerCase();
        const isMatch =
        contact.first_name.toLowerCase().includes(searchTerm) ||
        contact.last_name.toLowerCase().includes(searchTerm) ||
        contact.username.toLowerCase().includes(searchTerm) ||
        contact.lastMessage.toLowerCase().includes(searchTerm);

        return isMatch;
    });

    console.log("All My Data", myData)

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const trimmedValue = inputValue.trimStart(); // Remove leading whitespace only
        setMessage(trimmedValue);
    };

    const sendMessage = async () => {
        if (message.length > 0) {
          try {
            setIsSendMsg(true);
            const payload = {
              receiverId: ProfileData.id,
              message,
            };
    
            const response = await api.postWithToken('/chat/message', payload);
    
            setContactMessages((prevMessages) => [
              ...prevMessages,
              {
                id: response.data.id,
                senderId: response.data.senderId,
                receiverId: response.data.receiverId,
                read: response.data.read,
                message: response.data.message,
                timestamp: response.data.createdAt,
              },
            ]);
    
            await fetchContacts();
    
            setMessage('');
          } catch (error) {
            responseCatcher(error);
          }finally{
            setIsSendMsg(false)
          }
        } else {
          toast.error('Please enter a non-empty message');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
    };

  return (
    <div className='w-full'>
        

            <div className="max-w-screen-2xl relative mx-auto lg:px-4 px-6 mt-12 lg:mt-0 py-10 font-notoSans">

            {
                myData?.request_type =="pending" ? <PendingAccount /> :
                
                <div className="chatCont w-full flex">

                    {/* Left Section */}
                    <div className={`leftSection lg:border-r lg:border-[#D9D9D9] h-auto lg:w-[27%] w-full pr-4 py-2 ${!showContactsBar ? 'lg:block block' : 'lg:block hidden'} `}>
                        <div className="contactList">
                            <div className="Tiitle">
                                <h1 className='text-2xl pb-7 font-bold'>Messages</h1>
                            </div>
                            <div className="searchSection pb-3">
                                <input 
                                    type="search" 
                                    name="" 
                                    id="" 
                                    className='w-full h-14 rounded-lg border border-[#D9D9D9]' 
                                    placeholder='Search by names' 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <div className="AllContacts h-[620px] overflow-y-auto ScrollableCont py-5">
                            {
                                filteredContacts.length > 0 ? (
                                    filteredContacts.map((contactData, index) => (
                                    <SingleContact
                                        recieverUsername={username}
                                        contactData={contactData}
                                        key={index}
                                        config={config}
                                    />
                                    ))
                                ) : (
                                    <NoContactFound />
                                )
                            }
                            </div>
                        </div>

                    </div>


                    {/* Right Section */}
                    <div className={`rightSection lg:w-[73%] w-full ${showContactsBar ? 'lg:block block' : 'lg:block hidden'}`}>
                        
                        {/* <NoContactFound /> */}
                        {
                            contactMessages ? 
                            <div className="allMsg">
                                {/* User Profile Section */}
                                <div className="profileSection lg:px-8 px-2 flex border-b pt-3 pb-5 border-[#D9D9D9] items-center justify-between w-full">
                                    
                                    <div className="leftProf flex gap-3 justify-center items-center">
                                        <div className="backButton lg:hidden block">
                                            <NavLink to='/sh/chat'>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.97422 15.6834C7.81589 15.6834 7.65755 15.6251 7.53255 15.5001L2.47422 10.4418C2.23255 10.2001 2.23255 9.8001 2.47422 9.55843L7.53255 4.5001C7.77422 4.25843 8.17422 4.25843 8.41589 4.5001C8.65755 4.74176 8.65755 5.14176 8.41589 5.38343L3.79922 10.0001L8.41589 14.6168C8.65755 14.8584 8.65755 15.2584 8.41589 15.5001C8.29922 15.6251 8.13255 15.6834 7.97422 15.6834Z" fill="#1E293B"/>
                                                    <path d="M17.0836 10.625H3.05859C2.71693 10.625 2.43359 10.3417 2.43359 10C2.43359 9.65833 2.71693 9.375 3.05859 9.375H17.0836C17.4253 9.375 17.7086 9.65833 17.7086 10C17.7086 10.3417 17.4253 10.625 17.0836 10.625Z" fill="#1E293B"/>
                                                </svg>
                                            </NavLink>
                                        </div>
                                        <div className="img lg:h-16 lg:w-16 w-12 h-12 rounded-full">
                                            <img src={UserImageUrlCreator(ProfileData.avatar)} className='w-full h-full rounded-full' alt="" />
                                        </div>
                                        <div className="name">
                                            <h2 className="name font-semibold lg:text-lg text-md">{ProfileData.first_name+ ' '+ ProfileData.last_name}</h2>
                                        </div>

                                    </div>
                                    <div className="rightProf">
                                        <NavLink to={`/sh/${ProfileData.username}`} className='lg:p-3 p-3 text-bgColor lg:text-sm text-xs rounded-lg bg-awimGreen'>View Profile</NavLink>
                                    </div>
                                </div>

                                {/* Chat section */}
                                <div className="chatSection h-[640px] px-8 w-full flex justify-between flex-col">
                                    <div className="chatList">
                                        {/* Date */}
                                        <div className="chatDate py-3">
                                            <p className='text-sm text-center text-[#1E293B]'>Today</p>
                                        </div>

                                        <div className="AllMessages overflow-y-auto lg:h-[570px] h-[500px] pb-5 w-full ScrollableCont">
                                            {contactMessages.map((message) => {
                                                const isMyMessage = message.senderId === myData.id;

                                                return (
                                                <React.Fragment key={message.id}>
                                                    {isMyMessage ? (
                                                    <SingleRightChat message={message} />
                                                    ) : (
                                                    <SingleLeftChat imageUrl={ProfileData.avatar} message={message} />
                                                    )}
                                                </React.Fragment>
                                                );
                                            })}
                                        </div>

                                    </div>
                                    <div className="msgInput w-full pt-5">
                                        <form className="msgg p-2 flex justify-between gap-3 border border-[#D9D9D9 rounded-lg">
                                            <input
                                                type="text"
                                                className='w-full border-none'
                                                placeholder="Type a message..."
                                                name="message"
                                                id="message"
                                                value={message}
                                                onChange={handleInputChange}
                                                onKeyPress={handleKeyPress}
                                                ref={inputRef}
                                                disabled={isSendingMsg}
                                            />
                                            <button
                                                disabled={isSendingMsg}
                                                type="button"
                                                onClick={sendMessage}
                                                className='py-3 px-6 transition duration-300 ease-in-out hover:opacity-50 rounded-lg bg-awimGreen text-bgColor text-sm'
                                            >
                                            Send
                                            </button>
                                        </form>
                                    </div>

                                </div>
                            </div>
                            :
                            <NoContactFound />
                        }
                    </div>

                </div>
            }

            </div>
        
    </div>
  )
}

export default MyChat