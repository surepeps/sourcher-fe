import { chatTimer } from '../../../helpers/Helper'

function SingleRightChat({message}) {
  return (
    <div className="rightChatter items-end w-full flex flex-col gap-3 py-4">
        <div className="topChatter w-full justify-end flex gap-3">
            <div className="messageCt p-2 bg-awimGreen rounded-lg lg:w-[50%] w-full">
                <p className='text-sm text-bgColor'>{message.message}</p>
            </div>
        </div>
        <p className="time float-right text-xs">{chatTimer(message.timestamp)}</p>
    </div>
  )
}

export default SingleRightChat