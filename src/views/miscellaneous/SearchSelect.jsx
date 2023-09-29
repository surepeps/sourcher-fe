import React from 'react';
import Select from 'react-select';

const SearchSelect = ({ options, onChange, value, classStyle }) => {

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '100%',
    }),
  };

  return (
    <div className="w-full">
      <Select
        options={options}
        onChange={onChange}
        value={value}
        isSearchable
        placeholder="Select an option..."
        className={classStyle}
        styles={customStyles}
      />
    </div>
  );
};

export default SearchSelect;
