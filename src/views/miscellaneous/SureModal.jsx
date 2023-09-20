import React from 'react'
import { useModal } from '../../context/ModalService';



function SureModal() {
    const { isOpen, closeModal, content, modalOptions } = useModal();

    if (!isOpen) return null;

    const bgColor = modalOptions.backgroundColor || 'bg-white';

    const modalClasses = `fixed z-50 p-4 overflow-x-hidden flex items-center justify-center w-full overflow-y-auto inset-0 h-full bg-black bg-opacity-50 ${isOpen ? '' : 'opacity-0 pointer-events-none'}`;

      const closeButtonClasses = `absolute top-3 right-2.5 hover:bg-[#BF040120] ransition duration-300 ease-in-out rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white`;

  return (
        <div
            id="popup-modal"
            tabIndex="-1"
            onClick={closeModal}
            className={modalClasses}
            >
            <div className="relative w-full max-w-xl max-h-full animate-fadeIn">
                <div className={`relative ${bgColor} justify-between rounded-3xl shadow dark:bg-gray-700`}>
                    <div className="topArea">
                        { modalOptions.modalTopImg ? <img src={modalOptions.modalTopImg} className='w-full h-auto' alt="" /> : ''}
                        <button type="button" onClick={closeModal} className={closeButtonClasses} data-modal-hide="popup-modal">
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" d="M2.8335 9.91732C2.8335 6.0053 6.00481 2.83398 9.91683 2.83398H24.0835C27.9955 2.83398 31.1668 6.0053 31.1668 9.91732V24.084C31.1668 27.996 27.9955 31.1673 24.0835 31.1673H9.91683C6.00481 31.1673 2.8335 27.996 2.8335 24.084V9.91732Z" fill="#BF0401"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.7484 11.7489C12.3017 11.1957 13.1987 11.1957 13.7519 11.7489L17.0002 14.9972L20.2484 11.7489C20.8017 11.1957 21.6987 11.1957 22.2519 11.7489C22.8051 12.3022 22.8051 13.1991 22.2519 13.7524L19.0036 17.0007L22.2519 20.2489C22.8051 20.8022 22.8051 21.6991 22.2519 22.2524C21.6987 22.8056 20.8017 22.8056 20.2484 22.2524L17.0002 19.0041L13.7519 22.2524C13.1987 22.8056 12.3017 22.8056 11.7484 22.2524C11.1952 21.6991 11.1952 20.8022 11.7484 20.2489L14.9967 17.0007L11.7484 13.7524C11.1952 13.1991 11.1952 12.3022 11.7484 11.7489Z" fill="#BF0401"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    
                    <div className="p-6" onClick={(e) => e.stopPropagation()} >
                        {content}
                    </div>

                </div>
            </div>
        </div>
  )
}

export default SureModal