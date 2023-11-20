import React from 'react'
import { NavLink } from 'react-router-dom'
import ShowSingleProf from '../../components/experts/ShowSingleProf';
import ShowSingleExp from '../../components/experts/ShowSingleExp';


function Overview({ProfileData, myData, iamLoggedIn, config}) {

  const professionalAssociations = ProfileData.professions;
  const workExperiencesData = ProfileData.workExperiences;
  const AllPublications = ProfileData.publications;

  return (
    <div className='text-md flex flex-col gap-5'>
      <div className="topSec">
        <div className="topC">
          <h2 className="text-xl font-semibold pb-3">Professional Bio</h2>
        </div>
        <p className="lg:w-[70%] w-full">
            {ProfileData?.about}
        </p>
      </div>
      <div className="ExpertOverViewData">
        {
          professionalAssociations.length ? 
          <>
            {/* Professional Association */}
            <div className="professionalAssociatio pt-5 w-full lg:w-[50%]">
              <div className="titleDesc pb-3">
                <h2 className="Title text-lg font-bold">Professional Association</h2>
                <p></p>
              </div>

              <div className="pA">
                {
                  professionalAssociations.map((profession) => (
                    <ShowSingleProf key={profession.id} profession={profession} />
                  ))
                }
                
              </div>
            </div>
          </>
          : ''
        }

        {
          workExperiencesData.length ? 
          <>
          {/* Work Experience */}
            <div className="line my-10 w-full bg-[#0F172A13] h-0.5 rounded-xl"></div>
            <div className="Experience pt-5 w-full lg:w-[50%]">
              <div className="titleDesc pb-3">
                    <h2 className="Title text-lg font-bold">Work Experience</h2>
              </div>
              <div className="pA">
                {
                  workExperiencesData.map((experience) => (
                    <ShowSingleExp key={experience.id} experience={experience} />
                  ))
                }
              </div>
              
            </div>
          </>
          : ''
        }
        
        
        {
          AllPublications.length > 0 ? (
            <>
              <div className="line my-10 w-full bg-[#0F172A13] h-0.5 rounded-xl"></div>
              {/* Publication */}
              <div className="pub">
                <h2 className="tt mb-4 text-xl font-bold">Publications</h2>
                <div className="allPublications w-full flex flex-col gap-5">
                  {AllPublications.map((publication) => (
                    <div key={publication.id} className="singlePub gap-4 flex w-full justify-between flex-col lg:flex-row ">
                      <div className="ll bg-[#FEF8F1] w-auto flex flex-col lg:flex-row gap-8 px-8 py-3 rounded-lg">
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
                          <p className='text-ellipsis text-sm whitespace-nowrap'>{publication.title}</p>
                        </div>
                        <NavLink to={publication.url} className="flex gap-2 w-full items-center text-overflow-ellipsis">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.98969 21.5C7.32969 21.5 5.65969 20.87 4.38969 19.6C1.85969 17.06 1.85969 12.94 4.38969 10.41C4.67969 10.12 5.15969 10.12 5.44969 10.41C5.73969 10.7 5.73969 11.18 5.44969 11.47C3.49969 13.42 3.49969 16.59 5.44969 18.54C7.39969 20.49 10.5697 20.49 12.5197 18.54C13.4597 17.6 13.9797 16.34 13.9797 15C13.9797 13.67 13.4597 12.41 12.5197 11.46C12.2297 11.17 12.2297 10.69 12.5197 10.4C12.8097 10.11 13.2897 10.11 13.5797 10.4C14.8097 11.63 15.4797 13.26 15.4797 15C15.4797 16.74 14.7997 18.37 13.5797 19.6C12.3197 20.87 10.6597 21.5 8.98969 21.5Z" fill="#F1A24C" />
                            <path d="M19.0681 14.16C18.8781 14.16 18.6881 14.09 18.5381 13.94C18.2481 13.65 18.2481 13.17 18.5381 12.88C20.5881 10.83 20.5881 7.49999 18.5381 5.45999C16.4881 3.40999 13.1581 3.40999 11.1181 5.45999C10.1281 6.44999 9.57812 7.76999 9.57812 9.16999C9.57812 10.57 10.1281 11.89 11.1181 12.88C11.4081 13.17 11.4081 13.65 11.1181 13.94C10.8281 14.23 10.3481 14.23 10.0581 13.94C8.78813 12.67 8.07812 10.97 8.07812 9.16999C8.07812 7.36999 8.77813 5.66999 10.0581 4.39999C12.6881 1.76999 16.9681 1.76999 19.6081 4.39999C22.2381 7.02999 22.2381 11.32 19.6081 13.95C19.4581 14.09 19.2581 14.16 19.0681 14.16Z" fill="#F1A24C" />
                          </svg>
                          <p className='overflow-hidden text-sm text-ellipsis whitespace-nowrap'>{publication.url}</p>
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


      
    </div>
  )
}

export default Overview