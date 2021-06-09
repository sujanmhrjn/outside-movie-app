import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Modal:React.FC<{isActive: boolean, title: string, onCloseClick?: Function}> = ({isActive, title, onCloseClick, children}) => {


    return(
        <>
        <CSSTransition
          in={isActive}
          timeout={300}
          classNames="dialog"
        >
       
        <div className={`fixed z-10 inset-0 overflow-y-auto dialog`} aria-labelledby="modal-title" role="dialog" aria-modal="true"  data-testid="modal">
            <div className="flex items-start justify-center min-h-screen pt-16 px-4 pb-20 text-center sm:block sm:p-0">
   
                <div className="fixed inset-0 bg-gray-500 opacity-50 transition-opacity" aria-hidden="true" onClick={()=>onCloseClick()}></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className={`inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform  transition-all duration-500 sm:my-8 sm:align-middle md:max-w-md sm:w-full sm:p-6 dialog-content`}>
                     <div>
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-xl">{title}</h3>
                            <div className="bg-red-500 rounded-full p-2 cursor-pointer hover:bg-red-700 transition-all duration-500 ease-in-out" onClick={()=>onCloseClick()}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 1L1 17M17 17L1 1L17 17Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
                            </svg>

                            </div>
                        </div>

                        {children}
                    </div>
            
                </div>
           
            </div>
        </div>
        </CSSTransition>
        </>
    )
}

export default Modal;