import React, {useState, useEffect} from 'react'
import { useAuth } from '../../../../context/AuthContext';
import { useModal } from '../../../../context/ModalService';
import { useRequestLoading } from '../../../../context/LoadingContext';
import EditBasicInfo from '../../../modals/account/EditBasicInfo';
import UpgradeForm from '../others/UpgradeForm';
import { NavLink } from 'react-router-dom';

 
function BasicInfo({allData}) {
  const {ProfileData, myData, config, isProfileLevel1, isProfileLevel2, isMyAccount} = allData;

  const {openModal} = useModal();

  const { setRequestLoading } = useRequestLoading();

  // Logged in profile data
  const myAccountType = myData.account_type;
  // Accessing Profile data
  const UserAccountType = ProfileData.account_type;

  const {Title, Category, Industry, publications, professions, workExperiences} = ProfileData;

  useEffect(() => {
    
  },[]);
  
  const editBasicInfoModal = () => {
    setRequestLoading(true);
    openModal(<EditBasicInfo allData={allData} />, {
      modalSize: 'max-w-4xl'
    })
    setRequestLoading(false);
  }


  return (
    <div className='font-notoSans'>


      {/* Upgrade to level Two */}
      {
        isMyAccount && isProfileLevel1 ? (
          <UpgradeForm />
        ) : ''
      }

      <div className="flex justify-between items-start">
        <div className="grid grid-cols-1 gap-x-48 py-12 lg:grid-cols-2 gap-y-8">
          <div className="DInfo">
            <h2 className='text-lg pb-1 font-bold'>First Name</h2>
            <p className='text-md font-normal'>{ProfileData.first_name}</p>
          </div>

          <div className="DInfo">
            <h2 className='text-lg pb-1 font-bold'>Last Name</h2>
            <p className='text-md font-normal'>{ProfileData.last_name}</p>
          </div>

          <div className="DInfo">
            <h2 className='text-lg pb-1 font-bold'>Email Address</h2>
            <p className='text-md font-normal'>{ProfileData.email}</p>
          </div>

          <div className="DInfo">
            <h2 className='text-lg pb-1 font-bold'>Phone Number</h2>
            <p className='text-md font-normal'>{ProfileData.phone_number}</p>
          </div>

          <div className="DInfo">
            <h2 className='text-lg pb-1 font-bold'>Title</h2>
            <p className='text-md font-normal'>{Title?.title || '-----'}</p>
          </div>

          <div className="DInfo">
            <h2 className='text-lg pb-1 font-bold'>Industry</h2>
            <p className='text-md font-normal'>{Industry?.title || '-----'}</p>
          </div>

          <div className="DInfo">
            <h2 className='text-lg pb-1 font-bold'>Category</h2>
            <p className='text-md font-normal'>{Category?.title || '-----'}</p>
          </div>
          
        </div>

        {
          isMyAccount && (isProfileLevel1 || isProfileLevel2) ? (
            <div className="editBtn">
              <button onClick={editBasicInfoModal} className='flex gap-1 bg-awimGreen text-white hover:bg-transparent hover:text-awimGreen border-awimGreen border transition duration-300 ease-in-out rounded-lg py-3 px-6 text-sm'>
                <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 18.3333H3C2.65833 18.3333 2.375 18.05 2.375 17.7083C2.375 17.3667 2.65833 17.0833 3 17.0833H18C18.3417 17.0833 18.625 17.3667 18.625 17.7083C18.625 18.05 18.3417 18.3333 18 18.3333Z" fill="fill-current"/>
                  <path d="M16.3495 2.90014C14.7328 1.28347 13.1495 1.24181 11.4912 2.90014L10.4828 3.90847C10.3995 3.99181 10.3662 4.12514 10.3995 4.24181C11.0328 6.45014 12.7995 8.21681 15.0078 8.85014C15.0412 8.85847 15.0745 8.86681 15.1078 8.86681C15.1995 8.86681 15.2828 8.83348 15.3495 8.76681L16.3495 7.75848C17.1745 6.94181 17.5745 6.15014 17.5745 5.35014C17.5828 4.52514 17.1828 3.72514 16.3495 2.90014Z" fill="fill-current"/>
                  <path d="M13.507 9.60817C13.2653 9.4915 13.032 9.37484 12.807 9.2415C12.6236 9.13317 12.4486 9.0165 12.2736 8.8915C12.132 8.79984 11.9653 8.6665 11.807 8.53317C11.7903 8.52484 11.732 8.47484 11.6653 8.40817C11.3903 8.17484 11.082 7.87484 10.807 7.5415C10.782 7.52484 10.7403 7.4665 10.682 7.3915C10.5986 7.2915 10.457 7.12484 10.332 6.93317C10.232 6.80817 10.1153 6.62484 10.007 6.4415C9.87364 6.2165 9.75697 5.9915 9.6403 5.75817C9.48734 5.43039 9.05713 5.33301 8.80135 5.58879L4.1153 10.2748C4.00697 10.3832 3.90697 10.5915 3.88197 10.7332L3.43197 13.9248C3.34864 14.4915 3.50697 15.0248 3.85697 15.3832C4.15697 15.6748 4.57364 15.8332 5.02364 15.8332C5.12364 15.8332 5.22364 15.8248 5.32364 15.8082L8.52364 15.3582C8.67364 15.3332 8.88197 15.2332 8.98197 15.1248L13.6758 10.4311C13.9264 10.1804 13.8322 9.74912 13.507 9.60817Z" fill="fill-current"/>
                </svg>
                Edit
              </button>
            </div>
          ) : ''
        }
        

      </div>

        {
          publications.length > 0 ? (
            <>
              <div className="line my-10 w-full bg-[#0F172A13] h-0.5 rounded-xl"></div>
              {/* Publication */}
              <div className="pub">
                <h2 className="tt mb-4 text-xl font-bold">Publications</h2>
                <div className="allPublications w-full flex flex-col gap-5">
                  {publications.map((publication) => (
                    <div key={publication.id} className="singlePub gap-4 flex w-full justify-between flex-col lg:flex-row ">
                      <div className="ll bg-[#FEF8F1] w-auto flex flex-col lg:flex-row gap-8 px-8 py-5 rounded-lg">
                        <div className="flex gap-2 items-center text-overflow-ellipsis">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1482_13742)">
                              <path d="M9.99665 19.2853C15.125 19.2853 19.2824 15.1279 19.2824 9.99958C19.2824 4.87122 15.125 0.713867 9.99665 0.713867C4.86829 0.713867 0.710938 4.87122 0.710938 9.99958C0.710938 15.1279 4.86829 19.2853 9.99665 19.2853Z" stroke="#F1A24C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M0.710938 9.99958H19.2824M13.5681 9.99958C13.3927 13.3953 12.1419 16.6472 9.99665 19.2853C7.8514 16.6472 6.60065 13.3953 6.42522 9.99958C6.60065 6.60388 7.8514 3.35194 9.99665 0.713867C12.1419 3.35194 13.3927 6.60388 13.5681 9.99958Z" stroke="#F1A24C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1482_13742">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className='text-ellipsis whitespace-nowrap'>{publication.title}</p>
                        </div>
                        <NavLink to={publication.url} className="flex gap-2 w-full items-center text-overflow-ellipsis">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.98969 21.5C7.32969 21.5 5.65969 20.87 4.38969 19.6C1.85969 17.06 1.85969 12.94 4.38969 10.41C4.67969 10.12 5.15969 10.12 5.44969 10.41C5.73969 10.7 5.73969 11.18 5.44969 11.47C3.49969 13.42 3.49969 16.59 5.44969 18.54C7.39969 20.49 10.5697 20.49 12.5197 18.54C13.4597 17.6 13.9797 16.34 13.9797 15C13.9797 13.67 13.4597 12.41 12.5197 11.46C12.2297 11.17 12.2297 10.69 12.5197 10.4C12.8097 10.11 13.2897 10.11 13.5797 10.4C14.8097 11.63 15.4797 13.26 15.4797 15C15.4797 16.74 14.7997 18.37 13.5797 19.6C12.3197 20.87 10.6597 21.5 8.98969 21.5Z" fill="#F1A24C" />
                            <path d="M19.0681 14.16C18.8781 14.16 18.6881 14.09 18.5381 13.94C18.2481 13.65 18.2481 13.17 18.5381 12.88C20.5881 10.83 20.5881 7.49999 18.5381 5.45999C16.4881 3.40999 13.1581 3.40999 11.1181 5.45999C10.1281 6.44999 9.57812 7.76999 9.57812 9.16999C9.57812 10.57 10.1281 11.89 11.1181 12.88C11.4081 13.17 11.4081 13.65 11.1181 13.94C10.8281 14.23 10.3481 14.23 10.0581 13.94C8.78813 12.67 8.07812 10.97 8.07812 9.16999C8.07812 7.36999 8.77813 5.66999 10.0581 4.39999C12.6881 1.76999 16.9681 1.76999 19.6081 4.39999C22.2381 7.02999 22.2381 11.32 19.6081 13.95C19.4581 14.09 19.2581 14.16 19.0681 14.16Z" fill="#F1A24C" />
                          </svg>
                          <p className='overflow-hidden text-ellipsis whitespace-nowrap'>{publication.url}</p>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : ''
        }
     
    
    
    </div>
  )
}

export default BasicInfo