import React from 'react'
import HomeBanner from './components/banner/HomeBanner'



function Home({config}) {
  return (
    <div>
      {/* Home Banner */}
      <HomeBanner config={config} />
      
    </div>
  )
}

export default Home