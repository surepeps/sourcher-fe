import React, { useState, useEffect, useRef } from 'react'
import SingleExpert from './SingleExpert'
import { exploreExperts } from '../../../../models/experts';


function FeatureExperts() {

    const [showScrollRight, setShowScrollRight] = useState(true);
    const [showScrollLeft, setShowScrollLeft] = useState(true);
    const listRef = useRef(null);
    const [scrollCount, setScrollCount] = useState(0);
    const [scrollLimit, setScrollLimit] = useState(0);

    useEffect(() => {
        const list = listRef.current;

        const handleScroll = () => {
        const canScrollRight = list.scrollLeft < list.scrollWidth - list.clientWidth;
        setShowScrollRight(canScrollRight);

        const canScrollLeft = list.scrollLeft > 0;
        setShowScrollLeft(canScrollLeft);
        };

        list.addEventListener('scroll', handleScroll);

        const totalItems = exploreExperts.length;
        const itemsPerScroll = 3;
        const calculatedLimit = Math.ceil(totalItems / itemsPerScroll);
        setScrollLimit(calculatedLimit);

        return () => {
        list.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = (scrollAmount) => {
        const list = listRef.current;
        const maxScroll = list.scrollWidth - list.clientWidth;
        const newScrollPosition = Math.min(list.scrollLeft + scrollAmount, maxScroll);

        list.scroll({
        left: newScrollPosition,
        behavior: 'smooth',
        });

        setScrollCount((prevCount) => prevCount + scrollAmount / Math.abs(scrollAmount));
    };

    const renderProgressDots = () => {
        return Array.from({ length: scrollLimit }, (_, index) => (
        <div
            key={index}
            className={`w-3 h-3 rounded-full mx-2 ${
            index === scrollCount ? 'bg-textPurple' : 'bg-gray-300'
            }`}
        ></div>
        ));
    };
    

  return (
    <div className="bg-awimGray w-full pt-16">
        <div className='max-w-screen-2xl mx-auto flex flex-col pb-10 px-4 w-full items-center font-notoSans relative'>
            <div className="w-full">
                
                <div className="flex justify-between items-center">
                    <h2 className="lg:text-3xl text-2xl font-semibold">Featured Experts</h2>
                    <button className='px-8 hidden lg:flex py-3 transition duration-300 ease-in-out gap-3 items-center rounded-xl text-textPurple text-sm border-2 border-textPurple bg-transparent hover:text-textWhite hover:bg-textPurple '>
                        View All
                        <svg className='fill-current' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0253 15.6833C11.8669 15.6833 11.7086 15.625 11.5836 15.5C11.3419 15.2583 11.3419 14.8583 11.5836 14.6166L16.2003 9.99998L11.5836 5.38331C11.3419 5.14164 11.3419 4.74164 11.5836 4.49998C11.8253 4.25831 12.2253 4.25831 12.4669 4.49998L17.5253 9.55831C17.7669 9.79998 17.7669 10.2 17.5253 10.4416L12.4669 15.5C12.3419 15.625 12.1836 15.6833 12.0253 15.6833Z" fill="fill-current"/>
                            <path d="M16.941 10.625H2.91602C2.57435 10.625 2.29102 10.3417 2.29102 10C2.29102 9.65833 2.57435 9.375 2.91602 9.375H16.941C17.2827 9.375 17.566 9.65833 17.566 10C17.566 10.3417 17.2827 10.625 16.941 10.625Z" fill="fill-current"/>
                        </svg>
                    </button>
                    <div className="lg:hidden flex items-center gap-3">
                        <button onClick={() => handleScroll(-500)} className='w-8 h-8 bg-textWhite rounded-full flex items-center justify-center'>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.3">
                                <path d="M7.22814 14.452C7.36668 14.452 7.50522 14.401 7.6146 14.2916C7.82606 14.0801 7.82606 13.7301 7.6146 13.5187L3.57502 9.47909L7.6146 5.43951C7.82606 5.22805 7.82606 4.87805 7.6146 4.66659C7.40314 4.45513 7.05314 4.45513 6.84168 4.66659L2.41564 9.09263C2.20418 9.30409 2.20418 9.65409 2.41564 9.86555L6.84168 14.2916C6.95106 14.401 7.0896 14.452 7.22814 14.452Z" fill="#0F172A"/>
                                <path d="M2.926 10.0261H15.1979C15.4968 10.0261 15.7448 9.77821 15.7448 9.47925C15.7448 9.18029 15.4968 8.93237 15.1979 8.93237H2.926C2.62704 8.93237 2.37913 9.18029 2.37913 9.47925C2.37913 9.77821 2.62704 10.0261 2.926 10.0261Z" fill="#0F172A"/>
                                </g>
                            </svg>
                        </button>
                        

                        <button onClick={() => handleScroll(500)} className='w-8 h-8 bg-textWhite rounded-full flex items-center justify-center'>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.7719 14.452C10.6333 14.452 10.4948 14.401 10.3854 14.2916C10.1739 14.0801 10.1739 13.7301 10.3854 13.5187L14.425 9.47909L10.3854 5.43951C10.1739 5.22805 10.1739 4.87805 10.3854 4.66659C10.5969 4.45513 10.9469 4.45513 11.1583 4.66659L15.5844 9.09263C15.7958 9.30409 15.7958 9.65409 15.5844 9.86555L11.1583 14.2916C11.0489 14.401 10.9104 14.452 10.7719 14.452Z" fill="#0F172A"/>
                                <path d="M15.074 10.0261H2.80212C2.50317 10.0261 2.25525 9.77821 2.25525 9.47925C2.25525 9.18029 2.50317 8.93237 2.80212 8.93237H15.074C15.373 8.93237 15.6209 9.18029 15.6209 9.47925C15.6209 9.77821 15.373 10.0261 15.074 10.0261Z" fill="#0F172A"/>
                            </svg>
                        </button>

                    </div>
                </div>

                <div ref={listRef} className="overflow-x-auto ScrollableCont flex space-x-6 py-10 w-full h-auto">

                    {
                        exploreExperts.map(expert => (
                            <SingleExpert key={expert.id} expert={expert} myclass='flex-none w-[340px]' />
                        ))
                    }

                    <button onClick={() => handleScroll(-500)} className='absolute hidden lg:block -left-12 top-60 z-50'>
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
                    

                    <button onClick={() => handleScroll(500)} type="button" className='absolute hidden lg:block -right-6 top-60 z-50'>
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

                <div className="flex justify-center mt-2"> 
                    {/* {renderProgressDots()} */}
                </div>
                {/* <div className="h-1 bg-blue-500 rounded-lg mt-2" style={progressBarStyle}></div> */}

                <div className="btnView flex justify-center lg:hidden pt-2">
                    <button className='px-8 py-3 flex transition duration-300 ease-in-out gap-3 items-center rounded-xl text-textPurple text-sm border-2 border-textPurple bg-transparent hover:text-textWhite hover:bg-textPurple '>
                        View All
                        <svg className='fill-current' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0253 15.6833C11.8669 15.6833 11.7086 15.625 11.5836 15.5C11.3419 15.2583 11.3419 14.8583 11.5836 14.6166L16.2003 9.99998L11.5836 5.38331C11.3419 5.14164 11.3419 4.74164 11.5836 4.49998C11.8253 4.25831 12.2253 4.25831 12.4669 4.49998L17.5253 9.55831C17.7669 9.79998 17.7669 10.2 17.5253 10.4416L12.4669 15.5C12.3419 15.625 12.1836 15.6833 12.0253 15.6833Z" fill="fill-current"/>
                            <path d="M16.941 10.625H2.91602C2.57435 10.625 2.29102 10.3417 2.29102 10C2.29102 9.65833 2.57435 9.375 2.91602 9.375H16.941C17.2827 9.375 17.566 9.65833 17.566 10C17.566 10.3417 17.2827 10.625 16.941 10.625Z" fill="fill-current"/>
                        </svg>
                    </button>
                </div>

            </div>
           
        </div>
    </div>
    
  )
}

export default FeatureExperts