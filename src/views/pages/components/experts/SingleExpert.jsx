import React,{useState} from 'react'
import HtmlRender from '../../../../helpers/HtmlRender'
import CountryFlag from 'react-country-flag';
import { UserImageUrlCreator } from '../../../../helpers/Helper';
import { useNavigate } from 'react-router-dom';


function SingleExpert({expert, myclass = 'w-full'}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const goToMessageExpert = (userName) => {
    navigate(`/sh/chat/${userName}`);
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`${myclass} border-2 flex flex-col justify-between border-[#0F172A10] h-auto ${expert.availableForInterviewNow == '1' ? 'rounded-r-3xl rounded-bl-3xl rounded-tl-lg' : 'rounded-3xl'} `}>
        <div className="middle h-auto w-full relative">
            {
              expert.availableForInterviewNow == '1' ?
              <div className='px-4 py-2 flex items-center bg-awimGreen text-textWhite font-semibold text-sm gap-2 absolute left-0 top-0 rounded-br-lg rounded-tl-lg'>
                <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.95427 5.35995H7.40927V1.75995C7.40927 0.919949 6.95427 0.749949 6.39927 1.37995L5.99927 1.83495L2.61427 5.68495C2.14927 6.20995 2.34427 6.63995 3.04427 6.63995H4.58927V10.2399C4.58927 11.0799 5.04427 11.2499 5.59927 10.6199L5.99927 10.1649L9.38427 6.31495C9.84927 5.78995 9.65427 5.35995 8.95427 5.35995Z" fill="#FFD900"/>
                </svg>
                Available
              </div>
              : ''
            }
            <div className="imgConr w-full h-auto rounded-tr-xl rounded-tl-xl">
              {!imageLoaded && !imageError && (
                <div className="animate-pulse bg-cardBg w-full h-[230px] rounded-tr-xl rounded-tl-xl"></div>
              )}
              <img
                src={UserImageUrlCreator(expert.avatar)}
                className={`w-full h-full transition duration-300 ease-in-out rounded-tr-xl rounded-tl-xl ${imageLoaded ? '' : 'hidden'}`}
                style={{ objectFit: 'cover', width: '100%', height: '209px' }}
                alt=""
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
        </div>
        <div className="middle flex justify-between flex-col h-auto w-full py-7 px-4">
            
            <div className="topC w-full">
              <div className="top flex gap-3 items-center">
                  <h2 className="text-xl font-medium">{expert.first_name} {expert.last_name}</h2>
                  {expert.country_id ? <CountryFlag className='!w-[41px] !h-[25px]' countryCode={expert.country_id} svg /> : ''}
                  
              </div>

              <div className="title flex gap-3 pt-1 items-center">
                <div className="text-[#0F172A60]">{expert?.Category?.title}</div>
                <div className="h-7 w-0.5 bg-[#0F172A13] rounded-xl"></div>
                <div className="flex gap-2 font-semibold items-center">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.0789 2.26064C9.25115 1.91312 9.74885 1.91312 9.9211 2.26064L11.8749 6.20242C11.9433 6.34042 12.0756 6.43607 12.2285 6.4582L16.5974 7.09029C16.9826 7.14602 17.1364 7.61731 16.8577 7.88781L13.6963 10.9561C13.5856 11.0635 13.5351 11.2182 13.5613 11.3699L14.3075 15.7024C14.3733 16.0843 13.9707 16.3756 13.6262 16.1953L9.71852 14.1498C9.58172 14.0781 9.41828 14.0781 9.28148 14.1498L5.37381 16.1953C5.0293 16.3756 4.62666 16.0843 4.69245 15.7024L5.43875 11.3699C5.46488 11.2182 5.41437 11.0635 5.30369 10.9561L2.14233 7.88781C1.86361 7.61731 2.01741 7.14602 2.40258 7.09029L6.77149 6.4582C6.92444 6.43607 7.05666 6.34042 7.12506 6.20242L9.0789 2.26064Z" fill="#FFB21A"/>
                  </svg>
                  0
                </div>
              </div>

              <div className="language pt-5">
                <p className="lang text-xs font-semibold">Interview Language: {expert.interviewLanguage || 'English'}</p>
              </div>

            </div>
          

            <div className="messageBtn pt-9">
              <button onClick={() => goToMessageExpert(expert.username)} disabled={expert.availableForInterviewNow == '1' ? false : true} className={`bg-awimGreen transition duration-300 ease-in-out border-2 cursor-pointer border-awimGreen py-3 w-full text-textWhite font-medium text-sm rounded-xl flex items-center justify-center gap-3 hover:bg-transparent hover:border-awimGreen hover:text-awimGreen ${expert.availableForInterviewNow == '1' ? '' : 'disabled:opacity-50 disabled:pointer-events-none'}`}>
                <svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1925 9.3V12.3525C12.1925 12.6225 12.1625 12.8775 12.095 13.11C11.8175 14.2125 10.9025 14.9025 9.6425 14.9025H7.6025L5.3375 16.41C5 16.6425 4.55 16.395 4.55 15.99V14.9025C3.785 14.9025 3.1475 14.6475 2.705 14.205C2.255 13.755 2 13.1175 2 12.3525V9.3C2 7.875 2.885 6.8925 4.25 6.765C4.3475 6.7575 4.445 6.75 4.55 6.75H9.6425C11.1725 6.75 12.1925 7.77 12.1925 9.3Z" fill="fill-current"/>
                  <path d="M13.8125 11.7C14.765 11.7 15.5675 11.385 16.1225 10.8225C16.685 10.2675 17 9.465 17 8.5125V4.6875C17 2.925 15.575 1.5 13.8125 1.5H7.4375C5.675 1.5 4.25 2.925 4.25 4.6875V5.25C4.25 5.46 4.415 5.625 4.625 5.625H9.6425C11.675 5.625 13.3175 7.2675 13.3175 9.3V11.325C13.3175 11.535 13.4825 11.7 13.6925 11.7H13.8125Z" fill="fill-current"/>
                </svg>
                Message Expert
              </button>
            </div>

        </div>
    </div>
  )
}

export default SingleExpert