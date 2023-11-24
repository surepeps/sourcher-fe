import React from 'react'
import FindExpert from '../views/pages/findExperts/FindExpert'
import { useData } from '../context/DataContext'


function FindExpertController({config, skeleton: Skeleton}) {
    const {categories, loading, industries, experts} = useData();
    
  return (
    <div>
        {
            loading ? <Skeleton /> :
            <FindExpert experts={experts} config={config} categories={categories} industries={industries} />
        }

    </div>
  )
}

export default FindExpertController