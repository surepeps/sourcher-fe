import { UserImageUrlCreator, chatTimer } from '../../../helpers/Helper'

function SingleLeftChat({message, imageUrl}) {
  return (
    <div className="leftChatter flex w-full flex-col gap-3 py-4">
        <div className="topChatter flex gap-3">
            <div className="imgSec h-10 lg:w-10 w-12 rounded-full">
                <img src={UserImageUrlCreator(imageUrl)} className='w-full h-full rounded-full' alt="" />
            </div>
            <div className="messageCt p-2 bg-[#F9FAFB] rounded-lg lg:w-[50%] w-full">
                <p className='text-sm'>{message.message}</p>
            </div>
        </div>
        <p className="time pl-14 text-xs">{chatTimer(message.timestamp)}</p>
        
    </div>
  )
}

export default SingleLeftChat