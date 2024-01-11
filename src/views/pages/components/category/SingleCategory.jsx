import React from 'react'
 
function SingleCategory({category}) {
  return (
    <div className='flex-none w-[285px] relative rounded-3xl'>
        <img src={category.image} alt="" />
        <p className="text-2xl pb-2 pl-2 font-semibold absolute bottom-0 text-textWhite left-0">{category.name}</p>
    </div>
  )
}

export default SingleCategory