import React from 'react'
import SingleContactSkeleton from './SingleContactSkeleton';
import SingleLeftChatSkeleton from './SingleLeftChatSkeleton';
import SingleRightChatSkeleton from './SingleRightChatSkeleton';


function ChatSkeleton({showContactsBar}) {
  return (
    <div className='w-full divide-gray-200 rounded animate-pulse dark:divide-gray-700 dark:border-gray-700'>
        <div className='w-full'>
        <div className="max-w-screen-2xl relative mx-auto lg:px-4 px-6 mt-12 lg:mt-0 py-10 font-notoSans">
            
            <div className="chatCont w-full flex">

                {/* Left Section */}
                <div className={`leftSection lg:border-r lg:border-[#D9D9D9] h-auto lg:w-[27%] w-full pr-4 py-2 ${!showContactsBar ? 'lg:block block' : 'lg:block hidden'} `}>
                    <div className="contactList">
                        <div className="Tiitle">
                            <h1 className='h-5 w-32 rounded-lg bg-cardBg pb-7 font-bold'></h1>
                        </div>

                        <div className="searchSection pt-4 pb-3">
                           <div className="h-10 w-full bg-cardBg rounded-lg"></div>
                        </div>

                        <div className="AllContacts h-[620px] overflow-y-auto ScrollableCont py-5">
                        {
                            Array.from({ length: 14 }).map((_, index) => (
                                <SingleContactSkeleton key={index} />
                            ))
                        }
                        </div>
                    </div>

                </div>


                {/* Right Section */}
                <div className={`rightSection lg:w-[73%] w-full ${showContactsBar ? 'lg:block block' : 'lg:block hidden'}`}>
                    
                <div className="allMsg">
                    {/* User Profile Section */}
                    <div className="profileSection lg:px-8 px-2 flex border-b pt-3 pb-5 border-[#D9D9D9] items-center justify-between w-full">
                        
                        <div className="leftProf flex gap-3 justify-center items-center">
                            <div className="img lg:h-16 lg:w-16 w-12 h-12 rounded-full">
                                <div  className='w-14 h-14 bg-cardBg rounded-full' alt="" />
                            </div>
                            <div className="name justify-center items-center flex">
                                <h2 className="name h-5 rounded-lg bg-cardBg w-44 "></h2>
                            </div>

                        </div>
                        <div className="rightProf">
                            <div className='lg:p-3 p-3 h-5 w-20 lg:text-sm text-xs rounded-lg bg-cardBg'></div>
                        </div>
                    </div>

                    {/* Chat section */}
                    <div className="chatSection h-[640px] px-8 w-full flex justify-between flex-col">
                        <div className="chatList">
                            {/* Date */}
                            <div className="chatDate w-full flex justify-center py-3">
                                <p className='text-sm text-center h-4 w-14 bg-cardBg rounded-lg text-[#1E293B]'></p>
                            </div>

                            <div className="AllMessages overflow-y-auto lg:h-[570px] h-[500px] pb-5 w-full ScrollableCont">
                                <SingleRightChatSkeleton />
                                <SingleRightChatSkeleton />
                                <SingleRightChatSkeleton />
                                <SingleLeftChatSkeleton />
                                <SingleLeftChatSkeleton />
                                <SingleRightChatSkeleton />
                                <SingleLeftChatSkeleton />
                            </div>

                        </div>
                        

                    </div>
                </div>
                </div>

            </div>

        </div>
        

    </div>

    </div>
  )
}

export default ChatSkeleton