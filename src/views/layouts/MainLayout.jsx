import React from 'react'
import Header from './components/Header'

function MainLayout({ children, config, userData, skeleton }) {
  return (
    <div>
      <Header config={config} />
    
      <div className="mt-18 lg:mt-[90px]">
        {React.Children.map(children, child => {
          return React.cloneElement(child, { config });
        })}
      </div>
      

    </div>
  )
}

export default MainLayout