import React from 'react'
import { countryOptions } from '../models/Countries';

// Get country Name by country code
export const getCountryLabelByValue = (value) => {
    for (const country of countryOptions) {
      if (country.value === value) {
        return country.label;
      }
    }
    return "Country Not Found";
};