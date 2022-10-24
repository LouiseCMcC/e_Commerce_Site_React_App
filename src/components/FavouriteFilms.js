import React from "react";

const FavouriteFilms = ({favouriteFilms}) => {

    const filmNodes = favouriteFilms.map((film, index) => {
        return <li key={index}>{film.title}</li>
    })

    return (
        <div>
            <h3>Your Favourite Films</h3>
            <ul>
                {filmNodes}
            </ul>
        </div>
    )
}

export default FavouriteFilms;