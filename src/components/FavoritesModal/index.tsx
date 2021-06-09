import React from 'react';

import { CSSTransition } from 'react-transition-group';
const FavoriteModal: React.FC <{type: boolean, active: boolean}> = ({type, active}): React.ReactElement => {

    const message = type? 'Added to Favorites': 'Removed From Favorites';
    const style = type?'bg-green-400':'bg-red-400';


    return(
        <>
            <CSSTransition in={active} timeout={200} classNames="fade">
                <div className={`${style} fade fixed text-white w-full  left-0 right-0 bottom-0 py-4 px-4 opacity-75 rounded-sm z-50`}>   
                    <div className="  flex items-center ">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1 7L7 13L17 1" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="inline-block ml-8" data-testid="message">{message}</span>
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default FavoriteModal;