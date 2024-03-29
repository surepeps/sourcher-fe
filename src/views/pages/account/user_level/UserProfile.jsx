import React, { useState } from 'react';
import Links from './Links';
import ProfessionalProfile from './ProfessionalProfile';
import BasicInfo from './BasicInfo';
import PendingAccount from '../others/PendingAccount';

 
const tabs = [
  { label: 'Basic Info', allowedUserTypes: ['user', 'user_2'], component: BasicInfo },
  { label: 'Professional Profile', allowedUserTypes: ['user', 'user_2'], component: ProfessionalProfile },
  { label: 'Upload Links', allowedUserTypes: ['user', 'user_2'], component: Links },
];

const tabIcons = {
  'Basic Info': (
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9987 2.33333C8.59703 2.33333 6.64453 4.28583 6.64453 6.6875C6.64453 9.04333 8.48703 10.95 10.8887 11.0325C10.962 11.0233 11.0354 11.0233 11.0904 11.0325C11.1087 11.0325 11.1179 11.0325 11.1362 11.0325C11.1454 11.0325 11.1454 11.0325 11.1545 11.0325C13.5012 10.95 15.3437 9.04333 15.3529 6.6875C15.3529 4.28583 13.4004 2.33333 10.9987 2.33333Z" fill="white"/>
      <path d="M15.6569 13.4708C13.0994 11.7658 8.92854 11.7658 6.35271 13.4708C5.18854 14.25 4.54688 15.3042 4.54688 16.4317C4.54688 17.5592 5.18854 18.6042 6.34354 19.3742C7.62688 20.2358 9.31354 20.6667 11.0002 20.6667C12.6869 20.6667 14.3735 20.2358 15.6569 19.3742C16.8119 18.595 17.4535 17.55 17.4535 16.4133C17.4444 15.2858 16.8119 14.2408 15.6569 13.4708Z" fill="white"/>
    </svg>
  ),
  'Professional Profile': (
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3325 6.89833C18.5533 6.03667 17.2608 5.60583 15.3633 5.60583H15.1433V5.56917C15.1433 4.02917 15.1433 2.1225 11.6966 2.1225H10.3033C6.85662 2.1225 6.85662 4.02917 6.85662 5.56917V5.60583H6.63662C4.73912 5.60583 3.43745 6.03667 2.66745 6.89833C1.75995 7.91583 1.78745 9.26333 1.87912 10.1892L1.88829 10.2533L1.94987 10.9718C1.96307 11.1258 2.0466 11.2651 2.17634 11.349C2.43138 11.5139 2.70173 11.6861 2.96079 11.83C3.08912 11.9125 3.22662 11.9858 3.36412 12.0592C4.39995 12.6275 5.50912 13.0767 6.64579 13.3883C6.67329 15.7625 8.61662 17.6875 11 17.6875C13.4016 17.6875 15.3541 15.735 15.3541 13.3333V13.2967C16.5091 12.9483 17.6183 12.4625 18.6541 11.8575C18.7091 11.83 18.7458 11.8025 18.7916 11.775C19.148 11.5813 19.5175 11.3287 19.8558 11.0891C19.9721 11.0067 20.0471 10.8781 20.0624 10.7364L20.1208 10.1983C20.13 10.1433 20.13 10.0975 20.1391 10.0333C20.2125 9.11667 20.1941 7.85167 19.3325 6.89833ZM8.16745 5.56917C8.16745 4.01083 8.16745 3.42417 10.3033 3.42417H11.6966C13.8325 3.42417 13.8325 4.01083 13.8325 5.56917V5.60583H8.16745V5.56917ZM11 16.3125C9.48745 16.3125 8.23162 15.1758 8.04829 13.7092C8.02995 13.59 8.02079 13.4617 8.02079 13.3333C8.02079 11.6925 9.35912 10.3542 11 10.3542C12.6408 10.3542 13.9791 11.6925 13.9791 13.3333C13.9791 13.4433 13.97 13.5442 13.9608 13.645V13.6542C13.7958 15.1483 12.5308 16.3125 11 16.3125Z" fill="white"/>
      <path d="M10.4794 15.1942C10.3053 15.1942 10.1311 15.13 9.99359 14.9925L9.08609 14.0942C8.82026 13.8283 8.82026 13.3883 9.08609 13.1225C9.35193 12.8567 9.79193 12.8567 10.0578 13.1225L10.4978 13.5625L11.9736 12.2058C12.2486 11.9492 12.6886 11.9675 12.9453 12.2425C13.2019 12.5175 13.1836 12.9575 12.9086 13.2142L10.9561 15.02C10.8094 15.13 10.6444 15.1942 10.4794 15.1942Z" fill="white"/>
      <path d="M19.2888 13.0868C19.5167 12.9602 19.8125 13.1437 19.7888 13.4034L19.4629 16.9643C19.2704 18.7977 18.5188 20.6677 14.4854 20.6677H7.50042C3.46708 20.6677 2.71542 18.7977 2.53208 16.9735L2.21504 13.5788C2.19042 13.3152 2.4723 13.1371 2.70625 13.261C3.42125 13.6552 4.16375 14.0035 4.92458 14.2785C5.20875 14.3793 5.41042 14.6177 5.49292 14.911C6.18042 17.2943 8.39875 19.0635 11.0021 19.0635C13.6512 19.0635 15.8879 17.2577 16.5387 14.7827C16.6121 14.4893 16.8138 14.251 17.0979 14.141C17.8679 13.8385 18.6013 13.481 19.2888 13.0868Z" fill="white"/>
    </svg>
  ),
  'Upload Links': (
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4794 13.5533C17.2135 13.8192 16.7919 13.8192 16.5352 13.5533C16.2694 13.2875 16.2694 12.8658 16.5352 12.6092C18.3685 10.7758 18.3685 7.79667 16.5352 5.9725C14.7019 4.14833 11.7227 4.13917 9.89854 5.9725C8.07437 7.80583 8.06521 10.785 9.89854 12.6092C10.1644 12.875 10.1644 13.2967 9.89854 13.5533C9.63271 13.8192 9.21104 13.8192 8.95437 13.5533C6.59854 11.1975 6.59854 7.36583 8.95437 5.01917C11.3102 2.6725 15.1419 2.66333 17.4885 5.01917C19.8352 7.375 19.8352 11.1975 17.4794 13.5533Z" fill="white"/>
      <path d="M4.51802 9.44667C4.78386 9.18083 5.20552 9.18083 5.46219 9.44667C5.72802 9.7125 5.72802 10.1342 5.46219 10.3908C3.62886 12.2242 3.62886 15.2033 5.46219 17.0275C7.29552 18.8517 10.2747 18.8608 12.0989 17.0275C13.923 15.1942 13.9322 12.215 12.0989 10.3908C11.833 10.125 11.833 9.70333 12.0989 9.44667C12.3647 9.18083 12.7864 9.18083 13.043 9.44667C15.3989 11.8025 15.3989 15.6342 13.043 17.9808C10.6872 20.3275 6.85552 20.3367 4.50886 17.9808C2.16219 15.625 2.16219 11.8025 4.51802 9.44667Z" fill="white"/>
    </svg>
  )
};

