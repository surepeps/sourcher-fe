import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserImageUrlCreator, addEllipsisIfLong, chatTimer } from '../../../helpers/Helper'



function SingleContact({config, contactData, recieverUsername}) {
  return (
    <NavLink to={`/sh/chat/${contactData.username}`} className={`ingleContact hover:bg-[#F2F4F7] ${contactData.username == recieverUsername ? 'bg-[#F2F4F7]' : ''} cursor-pointer transition duration-300 ease-in-out p-3 mb-5 rounded-lg flex justify-start gap-5`}>
        <div className="imgSec h-12 w-12 rounded-full">
            <img src={UserImageUrlCreator(contactData.avatar)} className='w-full h-full rounded-full' alt="" />
        </div>
        <div className="dataSec justify-between w-[80%] flex gap-5">
            <div className="nameData flex flex-col gap-1">
                <h3 className="userName font-semibold text-sm">{contactData.first_name+ ' ' +contactData.last_name} </h3>
                <p className="LastMsg font-light text-sm"><b>{contactData.whoOwnsLastMessage == "sent" ? 'You: ' : ''}</b>{addEllipsisIfLong(contactData.lastMessage, 25)}</p>
            </div>
            <div className="timeCount flex flex-col gap-1">
                <p className="time text-xs">{chatTimer(contactData.lastMessageTimestamp)}</p>
                {
                    contactData.whoOwnsLastMessage != 'sent' && contactData.unreadCount > 0 ? 
                    <p className="count p-1 text-xs bg-awimGreen rounded-full text-bgColor text-center">{contactData.unreadCount}</p>
                    : contactData.whoOwnsLastMessage == 'sent' && contactData.unreadCount == 0 ? 
                    <span>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.352 2.14367C15.7535 1.76445 15.7716 1.13154 15.3924 0.730033C15.0131 0.328522 14.3802 0.310451 13.9787 0.689671L4.95986 9.20782L2.01867 6.42992C1.61716 6.0507 0.984255 6.06877 0.605035 6.47028C0.225815 6.87179 0.243885 7.50469 0.645395 7.88391L4.27322 11.3103C4.65861 11.6743 5.2611 11.6743 5.64649 11.3103L15.352 2.14367Z" fill="#004C3F"/>
                        </svg>
                    </span>
                    : ''
                }
                
            </div>
        </div>
    </NavLink>
  )
}

export default SingleContact