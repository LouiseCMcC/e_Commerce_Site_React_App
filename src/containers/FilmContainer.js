import React, {useState, useEffect} from "react";
import FilmSelector from '../components/FilmSelector';
import FilmDetail from '../components/FilmDetail';
import FavouriteFilms from '../components/FavouriteFilms';

const FilmContainer = () => {
    const [allFilms, setFilms] = useState ([]);
    const[selectedFilm, setSelectedFilm] = useState(null);
    const [favouriteFilms, setFavouriteFilms] = useState([]);

    useEffect(()=> {
        getFilms();
    }, []);

    const getFilms = function() {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(data=>setFilms(data))
    };

    const onFilmClick = function(film){
        setSelectedFilm(film);
    }

    const onButtonClick = function(film){
        const newFavouriteFilms = Array.from(new Set([...favouriteFilms, film]));
        setFavouriteFilms(newFavouriteFilms);
    }


    return(
        <div>
            <h1>Green Team Films</h1>
            <FilmSelector allFilms={allFilms} onFilmClick={onFilmClick}/>
            {selectedFilm ? <FilmDetail film={selectedFilm} onButtonClick={onButtonClick}/> :null}
            <FavouriteFilms favouriteFilms={favouriteFilms}/>
        </div>
    )

};

export default FilmContainer;

    // return (
    //         // <>
    //         // <div>
    //         // <FilmList films={films}/>
    //         // </div>
    //         // </>
    //         <Router>
    //             <Routes>
    //                 <Route path="/" element={<FilmList films={films} onFavouriteAdd={addToFavourites}/>}/>
    //                 <Route path="/favourite" element={<Favourite/>}/>
    //             </Routes>
    //         </Router>
    //         ) 


