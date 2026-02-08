import { Link } from "react-router-dom"; 

function FilmCard({ film }) {
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
            {film.title}
            <p style={{ fontSize: "14px", fontWeight: "normal"}}>
              Genre: {film.category}
            </p>

            <nav>
              <Link to={`/films/${film.film_id}`}>
              View Details
              </Link> 
              </nav>
              </div> 
  );
}

export default FilmCard;
