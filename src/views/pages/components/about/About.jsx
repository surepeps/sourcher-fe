import AboutImg from '/assets/images/about.png';

function About() {
  return (
    <div className='container mx-auto flex flex-col py-0 lg:py-10 px-4 w-full items-center font-notoSans relative'>
        <div className="w-full flex flex-col gap-10 lg:flex-row justify-between items-center">
            <div className="left w-full lg:w-[500px] xl:w-[650px] flex flex-col gap-8">
                <h2 className="lg:text-4xl text-2xl font-semibold">About AWIM</h2>

                <p className="desc text-sm lg:text-md xl:text-lg !leading-10">
                    AWiM's aim is to promote the visibility of African women experts working across varied industries and fields and also create enabling environment for women’s presentation and representation in the media by increasing the number of women experts’ sources in the media thus amplifying the voice of women experts in the media. We start by identifying their expertise and compiling their data into one central database. The process continues with an effort to connect these experts with journalists who can then cite them in their news reports, stories and programs thereby creating opportunities for networking amongst the profiles featured through special events, programs, webinars, discounts on our services and training content.
                </p>

                <button className='flex items-center justify-center gap-2 w-[42%] lg:w-[30%] py-2 text-textWhite bg-textPurple rounded-lg text-sm'>
                    Learn More
                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.987 17.5068C19.8767 17.6204 19.7246 17.6933 19.5478 17.6959C19.2061 17.7009 18.9191 17.4223 18.9141 17.0805L18.8186 10.5523L12.2904 10.6478C11.9486 10.6528 11.6617 10.3741 11.6567 10.0324C11.6517 9.69065 11.9304 9.4037 12.2721 9.3987L19.4249 9.29405C19.7666 9.28905 20.0536 9.56772 20.0586 9.90945L20.1632 17.0623C20.1658 17.239 20.0974 17.3932 19.987 17.5068Z" fill="white"/>
                        <path d="M19.7848 10.4555L10.0138 20.5167C9.77575 20.7618 9.3751 20.7677 9.13 20.5297C8.8849 20.2916 8.87904 19.891 9.11707 19.6459L18.8881 9.58468C19.1261 9.33958 19.5268 9.33372 19.7719 9.57175C20.017 9.80979 20.0228 10.2104 19.7848 10.4555Z" fill="white"/>
                    </svg>
                </button>
            </div>

            <div className="relative w-full lg:w-[37%] flex justify-end z-30 h-auto">
                <div className="z-50 relative ml-6 mb-7 lg:mb-10">
                    <img className='' alt='about_sourceher' src={AboutImg} />
                </div>
                <div className='bg-textPurple rounded-lg absolute bottom-0 z-0 left-0 w-[90%] h-[70%]'></div>
            </div>

        </div>
    </div>
  )
}

export default About