import "./FilmPage.css"

function FilmRow({ film, onClick }){
    return(
        <div className="film-row" onClick={onClick}>
           <h2>{film.title}</h2>
            <p>
                Id: {film.film_id}
                <p>Genre: {film.name}</p>
            </p>
        </div> 
    );
}

export default FilmRow;