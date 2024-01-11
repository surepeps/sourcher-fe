import React, {useEffect, useRef, useState} from 'react'
import { useData } from '../../../context/DataContext'
import { useModal } from '../../../context/ModalService';
import FilterBy from '../../modals/search/FilterBy';
import { countryOptions } from '../../../models/Countries';
import SingleExpert from '../components/experts/SingleExpert';



function FindExpert({experts, categories, industries, config}) {
    const [showScrollRight, setShowScrollRight] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [categorizedExperts, setCategorizedExperts] = useState(experts);
  const [currentPage, setCurrentPage] = useState(1);
  const expertsPerPage = 12;

  const listRef = useRef(null);

  const { openModal, closeModal } = useModal();


  const handleCategoryClick = (catId) => {
    const filteredData = experts.filter((item) => item.cat_id === catId);

    setCategorizedExperts(filteredData);
    setSelectedCategory(catId);
    setCurrentPage(1); // Reset to the first page when a category is clicked
  };

  const filterByModalHandler = () => {
    openModal(<FilterBy closeModal={closeModal} countries={countryOptions} industries={industries} />);
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

  useEffect(() => {
    const list = listRef.current;

    if (list) {
      const handleScroll = () => {
        const canScrollRight = list.scrollLeft < list.scrollWidth - list.clientWidth;
        setShowScrollRight(canScrollRight);
      };

      list.addEventListener('scroll', handleScroll);

      return () => {
        list.removeEventListener('scroll', handleScroll);
      };
    }
  }, [listRef.current]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    filterExperts(selectedCategory, value);
  };

  const filterExperts = (category, value) => {
    let filteredExperts = experts;

    if (category !== 0) {
      filteredExperts = filteredExperts.filter((item) => item.cat_id === category);
    }

    if (value.trim() !== '') {
      const lowerCaseValue = value.toLowerCase();

      filteredExperts = filteredExperts.filter((expert) => {
        return (
          (expert.first_name && expert.first_name.toLowerCase().includes(lowerCaseValue)) ||
          (expert.last_name && expert.last_name.toLowerCase().includes(lowerCaseValue)) ||
          (expert.email && expert.email.toLowerCase().includes(lowerCaseValue)) ||
          (expert.username && expert.username.toLowerCase().includes(lowerCaseValue))
        );
      });
    }

    setCategorizedExperts(filteredExperts);
    setCurrentPage(1);
  };

  useEffect(() => {
    // Update categorizedExperts whenever experts or selectedCategory changes
    filterExperts(selectedCategory, searchTerm);
  }, [experts, selectedCategory, searchTerm]);

  // Pagination
  const indexOfLastExpert = currentPage * expertsPerPage;
  const indexOfFirstExpert = indexOfLastExpert - expertsPerPage;
  const currentExperts = categorizedExperts.slice(indexOfFirstExpert, indexOfLastExpert);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
    

  return (
    <>
        <div className='w-full'>
            <div className='max-w-screen-2xl mx-auto flex justify-center items-center px-8 py-12 font-notoSans flex-col gap-8'>
                {/* Search Section */}
                <div className="searcSection w-full mt-16 lg:mt-1 flex flex-col  lg:flex-row gap-5 justify-between">
                    <div className="leftSearch w-full">
                        <div className="formGroup w-full relative">
                            <input type="search" placeholder='Search for Experts ' value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} className='lg:w-[550px] font-light pl-10 removeOutline text-sm w-full border border-[#D9D9D9] outline-none rounded-lg h-[55px]' />
                            <span className='absolute top-5 text-sm left-3'>
                                <svg width="19" height="19" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.58464 18.125C4.8763 18.125 1.04297 14.2917 1.04297 9.58332C1.04297 4.87499 4.8763 1.04166 9.58464 1.04166C14.293 1.04166 18.1263 4.87499 18.1263 9.58332C18.1263 14.2917 14.293 18.125 9.58464 18.125ZM9.58464 2.29166C5.55964 2.29166 2.29297 5.56666 2.29297 9.58332C2.29297 13.6 5.55964 16.875 9.58464 16.875C13.6096 16.875 16.8763 13.6 16.8763 9.58332C16.8763 5.56666 13.6096 2.29166 9.58464 2.29166Z" fill="#969595"/>
                                    <path d="M18.3326 18.9583C18.1742 18.9583 18.0159 18.9 17.8909 18.775L16.2242 17.1083C15.9826 16.8666 15.9826 16.4666 16.2242 16.225C16.4659 15.9833 16.8659 15.9833 17.1076 16.225L18.7742 17.8916C19.0159 18.1333 19.0159 18.5333 18.7742 18.775C18.6492 18.9 18.4909 18.9583 18.3326 18.9583Z" fill="#969595"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="rightSection flex justify-between items-center gap-5">
                        <div className="sortBy w-full">
                            <button className='p-3 whitespace-nowrap w-full gap-2 flex text-awimLightPurple hover:bg-awimLightPurple hover:text-white transition duration-300 ease-in-out rounded-lg border border-awimLightPurple justify-center items-center'>
                                <span className=''>
                                    <svg width="22" height="22" className='fill-current' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.8395 1.83334H7.15786C3.8212 1.83334 1.83203 3.82251 1.83203 7.15918V14.8317C1.83203 18.1775 3.8212 20.1667 7.15786 20.1667H14.8304C18.167 20.1667 20.1562 18.1775 20.1562 14.8408V7.15918C20.1654 3.82251 18.1762 1.83334 14.8395 1.83334ZM12.2179 15.5833H9.77036C9.39453 15.5833 9.08286 15.2717 9.08286 14.8958C9.08286 14.52 9.39453 14.2083 9.77036 14.2083H12.2179C12.5937 14.2083 12.9054 14.52 12.9054 14.8958C12.9054 15.2717 12.6029 15.5833 12.2179 15.5833ZM14.6654 11.6875H7.33203C6.9562 11.6875 6.64453 11.3758 6.64453 11C6.64453 10.6242 6.9562 10.3125 7.33203 10.3125H14.6654C15.0412 10.3125 15.3529 10.6242 15.3529 11C15.3529 11.3758 15.0412 11.6875 14.6654 11.6875ZM16.4987 7.79168H5.4987C5.12286 7.79168 4.8112 7.48001 4.8112 7.10418C4.8112 6.72834 5.12286 6.41668 5.4987 6.41668H16.4987C16.8745 6.41668 17.1862 6.72834 17.1862 7.10418C17.1862 7.48001 16.8745 7.79168 16.4987 7.79168Z" fill="fill-current"/>
                                    </svg>
                                </span>

                                Sort by
                            </button>
                        </div>

                        <div className="filterBy w-full">
                            <button onClick={filterByModalHandler} className='py-3 w-full gap-2 hover:bg-transparent border border-awimLightPurple hover:text-awimLightPurple transition duration-300 ease-in-out px-5 bg-awimLightPurple rounded-lg text-white flex justify-center items-center'>
                                <span>
                                    <svg width="22" height="22" className='fill-current' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.8838 3.75832V5.77499C18.8838 6.50832 18.4255 7.42499 17.9671 7.88332L14.0255 11.3667C13.4755 11.825 13.1088 12.7417 13.1088 13.475V17.4167C13.1088 17.9667 12.7421 18.7 12.2838 18.975L11.0005 19.8C9.8088 20.5333 8.1588 19.7083 8.1588 18.2417V13.3833C8.1588 12.7417 7.79213 11.9167 7.42546 11.4583L6.99463 11.0092C6.71046 10.7067 6.65546 10.2483 6.88463 9.89082L11.578 2.35582C11.743 2.08999 12.0363 1.92499 12.3571 1.92499H17.0505C18.0588 1.92499 18.8838 2.74999 18.8838 3.75832Z" fill="fill-current"/>
                                        <path d="M9.48802 3.32758L6.23385 8.54341C5.92219 9.04758 5.20719 9.12091 4.79469 8.69008L3.94219 7.79175C3.48385 7.33341 3.11719 6.50841 3.11719 5.95841V3.85008C3.11719 2.75008 3.94219 1.92508 4.95052 1.92508H8.70885C9.42385 1.92508 9.86385 2.71341 9.48802 3.32758Z" fill="fill-current"/>
                                    </svg>
                                </span>
                                Filter
                            </button>
                        </div>
                    </div>
                </div>

                {/* Categpry section */}
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


                {/* Disp */}
                <div className="w-full flex flex-col gap-5">
                    {
                        currentExperts && currentExperts.length > 0 ? (
                            <div className="AllCards w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-4">
                                {currentExperts.map(expert => (<SingleExpert key={expert.id} expert={expert} />))}
                            </div>
                        )
                        : <div className="text-center w-full py-10 text-lg font-semibold text-red-500">
                            Sorry No Experts found
                            </div>
                    }

                    <div className="pageination flex flex-col lg:flex-row gap-3 justify-between items-center w-full">
                        <div className="leftPagi">
                            <p>
                                Showing <b>{indexOfFirstExpert + 1}</b> - <b>{Math.min(indexOfLastExpert, categorizedExperts.length)}</b> from{' '}
                                <b>{categorizedExperts.length}</b> experts
                            </p>
                        </div>

                        <div className="rightPagi ">
                            <div className="pagi flex a-auto gap-3 items-center px-5">
                                <span className='backButton'>
                                    <button className='flex items-center' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.72109 18.3938C9.89922 18.3938 10.0773 18.3282 10.218 18.1876C10.4898 17.9157 10.4898 17.4657 10.218 17.1938L5.02422 12L10.218 6.8063C10.4898 6.53442 10.4898 6.08442 10.218 5.81255C9.94609 5.54067 9.49609 5.54067 9.22422 5.81255L3.53359 11.5032C3.26172 11.775 3.26172 12.225 3.53359 12.4969L9.22422 18.1876C9.36484 18.3282 9.54297 18.3938 9.72109 18.3938Z" fill="#0F172A"/>
                                            <path d="M4.19063 12.7031H19.9688C20.3531 12.7031 20.6719 12.3844 20.6719 12C20.6719 11.6156 20.3531 11.2969 19.9688 11.2969H4.19063C3.80625 11.2969 3.4875 11.6156 3.4875 12C3.4875 12.3844 3.80625 12.7031 4.19063 12.7031Z" fill="#0F172A"/>
                                        </svg>
                                    </button>
                                </span>

                                <ul className="numbers flex gap-5 items-center">
                                    {Array.from({ length: Math.ceil(categorizedExperts.length / expertsPerPage) }).map((_, index) => {
                                        const page = index + 1;

                                        // Display only the adjacent pages and the current page
                                        if (
                                        page === currentPage ||
                                        page === currentPage - 1 ||
                                        page === currentPage + 1 ||
                                        page === 1 ||
                                        page === Math.ceil(categorizedExperts.length / expertsPerPage)
                                        ) {
                                        return (
                                            <li
                                            key={page}
                                            onClick={() => paginate(page)}
                                            className={`${
                                                currentPage === page
                                                ? 'active bg-awimLightPurple text-white'
                                                : 'hover:bg-awimLightPurple hover:text-white transition duration-300 cursor-pointer ease-in-out'
                                            } py-1 px-2 rounded-lg`}
                                            >
                                            {page}
                                            </li>
                                        );
                                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                                        return <li key={page}>...</li>;
                                        }

                                        return null;
                                    })}
                                </ul>
                                
                                <span className="nextButton">
                                    <button className='flex items-center' onClick={() => paginate(currentPage + 1)} disabled={indexOfLastExpert >= categorizedExperts.length}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.2789 18.3938C14.1008 18.3938 13.9227 18.3282 13.782 18.1875C13.5102 17.9157 13.5102 17.4657 13.782 17.1938L18.9758 12L13.782 6.8063C13.5102 6.53442 13.5102 6.08442 13.782 5.81255C14.0539 5.54067 14.5039 5.54067 14.7758 5.81255L20.4664 11.5032C20.7383 11.775 20.7383 12.225 20.4664 12.4969L14.7758 18.1875C14.6352 18.3282 14.457 18.3938 14.2789 18.3938Z" fill="#0F172A"/>
                                            <path d="M19.8094 12.7031H4.03125C3.64688 12.7031 3.32812 12.3844 3.32812 12C3.32812 11.6156 3.64688 11.2969 4.03125 11.2969H19.8094C20.1938 11.2969 20.5125 11.6156 20.5125 12C20.5125 12.3844 20.1938 12.7031 19.8094 12.7031Z" fill="#0F172A"/>
                                        </svg>
                                    </button>
                                </span>


                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default FindExpert