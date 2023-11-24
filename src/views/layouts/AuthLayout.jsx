import React from 'react'
import { NavLink } from 'react-router-dom';
import { useRequestLoading } from '../../context/LoadingContext';
import OverlaySpinner from '../miscellaneous/OverlaySpinner';
import Logout from '../modals/Logout';
import { useModal } from '../../context/ModalService';

 

function AuthLayout({ children, config, isLoggedIn, userData, skeleton, Error_404 }) {


  const {isRequestLoading} = useRequestLoading();
  const {openModal, closeModal} = useModal();

  const logoutModal = () => {
    openModal(<Logout closeModal={closeModal}/>);
  }


  return (
    <div className='w-full h-screen flex font-notoSans'>
      
      {isRequestLoading ? <OverlaySpinner /> : ""}

      <div className="w-[50%] pl-20 pt-10 hidden lg:block xl:bg-top bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${config.authBanner})` }}>
        <div className='h-20 w-40'>
          <NavLink to='/' >
            <img src={config.SourceherNoBgLogo} alt="" className='h-full w-full' />
          </NavLink>
        </div>
      </div>
      <div className="lg:w-[50%] w-full px-6 md:px-20 lg:px-32 xl:px-38 2xl:px-44 py-5 lg:py-10 ">

        <div className="logoCont block lg:hidden fixed top-0 left-0 bg-white py-5 px-6 md:px-20 lg:px-32 xl:px-38 2xl:px-44 w-full">
          <NavLink to='/'>
            <img src={config.awimDarkLogo} alt="" className='' />
          </NavLink>
        </div>

        <div className="ScrollableCont overflow-y-auto pt-20 lg:pt-0 w-full h-full scrollbar-width-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <div className="back justify-between flex gap-2 items-center cursor-pointer font-semibold py-8">
            
            <NavLink to='/' className="flex gap-2 items-center">
              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.969754 8.03025C0.900271 7.96043 0.845223 7.8776 0.807754 7.7865C0.769635 7.69579 0.75 7.59839 0.75 7.5C0.75 7.40161 0.769635 7.30421 0.807754 7.2135C0.845223 7.1224 0.900271 7.03957 0.969754 6.96975L6.96975 0.96975C7.03894 0.898117 7.1217 0.840981 7.2132 0.801674C7.3047 0.762367 7.40312 0.741677 7.5027 0.740812C7.60229 0.739947 7.70105 0.758923 7.79322 0.796634C7.88539 0.834344 7.96913 0.890034 8.03955 0.960454C8.10997 1.03087 8.16566 1.11461 8.20337 1.20678C8.24108 1.29896 8.26006 1.39772 8.25919 1.4973C8.25833 1.59689 8.23764 1.6953 8.19833 1.7868C8.15902 1.87831 8.10189 1.96106 8.03025 2.03025L3.3105 6.75H16.5C16.6989 6.75 16.8897 6.82902 17.0303 6.96967C17.171 7.11032 17.25 7.30109 17.25 7.5C17.25 7.69891 17.171 7.88968 17.0303 8.03033C16.8897 8.17098 16.6989 8.25 16.5 8.25H3.3105L8.03025 12.9697C8.16687 13.1112 8.24247 13.3007 8.24076 13.4973C8.23905 13.6939 8.16017 13.8821 8.02112 14.0211C7.88206 14.1602 7.69395 14.239 7.4973 14.2408C7.30066 14.2425 7.11121 14.1669 6.96975 14.0303L0.969754 8.03025Z" fill="#0F172A"/>
              </svg>
              Back
            </NavLink>

            {
              isLoggedIn ? 
              <div onClick={logoutModal} className="flex gap-2 text-red-600 items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#EA1644" fillOpacity="0.08"/>
                  <g opacity="0.8">
                  <path d="M12.4732 16.06C12.4732 15.7085 12.7647 15.4171 13.1161 15.4171H17.8132V8.16567C17.8047 7.75424 17.4789 7.42853 17.0675 7.42853C12.019 7.42853 8.49609 10.9514 8.49609 16C8.49609 21.0485 12.019 24.5714 17.0675 24.5714C17.4704 24.5714 17.8047 24.2457 17.8047 23.8342V16.6942H13.1161C12.7561 16.7028 12.4732 16.4114 12.4732 16.06Z" fill="#EB0E3E"/>
                  <path d="M23.3247 15.6057L20.8904 13.1628C20.6418 12.9142 20.2304 12.9142 19.9818 13.1628C19.7333 13.4114 19.7333 13.8228 19.9818 14.0714L21.319 15.4085H17.8047V16.6942H21.3104L19.9733 18.0314C19.7247 18.28 19.7247 18.6914 19.9733 18.94C20.1018 19.0685 20.2647 19.1285 20.4275 19.1285C20.5904 19.1285 20.7533 19.0685 20.8818 18.94L23.3161 16.4971C23.5733 16.2571 23.5733 15.8542 23.3247 15.6057Z" fill="#EB0E3E"/>
                  </g>
                </svg>
              Log Out
            </div>
            : ''
            }
            
          </div>

          <div className="content pb-8">
              {React.Children.map(children, child => {
                return React.cloneElement(child, { config, userData, isLoggedIn, skeleton, Error_404 });
              })}
          </div>
        </div>

      </div>

    </div>
  )
}

export default AuthLayout