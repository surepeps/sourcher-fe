import React, { useState, useEffect, useRef } from 'react';
import SingleExpert from './SingleExpert';
import { shuffleArray } from '../../../../helpers/Helper';
import { NavLink } from 'react-router-dom';



function ExplorExpert({ experts, categories }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showScrollRight, setShowScrollRight] = useState(true);
    const listRef = useRef(null);

    const [categorizedExperts, setCategorizedExperts] = useState(shuffleArray(experts).slice(0, 4));
 

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
    
  // const fourExperts = exploreExperts.slice(0, 4);

    const handleCategoryClick = (catId) => {
       // Assuming your data array is named 'data'
      const filteredData = experts.filter(item => item.cat_id === catId);
      
      // Shuffle the filtered array
      const shuffledData = shuffleArray(filteredData);

      // Take the first four elements
      const randomFourData = shuffledData.slice(0, 4);

      setCategorizedExperts(randomFourData)

      setSelectedCategory(catId);
    };

    const scrollRight = () => {
        const list = listRef.current;
        const scrollAmount = 200;
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
              key={category.id}
              className={`px-6 py-3 text-sm lg:text-md cursor-pointer transition duration-300 ease-in-out whitespace-nowrap flex items-center rounded-3xl ${
                selectedCategory === category.id
                  ? 'bg-textPurple text-white'
                  : 'bg-[#F2F4F7] hover:bg-textPurple hover:text-white'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.title}
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

      <div className="experts w-full pt-10">
        
        {
          categorizedExperts && categorizedExperts.length > 0 ? (
            <div className="AllCards w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-4">
              {categorizedExperts.map(expert => (<SingleExpert key={expert.id} expert={expert} />))}
            </div>
          )
          : <div className="text-center w-full py-10 text-lg font-semibold text-red-500">
              Sorry No Experts found
            </div>
        }
            
        
        <div className="btnView flex justify-center pt-10">
           <NavLink to='/find-expert' className='px-8 py-3 flex transition duration-300 ease-in-out gap-3 items-center rounded-xl text-textPurple text-sm border-2 border-textPurple bg-transparent hover:text-textWhite hover:bg-textPurple '>
              View All
              <svg className='fill-current' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0253 15.6833C11.8669 15.6833 11.7086 15.625 11.5836 15.5C11.3419 15.2583 11.3419 14.8583 11.5836 14.6166L16.2003 9.99998L11.5836 5.38331C11.3419 5.14164 11.3419 4.74164 11.5836 4.49998C11.8253 4.25831 12.2253 4.25831 12.4669 4.49998L17.5253 9.55831C17.7669 9.79998 17.7669 10.2 17.5253 10.4416L12.4669 15.5C12.3419 15.625 12.1836 15.6833 12.0253 15.6833Z" fill="fill-current"/>
                <path d="M16.941 10.625H2.91602C2.57435 10.625 2.29102 10.3417 2.29102 10C2.29102 9.65833 2.57435 9.375 2.91602 9.375H16.941C17.2827 9.375 17.566 9.65833 17.566 10C17.566 10.3417 17.2827 10.625 16.941 10.625Z" fill="fill-current"/>
              </svg>
           </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ExplorExpert;
