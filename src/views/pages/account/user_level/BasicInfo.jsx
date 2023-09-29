import React, {useState, useEffect} from 'react'
import { useAuth } from '../../../../context/AuthContext';
import { useModal } from '../../../../context/ModalService';
import { useRequestLoading } from '../../../../context/LoadingContext';
import EditBasicInfo from '../../../modals/account/EditBasicInfo';


 
function BasicInfo({allData}) {
  const {ProfileData, myData, config, isProfileLevel1, isProfileLevel2, isMyAccount} = allData;

  const {openModal} = useModal();

  const { setRequestLoading } = useRequestLoading();

  // Logged in profile data
  const myAccountType = myData.account_type;
  // Accessing Profile data
  const UserAccountType = ProfileData.account_type;

  const {Title, Category, Industry} = ProfileData;

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
          <div className="border-2 cursor-pointer flex flex-col gap-6 lg:gap-10 w-full lg:w-3/5 border-dashed border-awimYellow rounded-lg bg-awimLightYellow p-8 ">
            <div className="flex justify-between items-end gap-2">
              <div className="flex flex-col gap-3">
                <h2 className="text-awimYellow text-lg lg:text-2xl font-semibold">Upgrade to Level 2</h2>
                <p className='text-sm lg:text-md'>Upgrade your account to get full excess to experts</p>
              </div>
              <div className="lll">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3955 24.115C10.1739 24.115 9.95219 24.0333 9.77719 23.8583C9.43885 23.52 9.43885 22.96 9.77719 22.6217L17.3839 15.015C17.9439 14.455 17.9439 13.545 17.3839 12.985L9.77719 5.37833C9.43885 5.03999 9.43885 4.47999 9.77719 4.14166C10.1155 3.80333 10.6755 3.80333 11.0139 4.14166L18.6205 11.7483C19.2155 12.3433 19.5539 13.1483 19.5539 14C19.5539 14.8517 19.2272 15.6567 18.6205 16.2517L11.0139 23.8583C10.8389 24.0217 10.6172 24.115 10.3955 24.115Z" fill="#F1A24C"/>
                </svg>
              </div>
            
            </div>

            
            <div className="w-full bg-awimGray80 rounded-full h-4 dark:bg-gray-700">
              <div className="bg-awimYellow h-4 rounded-full" style={{width: '45%'}}></div>
            </div>
          </div>
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
            <p className='text-md font-normal'>{Title.title}</p>
          </div>

          <div className="DInfo">
            <h2 className='text-lg pb-1 font-bold'>Industry</h2>
            <p className='text-md font-normal'>{Industry.title}</p>
          </div>

          <div className="DInfo">
            <h2 className='text-lg pb-1 font-bold'>Category</h2>
            <p className='text-md font-normal'>{Category.title}</p>
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
      
    </div>
  )
}

export default BasicInfo