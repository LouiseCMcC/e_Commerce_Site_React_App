import React from "react";

const FilmSelector = ({allFilms, onFilmClick}) => {

    const handleFilmChange = function(event){
        const selectedFilm = allFilms[event.target.value];
        onFilmClick(selectedFilm);
    }

    const FilmNodes = allFilms.map((film, index) => {
        return <option key={index} value={index}>{film.title}</option>
    })

    return (
        <div>
            <select defaultValue='' onChange={handleFilmChange}>
                <option value=''>Select a Film</option>
                {FilmNodes}
            </select>
        </div>
    )
}

export default FilmSelector;