import React, {useState, useEffect} from 'react'
import { useData } from '../../../context/DataContext'
import SearchSelect from '../../miscellaneous/SearchSelect';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';
import IsDoneSpinner from '../../miscellaneous/IsDoneSpinner';
import { Country, State, City } from 'country-state-city';



function EditBasicInfo({allData, closeModal}) {
    const {categories, titles, industries} = useData();
    const {updateUserData} = useAuth()
    const [isDone, setIsDone] = useState(false)

    const {ProfileData, myData, config, isProfileLevel1, isProfileLevel2, isMyAccount} = allData;

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);


    const { setRequestLoading } = useRequestLoading();

    const [selectedOption, setSelectedOption] = useState(null);

    const account_type = myData.account_type;

    useEffect(() => {
        if(ProfileData.account_type === "expert"){
            const countryData = Country.getAllCountries();
            const stateData = State.getStatesOfCountry(ProfileData?.country_id);
            const cityData = City.getCitiesOfState(ProfileData?.country_id, ProfileData?.state);
            setCountries(countryData);
            setStates(stateData);
            setCities(cityData)
            setSelectedCountry(ProfileData?.country_id);
            setSelectedState(ProfileData?.state);
            setSelectedCity(ProfileData?.city);
        }
    }, [ProfileData.account_type]);
    
      const handleCountryChange = (event) => {
        const country = event.target.value;
        setSelectedCountry(country);
        setSelectedState('');
        setSelectedCity('');
    
        const stateData = State.getStatesOfCountry(country);
        console.log(stateData);
        setStates(stateData);
        setCities([]);
      };

      const handleStateChange = (event) => {
        // const state = event.target.value;

        // Access the selected option element
        const selectedOption = event.target.options[event.target.selectedIndex];

        // Retrieve the value of the data-stateid attribute using dataset
        const state = selectedOption.dataset.stateid;

        setSelectedState(state);
        setSelectedCity('');

        const cityData = City.getCitiesOfState(selectedCountry, state);
        setCities(cityData);
    };

    
 
     // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    phone_number: Yup.string().required('Phone Number is required'),
    title_id: Yup.number().required('Title is required'),
    industry_id: Yup.number().required('Industry is required'),
    cat_id: Yup.number().required('Category is required'),
    country_id: Yup.string().when('account_type', {
        is: 'expert',
        then: Yup.string().required('Country is required'),
    }),
    state: Yup.string().when('account_type', {
        is: 'expert',
        then: Yup.string().required('State is required'),
    }),
    city: Yup.string().when('account_type', {
        is: 'expert',
        then: Yup.string().required('City is required'),
    }),
  });

  // Define the formik object with initial values
  const formik = useFormik({
    initialValues: {
      first_name: allData.myData.first_name,
      last_name: allData.myData.last_name,
      phone_number: allData.myData.phone_number,
      title_id: allData.myData.title_id,
      industry_id: allData.myData.industry_id,
      cat_id: allData.myData.cat_id,
      country_id: allData.myData.account_type === "expert" ? allData.myData?.country_id : '',
      state: allData.myData.account_type === "expert" ? allData.myData?.state : '',
      city: allData.myData.account_type === "expert" ? allData.myData?.city : '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        setRequestLoading(true);
        updateUserData({updatedUserData:values});
        setIsDone(true)
        closeModal();
        setIsDone(false)
        setRequestLoading(false)
    },
  });

