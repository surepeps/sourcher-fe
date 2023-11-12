
function BecomeExpertBanner({config}) {
  return (
    <div className='bg-awimPink70 py-10 lg:py-24 w-full font-notoSans'>
        <div className='max-w-screen-2xl mx-auto flex flex-col lg:pb-10 px-4 w-full items-center font-notoSans relative'>
            <div className="bg-textPurple rounded-xl flex justify-between gap-20 flex-col lg:flex-row ">
                <div className="flex flex-col justify-start gap-7 pl-5 pt-14 w-full lg:w-[40%]">
                    <h2 className="xl:text-4xl text-2xl text-textWhite">Become an Expert</h2>

                    <p className="lg:text-lg text-sm px-2 leading-7 w-11/12 text-textWhite ">Are you an accomplished professional looking to share your wisdom? Join our thriving community of experts.</p>

                    <button className="bg-textWhite py-2.5 w-[30%] lg:w-[23%] rounded-xl text-sm lg:text-md font-semibold">Join Us</button>
                </div>
                <div className="rounded-r-xl flex justify-end">
                    <img className='rounded-r-xl' src={config.BecomeExpertImage} alt="" />
                </div>
            </div>

        </div>

    </div>
  )
}

export default BecomeExpertBanner