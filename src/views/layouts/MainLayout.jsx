import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';


function MainLayout({ children, config, isLoggedIn, userData, skeleton }) {

  return (
    <div>
      {/* Footer */}
      <Header userData={userData} isLoggedIn={isLoggedIn} config={config} />
    
      <div className="mt-18 lg:mt-[90px]">
        {React.Children.map(children, child => {
          return React.cloneElement(child, { config, isLoggedIn });
        })}
      </div>
      
        {/* Footer */}
        <Footer config={config} />

    </div>
  )
}

export default MainLayout