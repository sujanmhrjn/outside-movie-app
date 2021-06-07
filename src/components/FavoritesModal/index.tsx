import React from 'react';
import CheckIcon from  '../../assets/images/icon-check.svg';
import { CSSTransition } from 'react-transition-group';
const FavoriteModal: React.FC <{type: boolean, active: boolean}> = ({type, active}): React.ReactElement => {

    const message = type? 'Added to Favorites': 'Removed From Favorites';
    const style = type?'bg-green-400':'bg-red-400';


    return(
        <>
            <CSSTransition in={active} timeout={200} classNames="fade">
                <div className={`${style} fade fixed text-white w-full  left-0 right-0 bottom-0 py-4 px-4 opacity-75 rounded-sm z-50`}>   
                    <div className="  flex items-center ">
                        <img src={CheckIcon} className="mr-8"/> {message}
                    </div>
                </div>
            </CSSTransition>
        </>
    )
}

export default FavoriteModal;