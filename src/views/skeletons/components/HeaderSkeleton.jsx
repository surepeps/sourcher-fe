import React from 'react'
import { Menu } from '../../../models/topNavMenu'

function HeaderSkeleton() {
  return (
    <div className='bg-gray-300'>
      <nav className="bg-gray-300 py-2 px-2 lg:px-0 lg:py-0 fixed w-full z-50 top-0 left-0 border-gray-200 dark:bg-gray-900 ">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto lg:p-4">
          <div className="bg-textWhite rounded-lg h-14 w-32 px-4">
              
          </div>
        <div className="flex items-center md:order-2 gap-3 px-4 relative">
            
            <button type="button" className="inline-flex items-center font-medium bg-gray-100 justify-center px-4 w-14 h-8 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
              
            </button>
    

            <div className="gap-3 justify-between hidden lg:flex py-2 px-7">
                <div  className='flex justify-center border-2 border-textWhite h-8 w-14 text-md rounded-lg'></div>
                <div  className='flex justify-center border-2 bg-cardBg h-8 w-14 py-2 px-8 rounded-lg '></div>
            </div>

            <button aria-expanded='false'  type="button" className={`inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-gray-500 rounded-lg lg:hidden bg-cardBg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language transition-transform duration-300 `}>
                
            </button>
        </div>

        <div className={`items-center justify-between hidden w-full rounded-b-2xl lg:flex lg:w-auto md:order-1 transition ease-in-out duration-300`} id="navbar-language">
          <ul className="flex flex-col gap-5 font-medium p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 transition duration-300 ease-in-out">
            {
              
              Menu.map(oneMenu => (
                <li key={oneMenu.name}>
                  <div className={`block rounded-lg bg-textWhite h-5 w-20`} aria-current="page"></div>
                </li>
              ))
            }
            
          </ul>

          <div className="flex justify-between lg:hidden py-2 px-7">
            <div  className='flex justify-center border-2 border-textWhite h-8 w-14 text-md rounded-lg'></div>
            <div  className='flex justify-center border-2 bg-cardBg h-8 w-14 py-2 px-8 rounded-lg '></div>
          </div>

        </div>
        
        </div>
      </nav>

    </div>
  )
}

export default HeaderSkeleton