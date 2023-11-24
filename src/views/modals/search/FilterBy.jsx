import React, {useState} from 'react'
import AdvancedSelect from '../../pages/components/search/AdvanceSelect'


function FilterBy({industries, countries}) {
    const [selectedIndustries, setSelectedIndustries] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState(false);
    const [isCountriesDropdownOpen, setIsCountriesDropdownOpen] = useState(false);
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Option 4', value: 'option4' },
        { label: 'Option 5', value: 'option5' },
    ];

    const toggleIndustriesDropdown = () => {
        setIsIndustriesDropdownOpen((prevState) => !prevState);
        setIsCountriesDropdownOpen(false);
      };
    
      const toggleCountriesDropdown = () => {
        setIsCountriesDropdownOpen((prevState) => !prevState);
        setIsIndustriesDropdownOpen(false);
      };

    const searchExpertHandle = () => {

    }

  return (
    <div className='w-full'>
        <div className="titleSec pb-5">
            <h1 className="title text-xl font-bold">Filter</h1>
        </div>
        <div className="formSearch w-full">
            <form action="" className='w-full'>
                <div className="singleFormData flex flex-col mb-4 gap-1 w-full">
                    <label htmlFor="" className='font-semibold text-md'>Select Industries</label>
                    <AdvancedSelect  options={options} showPerPage={3} optionName="Industries" setSelectedOption={setSelectedIndustries} isOpen={isIndustriesDropdownOpen} toggleDropdown={toggleIndustriesDropdown} />
                </div>

                <div className="singleFormData flex flex-col gap-1 w-full">
                    <label htmlFor="" className='font-semibold text-md'>Select Countries</label>
                    <AdvancedSelect  options={countries} showPerPage={5} optionName="Countries" setSelectedOption={setSelectedCountries} isOpen={isCountriesDropdownOpen} toggleDropdown={toggleCountriesDropdown} />
                </div>

                <div className="buttons mt-10">
                    <button onClick={searchExpertHandle} className="save w-full border border-awimGreen hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out bg-awimGreen py-3 flex justify-center text-white rounded-lg ">Save Filters</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FilterBy