import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Country, State, City } from 'country-state-city';
import { ExpertRegForm } from '../../../models/ExpertRegForm';
import ApiService from '../../../helpers/http/apiService';



const initialValues = {};
ExpertRegForm.forEach((field) => {
  initialValues[field.name] = '';
});

const generateValidationSchema = (fields) => {
  const schema = {};

  fields.forEach((field) => {
    schema[field.name] = Yup.string().required(`${field.label} is required`);

    if (field.type === 'email') {
      schema[field.name] = schema[field.name].email('Invalid email address');
    } else if (field.name === 'password') {
      schema[field.name] = schema[field.name]
        .matches(
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          'Password must be at least 8 characters and contain a mixture of alphabets, numbers, and special characters'
        )
        .required('Password is required');
    } else if (field.name === 'phone_number') {
      schema[field.name] = schema[field.name]
        .matches(/^\+?\d{10,14}$/, 'Invalid phone number format')
        .required('Phone Number is required');
    }
  });

  return Yup.object().shape(schema);
};

function ExpertRegister() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const api = new ApiService();
  
  useEffect(() => {
    const countryData = Country.getAllCountries();
    setCountries(countryData);
  }, []);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setSelectedState('');
    setSelectedCity('');

    console.log("Selected Country: ", country);
    const stateData = State.getStatesOfCountry(country);
    console.log(stateData);
    setStates(stateData);
    setCities([]);
  };

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedCity('');

    const cityData = City.getCitiesOfState(selectedCountry, state);
    setCities(cityData);
  };

  const validationSchema = generateValidationSchema(ExpertRegForm);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form values:', values);
    },
  });

  return (
    <div className="pt-6">
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left">Expert Sign Up</div>
      <p className="pt-4">We aim to create a networking/collaboration ground for African Women Experts like you to contribute your voices to our stories</p>

      <form onSubmit={formik.handleSubmit} className="pt-14 lg:pt-20 px-2">
        {ExpertRegForm.map((field) => (
          <div key={field.name} className="mb-5">

            <label className="flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2" htmlFor={field.name}>
              {field.label}
              {formik.errors[field.name] && formik.touched[field.name] && (
                <span className="text-red-500 text-xs">{formik.errors[field.name]}</span>
              )}
            </label>

            {field.type === 'select' ? (
              <select
                name={field.name}
                id={field.name}
                value={formik.values[field.name]}
                onChange={(e) => {
                  if (field.name === 'country_code') {
                    handleCountryChange(e);
                    formik.handleChange(e);
                  } else if (field.name === 'country_state') {
                    handleStateChange(e);
                    formik.handleChange(e);
                  } else {
                    formik.handleChange(e);
                  }
                }}
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
              >
                <option value="">{field.placeholder}</option>
                {field.name === 'country_code'
                  ? countries.map((country) => (
                      <option key={country.isoCode} value={country.isoCode}>
                        {country.name}
                      </option>
                    ))
                  : field.name === 'country_state' && selectedCountry
                  ? states.map((state) => (
                      <option key={state.name} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))
                  : field.name === 'city_town' && selectedState && selectedCountry
                  ? cities.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))
                  : null}
              </select>
            

            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                className="w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline"
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}

        <div className="mt-10">
          <button
            type="submit"
            className="w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Sign Up
          </button>
        </div>

        <div className="flex justify-center pt-6 text-md">
          <p>
            Already have an Expert account? <NavLink to="/login" className="text-awimGreen">
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ExpertRegister;
