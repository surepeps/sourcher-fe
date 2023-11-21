import React from 'react'
import ProfileBannerSkeleton from './ProfileBannerSkeleton'


function ProfileSkeleton() {
  return (
    <div className='w-full divide-gray-200 rounded animate-pulse dark:divide-gray-700 dark:border-gray-700'>
      <ProfileBannerSkeleton />
      
      <div className="max-w-screen-2xl relative mx-auto px-4 py-10 font-notoSans">
          <div className="tabCont flex absolute space-x-10 lg:space-x-32 overflow-x-auto ScrollableCont -top-9 lg:-top-14 left-0 right-0 w-full px-4">
              <div className='rounded-md bg-gray-300 items-center h-20 w-32 flex text-sm lg:text-md pt-2 lg:pt-4 pb-4 lg:pb-7 font-medium gap-3 px-8 focus:outline-none '>
                
              </div>
          </div>
          <div className="bg-white p-4 rounded-b-lg">
              <div className="block transition-opacity duration-300">
                <div className='text-md flex flex-col gap-5'>
                  <div className="topSec">
                    <div className="topC">
                      <h2 className="text-xl bg-cardBg w-32 h-4 rounded-lg font-semibold pb-3"></h2>
                    </div>
                    <p className="lg:w-[70%] bg-cardBg mt-4 h-32 rounded-lg w-full"></p>
                  </div>
                  <div className="ExpertOverViewData">
                    {/* Professional Association */}
                    <div className="professionalAssociatio pt-5 w-full lg:w-[50%]">
                          <div className="titleDesc pb-3">
                            <h2 className="Title bg-cardBg w-44 h-4 rounded-lg"></h2>
                            <p></p>
                          </div>

                          <div className="pA">
                            <div className={`singleProfession mb-5 rounded-xl border border-cardBg p-3 flex justify-between`}>
                              <div className="leftCC flex gap-3">
                                <div className="flex p-4 justify-center items-center bg-cardBg">
                                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.1194 9.30702C26.9861 8.05369 25.0927 7.42702 22.3461 7.42702H22.0261V7.37369C22.0261 5.13369 22.0261 2.36035 17.0127 2.36035H14.9861C9.97273 2.36035 9.97273 5.14702 9.97273 7.37369V7.44035H9.65273C6.89273 7.44035 5.01273 8.06702 3.8794 9.32035C2.5594 10.787 2.5994 12.7604 2.73273 14.107L2.74607 14.2004L2.85685 15.3636C2.87112 15.5134 2.95196 15.6488 3.07772 15.7314C3.3847 15.9329 3.97535 16.3159 4.3194 16.507C4.50607 16.627 4.70607 16.7337 4.90607 16.8404C7.18607 18.0937 9.69273 18.9337 12.2394 19.347C12.3594 20.6004 12.9061 22.067 15.8261 22.067C18.7461 22.067 19.3194 20.6137 19.4127 19.3204C22.1327 18.8804 24.7594 17.9337 27.1327 16.547C27.2127 16.507 27.2661 16.467 27.3327 16.427C27.8826 16.1162 28.4538 15.7304 28.9697 15.3561C29.0825 15.2743 29.1548 15.1483 29.1702 15.0098L29.1994 14.747L29.2661 14.1204C29.2794 14.0404 29.2794 13.9737 29.2927 13.8804C29.3994 12.5337 29.3727 10.6937 28.1194 9.30702ZM17.4527 18.4404C17.4527 19.8537 17.4527 20.067 15.8127 20.067C14.1727 20.067 14.1727 19.8137 14.1727 18.4537V16.7737H17.4527V18.4404ZM11.8794 7.42702V7.37369C11.8794 5.10702 11.8794 4.26702 14.9861 4.26702H17.0127C20.1194 4.26702 20.1194 5.12035 20.1194 7.37369V7.44035H11.8794V7.42702Z" fill="#ffffff"/>
                                    <path d="M28.1019 18.1828C28.455 18.0133 28.8601 18.2942 28.8247 18.6841L28.3191 24.2536C28.0391 26.9203 26.9458 29.6403 21.0791 29.6403H10.9191C5.05247 29.6403 3.95914 26.9203 3.67914 24.267L3.19843 18.9791C3.16339 18.5937 3.56007 18.3135 3.9122 18.4741C5.36984 19.1393 8.49273 20.5171 10.3216 20.9782C10.4863 21.0197 10.6203 21.1374 10.6892 21.2927C11.4809 23.0767 13.2513 24.027 15.8258 24.027C18.3748 24.027 20.1685 23.0401 20.9623 21.2529C21.0313 21.0975 21.1658 20.9798 21.3306 20.9381C23.2702 20.4477 26.583 18.9119 28.1019 18.1828Z" fill="#ffffff"/>
                                  </svg>
                                </div>
                                <div className="flex flex-col justify-between">
                                  <h2 className='bg-cardBg w-44 h-4 rounded-lg'></h2>
                                  <p className='duration bg-cardBg w-44 h-4 rounded-lg'></p>
                                </div>
                              </div>
                            </div>
                          
                          </div>
                        </div>

                        <div className="line my-10 w-full bg-cardBg h-0.5 rounded-xl"></div>
                        <div className="Experience pt-5 w-full lg:w-[50%]">
                          <div className="titleDesc pb-3">
                                <h2 className="Title bg-cardBg w-44 h-4 rounded-lg font-bold"></h2>
                          </div>
                          <div className="pA">
                            <div className={`singleWorkExperience mb-5 rounded-xl border border-cardBg p-1 flex justify-between`}>
                              <div className="leftCC flex items-center justify-between gap-3">
                                
                                <div className="flex p-4 justify-center items-center">
                                  <svg width="11" height="122" viewBox="0 0 11 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5.5" cy="5.5" r="5.5" fill="#D7D7D7"/>
                                    <rect x="4.5" y="15" width="2" height="11" rx="1" fill="#D7D7D7"/>
                                    <rect x="4.5" y="31" width="2" height="6" rx="1" fill="#D7D7D7"/>
                                    <rect x="4.5" y="42" width="2" height="11" rx="1" fill="#D7D7D7"/>
                                    <rect x="4.5" y="58" width="2" height="6" rx="1" fill="#D7D7D7"/>
                                    <rect x="4.5" y="69" width="2" height="11" rx="1" fill="#D7D7D7"/>
                                    <rect x="4.5" y="85" width="2" height="6" rx="1" fill="#D7D7D7"/>
                                    <rect x="4.5" y="96" width="2" height="11" rx="1" fill="#D7D7D7"/>
                                    <circle cx="5.5" cy="116.5" r="5.5" fill="#D7D7D7"/>
                                  </svg>
                                </div>

                                <div className="flex flex-col gap-10 justify-between">
                                  <div className="topR">
                                    <h2 className='title bg-cardBg w-32 mb-2 h-4 rounded-lg text-bold'></h2>
                                    <p className='text-md bg-cardBg w-32 h-4 rounded-lg'></p>
                                  </div>

                                  <div className="bottomR">
                                    <p className='description bg-cardBg w-44 h-4 rounded-lg'></p>
                                  </div>
                                </div>

                              </div>
                              
                            </div>
                          </div>
                          
                        </div>
                    
                    
                        <div className="line my-10 w-full bg-cardBg h-0.5 rounded-xl"></div>
                          {/* Publication */}
                          <div className="pub">
                            <h2 className="tt mb-4 bg-cardBg w-44 h-4 rounded-lg"></h2>
                            <div className="allPublications w-full flex flex-col gap-5">
                              <div className="singlePub gap-4 flex w-full justify-between flex-col lg:flex-row ">
                                  <div className="ll bg-cardBg w-auto flex flex-col lg:flex-row gap-8 px-8 py-3 rounded-lg">
                                    <div className="flex gap-2 items-center text-overflow-ellipsis">
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1482_13742)">
                                          <path d="M9.99665 19.2853C15.125 19.2853 19.2824 15.1279 19.2824 9.99958C19.2824 4.87122 15.125 0.713867 9.99665 0.713867C4.86829 0.713867 0.710938 4.87122 0.710938 9.99958C0.710938 15.1279 4.86829 19.2853 9.99665 19.2853Z" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                          <path d="M0.710938 9.99958H19.2824M13.5681 9.99958C13.3927 13.3953 12.1419 16.6472 9.99665 19.2853C7.8514 16.6472 6.60065 13.3953 6.42522 9.99958C6.60065 6.60388 7.8514 3.35194 9.99665 0.713867C12.1419 3.35194 13.3927 6.60388 13.5681 9.99958Z" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_1482_13742">
                                            <rect width="20" height="20" fill="white" />
                                          </clipPath>
                                        </defs>
                                      </svg>
                                      <p className='text-ellipsis bg-textWhite w-20 h-4 rounded-lg'></p>
                                    </div>
                                    <div className="flex gap-2 w-full items-center text-overflow-ellipsis">
                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.98969 21.5C7.32969 21.5 5.65969 20.87 4.38969 19.6C1.85969 17.06 1.85969 12.94 4.38969 10.41C4.67969 10.12 5.15969 10.12 5.44969 10.41C5.73969 10.7 5.73969 11.18 5.44969 11.47C3.49969 13.42 3.49969 16.59 5.44969 18.54C7.39969 20.49 10.5697 20.49 12.5197 18.54C13.4597 17.6 13.9797 16.34 13.9797 15C13.9797 13.67 13.4597 12.41 12.5197 11.46C12.2297 11.17 12.2297 10.69 12.5197 10.4C12.8097 10.11 13.2897 10.11 13.5797 10.4C14.8097 11.63 15.4797 13.26 15.4797 15C15.4797 16.74 14.7997 18.37 13.5797 19.6C12.3197 20.87 10.6597 21.5 8.98969 21.5Z" fill="#ffffff" />
                                        <path d="M19.0681 14.16C18.8781 14.16 18.6881 14.09 18.5381 13.94C18.2481 13.65 18.2481 13.17 18.5381 12.88C20.5881 10.83 20.5881 7.49999 18.5381 5.45999C16.4881 3.40999 13.1581 3.40999 11.1181 5.45999C10.1281 6.44999 9.57812 7.76999 9.57812 9.16999C9.57812 10.57 10.1281 11.89 11.1181 12.88C11.4081 13.17 11.4081 13.65 11.1181 13.94C10.8281 14.23 10.3481 14.23 10.0581 13.94C8.78813 12.67 8.07812 10.97 8.07812 9.16999C8.07812 7.36999 8.77813 5.66999 10.0581 4.39999C12.6881 1.76999 16.9681 1.76999 19.6081 4.39999C22.2381 7.02999 22.2381 11.32 19.6081 13.95C19.4581 14.09 19.2581 14.16 19.0681 14.16Z" fill="#ffffff" />
                                      </svg>
                                      <p className='bg-textWhite w-20 h-4 rounded-lg'></p>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                    
                  </div>                  
                </div>
              </div>
          </div>
      </div>
      
        
    </div>
    
  )
}

export default ProfileSkeleton