import React from 'react'
import Header from './components/Header'

function MainLayout({ children, config, userData, skeleton }) {
  return (
    <div>
      <Header config={config} />
    
      {React.Children.map(children, child => {
        return React.cloneElement(child, { config });
      })}

    </div>
  )
}

export default MainLayout