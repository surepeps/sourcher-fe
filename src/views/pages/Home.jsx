import React from 'react'
import HomeBanner from './components/banner/HomeBanner'
import Partners from './components/Partners'
import { categories } from '../../models/categories'
import ExplorExpert from './components/experts/ExplorExpert'
import FeatureExperts from './components/experts/FeatureExperts'
import FeatureCategory from './components/category/FeatureCategory'
import About from './components/about/About'
import AdsBanner from './components/banner/AdsBanner'
import HowItWorks from './components/about/HowItWorks'
import BecomeExpertBanner from './components/banner/BecomeExpertBanner'




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
      <div className="lg:pt-24 pt-8">
        <About />
      </div>

      {/* Ads Banner */}
      <div className="pt-24">
        <AdsBanner />
      </div>

      {/* How it works */}
      <div className='pt-24'>
        <HowItWorks />
      </div>

      {/* Become and Expert Banner */}
      <div className='pt-24'>
        <BecomeExpertBanner config={config} />
      </div>


    </div>
  )
}

export default Home