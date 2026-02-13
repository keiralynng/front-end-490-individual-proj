import { Link } from "react-router-dom"; 
import "./FilmCard.css";

function FilmCard({ film }) {
  return (
    <div className="shadow">
    <div className="card-style">

    <div className="film-title">
            {film.title}
    </div>

        <div className="film-genre">
            <p>Genre: {film.category}
              </p>
        </div>
              <nav>
              <Link className="link-text" to={`/films/${film.film_id}`}>
              View Details
              </Link> 
              </nav>
      </div>
    </div>
  );
}

export default FilmCard;
