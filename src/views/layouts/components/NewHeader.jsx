import React, {useState} from 'react'
import { Menu } from '../../../models/topNavMenu'
import { NavLink, useLocation } from 'react-router-dom'


function NewHeader({config}) {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const location = useLocation();

    const pathName = location.pathname;

  return (
    <div>
        <div className='bg-green-300 py-2 border-gray-200 dark:bg-gray-900'>
            <div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto lg:p-4 relative'>
                <div className="logoCont">
                    <NavLink to='/' className="flex items-center px-4">
                        <img src={config.awimDarkLogo} className="mr-3" alt="" />
                    </NavLink>
                </div>

                <div className="NavList">
                    <div className={`items-center justify-between ${isMobileMenuOpen ? 'block' : 'hidden'} w-full bg-white rounded-b-2xl md:flex md:w-auto md:order-1 transition-transform ease-in-out duration-300`} id="navbar-language">
                        <ul className="flex flex-col gap-2 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white transition-max-height duration-300 ease-in-out">
                        {
                            
                            Menu.map(oneMenu => (
                            <li key={oneMenu.name}>
                                <NavLink to={oneMenu.path} className={`block py-2 pl-3 pr-4 rounded md:bg-transparent hover:text-awimYellow md:p-0 md:dark:text-blue-500 ${oneMenu.familyLink.includes(pathName) ? 'text-awimYellow' : 'text-gray-900' } `} aria-current="page">{oneMenu.name}</NavLink>
                            </li>
                            ))
                        }
                        
                        </ul>
                    </div>
                </div>

                <div className="Others">

                </div>

            </div>
        </div>
    </div>
    
  )
}

export default NewHeader