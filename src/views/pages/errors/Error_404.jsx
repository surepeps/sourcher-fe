import { NavLink } from 'react-router-dom';

function Error_404({config}) {
  return (
    <div className='px-5'>
      <h1 className='text-5xl font-semibold text-center mt-10'>Oops... Page Not Found</h1>
      <p className='text-lg font-normal leading-tight tracking-tighter text-center mt-10'>This Page doesn’t exist or was removed! <br/>
        We suggest you  back to home.
      </p>
      <div className='flex justify-center mt-10'>
          <NavLink to='/' className='py-2 px-8 bg-awimLightPurple text-lg text-white transition duration-300 ease-in-out rounded-lg text-center'>Back to Home</NavLink>
      </div>
      <div className='flex justify-center mb-20'>
        <img src='' alt="" />
      </div>
    </div>
  )
}

export default Error_404