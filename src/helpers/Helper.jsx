import React from 'react'
import { countryOptions } from '../models/Countries';
import generalConfig from '../config/generalConfig';


// Get country Name by country code
export const getCountryLabelByValue = (value) => {
    for (const country of countryOptions) {
      if (country.value === value) {
        return country.label;
      }
    }
    return "Country Not Found";
};

// User image creator 
export const UserImageUrlCreator = (imgPath) => {
  return imgPath ? `${generalConfig.fileURL}${imgPath}` : generalConfig.noImage;
}

// Add elipsis if string is long
export const addEllipsisIfLong = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

// Chat timer
export const chatTimer = (timestamp) => {
  const currentDate = new Date();
  const chatDate = new Date(timestamp);

  const timeDifference = currentDate - chatDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days === 0) {
    // Format time as HH:mm AM/PM
    const formattedTime = chatDate.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return formattedTime;
  } else if (days === 1) {
    return 'Yesterday';
  } else if (days < 7) {
    return `${days} days ago`;
  } else if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (days < 365) {
    const months = Math.floor(days / 30);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(days / 365);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
};


// Availbility format
export const formatAvailability = (startDate, endDate) => {
  const formatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  const startDateFormat = new Date(startDate).toLocaleDateString('en-US', formatOptions);
  const endDateFormat = new Date(endDate).toLocaleDateString('en-US', formatOptions);

  if (!startDate || !endDate) {
    return ``;
  }
  
  if (startDate === endDate) {
    return `Available On ${startDateFormat}.`;
  } else {
    return `Available from ${startDateFormat} to ${endDateFormat}.`;
  }
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};