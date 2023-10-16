import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Country, State, City }  from 'country-state-city';

function ExpertRegister() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);


  useEffect(() => {
    const countryData = Country.getAllCountries();
    setCountries(countryData);
  }, []);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    console.log("Selected Country", country);
    setSelectedCountry(country);
    setSelectedState('');
    setSelectedCity('');

    const stateData = State.getStatesOfCountry(country);
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

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email_address: '',
      phone_number: '',
      password: '',
      c_password: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('First Name is required'),
      last_name: Yup.string().required('Last Name is required'),
      email_address: Yup.string().email('Invalid email address').required('Email Address is required'),
      phone_number: Yup.string().required('Phone Number is required'),
      country_code: Yup.string().required('Country of Origin is required'),
      country_state: Yup.string().required('State is required'),
      city_town: Yup.string().required('City/Town is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      c_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form values:', values);
    },
  });

  return (
    <div className='pt-6'>
      <div className="text-3xl xl:text-5xl font-semibold text-center lg:text-left">Expert Sign Up</div>
      <p className='pt-4'>We aim to create a networking/collaboration ground for African Women Experts like you to contribute your voices to our stories</p>

      <form onSubmit={formik.handleSubmit} className='pt-14 lg:pt-20 px-2'>
        {/* Render form fields using map or a component */}
        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="first_name">
              First Name
              <span className="text-red-500 text-xs">First Name is required</span>
          </label>

          <input
                value=""
                id="first_name"
                name="first_name"
                type='text'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter First Name"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="last_name">
              Last Name
              <span className="text-red-500 text-xs">Last Name is required</span>
          </label>

          <input
                value=""
                id="last_name"
                name="last_name"
                type='text'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Last Name"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="email_address">
              Email Address
              <span className="text-red-500 text-xs">Email Address is required</span>
          </label>

          <input
                value=""
                id="email_address"
                name="email_address"
                type='email'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Email Address"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="phone_number">
              Phone Number 
              <span className="text-red-500 text-xs">Phone Number is required</span>
          </label>

          <input
                value=""
                id="phone_number"
                name="phone_number"
                type='number'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Phone Number"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="country_code">
              Country of Origin
              <span className="text-red-500 text-xs">Country of Origin is required</span>
          </label>
          <select name="country_code"  value={selectedCountry} onChange={handleCountryChange} id="country_code" className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}>
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="country_state">
              State
              <span className="text-red-500 text-xs">State is required</span>
          </label>
          <select name="country_state" id="country_state" value={selectedState} onChange={handleStateChange} className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}>
            {selectedCountry && (
              <>
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.name} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </>
            )}
          </select>

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="city_town">
              City / Town
              <span className="text-red-500 text-xs">City/Town is required</span>
          </label>
          <select name="city_town" id="city_town"  value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)} className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}>
            {selectedState && (
              <>
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </>
            )}
          </select>

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="password">
              Password 
              <span className="text-red-500 text-xs">Password is required</span>
          </label>

          <input
                value=""
                id="password"
                name="password"
                type='password'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Password"
              />

        </div>

        <div className="mb-5">
          <label className={`flex justify-between text-gray-700 text-xs lg:text-sm font-bold mb-2`} htmlFor="c_password">
              Confirm Password 
              <span className="text-red-500 text-xs">Confirm Password is required</span>
          </label>

          <input
                value=""
                id="c_password"
                name="c_password"
                type='password'
                className={`w-full py-5 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                placeholder="Enter Confirm Password"
              />

        </div>

      
        <div className="mt-10">
          <button
            type="submit"
            className='w-full py-5 rounded-lg px-4 text-sm text-white bg-awimGreen hover:bg-awimFadeGreen focus:outline-none focus:shadow-outline transition duration-300 ease-in-out'
          >
            Sign Up
          </button>
        </div>

        <div className="flex justify-center pt-6 text-md">
          <p> Already have an Expert account? <NavLink to='/login' className='text-awimGreen'>Login</NavLink> </p>
        </div>
      </form>
    </div>
  )
}

export default ExpertRegister