import FilmRow from "./FilmRow";
import "./FilmPage.css"

function FilmList({ films = [], onFilmClick }) {
    return (
        <div className="film-list">
            {films.map(film => (
                <FilmRow key={film.film_id} film={film} 
                    onClick={() => onFilmClick(film)}/>
            ))}
        </div>
    );
}

export default FilmList;