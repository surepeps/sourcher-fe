import React from 'react'
import HomeBanner from './components/banner/HomeBanner'
import Partners from './components/Partners'
import ExplorExpert from './components/ExplorExpert'
import { categories } from '../../models/categories'



function Home({config}) {
  return (
    <div>
      {/* Home Banner */}
      <HomeBanner config={config} />
      
      {/* Partners */}
      <Partners config={config}/>

      {/* Explore Expert */}
      <div className="pt-10">
        <ExplorExpert categories={categories}/>
      </div>

    </div>
  )
}

export default Home