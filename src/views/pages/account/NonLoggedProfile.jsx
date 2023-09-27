import Overview from './tabs/Overview';

function NonLoggedProfile({allData}) {
    const {ProfileData, config} = allData;

  return (
    <div className="">
        <div className="tabCont flex absolute space-x-10 lg:space-x-32 overflow-x-auto ScrollableCont -top-14 left-0 right-0 w-full px-4">
            <button className='rounded-md bg-textPurple items-center flex text-md pt-4 pb-7 hover:bg-textPurple duration-300 transition ease-in-out font-medium gap-3 px-8 focus:outline-none text-white whitespace-nowrap'>
                <span>
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9987 2.33333C8.59703 2.33333 6.64453 4.28583 6.64453 6.6875C6.64453 9.04333 8.48703 10.95 10.8887 11.0325C10.962 11.0233 11.0354 11.0233 11.0904 11.0325C11.1087 11.0325 11.1179 11.0325 11.1362 11.0325C11.1454 11.0325 11.1454 11.0325 11.1545 11.0325C13.5012 10.95 15.3437 9.04333 15.3529 6.6875C15.3529 4.28583 13.4004 2.33333 10.9987 2.33333Z" fill="white"/>
                        <path d="M15.6569 13.4708C13.0994 11.7658 8.92854 11.7658 6.35271 13.4708C5.18854 14.25 4.54688 15.3042 4.54688 16.4317C4.54688 17.5592 5.18854 18.6042 6.34354 19.3742C7.62688 20.2358 9.31354 20.6667 11.0002 20.6667C12.6869 20.6667 14.3735 20.2358 15.6569 19.3742C16.8119 18.595 17.4535 17.55 17.4535 16.4133C17.4444 15.2858 16.8119 14.2408 15.6569 13.4708Z" fill="white"/>
                    </svg>
                </span>
                Overview
            </button>
        </div>
        <div className="bg-white p-4 rounded-b-lg">
            <div className="block transition-opacity duration-300">
                <Overview ProfileData={ProfileData} config={config} />
            </div>
        </div>
    </div>
  )
}

export default NonLoggedProfile