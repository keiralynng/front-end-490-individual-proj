import FilmCard from "./FilmCard"; 
import ActorCard from "./ActorCard"; 
import FilmDetails from "./FilmDetails"; 
import ActorDetails from "./ActorDetails"; 
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react"; 
 
function Landing(){
  const [films, setFilms] = useState([]);
  const [actors, setActors] = useState([]);  

  useEffect(() => {
    fetch("http://localhost:5000/api/top-5-films")
      .then(res => res.json())
      .then(data => setFilms(data));

    fetch("http://localhost:5000/api/top-5-actors")
      .then(res => res.json())
      .then(data => setActors(data)); 
  }, []); 

  return(
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Top 5 Rented Films</h2>

      {films.map(film => (
        <FilmCard key={film.film_id} film={film}/>
      ))}
    
      <h2>Top 5 Actors</h2>
     
      {actors.map(actor =>(
        <ActorCard key={actors.actor_id} actor={actor}/>
        ))}

    </div>
  ); 
}

function App(){
  return(
    <div>
    <div style={{ 
      backgroundColor: "black", 
      color: "white",
      padding: "15px", 
      fontSize: "20px",
      fontWeight: "bold"
    }}>
      Movie Store Dashboard 
    </div>

    <Routes>
      <Route path="/" element = {<Landing />}/>
      <Route path="/films/:film_id" element={<FilmDetails />}/>
      <Route path="/actors/:actor_id" element={<ActorDetails />}/>
    </Routes>
    </div>
  ); 
}

export default App; 