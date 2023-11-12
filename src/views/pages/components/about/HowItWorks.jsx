function HowItWorks({}) {

    const youTubeUrl = `https://www.youtube.com/embed/54HxJdsk6NY`;

  return (
    <div className='max-w-screen-2xl px-4 mx-auto font-notoSans'>
        <div className="w-full flex lg:flex-row flex-col-reverse gap-14 justify-between items-center">
            <div className="rounded-xl w-full lg:w-[547px] h-[531px] relative">
                <iframe
                    src={youTubeUrl}
                    title="YouTube Video"
                    className='absolute top-0 left-0 w-full h-full rounded-xl'
                    allowFullScreen
                ></iframe>
            </div>
            <div className="flex flex-col gap-10">

                <h1 className="text-4xl font-semibold">How It Works</h1>

                <div className="works flex flex-col gap-14">
                    <div className="flex justify-start items-center gap-7">
                        <span className='p-4 rounded-lg bg-[#004C3F10]'>
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.1455 29.3332C28.9055 29.3332 28.6655 29.2399 28.4922 29.0666L26.0122 26.5866C25.6522 26.2266 25.6522 25.6399 26.0122 25.2666C26.3722 24.9066 26.9589 24.9066 27.3322 25.2666L29.8122 27.7466C30.1722 28.1066 30.1722 28.6932 29.8122 29.0666C29.6255 29.2399 29.3855 29.3332 29.1455 29.3332Z" fill="#004C3F"/>
                                <path d="M16.0807 2.6665C9.09406 2.6665 3.41406 8.3465 3.41406 15.3332C3.41406 22.3198 9.09406 27.9998 16.0807 27.9998C23.0674 27.9998 28.7474 22.3198 28.7474 15.3332C28.7474 8.3465 23.0674 2.6665 16.0807 2.6665ZM20.3207 16.0798C19.5741 18.4532 16.9741 19.7465 16.0807 19.7465C15.1607 19.7465 12.6141 18.5065 11.8407 16.0798C11.3341 14.4932 11.9074 12.4265 13.7207 11.8532C14.5474 11.5865 15.4274 11.7465 16.0807 12.2398C16.7207 11.7465 17.6141 11.5865 18.4541 11.8532C20.2541 12.4398 20.8274 14.5065 20.3207 16.0798Z" fill="#004C3F"/>
                            </svg>
                        </span>

                        <div className="left flex flex-col gap-2">
                            <h3 className="text-lg lg:text-xl font-semibold text-awimGreen">Search for an expert</h3>
                            <p className='text-md lg:text-lg'>Search over 100 verified experts that match your criteria.</p>
                        </div>

                        

                    </div>
                    <div className="flex justify-start items-center gap-7">
                        <span className='p-4 rounded-lg bg-[#004C3F10]'>
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7474 2.6665C13.2541 2.6665 10.4141 5.5065 10.4141 8.99984C10.4141 12.4265 13.0941 15.1998 16.5874 15.3198C16.6941 15.3065 16.8007 15.3065 16.8807 15.3198C16.9074 15.3198 16.9207 15.3198 16.9474 15.3198C16.9607 15.3198 16.9607 15.3198 16.9741 15.3198C20.3874 15.1998 23.0674 12.4265 23.0807 8.99984C23.0807 5.5065 20.2407 2.6665 16.7474 2.6665Z" fill="#004C3F"/>
                                <path d="M23.5194 18.88C19.7994 16.4 13.7327 16.4 9.98604 18.88C8.29271 20 7.35938 21.5334 7.35938 23.1734C7.35938 24.8134 8.29271 26.3334 9.97271 27.4534C11.8394 28.7067 14.2927 29.3334 16.746 29.3334C19.1994 29.3334 21.6527 28.7067 23.5194 27.4534C25.1994 26.32 26.1327 24.8 26.1327 23.1467C26.1194 21.52 25.1994 19.9867 23.5194 18.88ZM19.8527 22.08L16.4927 25.44C16.3327 25.6 16.1194 25.68 15.906 25.68C15.6927 25.68 15.4794 25.5867 15.3194 25.44L13.6394 23.76C13.3194 23.44 13.3194 22.9067 13.6394 22.5867C13.9594 22.2667 14.4927 22.2667 14.8127 22.5867L15.906 23.68L18.6794 20.9067C18.9994 20.5867 19.5327 20.5867 19.8527 20.9067C20.186 21.2267 20.186 21.76 19.8527 22.08Z" fill="#004C3F"/>
                            </svg>
                        </span>

                        <div className="left flex flex-col gap-2">
                            <h3 className="text-lg lg:text-xl font-semibold text-awimGreen">View Experts’ Profile</h3>
                            <p className='text-md lg:text-lg'>View expert profile and read reviews from other users.</p>
                        </div>

                        
                    </div>
                    <div className="flex justify-start items-center gap-7">
                        <span className='p-4 rounded-lg bg-[#004C3F10]'>
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5341 16.5333V21.96C21.5341 22.44 21.4807 22.8933 21.3607 23.3067C20.8674 25.2667 19.2407 26.4933 17.0007 26.4933H13.3741L9.3474 29.1733C8.7474 29.5867 7.9474 29.1467 7.9474 28.4267V26.4933C6.5874 26.4933 5.45406 26.04 4.6674 25.2533C3.8674 24.4533 3.41406 23.32 3.41406 21.96V16.5333C3.41406 14 4.9874 12.2533 7.41406 12.0267C7.5874 12.0133 7.76073 12 7.9474 12H17.0007C19.7207 12 21.5341 13.8133 21.5341 16.5333Z" fill="#004C3F"/>
                                <path d="M24.4141 20.7998C26.1074 20.7998 27.5341 20.2398 28.5207 19.2398C29.5207 18.2532 30.0807 16.8265 30.0807 15.1332V8.33317C30.0807 5.19984 27.5474 2.6665 24.4141 2.6665H13.0807C9.9474 2.6665 7.41406 5.19984 7.41406 8.33317V9.33317C7.41406 9.7065 7.7074 9.99984 8.08073 9.99984H17.0007C20.6141 9.99984 23.5341 12.9198 23.5341 16.5332V20.1332C23.5341 20.5065 23.8274 20.7998 24.2007 20.7998H24.4141Z" fill="#004C3F"/>
                            </svg>
                        </span>

                        <div className="left flex flex-col gap-2">
                            <h3 className="text-lg lg:text-xl font-semibold text-awimGreen">Lets connect</h3>
                            <p className='text-md lg:text-lg'>Connect with an expert by booking an appointment, via chat or call!</p>
                        </div>

                        
                    </div>
                </div>

                <div className="getStart">
                    <button className='bg-awimGreen text-textWhite font-semibold rounded-lg flex items-center justify-center hover:text-awimGreen border border-awimGreen hover:bg-transparent trasition duration-300 ease-in-out py-3 px-6'>Get Started</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HowItWorks