import React from 'react'
import HomeBanner from './components/banner/HomeBanner'
import Partners from './components/Partners'
import { categories } from '../../models/categories'
import ExplorExpert from './components/experts/ExplorExpert'
import FeatureExperts from './components/experts/FeatureExperts'
import FeatureCategory from './components/category/FeatureCategory'
import About from './components/about/About'




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

      {/* Featured Experts */}
      <div className="pt-14">
        <FeatureExperts />
      </div>

      {/* Fetaure Category */}
      <div className="pt-24">
        <FeatureCategory />
      </div>

      {/* About Awim */}
      <div className="pt-24">
        <About />
      </div>

    </div>
  )
}

export default Home