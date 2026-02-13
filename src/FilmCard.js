import { Link } from "react-router-dom"; 
import "./FilmCard.css";

function FilmCard({ film }) {
  return (
    <div className="card-style">

    <div className="film-title">
            {film.title}
    </div>

        <div className="film-genre">
            <p>Genre: {film.category}
              </p>
        </div>
              <nav>
              <Link className="film-link" to={`/films/${film.film_id}`}>
              View Details
              </Link> 
              </nav>
      </div>
  );
}

export default FilmCard;
