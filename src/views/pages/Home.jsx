import HomeBanner from './components/banner/HomeBanner'
import Partners from './components/Partners'
import ExplorExpert from './components/experts/ExplorExpert'
import FeatureExperts from './components/experts/FeatureExperts'
import FeatureCategory from './components/category/FeatureCategory'
import About from './components/about/About'
import AdsBanner from './components/banner/AdsBanner'
import HowItWorks from './components/about/HowItWorks'
import BecomeExpertBanner from './components/banner/BecomeExpertBanner'
import { useData } from '../../context/DataContext'
import { countryOptions } from '../../models/Countries'



function Home({config, skeleton: Skeleton}) {

  const {categories, industries, loading, experts} = useData();

  return (
    <>
      {
        loading ? <Skeleton /> :
        <div>
        {/* Home Banner */}
        <HomeBanner countries={countryOptions} industries={industries} config={config} />
        
        {/* Partners */}
        <Partners config={config}/>
  
        {/* Explore Expert */}
        <div className="pt-10">
          <ExplorExpert experts={experts} categories={categories}/>
        </div>
  
        {/* Featured Experts */}
        <div className="pt-14">
          <FeatureExperts experts={experts} />
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
          <AdsBanner config={config}/>
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
      }
    </>
  
  )
}

export default Home