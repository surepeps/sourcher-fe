import React from 'react'
import CountryFlag from 'react-country-flag';
import { NavLink } from 'react-router-dom';
import { useModal } from '../../../context/ModalService';
import UploadAvatar from '../../modals/account/UploadAvatar';


function ProfileBanner({allData}) {
    const {config, myData, ProfileData, iamLoggedIn, isMyAccount, isProfileExpert, isProfileLevel1, isProfileLevel2, isMyAccountExpert, isMyAccountLevel1, isMyAccountLevel2} = allData;
    console.log(allData);

    const {google, twitter, linkedin, youtube, instagram, facebook, username} = ProfileData

    const {openModal, closeModal} = useModal();

    const allowChatAccess = () => {
        alert("Hello")
    }

    const imageURL = `${config.fileURL}${ProfileData.avatar}`;

    const uploadAvatar = () => {
        openModal(<UploadAvatar previousImgWOURL={ProfileData.avatar} previousImage={ProfileData.avatar ? imageURL : null} closeModal={closeModal} />)
    }

  return (
    <div className='w-full bg-textPurple relative h-auto flex py-4'>
        <img src={config.profileBanner} className='absolute left-0 top-0 bottom-0' alt=""  />
        <div className="max-w-screen-2xl mx-auto w-full md:items-center items-start px-4 flex lg:py-24 pt-20 pb-14 gap-7 md:flex-row flex-col justify-between">

            <div className="flex items-center relative lg:flex-row w-full flex-col gap-10">
                <div className="imgContIcon relative">
                    <div className="circle w-[170px] mt-7 lg:mt-1 -ml-14 lg:ml-0 h-[170px] xl:w-[250px] xl:h-[250px] rounded-full border border-awimLightPurple">
                        <img src={ProfileData.avatar ? imageURL : config.noAvatar} alt="" className='w-full h-full rounded-full' />
                    </div>
                    {
                        isMyAccount ? 
                        (
                            <span onClick={uploadAvatar} className='cursor-pointer absolute bottom-3 lg:bottom-8 right-3'>
                                <svg className='w-[36px] h-[36px] lg:w-[46px] lg:h-[46px]' width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="52" height="52" rx="26" fill="#591664"/>
                                    <path d="M38.2801 39.4286H17.7087C17.2401 39.4286 16.8516 39.04 16.8516 38.5714C16.8516 38.1029 17.2401 37.7143 17.7087 37.7143H38.2801C38.7487 37.7143 39.1373 38.1029 39.1373 38.5714C39.1373 39.04 38.7487 39.4286 38.2801 39.4286Z" fill="white"/>
                                    <path d="M36.0135 18.263C33.7963 16.0459 31.6249 15.9887 29.3506 18.263L27.9677 19.6459C27.8535 19.7602 27.8077 19.943 27.8535 20.103C28.722 23.1316 31.1449 25.5545 34.1735 26.423C34.2192 26.4345 34.2649 26.4459 34.3106 26.4459C34.4363 26.4459 34.5506 26.4002 34.642 26.3087L36.0135 24.9259C37.1449 23.8059 37.6935 22.7202 37.6935 21.623C37.7049 20.4916 37.1563 19.3945 36.0135 18.263Z" fill="white"/>
                                    <path d="M32.1205 27.4626C31.7891 27.3026 31.4691 27.1426 31.1605 26.9598C30.9091 26.8112 30.6691 26.6512 30.4291 26.4798C30.2348 26.3541 30.0062 26.1712 29.7891 25.9883C29.7662 25.9769 29.6862 25.9083 29.5948 25.8169C29.2176 25.4969 28.7948 25.0855 28.4176 24.6283C28.3834 24.6055 28.3262 24.5255 28.2462 24.4226C28.1319 24.2855 27.9376 24.0569 27.7662 23.7941C27.6291 23.6226 27.4691 23.3712 27.3205 23.1198C27.1376 22.8112 26.9776 22.5026 26.8176 22.1826C26.6079 21.7331 26.0179 21.5996 25.6671 21.9503L19.2405 28.3769C19.0919 28.5255 18.9548 28.8112 18.9205 29.0055L18.3034 33.3826C18.1891 34.1598 18.4062 34.8912 18.8862 35.3826C19.2976 35.7826 19.8691 35.9998 20.4862 35.9998C20.6234 35.9998 20.7605 35.9883 20.8976 35.9655L25.2862 35.3483C25.4919 35.3141 25.7776 35.1769 25.9148 35.0283L32.352 28.5912C32.6957 28.2474 32.5666 27.6559 32.1205 27.4626Z" fill="white"/>
                                    <rect x="2" y="2" width="52" height="52" rx="26" stroke="#7A3785" strokeWidth="4"/>
                                </svg>
                            </span>
                        ) : ''
                    }
                    

                </div>
                
            
                <div className="nameCountrySocial w-full">
                    
                    <div className="nameFlag w-auto flex gap-4 pb-4 items-center">
                        <h1 className="lg:text-4xl text-2xl text-textWhite font-semibold">{ProfileData.first_name} {ProfileData.last_name}</h1>
                        <CountryFlag className='!w-[41px] !h-[25px]' countryCode={ProfileData.country_id} svg />
                    </div>

                    {
                        isProfileExpert && !isMyAccountLevel1 ?
                        (
                            <div className='w-[55%] flex flex-col gap-1'>
                                <span className='text-textWhite text-sm lg:text-md'>Interview Language: {ProfileData.interviewLanguage}</span>
                                
                                <div className={`social px-5 py-3 rounded-lg flex w-[80%] ${iamLoggedIn && isMyAccount ? 'lg:w-[45%]' : iamLoggedIn && !isMyAccount ? 'lg:w-auto' : 'lg:w-[40%]'} gap-6 justify-between bg-[#ffffff16]`}>
                                    <span>
                                        <NavLink to={twitter}>
                                            <svg className='w-[21px] h-[21px]' width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30.4308 3.10935C29.2906 3.67948 28.1503 3.86953 26.82 4.05957C28.1503 3.29939 29.1005 2.15912 29.4806 0.638757C28.3403 1.39894 27.01 1.77903 25.4896 2.15912C24.3493 1.01885 22.6389 0.258667 20.9285 0.258667C16.9375 0.258667 13.8968 4.05957 14.847 7.86048C9.71579 7.67043 5.15469 5.19984 1.9239 1.39894C0.213484 4.24962 1.16371 7.86048 3.82436 9.76093C2.87413 9.76093 1.9239 9.38084 0.973668 9.00075C0.973668 11.8514 3.06418 14.5121 5.91487 15.2722C4.96464 15.4623 4.01441 15.6523 3.06418 15.4623C3.82436 17.9329 6.10492 19.8333 8.95561 19.8333C6.67505 21.5437 3.25422 22.494 0.0234375 22.1139C2.87413 23.8243 6.10492 24.9646 9.52575 24.9646C21.1186 24.9646 27.5801 15.2722 27.2 6.34011C28.5304 5.57993 29.6706 4.43966 30.4308 3.10935Z" fill="white" />
                                            </svg>
                                        </NavLink>
                                    </span>

                                    <span>
                                        <NavLink to={instagram}>
                                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9708 0.260141C14.8722 0.256682 15.7736 0.265742 16.6748 0.287317L16.9144 0.295963C17.1911 0.305845 17.4641 0.318198 17.7939 0.333021C19.1082 0.394784 20.005 0.602306 20.7919 0.907413C21.6072 1.22117 22.294 1.64609 22.9808 2.33289C23.6087 2.95003 24.0948 3.69655 24.405 4.52053C24.7101 5.30738 24.9177 6.20541 24.9794 7.51972C24.9942 7.84829 25.0066 8.12252 25.0165 8.39922L25.0239 8.63886C25.0458 9.53959 25.0553 10.4406 25.0523 11.3416L25.0535 12.2631V13.8813C25.0566 14.7827 25.0471 15.6841 25.0251 16.5852L25.0177 16.8249C25.0078 17.1016 24.9955 17.3746 24.9807 17.7044C24.9189 19.0187 24.7089 19.9155 24.405 20.7023C24.0958 21.5272 23.6096 22.2743 22.9808 22.8912C22.3631 23.5191 21.6162 24.0051 20.7919 24.3154C20.005 24.6206 19.1082 24.8281 17.7939 24.8898C17.4641 24.9047 17.1911 24.917 16.9144 24.9269L16.6748 24.9343C15.7736 24.9563 14.8722 24.9657 13.9708 24.9627L13.0493 24.9639H11.4323C10.5309 24.967 9.62951 24.9575 8.72836 24.9355L8.48872 24.9281C8.19548 24.9175 7.90231 24.9051 7.60922 24.8911C6.2949 24.8293 5.3981 24.6193 4.61001 24.3154C3.7857 24.0058 3.03905 23.5197 2.42237 22.8912C1.79368 22.2739 1.30721 21.5269 0.99688 20.7023C0.691771 19.9155 0.484247 19.0187 0.422484 17.7044C0.408727 17.4113 0.396375 17.1181 0.385427 16.8249L0.379251 16.5852C0.356477 15.6841 0.346182 14.7827 0.348369 13.8813V11.3416C0.344921 10.4406 0.353981 9.5396 0.375545 8.63886L0.384192 8.39922C0.394074 8.12252 0.406426 7.84829 0.421249 7.51972C0.483012 6.20417 0.690535 5.30862 0.995644 4.52053C1.30615 3.69614 1.79358 2.94983 2.4236 2.33413C3.03987 1.70508 3.78604 1.21817 4.61001 0.907413C5.3981 0.602306 6.29367 0.394784 7.60922 0.333021L8.48872 0.295963L8.72836 0.289787C9.62909 0.267025 10.5301 0.25673 11.4311 0.258906L13.9708 0.260141ZM12.7009 6.4364C11.8826 6.42483 11.0701 6.57601 10.3107 6.88118C9.55128 7.18634 8.8601 7.63939 8.2773 8.214C7.6945 8.78861 7.23172 9.47332 6.91585 10.2283C6.59998 10.9833 6.43732 11.7936 6.43732 12.612C6.43732 13.4305 6.59998 14.2407 6.91585 14.9958C7.23172 15.7508 7.6945 16.4355 8.2773 17.0101C8.8601 17.5847 9.55128 18.0378 10.3107 18.3429C11.0701 18.6481 11.8826 18.7993 12.7009 18.7877C14.339 18.7877 15.91 18.137 17.0682 16.9787C18.2265 15.8204 18.8772 14.2495 18.8772 12.6114C18.8772 10.9734 18.2265 9.40242 17.0682 8.24415C15.91 7.08588 14.339 6.4364 12.7009 6.4364ZM12.7009 8.90691C13.1932 8.89784 13.6823 8.98695 14.1398 9.16903C14.5972 9.35112 15.0138 9.62254 15.3651 9.96743C15.7165 10.3123 15.9956 10.7238 16.1862 11.1777C16.3767 11.6317 16.4749 12.1191 16.475 12.6114C16.4751 13.1038 16.377 13.5912 16.1866 14.0452C15.9962 14.4992 15.7173 14.9108 15.366 15.2558C15.0148 15.6008 14.5983 15.8723 14.1409 16.0546C13.6835 16.2368 13.1944 16.3261 12.7022 16.3172C11.7194 16.3172 10.7768 15.9268 10.0818 15.2318C9.38684 14.5368 8.99641 13.5943 8.99641 12.6114C8.99641 11.6286 9.38684 10.686 10.0818 9.99106C10.7768 9.2961 11.7194 8.90567 12.7022 8.90567L12.7009 8.90691ZM19.1861 4.58352C18.7876 4.59947 18.4107 4.769 18.1344 5.05659C17.858 5.34418 17.7037 5.72753 17.7037 6.12635C17.7037 6.52517 17.858 6.90852 18.1344 7.19612C18.4107 7.48371 18.7876 7.65323 19.1861 7.66918C19.5956 7.66918 19.9883 7.50651 20.2779 7.21694C20.5675 6.92737 20.7301 6.53463 20.7301 6.12512C20.7301 5.71561 20.5675 5.32287 20.2779 5.0333C19.9883 4.74373 19.5956 4.58105 19.1861 4.58105V4.58352Z" fill="white" />
                                            </svg>
                                        </NavLink>
                                    </span>

                                    <span>
                                        <NavLink to={linkedin}>
                                            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.53152 24.9645H1.28148V8.44245H6.53152V24.9645ZM3.9065 6.12627C2.20796 6.12627 0.972656 4.89097 0.972656 3.19244C0.972656 1.49391 2.36237 0.258621 3.9065 0.258621C5.60503 0.258621 6.84034 1.49391 6.84034 3.19244C6.84034 4.89097 5.60503 6.12627 3.9065 6.12627ZM25.6787 24.9645H20.4286V16.0086C20.4286 13.3836 19.3477 12.6116 17.8036 12.6116C16.2595 12.6116 14.7154 13.8469 14.7154 16.163V24.9645H9.46534V8.44245H14.4065V10.7586C14.8698 9.67774 16.7227 7.97921 19.3477 7.97921C22.2816 7.97921 25.3698 9.67774 25.3698 14.7733V24.9645H25.6787Z" fill="white" />
                                            </svg>
                                        </NavLink>
                                    </span>

                                    <span>
                                        <NavLink to={youtube}>
                                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.8313 3.11153H10.3563C5.80626 3.11153 3.09375 5.82403 3.09375 10.374V20.8366C3.09375 25.3991 5.80626 28.1116 10.3563 28.1116H20.8188C25.3688 28.1116 28.0813 25.3991 28.0813 20.8491V10.374C28.0938 5.82403 25.3813 3.11153 20.8313 3.11153ZM10.8188 21.5741C10.7938 21.5741 10.7563 21.5741 10.7313 21.5741C9.51876 21.4616 8.38126 20.8991 7.53126 19.9991C5.53126 17.8991 5.53126 14.4866 7.53126 12.3865L10.2688 9.51154C11.2438 8.48654 12.5563 7.91154 13.9563 7.91154C15.3563 7.91154 16.6688 8.47404 17.6438 9.51154C19.6438 11.6115 19.6438 15.0241 17.6438 17.1241L16.2813 18.5616C15.9188 18.9366 15.3313 18.9491 14.9563 18.5991C14.5813 18.2366 14.5688 17.6491 14.9188 17.2741L16.2813 15.8366C17.6063 14.4491 17.6063 12.1865 16.2813 10.8115C15.0438 9.51154 12.8688 9.51154 11.6188 10.8115L8.88126 13.6866C7.55626 15.0741 7.55626 17.3366 8.88126 18.7116C9.41877 19.2866 10.1438 19.6366 10.9063 19.7116C11.4188 19.7616 11.7938 20.2241 11.7438 20.7366C11.7063 21.2116 11.2938 21.5741 10.8188 21.5741ZM23.6563 18.8491L20.9188 21.7241C19.9438 22.7491 18.6313 23.3241 17.2313 23.3241C15.8313 23.3241 14.5188 22.7616 13.5438 21.7241C11.5438 19.6241 11.5438 16.2116 13.5438 14.1116L14.9063 12.674C15.2688 12.299 15.8563 12.2865 16.2313 12.6365C16.6063 12.9991 16.6188 13.5866 16.2688 13.9616L14.9063 15.3991C13.5813 16.7866 13.5813 19.0491 14.9063 20.4241C16.1438 21.7241 18.3188 21.7366 19.5688 20.4241L22.3063 17.5491C23.6313 16.1616 23.6313 13.8991 22.3063 12.524C21.7688 11.949 21.0438 11.599 20.2813 11.524C19.7688 11.474 19.3938 11.0115 19.4438 10.499C19.4938 9.98654 19.9438 9.59904 20.4688 9.66154C21.6813 9.78654 22.8188 10.3365 23.6688 11.2365C25.6563 13.3241 25.6563 16.7491 23.6563 18.8491Z" fill="white" />
                                            </svg>
                                        </NavLink>
                                    </span>
                                </div>
                            </div>

                        ): ''
                    }
                    
                    
                </div>

            </div>

            {
                ((isMyAccountLevel2 || isMyAccountExpert) && !isMyAccount && (isProfileLevel2 || isProfileExpert)) ?

                <div className="btnMessage relative w-full flex justify-end">
                    <NavLink to={`/sh/chat/${username}`} className='text-md bg-textWhite shadow-none items-center rounded-lg px-4 py-3 flex gap-2 border border-textWhite hover:bg-transparent hover:text-textWhite transition duration-300 ease-in-out text-textPurple'>
                        <svg className='fill-current' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.493 10.3333V13.725C13.493 14.025 13.4596 14.3083 13.3846 14.5667C13.0763 15.7917 12.0596 16.5583 10.6596 16.5583H8.39297L5.8763 18.2333C5.5013 18.4917 5.0013 18.2167 5.0013 17.7667V16.5583C4.1513 16.5583 3.44297 16.275 2.9513 15.7833C2.4513 15.2833 2.16797 14.575 2.16797 13.725V10.3333C2.16797 8.75 3.1513 7.65833 4.66797 7.51667C4.7763 7.50833 4.88464 7.5 5.0013 7.5H10.6596C12.3596 7.5 13.493 8.63333 13.493 10.3333Z" fill="fill-current"/>
                            <path d="M15.293 13C16.3513 13 17.243 12.65 17.8596 12.025C18.4846 11.4083 18.8346 10.5167 18.8346 9.45832V5.20832C18.8346 3.24999 17.2513 1.66666 15.293 1.66666H8.20964C6.2513 1.66666 4.66797 3.24999 4.66797 5.20832V5.83332C4.66797 6.06666 4.8513 6.24999 5.08464 6.24999H10.6596C12.918 6.24999 14.743 8.07499 14.743 10.3333V12.5833C14.743 12.8167 14.9263 13 15.1596 13H15.293Z" fill="fill-current"/>
                        </svg>
                        Message Expert
                    </NavLink>
                </div>
                : ''

            }
            

            
            
        </div>
    </div>
  )
}

export default ProfileBanner