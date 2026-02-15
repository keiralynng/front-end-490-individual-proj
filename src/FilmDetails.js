import { Link, useParams } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import "./FilmDetails.css"; 

function FilmDetails(){
    const {film_id } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/films/${film_id}`)
          .then(res => res.json())
          .then(data => setFilm(data))
          .catch(err => console.error(err)); 
    }, [film_id]); 

    if (!film){
        return <div style={{ padding: "20px" }}>Loading.</div>
    }

    return (
    <>
    <div className="title-header">
        {film.title} </div>

        <div className="text-spacing">
        <div className="text">
        <div><span className="detail-label">Genre: </span> {film.genre}</div>
        <div><span className="detail-label">Rating: </span> {film.rating}</div>
        <div><span className="detail-label">Description: </span> {film.description}</div>
        <div><span className="detail-label">Release Year: </span> {film.release_year}</div>
        <div><span className="detail-label">Rentals: </span> {film.rented}</div>
        </div>
        </div>

    <nav>
              <Link className="details-link" to="/">Back to Home</Link>
            </nav>
            </>
);
}

export default FilmDetails;