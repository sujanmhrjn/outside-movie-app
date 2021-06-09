import React, { useState,useRef, useEffect } from 'react';
import moment from 'moment';
import {director, MovieBase} from '../../models/movies.interface';
import FavoritesModal from '../../components/FavoritesModal';

const MovieItem: React.FC<{ data:MovieBase, onMovieClick: Function, selected: String, favorites: Array<String>, onFavoriteClick: Function , onDirectorClick: Function}> 
= ({data, onMovieClick, favorites, onFavoriteClick, onDirectorClick}): React.ReactElement => {
    const [active, setActive] = useState<Boolean>(false);
    const [height, setHeight] = useState<String>("0px");
    const content = useRef(null);
    const favoriteBtn =  useRef(null);
    useEffect(()=>{
        let activeBlock = active;
        setHeight(active === false ? "0px" : `${content.current.scrollHeight}px`);
        return () => {
            activeBlock = false;
        }
    },[active]);

    // Triggers with a movie card is clicked
    const onBoxClick = () => {
        setActive(!active);
        onMovieClick(data.id);
    }
    // Triggers when favorite button is clicked
    const onBtnClick = (e: any) => {
        e.stopPropagation();
        let newList;
        favoriteBtn.current.innerHTML="Processing...";
        favoriteBtn.current.disabled = true;
        setTimeout(() =>{
            favoriteBtn.current.disabled = false;
        }, 1500);
       
        if(favorites.length && favorites.indexOf(data.id) > -1){
            newList = favorites.filter((fav)=> fav !== data.id);
            onFavoriteClick(newList); 
            favoriteBtn.current.innerHTML = "Add to Favorite";
            favoriteBtn.current.classList.remove("bg-green-500");
            favoriteBtn.current.classList.remove("hover:bg-green-700");
            favoriteBtn.current.classList.add("bg-blue-500");
            favoriteBtn.current.classList.add("hover:bg-blue-700");
            
            
        }else{
            newList = data.id;
            onFavoriteClick([...favorites, newList]); 
            favoriteBtn.current.innerHTML = "Remove from Favorite";
            favoriteBtn.current.classList.remove("bg-blue-500");
            favoriteBtn.current.classList.remove("hover:bg-blue-700");
            favoriteBtn.current.classList.add("bg-green-500");
            favoriteBtn.current.classList.add("hover:bg-green-700");
            
        }
     
    }
    // Triggers when director name is clicked
    const onDirectorNameClick = (e: any, director: director) => {
        e.stopPropagation();
        onDirectorClick(director);

    }
    return(
        <>
            <div className="bg-white p-4 rounded-md border border-gray-100 mb-8 hover:shadow hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer" onClick={onBoxClick}>
                <div className="flex flex-wrap -mx-4 ">
                    <div className="px-4 w-5/12 lg:w-4/12">
                        <div className="py-28 w-full relative px-4 bg-gray-100 overflow-hidden">
                            <img src={data.poster} className="absolute inset-0 h-full w-full object-cover object-center" alt={data.title}/>
                        </div>
                    </div>
                    <div className="px-4 w-7/12 lg:w-6/12">
                        <h3 className="font-bold text-lg text-gray-700">{data.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{data.genres.join(", ")}</p>
                        <h4 className="font-bold uppercase text-xs">Director(s)</h4>
                        <div className="flex flex-wrap mb-4">
                            {data.director.map((dir,i)=>{
                                 return <p onClick={(e)=>onDirectorNameClick(e,dir)} key={i}>{dir.name}{i < data.director.length -  1?', ': ''} &nbsp; </p>
                            })}
                        </div>

                        <h4 className="font-bold uppercase text-xs">Release Date</h4>
                        <p>{moment(data.release_date).format('LL')}</p>
                    </div>
                </div>

                <div ref={content} className="w-full slideToggle overflow-hidden"  style={{ maxHeight: `${height}` }}>
                    <div className="py-4">
                        <p className="mb-4 text-sm text-gray-600">{data.overview}</p>
                        <button ref={favoriteBtn} className="bg-blue-500 hover:bg-blue-700 transition-all duration-150 ease-in block text-white text-sm font-medium p-2 px-8 rounded-sm" onClick={onBtnClick}>Add to Favorite</button>
                    </div>
                </div>
            </div>
   
                            
            
        </>
    );
}
export default MovieItem;