const transformDataToOptions = (data) => data.map((item) => ({label: item.title, value: item.id}));

  const transformedOptionsCat = transformDataToOptions(categories);
  const transformedOptionsTitles = transformDataToOptions(titles);
  const transformedOptionsIndus = transformDataToOptions(industries);

  return (
    <div className='font-notoSans'>
        <div className="py-5">
            <h2 className='text-xl font-bold'>Edit Basic Info</h2>
        </div>

        <div className="formDetails pt-3">
            <form onSubmit={formik.handleSubmit} className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="title_id">
                        Title
                        {formik.touched.title_id && formik.errors.title_id && (
                            <span className="text-red-500 text-xs">{formik.errors.title_id}</span>
                        )}
                    </label>
                    <SearchSelect
                    classStyle='w-full rounded-lg text-sm h-full bg-red-300'
                    options={transformedOptionsTitles}
                    onChange={(selectedOption) => formik.setFieldValue('title_id', selectedOption ? selectedOption.value : null)}
                    value={transformedOptionsTitles.find(option => option.value === formik.values.title_id)}
                    />
                </div>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="first_name">
                        First Name
                        {formik.touched.first_name && formik.errors.first_name && (
                            <span className="text-red-500 text-xs">{formik.errors.first_name}</span>
                        )} 
                    </label>
                    <input type="text" className='rounded-lg focus:outline-none py-3 text-sm' id='first_name' name='first_name' value={formik.values.first_name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="last_name">
                        Last Name
                        {formik.touched.last_name && formik.errors.last_name && (
                            <span className="text-red-500 text-xs">{formik.errors.last_name}</span>
                        )} 
                    </label>
                    <input type="text" className='rounded-lg focus:outline-none py-3 text-sm' id='last_name' name='last_name' value={formik.values.last_name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="phone_number">
                        Phone Number
                        {formik.touched.phone_number && formik.errors.phone_number && (
                            <span className="text-red-500 text-xs">{formik.errors.phone_number}</span>
                        )} 
                    </label>
                    <input type="text" className='rounded-lg focus:outline-none py-3 text-sm' id='phone_number' name='phone_number' value={formik.values.phone_number} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div>
                
                {
                    ProfileData.account_type === "expert" ? (
                        <>
                            <div className="inpOne flex flex-col gap-2">
                                <label className='text-xs font-semibold flex justify-between' htmlFor="country_id">
                                    Country
                                    {formik.touched.country_id && formik.errors.country_id && (
                                        <span className="text-red-500 text-xs">{formik.errors.country_id}</span>
                                    )} 
                                </label>
                                <select
                                    name="country_id"
                                    id="country_id"
                                    value={formik.values['country_id']}
                                    onChange={(e) => {
                                        handleCountryChange(e);
                                        formik.handleChange(e);
                                    }}
                                    className={`w-full py-3 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                                >
                                <option value="">Select Country</option>
                                {
                                    countries.map((country) => (
                                        <option key={country.isoCode} value={country.isoCode}>
                                        {country.name}
                                        </option>
                                    ))
                                }
                                </select>

                            </div>


                            <div className="inpOne flex flex-col gap-2">
                                <label className='text-xs font-semibold flex justify-between' htmlFor="state">
                                    State
                                    {formik.touched.state && formik.errors.state && (
                                        <span className="text-red-500 text-xs">{formik.errors.state}</span>
                                    )} 
                                </label>
                                <select
                                    name="state"
                                    id="state"
                                    value={formik.values['state']}
                                    onChange={(e) => {
                                        handleStateChange(e);
                                        formik.handleChange(e);
                                    }}
                                    className={`w-full py-3 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                                >
                                <option value="">Select State</option>
                                {
                                    states.map((state) => (
                                        <option key={state.name} data-stateid={state.isoCode} value={state.name}>
                                        {state.name}
                                        </option>
                                    ))
                                }
                                </select>

                            </div>


                            <div className="inpOne flex flex-col gap-2">
                                <label className='text-xs font-semibold flex justify-between' htmlFor="city">
                                    City/Town
                                    {formik.touched.city && formik.errors.city && (
                                        <span className="text-red-500 text-xs">{formik.errors.city}</span>
                                    )} 
                                </label>
                                <select
                                    name="city"
                                    id="city"
                                    value={formik.values['city']}
                                    onChange={(e) => {
                                        formik.handleChange(e); 
                                    }}
                                    className={`w-full py-3 rounded-lg px-4 text-xs lg:text-sm text-gray-700 focus:outline-none focus:shadow-outline`}
                                >
                                <option value="">Select City/Town</option>
                                {
                                    cities.map((city) => (
                                        <option key={city.name} data-cityid={city.isoCode} value={city.name}>
                                        {city.name}
                                        </option>
                                    ))
                                }
                                </select>

                            </div>
                        </>
                    ) : ''
                }

                
                
                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="industry_id">
                        Industry
                        {formik.touched.industry_id && formik.errors.industry_id && (
                            <span className="text-red-500 text-xs">{formik.errors.industry_id}</span>
                        )}
                    </label>
                    <SearchSelect
                    classStyle='w-full rounded-lg text-sm h-full bg-red-300'
                    options={transformedOptionsIndus}
                    onChange={(selectedOption) => formik.setFieldValue('industry_id', selectedOption ? selectedOption.value : null)}
                    value={transformedOptionsIndus.find(option => option.value === formik.values.industry_id)}
                    />
                </div>

                <div className="inpOne flex flex-col gap-2">
                    <label className='text-xs font-semibold flex justify-between' htmlFor="category_id">
                        Category
                        {formik.touched.category_id && formik.errors.category_id && (
                            <span className="text-red-500 text-xs">{formik.errors.category_id}</span>
                        )}
                    </label>
                    <SearchSelect
                    classStyle='w-full rounded-lg text-sm h-full bg-red-300'
                    options={transformedOptionsCat}
                    onChange={(selectedOption) => formik.setFieldValue('cat_id', selectedOption ? selectedOption.value : null)}
                    value={transformedOptionsCat.find(option => option.value === formik.values.cat_id)}
                    />
                </div>

                <div className="btn mt-4">
                    {
                        isDone ? <IsDoneSpinner mainClassName='px-6 py-3 text-sm text-white border bg-awimGreen border-awimGreen hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out rounded-lg' /> :
                        <button type='submit' className='px-6 py-3 text-sm text-white border bg-awimGreen border-awimGreen hover:bg-transparent hover:text-awimGreen transition duration-300 ease-in-out rounded-lg '>Update Data</button>
                    }
                </div>

            </form>
        </div>
    </div>
  )
}

export default EditBasicInfo