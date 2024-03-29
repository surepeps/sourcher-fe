import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from '../../../models/topNavMenu';
import { useData } from '../../../context/DataContext';
import FooterSkeleton from '../../skeletons/components/FooterSkeleton';


function Footer({config}) {
  const {categories, loading} = useData();

  const [shuffledItems, setShuffledItems] = useState([]);

  useEffect(() => {
    // Shuffle the items
    if(!loading){
      const shuffled = categories.sort(() => Math.random() - 0.5).slice(0, 5);
      setShuffledItems(shuffled);
      console.log("gggggg")
    }
    
  }, [categories,loading]);

  return (
    <>
      {/* {
        loading ? <FooterSkeleton /> : */}
        <div className='bg-awimDarkBlue py-14 px-4 lg:px-20 font-notoSans'>
          <div className="max-w-screen-2xl mx-auto gap-14 lg:gap-32 w-full flex flex-col justify-between">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-between w-full items-start gap-10">

              <div className="flex flex-col w-full gap-5">
                <div className="logo h-auto w-40">
                  <img src={config.SourceherNoBgLogo} className='h-full w-full' alt="" />
                </div>

                <div className="socials">
                  <ul className='flex gap-5'>
                    {/* Instagram */}
                    <li>
                      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0 14.8177C0 7.17777 6.19339 0.984375 13.8333 0.984375C21.4733 0.984375 27.6667 7.17777 27.6667 14.8177C27.6667 22.4576 21.4733 28.651 13.8333 28.651C6.19339 28.651 0 22.4576 0 14.8177Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.8355 7.44043C11.8318 7.44043 11.5803 7.44919 10.7934 7.485C10.0079 7.52097 9.47181 7.64532 9.0027 7.82777C8.51745 8.01621 8.10583 8.26829 7.69574 8.67853C7.28535 9.08861 7.03327 9.50023 6.84421 9.98533C6.66131 10.4546 6.5368 10.9909 6.50145 11.776C6.46625 12.563 6.45703 12.8146 6.45703 14.8183C6.45703 16.822 6.46595 17.0727 6.50161 17.8597C6.53773 18.6451 6.66207 19.1812 6.84437 19.6503C7.03297 20.1356 7.28504 20.5472 7.69528 20.9573C8.10521 21.3677 8.51684 21.6204 9.00178 21.8088C9.47119 21.9913 10.0075 22.1156 10.7928 22.1516C11.5797 22.1874 11.831 22.1961 13.8346 22.1961C15.8384 22.1961 16.0891 22.1874 16.8761 22.1516C17.6615 22.1156 18.1983 21.9913 18.6677 21.8088C19.1528 21.6204 19.5638 21.3677 19.9737 20.9573C20.3841 20.5472 20.6362 20.1356 20.8252 19.6505C21.0066 19.1812 21.1311 18.6449 21.168 17.8598C21.2034 17.0728 21.2126 16.822 21.2126 14.8183C21.2126 12.8146 21.2034 12.5631 21.168 11.7761C21.1311 10.9907 21.0066 10.4546 20.8252 9.98548C20.6362 9.50023 20.3841 9.08861 19.9737 8.67853C19.5633 8.26813 19.1529 8.01606 18.6672 7.82777C18.1969 7.64532 17.6605 7.52097 16.875 7.485C16.0881 7.44919 15.8375 7.44043 13.8332 7.44043H13.8355ZM13.1736 8.76996C13.37 8.76965 13.5892 8.76996 13.8355 8.76996C15.8054 8.76996 16.0388 8.77703 16.8167 8.81238C17.5361 8.84528 17.9265 8.96547 18.1866 9.06646C18.5309 9.20018 18.7763 9.36003 19.0344 9.61826C19.2926 9.87648 19.4525 10.1224 19.5865 10.4667C19.6875 10.7265 19.8078 11.1169 19.8406 11.8362C19.8759 12.614 19.8836 12.8476 19.8836 14.8166C19.8836 16.7855 19.8759 17.0192 19.8406 17.7969C19.8077 18.5163 19.6875 18.9067 19.5865 19.1664C19.4528 19.5107 19.2926 19.7559 19.0344 20.014C18.7762 20.2722 18.531 20.432 18.1866 20.5658C17.9268 20.6672 17.5361 20.7871 16.8167 20.82C16.039 20.8553 15.8054 20.863 13.8355 20.863C11.8654 20.863 11.6319 20.8553 10.8542 20.82C10.1349 20.7868 9.74445 20.6666 9.48423 20.5656C9.13993 20.4319 8.894 20.272 8.63577 20.0138C8.37755 19.7556 8.21769 19.5103 8.08366 19.1658C7.98268 18.9061 7.86233 18.5156 7.82959 17.7963C7.79424 17.0186 7.78717 16.7849 7.78717 14.8147C7.78717 12.8445 7.79424 12.6121 7.82959 11.8344C7.86248 11.115 7.98268 10.7246 8.08366 10.4646C8.21739 10.1203 8.37755 9.87433 8.63577 9.61611C8.894 9.35788 9.13993 9.19803 9.48423 9.064C9.7443 8.96255 10.1349 8.84266 10.8542 8.80962C11.5348 8.77887 11.7986 8.76965 13.1736 8.76812V8.76996ZM17.7737 9.99499C17.2849 9.99499 16.8884 10.3911 16.8884 10.88C16.8884 11.3688 17.2849 11.7654 17.7737 11.7654C18.2625 11.7654 18.6591 11.3688 18.6591 10.88C18.6591 10.3912 18.2625 9.99499 17.7737 9.99499ZM13.8355 11.0294C11.7431 11.0294 10.0467 12.7259 10.0467 14.8183C10.0467 16.9107 11.7431 18.6063 13.8355 18.6063C15.9279 18.6063 17.6237 16.9107 17.6237 14.8183C17.6237 12.7259 15.9279 11.0294 13.8355 11.0294ZM13.8355 12.359C15.1936 12.359 16.2948 13.46 16.2948 14.8183C16.2948 16.1764 15.1936 17.2775 13.8355 17.2775C12.4772 17.2775 11.3762 16.1764 11.3762 14.8183C11.3762 13.46 12.4772 12.359 13.8355 12.359Z" fill="white"/>
                      </svg>
                    </li>

                    {/* Twitter */}
                    <li>
                      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.109375 14.8177C0.109375 7.17777 6.30277 0.984375 13.9427 0.984375C21.5826 0.984375 27.776 7.17777 27.776 14.8177C27.776 22.4576 21.5826 28.651 13.9427 28.651C6.30277 28.651 0.109375 22.4576 0.109375 14.8177Z" fill="white"/>
                        <path d="M17.918 8.85742H20.0392L15.405 14.066L20.8568 21.1537H16.5881L13.2447 16.8551L9.41909 21.1537H7.2966L12.2533 15.5826L7.02344 8.85742H11.4005L14.4227 12.7866L17.918 8.85742ZM17.1735 19.9052H18.3489L10.7618 10.0404H9.50053L17.1735 19.9052Z" fill="white"/>
                      </svg>
                    </li>

                    {/* Facebook */}
                    <li>
                      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.21875 14.8177C0.21875 7.17777 6.41214 0.984375 14.0521 0.984375C21.692 0.984375 27.8854 7.17777 27.8854 14.8177C27.8854 22.4576 21.692 28.651 14.0521 28.651C6.41214 28.651 0.21875 22.4576 0.21875 14.8177Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.7461 7.71742C13.5973 6.86615 14.7517 6.38784 15.9555 6.3877H18.2898C18.4618 6.3877 18.6268 6.45601 18.7484 6.57762C18.87 6.69922 18.9383 6.86416 18.9383 7.03613V10.1486C18.9383 10.3206 18.87 10.4855 18.7484 10.6071C18.6268 10.7288 18.4618 10.7971 18.2898 10.7971H15.9555C15.9384 10.7971 15.9216 10.8004 15.9058 10.8069C15.8901 10.8135 15.8758 10.823 15.8638 10.8351C15.8517 10.8471 15.8422 10.8614 15.8357 10.8771C15.8291 10.8929 15.8258 10.9097 15.8258 10.9268V12.6127H18.2898C18.3884 12.6126 18.4857 12.6351 18.5743 12.6783C18.6629 12.7215 18.7405 12.7843 18.8012 12.862C18.8619 12.9397 18.9041 13.0302 18.9245 13.1266C18.945 13.223 18.9432 13.3229 18.9193 13.4185L18.1411 16.531C18.106 16.6713 18.025 16.7959 17.911 16.8849C17.7969 16.9739 17.6564 17.0222 17.5117 17.0221H15.8258V22.5986C15.8258 22.7706 15.7575 22.9355 15.6359 23.0571C15.5143 23.1788 15.3493 23.2471 15.1773 23.2471H12.0648C11.8929 23.2471 11.7279 23.1788 11.6063 23.0571C11.4847 22.9355 11.4164 22.7706 11.4164 22.5986V17.0221H9.73047C9.55849 17.0221 9.39356 16.9538 9.27195 16.8321C9.15035 16.7105 9.08203 16.5456 9.08203 16.3736V13.2611C9.08203 13.176 9.0988 13.0917 9.13139 13.013C9.16398 12.9343 9.21174 12.8628 9.27195 12.8026C9.33217 12.7424 9.40365 12.6946 9.48232 12.6621C9.56099 12.6295 9.64531 12.6127 9.73047 12.6127H11.4164V10.9268C11.4165 9.72298 11.8949 8.56855 12.7461 7.71742ZM15.9555 7.68457C15.0956 7.68457 14.2709 8.02616 13.6629 8.63419C13.0549 9.24221 12.7133 10.0669 12.7133 10.9268V13.2611C12.7133 13.4331 12.645 13.598 12.5234 13.7196C12.4018 13.8413 12.2368 13.9096 12.0648 13.9096H10.3789V15.7252H12.0648C12.2368 15.7252 12.4018 15.7935 12.5234 15.9151C12.645 16.0367 12.7133 16.2017 12.7133 16.3736V21.9502H14.5289V16.3736C14.5289 16.2017 14.5972 16.0367 14.7188 15.9151C14.8404 15.7935 15.0054 15.7252 15.1773 15.7252H17.0051L17.459 13.9096H15.1773C15.0054 13.9096 14.8404 13.8413 14.7188 13.7196C14.5972 13.598 14.5289 13.4331 14.5289 13.2611V10.9268C14.5289 10.5484 14.6792 10.1856 14.9467 9.91803C15.2143 9.65049 15.5771 9.5002 15.9555 9.5002H17.6414V7.68457H15.9555Z" fill="white"/>
                      </svg>
                    </li>

                    {/* YouTube */}
                    <li>
                      <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.328125 14.8177C0.328125 7.17777 6.52152 0.984375 14.1615 0.984375C21.8014 0.984375 27.9948 7.17777 27.9948 14.8177C27.9948 22.4576 21.8014 28.651 14.1615 28.651C6.52152 28.651 0.328125 22.4576 0.328125 14.8177Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.9238 10.0627C20.5587 10.2369 21.0588 10.7503 21.2284 11.4022C21.5368 12.5837 21.5368 15.0489 21.5368 15.0489C21.5368 15.0489 21.5368 17.514 21.2284 18.6956C21.0588 19.3475 20.5587 19.8608 19.9238 20.0351C18.7732 20.3517 14.159 20.3517 14.159 20.3517C14.159 20.3517 9.54482 20.3517 8.39413 20.0351C7.75922 19.8608 7.25921 19.3475 7.08952 18.6956C6.78125 17.514 6.78125 15.0489 6.78125 15.0489C6.78125 15.0489 6.78125 12.5837 7.08952 11.4022C7.25921 10.7503 7.75922 10.2369 8.39413 10.0627C9.54482 9.74609 14.159 9.74609 14.159 9.74609C14.159 9.74609 18.7732 9.74609 19.9238 10.0627ZM12.7757 12.9738V17.5849L16.4646 15.2795L12.7757 12.9738Z" fill="white"/>
                      </svg>
                    </li>
                  </ul>
                </div>

              </div>


              <div className="flex flex-row lg:justify-center justify-between w-full lg:gap-60">
                  <div className="flex w-full flex-col gap-6">

                  <div className="top">
                    <h2 className='text-awimYellow text-lg font-bold'>Quick Links</h2>
                  </div>

                  <div className="menus">
                    <ul className='text-textWhite font-light text-sm flex flex-col gap-4'>
                      {
                        Menu.map(menu => (
                          <li className='hover:text-awimYellow transition duration-300 ease-in-out' key={menu.name}>
                            <NavLink>{menu.name}</NavLink>
                          </li>
                        ))
                      }
                      
                    </ul>
                  </div>

                  </div>

                  <div className="flex w-full flex-col gap-6">
                    <div className="top">
                      <h2 className='text-awimYellow text-lg font-bold'>Categories</h2>
                    </div>

                    <div className="menus">
                      <ul className='text-textWhite font-light text-sm flex flex-col gap-4'>
                        {
                          shuffledItems.map(cat => (
                            <li className='hover:text-awimYellow transition duration-300 ease-in-out' key={cat.id}>
                              <NavLink>{cat.title}</NavLink>
                            </li>
                          ))
                        }
                        
                      </ul>
                    </div>

                  </div>

              </div>
              

              <div className="flex flex-col gap-6 w-full">
                  <div className="top">
                    <h2 className='text-awimYellow text-lg font-bold'>Subscribe to Our Newletter</h2>
                  </div>

                  <div className="w-full bg-textWhite justify-between items-center rounded-lg py-2 pag-3 px-3 flex ">
                    <input placeholder='Enter Email Address' type="text" className='border-0 text-md ' />
                    <button className='bg-awimYellow border border-awimYellow hover:bg-transparent hover:text-awimYellow text-sm transition duration-300 ease-in-out rounded-lg py-3 px-5 font-semibold'>Submit</button>
                  </div>

              </div>

            </div>

            <div className="flex justify-between flex-col lg:flex-row gap-4 items-center text-textWhite">
              <p className="copy">SourceHer©Copyright 2023. All rights reserved.</p>

              <div className="flex gap-6">
                <NavLink>Terms & Conditions</NavLink>
                <NavLink>Privacy Policy</NavLink>
              </div>
            </div>

          </div>
        </div>
      {/* } */}
    </>
  )
}

export default Footer