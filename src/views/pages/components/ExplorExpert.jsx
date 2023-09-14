import React, { useState, useEffect, useRef } from 'react';

function ExplorExpert({ categories }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showScrollRight, setShowScrollRight] = useState(true);
    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;

        const handleScroll = () => {
        const canScrollRight = list.scrollLeft < list.scrollWidth - list.clientWidth;
        setShowScrollRight(canScrollRight);
        };

        list.addEventListener('scroll', handleScroll);

        return () => {
        list.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCategoryClick = (name) => {
        setSelectedCategory(name);
    };

    const scrollRight = () => {
        const list = listRef.current;
        const scrollAmount = 200; // Adjust this value as needed for your design
        const maxScroll = list.scrollWidth - list.clientWidth;
        const newScrollLeft = Math.min(list.scrollLeft + scrollAmount, maxScroll);

        list.scroll({
        left: newScrollLeft,
        behavior: 'smooth',
        });
    };



  return (
    <div className='max-w-screen-2xl mx-auto flex flex-col pb-20 px-4 justify-center items-center font-notoSans'>
      <div className="flex flex-col gap-5 text-center pb-10">
        <h1 className="text-center text-3xl leading-10 lg:text-4xl font-semibold">Explore Experts From Different Industries</h1>
        <p className="text-md lg:text-lg">Easily discover expertise and insights from experts in these key fields</p>
      </div>

      <div className="overflow-x-auto ScrollableCont w-full relative pt-4 lg:pt-8">
        <ul className="flex gap-6 overflow-x-auto ScrollableCont" ref={listRef} style={{ paddingRight: showScrollRight ? '2rem' : '0' }}>
          {categories.map((category) => (
            <li
              key={category.name}
              className={`px-6 py-3 text-sm lg:text-md cursor-pointer transition duration-300 ease-in-out whitespace-nowrap flex items-center rounded-3xl ${
                selectedCategory === category.name
                  ? 'bg-textPurple text-white'
                  : 'bg-[#F2F4F7] hover:bg-textPurple hover:text-white'
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name}
            </li>
          ))}
        </ul>

        {showScrollRight && (
          <div
            className="absolute top-4 bottom-0 right-0 flex transition duration-300 ease-in-out items-center cursor-pointer"
            onClick={scrollRight}
           
          >
            <svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1265_3542)">
                <rect width="32" height="32" rx="16" transform="matrix(-1 0 0 1 52 20)" fill="white"/>
                </g>
                <path d="M38.0253 41.6833C37.8669 41.6833 37.7086 41.625 37.5836 41.5C37.3419 41.2583 37.3419 40.8583 37.5836 40.6166L42.2003 36L37.5836 31.3833C37.3419 31.1416 37.3419 30.7416 37.5836 30.5C37.8253 30.2583 38.2253 30.2583 38.4669 30.5L43.5253 35.5583C43.7669 35.8 43.7669 36.2 43.5253 36.4416L38.4669 41.5C38.3419 41.625 38.1836 41.6833 38.0253 41.6833Z" fill="#0F172A"/>
                <path d="M42.943 36.625H28.918C28.5763 36.625 28.293 36.3417 28.293 36C28.293 35.6583 28.5763 35.375 28.918 35.375H42.943C43.2846 35.375 43.568 35.6583 43.568 36C43.568 36.3417 43.2846 36.625 42.943 36.625Z" fill="#0F172A"/>
                <defs>
                <filter id="filter0_d_1265_3542" x="0" y="0.256339" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="0.256339"/>
                <feGaussianBlur stdDeviation="10"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.654063 0 0 0 0 0.662448 0 0 0 0 0.670833 0 0 0 0.5 0"/>
                <feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_1265_3542"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1265_3542" result="shape"/>
                </filter>
                </defs>
            </svg>

          </div>
        )}

      </div>

      <div className="experts"></div>
    </div>
  )
}

export default ExplorExpert;
