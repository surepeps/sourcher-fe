import React from 'react'
import { NavLink } from 'react-router-dom'
import { useModal } from '../../../../context/ModalService'
import AddOrEditPublication from '../../../modals/account/AddOrEditPublication';
import ApiService from '../../../../helpers/http/apiService';
import { toast } from 'react-toastify';


function Publications({fetLinks, isMyAccount, allPubications}) {
    const {openModal, closeModal} = useModal();
    const api = new ApiService();

    const addPublication = (publication) => {
        openModal(<AddOrEditPublication publication={publication} fetLinks={fetLinks} closeModal={closeModal} />)
    }

    const deletePublication = async (publication) => {
        try {
            await api.getWithToken(`/publication/delete/${publication.id}`);
            fetLinks();
            toast.success("Publication deleted successfully")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h2 className="tt mb-4 text-xl font-bold">Publications</h2>

        
        <div className="allPublications w-full flex flex-col gap-5">
            {
                allPubications.map((publication) => (
                    <div key={publication.id} className="singlePub gap-4 flex w-full justify-between flex-col lg:flex-row ">
                        <div className="ll bg-[#FEF8F1] w-auto flex flex-col lg:flex-row gap-8 px-8 py-5 rounded-lg">
                            <div className="flex gap-2 items-center text-overflow-ellipsis">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1482_13742)">
                                    <path d="M9.99665 19.2853C15.125 19.2853 19.2824 15.1279 19.2824 9.99958C19.2824 4.87122 15.125 0.713867 9.99665 0.713867C4.86829 0.713867 0.710938 4.87122 0.710938 9.99958C0.710938 15.1279 4.86829 19.2853 9.99665 19.2853Z" stroke="#F1A24C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M0.710938 9.99958H19.2824M13.5681 9.99958C13.3927 13.3953 12.1419 16.6472 9.99665 19.2853C7.8514 16.6472 6.60065 13.3953 6.42522 9.99958C6.60065 6.60388 7.8514 3.35194 9.99665 0.713867C12.1419 3.35194 13.3927 6.60388 13.5681 9.99958Z" stroke="#F1A24C" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1482_13742">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <p className='text-ellipsis text-sm whitespace-nowrap'>{publication.title}</p>
                            </div>
                            <NavLink to={publication.url} className="flex gap-2 w-full items-center text-overflow-ellipsis">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.98969 21.5C7.32969 21.5 5.65969 20.87 4.38969 19.6C1.85969 17.06 1.85969 12.94 4.38969 10.41C4.67969 10.12 5.15969 10.12 5.44969 10.41C5.73969 10.7 5.73969 11.18 5.44969 11.47C3.49969 13.42 3.49969 16.59 5.44969 18.54C7.39969 20.49 10.5697 20.49 12.5197 18.54C13.4597 17.6 13.9797 16.34 13.9797 15C13.9797 13.67 13.4597 12.41 12.5197 11.46C12.2297 11.17 12.2297 10.69 12.5197 10.4C12.8097 10.11 13.2897 10.11 13.5797 10.4C14.8097 11.63 15.4797 13.26 15.4797 15C15.4797 16.74 14.7997 18.37 13.5797 19.6C12.3197 20.87 10.6597 21.5 8.98969 21.5Z" fill="#F1A24C"/>
                                    <path d="M19.0681 14.16C18.8781 14.16 18.6881 14.09 18.5381 13.94C18.2481 13.65 18.2481 13.17 18.5381 12.88C20.5881 10.83 20.5881 7.49999 18.5381 5.45999C16.4881 3.40999 13.1581 3.40999 11.1181 5.45999C10.1281 6.44999 9.57812 7.76999 9.57812 9.16999C9.57812 10.57 10.1281 11.89 11.1181 12.88C11.4081 13.17 11.4081 13.65 11.1181 13.94C10.8281 14.23 10.3481 14.23 10.0581 13.94C8.78813 12.67 8.07812 10.97 8.07812 9.16999C8.07812 7.36999 8.77813 5.66999 10.0581 4.39999C12.6881 1.76999 16.9681 1.76999 19.6081 4.39999C22.2381 7.02999 22.2381 11.32 19.6081 13.95C19.4581 14.09 19.2581 14.16 19.0681 14.16Z" fill="#F1A24C"/>
                                </svg>
                                <p className='overflow-hidden text-sm text-ellipsis whitespace-nowrap'>{publication.url}</p>
                            </NavLink>  
                        </div> 
                        {
                            isMyAccount ? 
                            <div className="flex gap-4 items-center">
                                <button onClick={() => deletePublication(publication)} className='border border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white px-2 py-1 lg:px-3 lg:py-2 rounded-md transition duration-300 ease-in-out'>
                                    <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5013 1.66699C5.90964 1.66699 2.16797 5.40866 2.16797 10.0003C2.16797 14.592 5.90964 18.3337 10.5013 18.3337C15.093 18.3337 18.8346 14.592 18.8346 10.0003C18.8346 5.40866 15.093 1.66699 10.5013 1.66699ZM13.768 10.6253H7.1013C6.75964 10.6253 6.4763 10.342 6.4763 10.0003C6.4763 9.65866 6.75964 9.37533 7.1013 9.37533H13.768C14.1096 9.37533 14.393 9.65866 14.393 10.0003C14.393 10.342 14.118 10.6253 13.768 10.6253Z" fill="fill-current"/>
                                    </svg>
                                </button>
                                <button onClick={() => addPublication(publication)} className='border border-awimGreen bg-transparent text-awimGreen hover:bg-awimGreen hover:text-white px-2 py-1 lg:px-3 lg:py-2 rounded-md transition duration-300 ease-in-out'>
                                    <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 18.333H3C2.65833 18.333 2.375 18.0497 2.375 17.708C2.375 17.3663 2.65833 17.083 3 17.083H18C18.3417 17.083 18.625 17.3663 18.625 17.708C18.625 18.0497 18.3417 18.333 18 18.333Z" fill="fill-current"/>
                                        <path d="M16.3495 2.90005C14.7328 1.28338 13.1495 1.24172 11.4912 2.90005L10.4828 3.90838C10.3995 3.99172 10.3662 4.12505 10.3995 4.24172C11.0328 6.45005 12.7995 8.21672 15.0078 8.85005C15.0412 8.85838 15.0745 8.86672 15.1078 8.86672C15.1995 8.86672 15.2828 8.83338 15.3495 8.76672L16.3495 7.75838C17.1745 6.94172 17.5745 6.15005 17.5745 5.35005C17.5828 4.52505 17.1828 3.72505 16.3495 2.90005Z" fill="fill-current"/>
                                        <path d="M13.507 9.60768C13.2653 9.49101 13.032 9.37435 12.807 9.24102C12.6236 9.13268 12.4486 9.01602 12.2736 8.89102C12.132 8.79935 11.9653 8.66602 11.807 8.53268C11.7903 8.52435 11.732 8.47435 11.6653 8.40768C11.3903 8.17435 11.082 7.87435 10.807 7.54102C10.782 7.52435 10.7403 7.46602 10.682 7.39102C10.5986 7.29102 10.457 7.12435 10.332 6.93268C10.232 6.80768 10.1153 6.62435 10.007 6.44102C9.87364 6.21602 9.75697 5.99102 9.6403 5.75768C9.48734 5.4299 9.05713 5.33253 8.80135 5.5883L4.1153 10.2743C4.00697 10.3827 3.90697 10.591 3.88197 10.7327L3.43197 13.9243C3.34864 14.491 3.50697 15.0243 3.85697 15.3827C4.15697 15.6743 4.57364 15.8327 5.02364 15.8327C5.12364 15.8327 5.22364 15.8243 5.32364 15.8077L8.52364 15.3577C8.67364 15.3327 8.88197 15.2327 8.98197 15.1243L13.6758 10.4306C13.9264 10.1799 13.8322 9.74863 13.507 9.60768Z" fill="fill-current"/>
                                    </svg>
                                </button>
                            </div>
                            : ''
                        }
                        
                        
                    </div>
                ))
            }
        </div>

        {
            isMyAccount ? 
            <button onClick={addPublication} className='text-awimGreen text-sm flex gap-2 mt-10 font-semibold items-center'> 
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9987 1.83331C5.94786 1.83331 1.83203 5.94915 1.83203 11C1.83203 16.0508 5.94786 20.1666 10.9987 20.1666C16.0495 20.1666 20.1654 16.0508 20.1654 11C20.1654 5.94915 16.0495 1.83331 10.9987 1.83331ZM14.6654 11.6875H11.6862V14.6666C11.6862 15.0425 11.3745 15.3541 10.9987 15.3541C10.6229 15.3541 10.3112 15.0425 10.3112 14.6666V11.6875H7.33203C6.9562 11.6875 6.64453 11.3758 6.64453 11C6.64453 10.6241 6.9562 10.3125 7.33203 10.3125H10.3112V7.33331C10.3112 6.95748 10.6229 6.64581 10.9987 6.64581C11.3745 6.64581 11.6862 6.95748 11.6862 7.33331V10.3125H14.6654C15.0412 10.3125 15.3529 10.6241 15.3529 11C15.3529 11.3758 15.0412 11.6875 14.6654 11.6875Z" fill="#004C3F"/>
                </svg>
                Add Another Publication
            </button>
            : ''
        }
        
    </div>
  )
}

export default Publications