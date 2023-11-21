import React from 'react'
import HeaderSkeleton from './components/HeaderSkeleton'
import FooterSkeleton from './components/FooterSkeleton'
FooterSkeleton

function LayoutSkeleton({skeleton: PageSkeleton}) {
  return (
    <div className='w-full divide-gray-200 rounded animate-pulse dark:divide-gray-700 dark:border-gray-700'>
      <HeaderSkeleton />

      <div>
        <PageSkeleton />
      </div>

      <FooterSkeleton />
    </div>
  )
}

export default LayoutSkeleton