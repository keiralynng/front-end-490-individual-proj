import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import "./ActorDetails.css"; 
 
function ActorDetails(){
    const {actor_id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/actors/${actor_id}`)
          .then((res) => res.json())
          .then((json)=> setData(json))
    }, [actor_id]); 

    if (!data || !data.actor){
        return <div style={{ padding: "20px" }}>Loading.</div>
    }

    const actor = data.actor; 
    const topFilms = data.top_films || []; 

    return( 
    <>
    <div className="actor-name">
        {actor.first_name} {actor.last_name}
        </div> 

        <div className="movie">Top 5 Rented Films</div>

        {topFilms.length === 0 ? (
            <p>No films found.</p>
        ) : (
            <div className="actor-text">
                <div className="actor-spacing">
                {topFilms.map((film) => (
                <div className="film-block" key={film.film_id}>
                    <div className="detail-label">
                    {film.title}</div> 

                    <div className="rentals">
                     <span className="detail-label">Rentals: </span>
                     <span>{film.rented}</span>
                </div>
                </div>
            ))}
            </div>
            </div>
        )}
    <nav>
              <Link className="details-link" to="/">Back to Home</Link>
            </nav>
    </>
    )
}

export default ActorDetails;