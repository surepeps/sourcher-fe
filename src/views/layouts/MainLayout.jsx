import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import { useRequestLoading } from '../../context/LoadingContext';
import OverlaySpinner from '../miscellaneous/OverlaySpinner';


function MainLayout({ children, config, isLoggedIn, userData, skeleton, Error_404 }) {
  const {isRequestLoading} = useRequestLoading();

  return (
    <div>

      {/* Header */}
      <Header userData={userData} isLoggedIn={isLoggedIn} config={config} />

      <div className="mt-18 lg:mt-[90px]">
        {React.Children.map(children, child => {
          return React.cloneElement(child, { config, userData, isLoggedIn, skeleton, Error_404 });
        })}
      </div>
      
      {/* Footer */}
      <Footer config={config} />
      
      {isRequestLoading ? <OverlaySpinner /> : ""}

    </div>
  )
}

export default MainLayout