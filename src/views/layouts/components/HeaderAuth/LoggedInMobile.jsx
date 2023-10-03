import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { useModal } from '../../../../context/ModalService';
import Logout from '../../../modals/Logout';


function LoggedInMobile({user, config, closeMobileMenu}) {

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
    closeMobileMenu();
  };

  const logoutModal = () => {
    closeDropBarMenu();
    openModal(<Logout closeModal={closeModal}/>);
  }

  return (
    <div className='flex gap-6 flex-col w-full font-notoSans'>
      <div className="flex justify-between items-center w-full">
        <div className="lft flex gap-3 items-center">
          <span>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
              <path d="M13.3843 6.69995H6.98434C6.72434 6.69995 6.47434 6.70995 6.23434 6.73995C3.54434 6.96995 2.19434 8.55995 2.19434 11.49V15.49C2.19434 19.49 3.79434 20.28 6.98434 20.28H7.38434C7.60434 20.28 7.89434 20.43 8.02434 20.6L9.22434 22.2C9.75434 22.91 10.6143 22.91 11.1443 22.2L12.3443 20.6C12.4943 20.4 12.7343 20.28 12.9843 20.28H13.3843C16.3143 20.28 17.9043 18.94 18.1343 16.24C18.1643 16 18.1743 15.75 18.1743 15.49V11.49C18.1743 8.29995 16.5743 6.69995 13.3843 6.69995ZM6.69434 14.7C6.13434 14.7 5.69434 14.25 5.69434 13.7C5.69434 13.15 6.14434 12.7 6.69434 12.7C7.24434 12.7 7.69434 13.15 7.69434 13.7C7.69434 14.25 7.24434 14.7 6.69434 14.7ZM10.1843 14.7C9.62434 14.7 9.18434 14.25 9.18434 13.7C9.18434 13.15 9.63434 12.7 10.1843 12.7C10.7343 12.7 11.1843 13.15 11.1843 13.7C11.1843 14.25 10.7443 14.7 10.1843 14.7ZM13.6843 14.7C13.1243 14.7 12.6843 14.25 12.6843 13.7C12.6843 13.15 13.1343 12.7 13.6843 12.7C14.2343 12.7 14.6843 13.15 14.6843 13.7C14.6843 14.25 14.2343 14.7 13.6843 14.7Z" fill="#0F172A"/>
              <path d="M22.1746 7.48995V11.49C22.1746 13.49 21.5546 14.85 20.3146 15.6C20.0146 15.78 19.6646 15.54 19.6646 15.19L19.6746 11.49C19.6746 7.48995 17.3846 5.19995 13.3846 5.19995L7.29458 5.20995C6.94458 5.20995 6.70458 4.85995 6.88458 4.55995C7.63458 3.31995 8.99458 2.69995 10.9846 2.69995H17.3846C20.5746 2.69995 22.1746 4.29995 22.1746 7.48995Z" fill="#0F172A"/>
              </g>
            </svg>
          </span>
          <p className='text-md font-semibold'>Messages</p>
        </div>
        <span className='rounded-full px-2 py-1 bg-red-600 text-textWhite text-xs'>3</span>
      </div>

      <div className="flex justify-between items-center">
        <div className="lft flex gap-3 items-center">
          <span>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
              <path d="M20.3845 14.76L19.2545 12.88C19.0045 12.47 18.7845 11.68 18.7845 11.2V9.33C18.7845 5.7 15.8345 2.75 12.2145 2.75C8.58454 2.76 5.63454 5.7 5.63454 9.33V11.19C5.63454 11.67 5.41454 12.46 5.17454 12.87L4.04454 14.75C3.61454 15.48 3.51454 16.31 3.78454 17.03C4.05454 17.76 4.66454 18.34 5.46454 18.6C6.54454 18.96 7.63454 19.22 8.74454 19.41C8.85454 19.43 8.96454 19.44 9.07454 19.46C9.21454 19.48 9.36454 19.5 9.51454 19.52C9.77454 19.56 10.0345 19.59 10.3045 19.61C10.9345 19.67 11.5745 19.7 12.2145 19.7C12.8445 19.7 13.4745 19.67 14.0945 19.61C14.3245 19.59 14.5545 19.57 14.7745 19.54C14.9545 19.52 15.1345 19.5 15.3145 19.47C15.4245 19.46 15.5345 19.44 15.6445 19.42C16.7645 19.24 17.8745 18.96 18.9545 18.6C19.7245 18.34 20.3145 17.76 20.5945 17.02C20.8745 16.27 20.7945 15.45 20.3845 14.76ZM12.9445 10.7C12.9445 11.12 12.6045 11.46 12.1845 11.46C11.7645 11.46 11.4245 11.12 11.4245 10.7V7.6C11.4245 7.18 11.7645 6.84 12.1845 6.84C12.6045 6.84 12.9445 7.18 12.9445 7.6V10.7Z" fill="#0F172A"/>
              <path d="M15.024 20.71C14.604 21.87 13.494 22.7 12.194 22.7C11.404 22.7 10.624 22.38 10.074 21.81C9.75402 21.51 9.51402 21.11 9.37402 20.7C9.50402 20.72 9.63402 20.73 9.77402 20.75C10.004 20.78 10.244 20.81 10.484 20.83C11.054 20.88 11.634 20.91 12.214 20.91C12.784 20.91 13.354 20.88 13.914 20.83C14.124 20.81 14.334 20.8 14.534 20.77C14.694 20.75 14.854 20.73 15.024 20.71Z" fill="#0F172A"/>
              </g>
            </svg>
          </span>
          <p className='text-md font-semibold'>Notifications</p>
        </div>
        <span className='rounded-full px-2 py-1 bg-red-600 text-textWhite text-xs'>3</span>
      </div>

      <div className="userData">
        <div className="flex items-center md:order-2 relative" ref={dropdownRef}>
          <div onClick={toggleDropdown} className="flex w-full gap-3 justify-between items-center">
            <div className="flex gap-3 items-center">
              <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded={isDropdownOpen} data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <span className='w-[48px] h-[48px] rounded-full'>
                  <img className="w-full h-full rounded-full" src={config.noImage} alt="user photo" />
                </span>
              </button>
              <p className='text-md font-medium'>{user.first_name} {user.last_name}</p>
            </div>
            
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.61901 17.925C7.46068 17.925 7.30234 17.8666 7.17734 17.7416C6.93568 17.5 6.93568 17.1 7.17734 16.8583L12.6107 11.425C13.0107 11.025 13.0107 10.375 12.6107 9.97497L7.17734 4.54163C6.93568 4.29997 6.93568 3.89997 7.17734 3.6583C7.41901 3.41663 7.81901 3.41663 8.06068 3.6583L13.494 9.09163C13.919 9.51663 14.1607 10.0916 14.1607 10.7C14.1607 11.3083 13.9273 11.8833 13.494 12.3083L8.06068 17.7416C7.93568 17.8583 7.77734 17.925 7.61901 17.925Z" fill="#1E293B"/>
            </svg>

          </div>
            
            <div className={`z-50 absolute top-12 left-0 w-full right-0 ${!isDropdownOpen ? 'hidden' : 'block'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{user.first_name} {user.last_name}</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <NavLink onClick={closeDropBarMenu} to={`/sh/${user.username}`} className="px-4 py-2 text-sm items-center font-semibold flex gap-5 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
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
                  <NavLink onClick={closeDropBarMenu} className="px-4 py-2 text-sm items-center font-semibold flex gap-5 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" to='/'>
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
                  <NavLink onClick={logoutModal} className="px-4 py-2 text-sm items-center font-semibold flex gap-5 text-awimRed hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
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

export default LoggedInMobile