import React, { ReactElement, useState } from 'react';
import  movies from '../../api/movies.json';
import MovieItem from './movieItem';
import Modal from '../../components/Modal';
import FavoritesModal from '../../components/FavoritesModal';
import { director, MovieBase } from '../../models/movies.interface';

const MoviesList: React.FC = (): ReactElement => {
    const directorData: director = {name:'', description:'', photoUrl:'' };
    const [selectedMovie, setSelectedMovie] = useState<String>('');
    const [favorites, setFavorites] = useState<String[] >([]);
    const [modalActive, setModalActive] = useState(false);
    const [director, setDirector] = useState<director>(directorData);
    const [favoriteType, setFavoriteType] = useState(false);
    const [favoriteModalActive, setFavoriteModalActive] = useState(false);
    const onMovieSelect = (id:string): void =>  {
        setSelectedMovie(id) ;
    }

    // Fires when favorite button is clicked
    const onFavoriteClick = (list: any): void => {
        let timer;
        // setFavoriteModaActive(false);
        if(favoriteModalActive){
            setTimeout(() =>{
                setFavoriteModalActive(false);
            },10);
        }else{
            setFavorites(list);
            if(favorites.length < list.length){
                setFavoriteType(true);
                setFavoriteModalActive(true);
            }else{
                setFavoriteType(false);
                setFavoriteModalActive(true);
            }
        }

        setTimeout(()=>{
            setFavoriteModalActive(false);
        }, 1500);

  
    }

    const onModalCloseClick = (): void => {
        setModalActive(!modalActive);
       
    }
    // Fires when director name is clicked
    const onDirectorClick = (data: director): void => {
        setDirector(directorData);
        setDirector(data);
        setModalActive(true);
    }


    if(!movies) return <p>Loading....</p>;
    return(
        <div className="container mx-auto py-4 px-4">
            <h1 className="text-2xl font-bold uppercase mb-6">Movies</h1>
        
            <div className="-mx-4">
                <div className="w-full lg:w-5/12 px-4">
                    {movies.map((item: MovieBase,i)=>{
                        return  <MovieItem 
                                    key={'movie'+i} 
                                    data={item} 
                                    selected={selectedMovie} 
                                    favorites={favorites}
                                    onMovieClick={onMovieSelect}
                                    onFavoriteClick={onFavoriteClick}
                                    onDirectorClick={onDirectorClick}
                                    />
                    })}
                </div>
            </div>
            {/* Modal */}
            <Modal isActive={modalActive} title={director.name} onCloseClick={onModalCloseClick}>
                <div className="flex flex-wrap py-6 -mx-4">
                    <div className="px-4 mb-4 lg:mb-0 w-full lg:w-5/12">
                        <img src={director.photoUrl} alt={director.name}/>
                    </div>
                    <div className="px-4 w-full lg:w-7/12">
                        <p className="text-sm text-gray-500">{director.description}</p>
                    </div>
                </div>
            </Modal>
            {/* favorite toast */}
            <FavoritesModal type={favoriteType} active={favoriteModalActive}/>
        </div>
    )
}

export default MoviesList;