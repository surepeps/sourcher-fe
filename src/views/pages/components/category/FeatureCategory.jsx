import React from 'react'
import SingleCategory from './SingleCategory'
import { categories } from '../../../../models/categories'



function FeatureCategory() {

    const featuredCategories = categories.filter(category => category.featured);

  return (
    <div className='max-w-screen-2xl mx-auto flex flex-col py-0 lg:py-10 px-4 w-full items-center font-notoSans relative'>
        <div className="w-full">

            <div className="top">
                <h2 className="lg:text-3xl text-2xl font-semibold">Featured Categories</h2>
            </div>

            <div className="content w-full relative">
                <div className="overflow-x-auto ScrollableCont flex space-x-6 py-10 w-full h-auto">
                    {
                        featuredCategories.map(category => (
                            <SingleCategory key={category.name} category={category}/>
                        ))
                    }
                    
                </div>


                <button className='absolute hidden lg:block -left-11 top-36 z-50'>
                    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_0_1)">
                        <rect x="23" y="23" width="36" height="36" rx="18" fill="white"/>
                        </g>
                        <path d="M38.7211 47.3937C38.8992 47.3937 39.0773 47.3281 39.218 47.1874C39.4898 46.9156 39.4898 46.4656 39.218 46.1937L34.0242 40.9999L39.218 35.8062C39.4898 35.5343 39.4898 35.0843 39.218 34.8124C38.9461 34.5406 38.4961 34.5406 38.2242 34.8124L32.5336 40.5031C32.2617 40.7749 32.2617 41.2249 32.5336 41.4968L38.2242 47.1874C38.3648 47.3281 38.543 47.3937 38.7211 47.3937Z" fill="#0F172A"/>
                        <path d="M33.1906 41.7031H48.9688C49.3531 41.7031 49.6719 41.3844 49.6719 41C49.6719 40.6156 49.3531 40.2969 48.9688 40.2969H33.1906C32.8063 40.2969 32.4875 40.6156 32.4875 41C32.4875 41.3844 32.8063 41.7031 33.1906 41.7031Z" fill="#0F172A"/>
                        <defs>
                        <filter id="filter0_d_0_1" x="0.5" y="0.788382" width="81" height="81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="0.288382"/>
                        <feGaussianBlur stdDeviation="11.25"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.654063 0 0 0 0 0.662448 0 0 0 0 0.670833 0 0 0 0.5 0"/>
                        <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </button>

                <button type="button" className='absolute hidden lg:block -right-11 top-36 z-50'>
                    <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_0_1)">
                        <rect width="36" height="36" rx="18" transform="matrix(-1 0 0 1 56 20)" fill="white"/>
                        </g>
                        <path d="M40.2789 44.3938C40.1008 44.3938 39.9227 44.3282 39.782 44.1875C39.5102 43.9157 39.5102 43.4657 39.782 43.1938L44.9758 38L39.782 32.8063C39.5102 32.5344 39.5102 32.0844 39.782 31.8125C40.0539 31.5407 40.5039 31.5407 40.7758 31.8125L46.4664 37.5032C46.7383 37.775 46.7383 38.225 46.4664 38.4969L40.7758 44.1875C40.6352 44.3282 40.457 44.3938 40.2789 44.3938Z" fill="#0F172A"/>
                        <path d="M45.8094 38.7031H30.0313C29.6469 38.7031 29.3281 38.3844 29.3281 38C29.3281 37.6156 29.6469 37.2969 30.0313 37.2969H45.8094C46.1938 37.2969 46.5125 37.6156 46.5125 38C46.5125 38.3844 46.1938 38.7031 45.8094 38.7031Z" fill="#0F172A"/>
                        <defs>
                        <filter id="filter0_d_0_1" x="0" y="0.256339" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="0.256339"/>
                        <feGaussianBlur stdDeviation="10"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.654063 0 0 0 0 0.662448 0 0 0 0 0.670833 0 0 0 0.5 0"/>
                        <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
                        </filter>
                        </defs>
                    </svg>
                </button>



            </div>

        </div>
    </div>
  )
}

export default FeatureCategory