const TabSwitcher = ({ userType, activeTab, handleTabClick, isMyAccount }) => {
  return (
    <div className="tabCont flex absolute space-x-10 lg:space-x-32 overflow-x-auto ScrollableCont -top-9 lg:-top-14 left-0 right-0 w-full px-4">
      {tabs.map((tab) => (
        (isMyAccount || tab.label === 'Basic Info') && tab.allowedUserTypes.includes(userType) ? (
          <button
            key={tab.label}
            onClick={() => handleTabClick(tab.label)}
            className={`rounded-md ${
              activeTab === tab.label ? 'bg-textPurple' : 'text-gray-600'
            } items-center flex text-sm lg:text-md pt-2 lg:pt-4 pb-4 lg:pb-7  hover:bg-textPurple duration-300 transition ease-in-out font-medium gap-3 px-8 focus:outline-none text-white whitespace-nowrap`}
          >
            {tabIcons[tab.label]}
            {tab.label}
          </button>
        ) : null
      ))}
    </div>
  );
};

function UserProfile({ allData }) {
  const { ProfileData, iamLoggedIn, isMyAccount, config } = allData;
  const [activeTab, setActiveTab] = useState('Basic Info');
  const userType = ProfileData?.account_type;
  const requestType = ProfileData?.request_type;

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className="">
      <TabSwitcher userType={userType} activeTab={activeTab} handleTabClick={handleTabClick} isMyAccount={isMyAccount} />

    
      <div className="bg-white p-4 rounded-b-lg">
        {
          userType == 'user_2' && requestType == "pending" ? <PendingAccount /> : <>

            {tabs.map((tab) => (
                <div
                  key={tab.label}
                  className={`${
                    activeTab === tab.label
                      ? 'block transition-opacity duration-300'
                      : 'hidden transition-opacity duration-300'
                  }`}
                >
                  {React.createElement(tab.component, { allData })}
                </div>
            ))}
          
          </>
        }

      </div>
    </div>
  );
}

export default UserProfile;