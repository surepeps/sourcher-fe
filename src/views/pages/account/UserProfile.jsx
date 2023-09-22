import React, { useState } from 'react'

function UserProfile() {

  // Initialize the active tab state
  const [activeTab, setActiveTab] = useState(1);

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Helper function to determine if a tab is active
  const isTabActive = (tabId) => {
    return tabId === activeTab;
  };

  return (
    <div className='max-w-screen-2xl relative mx-auto px-4 w-full py-10'>
      {/* Top Nav */}
      <div className="flex absolute -top-14 w-full">
        <button
          onClick={() => handleTabClick(1)}
          className={`${
            activeTab === 1
              ? "bg-textPurple pb-6"
              : "text-gray-600"
          } items-center flex text-lg font-medium gap-3 text-white py-2 px-6 focus:outline-none`}
        >
          <span>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9987 2.33333C8.59703 2.33333 6.64453 4.28583 6.64453 6.6875C6.64453 9.04333 8.48703 10.95 10.8887 11.0325C10.962 11.0233 11.0354 11.0233 11.0904 11.0325C11.1087 11.0325 11.1179 11.0325 11.1362 11.0325C11.1454 11.0325 11.1454 11.0325 11.1545 11.0325C13.5012 10.95 15.3437 9.04333 15.3529 6.6875C15.3529 4.28583 13.4004 2.33333 10.9987 2.33333Z" fill="white"/>
              <path d="M15.6569 13.4708C13.0994 11.7658 8.92854 11.7658 6.35271 13.4708C5.18854 14.25 4.54688 15.3042 4.54688 16.4317C4.54688 17.5592 5.18854 18.6042 6.34354 19.3742C7.62688 20.2358 9.31354 20.6667 11.0002 20.6667C12.6869 20.6667 14.3735 20.2358 15.6569 19.3742C16.8119 18.595 17.4535 17.55 17.4535 16.4133C17.4444 15.2858 16.8119 14.2408 15.6569 13.4708Z" fill="white"/>
            </svg>
          </span>
          Personal Details
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`${
            activeTab === 2
              ? "bg-blue-500"
              : "text-gray-600"
          } flex-1 py-2 px-4 focus:outline-none text-white`}
        >
          Professional Details
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`${
            activeTab === 3
              ? "bg-blue-500"
              : "text-gray-600"
          } flex-1 py-2 px-4 rounded-tr-lg focus:outline-none text-white`}
        >
          Upload Links
        </button>
      </div>
      <div className="bg-white p-4 rounded-b-lg">
        <div
          className={`${
            activeTab === 1
              ? "block transition-opacity duration-300"
              : "hidden transition-opacity duration-300"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          {/* Personal details form fields go here */}
        </div>
        <div
          className={`${
            activeTab === 2
              ? "block transition-opacity duration-300"
              : "hidden transition-opacity duration-300"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Professional Details</h2>
          {/* Professional details form fields go here */}
        </div>
        <div
          className={`${
            activeTab === 3
              ? "block transition-opacity duration-300"
              : "hidden transition-opacity duration-300"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Upload Links</h2>
          {/* Upload links or content go here */}
        </div>
      </div>


    </div>
  )
}

export default UserProfile