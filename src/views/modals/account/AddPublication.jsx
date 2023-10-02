import React from 'react'

function AddPublication() {
  return (
    <div className='font-notoSans'>
        <h2 className="text-lg font-semibold">Add New Publication</h2>

        <form action="" className='mt-5'>
            <div className="flex gap-3 flex-col mb-4">
                <label className='text-sm' htmlFor="">Publication Title</label>
                <input type="text" className='text-sm border border-[#969595] py-4 px-6 rounded-lg focus:outline-none' />
            </div>

            <div className="flex gap-3 flex-col mb-6">
                <label className='text-sm' htmlFor="">Publication URL</label>
                <input type="text" className='text-sm border border-[#969595] py-4 px-6 rounded-lg focus:outline-none' />
            </div>

            <div className="flex gap-3 flex-col mb-4">
                <button type="submit" className='bg-awimGreen border border-awimGreen text-sm text-white hover:text-awimGreen hover:bg-transparent rounded-lg transition duration-300 ease-in-out py-4 px-6'>Add Publication</button>
            </div>

        </form>
    </div>
  )
}

export default AddPublication