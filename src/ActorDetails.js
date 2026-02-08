import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
 
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
    <div style={{ padding: "20px" }}>
        <h2>{actor.first_name} {actor.last_name}</h2>
        <h3>Top 5 Rented Films</h3>

        {topFilms.length === 0 ? (
            <p>No films found.</p>
        ) : (
            <ul>{topFilms.map((film) => (
                <li key={film.film_id}>
                    {film.title} - Rentals: {film.rented}
                </li>
            ))}
            </ul>
        )}
    <nav>
              <Link to="/">Back to Home</Link>
            </nav>
    </div>
    )
}

export default ActorDetails;