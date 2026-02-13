import { Link } from "react-router-dom"; 
import "./ActorCard.css"; 

function ActorCard({ actor }) {
  return (
    <div className="actor-style"> 
    <div className="name-title"> 
            {actor.name}
    </div>
    <div className="movie-count">
            <p> 
              Movies: {actor.movies}
            </p>
    </div>
            <nav>
              <Link className="link-text" to={`/actors/${actor.actor_id}`}>
              View Details
              </Link>
            </nav>
            </div>
  );
}

export default ActorCard;
