import { Link, useParams } from "react-router-dom"; 
import { useEffect, useState } from "react"; 

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

    return <div style={{ padding: "20px" }}>
        <h2>{film.title} </h2>
        <p>Genre: {film.genre}</p>
        <p>Rating: {film.rating}</p>
        <p>Desription: {film.description}</p>
        <p>Release Year: {film.release_year}</p>
        <p>Rentals: {film.rented}</p>
    <nav>
              <Link to="/">Back to Home</Link>
            </nav>
    </div>
}

export default FilmDetails;