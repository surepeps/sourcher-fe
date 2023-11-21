import React from 'react'
import HomeBannerSkeleton from './HomeBannerSkeleton'
import PartnerSkeleton from './PartnerSkeleton'
import ExplorExpertSkeleton from './ExplorExpertSkeleton'



function HomeSkeleton() {
  return (
    <div>
      {/* Home Banner */}
      <HomeBannerSkeleton />
      
      {/* Partners */}
      <PartnerSkeleton />

      {/* Explore Expert */}
      <div className="pt-10">
        <ExplorExpertSkeleton />
      </div>

      {/* Featured Experts */}
      <div className="pt-14">
        {/* <FeatureExperts /> */}
      </div>

      {/* Fetaure Category */}
      <div className="pt-24">
        {/* <FeatureCategory /> */}
      </div>

      {/* About Awim */}
      <div className="lg:pt-24 pt-8">
        {/* <About /> */}
      </div>

      {/* Ads Banner */}
      <div className="pt-24">
        {/* <AdsBanner /> */}
      </div>

      {/* How it works */}
      <div className='pt-24'>
        {/* <HowItWorks /> */}
      </div>

      {/* Become and Expert Banner */}
      <div className='pt-24'>
        {/* <BecomeExpertBanner config={config} /> */}
      </div>


    </div>
  )
}

export default HomeSkeleton