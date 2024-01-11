import React, { useState, useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';

const AdvancedSelect = ({ options, showPerPage = 3, optionName = 'Options', setSelectedOption, isOpen, toggleDropdown }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleOptions, setVisibleOptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const inputRef = useRef();

  const PAGE_SIZE = showPerPage; // Number of options per page
  const totalPages = Math.ceil(options.length / PAGE_SIZE);

  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((selected) => selected !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  const handleSearchChange = debounce((value) => {
    setSearchTerm(value);
    filterOptions(value);
  }, 300);

  const filterOptions = (value) => {
    const filtered = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setVisibleOptions(filtered);
  };

  const clearAllOptions = () => {
    setSelectedOptions([]);
  };

  useEffect(() => {
    setSelectedOption(selectedOptions);
  }, [selectedOptions, setSelectedOption]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    filterOptions(searchTerm);
  }, [searchTerm]);

  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const endIdx = startIdx + PAGE_SIZE;
  const currentOptions = visibleOptions.slice(startIdx, endIdx);

  return (
    <div className="relative w-full">
      <div className="flex w-full items-center">
        <div className="relative h-[60px] w-full">
          <div
            className={`flex items-center justify-between w-full h-full px-4 py-2 border ${
              isOpen ? 'border-blue-500' : 'border-gray-300'
            } rounded-md cursor-pointer focus:outline-none focus:border-blue-500`}
            onClick={toggleDropdown}
          >
            {selectedOptions.length === 0 ? (
              <span className="text-gray-500">Select {optionName}</span>
            ) : (
              <div className="flex flex-wrap">
                {selectedOptions.map((option) => (
                  <span
                    key={option.value}
                    className="inline-flex items-center px-2 py-2 text-sm mr-1 mt-1 bg-awimLightPurple text-white rounded"
                  >
                    {option.label}
                    <i className="ml-1 fa-solid fa-check"></i>
                  </span>
                ))}
              </div>
            )}
          </div>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-full border border-t-0 rounded-md bg-white z-50 shadow-md">
              <div className="flex items-center p-2">
                <i className="fa-solid text-gray-500 mr-2 fa-magnifying-glass"></i>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 appearance-none rounded-md outline-none border-none bg-transparent text-gray-700"
                />
              </div>
              {currentOptions.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-center justify-between px-4 py-2 ${
                    selectedOptions.includes(option) ? 'bg-blue-100' : ''
                  } hover:bg-gray-100 cursor-pointer`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                  {selectedOptions.includes(option) && (
                    <i className="fa-solid fa-check text-blue-500"></i>
                  )}
                </div>
              ))}
              <div className="flex justify-end p-2">
                <button
                  type="button"
                  className="text-white text-sm hover:opacity-80 p-2 bg-awimLightPurple rounded-lg transition duration-300 ease-in-out cursor-pointer"
                  onClick={clearAllOptions}
                >
                  Clear All
                </button>
              </div>
              <div className="flex justify-center p-2">
                <div>
                  <button
                    type="button"
                    className="text-awimLightPurple hover:text-awimLightPurple cursor-pointer"
                    onClick={() => setCurrentPage((prevPage) => Math.max(1, prevPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  <span className="mx-2 text-gray-500">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    type="button"
                    className="text-awimLightPurple hover:text-awimLightPurple cursor-pointer"
                    onClick={() => setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedSelect;