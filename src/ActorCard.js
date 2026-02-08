import { Link } from "react-router-dom"; 

function ActorCard({ actor }) {
  return (
    <div 
            style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                fontSize: "20px", 
                fontWeight: "bold",
                borderRadius: "8px", 
                width: "160px",
                margin: "10px auto"
            }}
            > 
            {actor.name}
            <p style ={{ fontSize: "14px", fontWeight: "normal"}}> 
              Movies: {actor.movies}

            </p>
            <nav>
              <Link to={`/actors/${actor.actor_id}`}>
              View Details
              </Link>
            </nav>
            </div>
  );
}

export default ActorCard;
