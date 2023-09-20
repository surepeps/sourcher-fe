import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';


function MainLayout({ children, config, userData, skeleton }) {
  return (
    <div>
      {/* Footer */}
      <Header config={config} />
    
      <div className="mt-18 lg:mt-[90px]">
        {React.Children.map(children, child => {
          return React.cloneElement(child, { config });
        })}
      </div>
      
        {/* Footer */}
        <Footer config={config} />

    </div>
  )
}

export default MainLayout