import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom';


function LoggedIn({user, config}) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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


  return (
    <div className='flex gap-3 items-center'>
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
                <img className="w-full h-full rounded-full" src={config.noImage} alt="user photo" />
              </span>
            </button>
            <div className={`z-50 absolute top-12 right-0 ${!isDropdownOpen ? 'hidden' : 'block'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{user.first_name}  {user.last_name}</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" to='/'>Dashboard</NavLink>
                </li>
                <li>
                  <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" to='/'>Settings</NavLink>
                </li>
                <li>
                  <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" to='/'>Chat</NavLink>
                </li>
                <li>
                  <NavLink className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" to='/logout'>Log Out</NavLink>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        

      </div>
      

    </div>
  )
}

export default LoggedIn