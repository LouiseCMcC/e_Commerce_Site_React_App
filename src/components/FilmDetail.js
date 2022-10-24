import React from "react";

const FilmDetail = ({film, onButtonClick}) => {

    const handleButtonClick = function(event){
        onButtonClick(film);
    }

    return (
        <div>
            <img src={film.image}/>
            <h2>Title: {film.title}</h2>
            <ul>
                <p>Release Date: {film.release_date}</p>
                <p>Running Time: {film.running_time}</p>
                <p>Director: {film.director}</p>
            </ul>
            <button value={film} onClick={handleButtonClick}>Add to Favourite Films</button>
        </div>
    )

}

export default FilmDetail;