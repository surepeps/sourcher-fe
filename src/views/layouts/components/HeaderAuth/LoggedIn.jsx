import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { useModal } from '../../../../context/ModalService';
import Logout from '../../../modals/Logout';
import { UserImageUrlCreator, addEllipsisIfLong } from '../../../../helpers/Helper';



function LoggedIn({user, config}) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {openModal, closeModal} = useModal();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const closeDropBarMenu = () => {
    setIsDropdownOpen(false);
  };

  const logoutModal = () => {
    closeDropBarMenu();
    openModal(<Logout closeModal={closeModal}/>);
  }

  return (
    <div className='flex gap-3 items-center'>
      <NavLink to="/sh/chat">
        <span className='relative cursor-pointer'>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21.65" stroke="#0F172A" strokeOpacity="0.25" strokeWidth="0.7"/>
            <g opacity="0.6">
            <path d="M23.19 16H16.79C16.53 16 16.28 16.01 16.04 16.04C13.35 16.27 12 17.86 12 20.79V24.79C12 28.79 13.6 29.58 16.79 29.58H17.19C17.41 29.58 17.7 29.73 17.83 29.9L19.03 31.5C19.56 32.21 20.42 32.21 20.95 31.5L22.15 29.9C22.3 29.7 22.54 29.58 22.79 29.58H23.19C26.12 29.58 27.71 28.24 27.94 25.54C27.97 25.3 27.98 25.05 27.98 24.79V20.79C27.98 17.6 26.38 16 23.19 16ZM16.5 24C15.94 24 15.5 23.55 15.5 23C15.5 22.45 15.95 22 16.5 22C17.05 22 17.5 22.45 17.5 23C17.5 23.55 17.05 24 16.5 24ZM19.99 24C19.43 24 18.99 23.55 18.99 23C18.99 22.45 19.44 22 19.99 22C20.54 22 20.99 22.45 20.99 23C20.99 23.55 20.55 24 19.99 24ZM23.49 24C22.93 24 22.49 23.55 22.49 23C22.49 22.45 22.94 22 23.49 22C24.04 22 24.49 22.45 24.49 23C24.49 23.55 24.04 24 23.49 24Z" fill="#0F172A"/>
            <path d="M31.9802 16.79V20.79C31.9802 22.79 31.3602 24.15 30.1202 24.9C29.8202 25.08 29.4702 24.84 29.4702 24.49L29.4802 20.79C29.4802 16.79 27.1902 14.5 23.1902 14.5L17.1002 14.51C16.7502 14.51 16.5102 14.16 16.6902 13.86C17.4402 12.62 18.8002 12 20.7902 12H27.1902C30.3802 12 31.9802 13.6 31.9802 16.79Z" fill="#0F172A"/>
            </g>
          </svg>
          <label htmlFor="" className='badge px-1.5 py-0.5 rounded-full bg-red-600 text-textWhite text-[9px] absolute -top-1 -right-1'>2</label>
        </span>
      </NavLink>
    
      <span className='cursor-pointer relative'>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="21.65" stroke="#0F172A" strokeOpacity="0.25" strokeWidth="0.7"/>
          <g opacity="0.6">
          <path d="M30.1912 24.06L29.0612 22.18C28.8112 21.77 28.5912 20.98 28.5912 20.5V18.63C28.5912 15 25.6412 12.05 22.0212 12.05C18.3912 12.06 15.4412 15 15.4412 18.63V20.49C15.4412 20.97 15.2212 21.76 14.9812 22.17L13.8512 24.05C13.4212 24.78 13.3212 25.61 13.5912 26.33C13.8612 27.06 14.4712 27.64 15.2712 27.9C16.3512 28.26 17.4412 28.52 18.5512 28.71C18.6612 28.73 18.7712 28.74 18.8812 28.76C19.0212 28.78 19.1712 28.8 19.3212 28.82C19.5812 28.86 19.8412 28.89 20.1112 28.91C20.7412 28.97 21.3812 29 22.0212 29C22.6512 29 23.2812 28.97 23.9012 28.91C24.1312 28.89 24.3612 28.87 24.5812 28.84C24.7612 28.82 24.9412 28.8 25.1212 28.77C25.2312 28.76 25.3412 28.74 25.4512 28.72C26.5712 28.54 27.6812 28.26 28.7612 27.9C29.5312 27.64 30.1212 27.06 30.4012 26.32C30.6812 25.57 30.6012 24.75 30.1912 24.06ZM22.7512 20C22.7512 20.42 22.4112 20.76 21.9912 20.76C21.5712 20.76 21.2312 20.42 21.2312 20V16.9C21.2312 16.48 21.5712 16.14 21.9912 16.14C22.4112 16.14 22.7512 16.48 22.7512 16.9V20Z" fill="#0F172A"/>
          <path d="M24.8297 30.01C24.4097 31.17 23.2997 32 21.9997 32C21.2097 32 20.4297 31.68 19.8797 31.11C19.5597 30.81 19.3197 30.41 19.1797 30C19.3097 30.02 19.4397 30.03 19.5797 30.05C19.8097 30.08 20.0497 30.11 20.2897 30.13C20.8597 30.18 21.4397 30.21 22.0197 30.21C22.5897 30.21 23.1597 30.18 23.7197 30.13C23.9297 30.11 24.1397 30.1 24.3397 30.07C24.4997 30.05 24.6597 30.03 24.8297 30.01Z" fill="#0F172A"/>
          </g>
        </svg>
        <label htmlFor="" className='badge px-1.5 py-0.5 rounded-full bg-red-600 text-textWhite text-[9px] absolute -top-1 -right-1'>2</label>
      </span>

      <div className="user">
        <div className="flex items-center md:order-2 relative" ref={dropdownRef}>
            <button type="button" onClick={toggleDropdown} className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded={isDropdownOpen} data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <span className='w-[48px] h-[48px] rounded-full'>
                <img className="w-full h-full rounded-full" src={UserImageUrlCreator(user.avatar)} alt={`${user.first_name} ${user.last_name} Picture`} />
              </span>
            </button>
            <div className={`z-50 absolute top-12 right-0 ${!isDropdownOpen ? 'hidden' : 'block'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{addEllipsisIfLong(user.first_name+ ' ' + user.last_name, 20)}</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{addEllipsisIfLong(user.email, 20)}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <NavLink onClick={closeDropBarMenu} to={`/sh/${user.username}`} className="px-4 py-2 text-sm items-center whitespace-nowrap font-semibold flex gap-5 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#273142" fillOpacity="0.08"/>
                        <g opacity="0.8">
                        <path d="M16.005 7.42853C13.7593 7.42853 11.9336 9.25424 11.9336 11.5C11.9336 13.7028 13.6565 15.4857 15.9022 15.5628C15.9707 15.5542 16.0393 15.5542 16.0907 15.5628C16.1079 15.5628 16.1165 15.5628 16.1336 15.5628C16.1422 15.5628 16.1422 15.5628 16.1507 15.5628C18.345 15.4857 20.0679 13.7028 20.0765 11.5C20.0765 9.25424 18.2507 7.42853 16.005 7.42853Z" fill="#1E293B"/>
                        <path d="M20.3573 17.8428C17.9659 16.2485 14.0659 16.2485 11.6573 17.8428C10.5687 18.5713 9.96875 19.5571 9.96875 20.6113C9.96875 21.6656 10.5688 22.6428 11.6487 23.3628C12.8487 24.1685 14.4259 24.5713 16.003 24.5713C17.5802 24.5713 19.1573 24.1685 20.3573 23.3628C21.4373 22.6342 22.0373 21.6571 22.0373 20.5942C22.0288 19.5399 21.4373 18.5628 20.3573 17.8428Z" fill="#1E293B"/>
                        </g>
                      </svg>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={closeDropBarMenu} className="px-4 py-2 text-sm items-center font-semibold whitespace-nowrap flex gap-5 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" to='/'>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#273142" fillOpacity="0.08"/>
                        <g opacity="0.8">
                        <path d="M23.6415 15.2458V11.4829C23.6415 10.7801 23.11 9.98292 22.45 9.7172L17.6758 7.76292C16.6043 7.32577 15.3958 7.32577 14.3243 7.76292L9.55004 9.7172C8.89862 9.98292 8.36719 10.7801 8.36719 11.4829V15.2458C8.36719 19.4372 11.41 23.3629 15.5672 24.5115C15.85 24.5886 16.1586 24.5886 16.4415 24.5115C20.5986 23.3629 23.6415 19.4372 23.6415 15.2458ZM16.6472 16.7458V19.0001C16.6472 19.3515 16.3558 19.6429 16.0043 19.6429C15.6529 19.6429 15.3615 19.3515 15.3615 19.0001V16.7458C14.4958 16.4715 13.8615 15.6658 13.8615 14.7143C13.8615 13.5315 14.8215 12.5715 16.0043 12.5715C17.1872 12.5715 18.1472 13.5315 18.1472 14.7143C18.1472 15.6743 17.5129 16.4715 16.6472 16.7458Z" fill="#1E293B"/>
                        </g>
                      </svg>
                    Reset Password
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={logoutModal} className="px-4 py-2 text-sm items-center font-semibold flex gap-5 whitespace-nowrap text-awimRed hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#EA1644" fillOpacity="0.08"/>
                        <g opacity="0.8">
                        <path d="M12.4732 16.06C12.4732 15.7085 12.7647 15.4171 13.1161 15.4171H17.8132V8.16567C17.8047 7.75424 17.4789 7.42853 17.0675 7.42853C12.019 7.42853 8.49609 10.9514 8.49609 16C8.49609 21.0485 12.019 24.5714 17.0675 24.5714C17.4704 24.5714 17.8047 24.2457 17.8047 23.8342V16.6942H13.1161C12.7561 16.7028 12.4732 16.4114 12.4732 16.06Z" fill="#EB0E3E"/>
                        <path d="M23.3247 15.6057L20.8904 13.1628C20.6418 12.9142 20.2304 12.9142 19.9818 13.1628C19.7333 13.4114 19.7333 13.8228 19.9818 14.0714L21.319 15.4085H17.8047V16.6942H21.3104L19.9733 18.0314C19.7247 18.28 19.7247 18.6914 19.9733 18.94C20.1018 19.0685 20.2647 19.1285 20.4275 19.1285C20.5904 19.1285 20.7533 19.0685 20.8818 18.94L23.3161 16.4971C23.5733 16.2571 23.5733 15.8542 23.3247 15.6057Z" fill="#EB0E3E"/>
                        </g>
                      </svg>
                    Log Out
                  </NavLink>
                </li>
              </ul>
            </div>
            
        </div>
        

      </div>
      

    </div>
  )
}

export default LoggedIn