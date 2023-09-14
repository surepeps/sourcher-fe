import React from 'react'
import HtmlRender from '../../../../helpers/HtmlRender'

function SingleExpert({expert}) {
  return (
    <div className='w-full bg-red-300 h-auto rounded-r-3xl rounded-bl-3xl'>
        <div className="middle h-auto w-full">
            <img src={expert.image} className='w-full h-full' alt=""  />
        </div>
        <div className="middle auto py-7 px-4">
            <div className="top flex gap-3 items-center">
                <h2 className="name">{expert.name}</h2>
                <HtmlRender htmlString={expert.countryIcon} />
            </div>

        </div>
    </div>
  )
}

export default SingleExpert