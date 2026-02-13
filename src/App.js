import FilmCard from "./FilmCard"; 
import ActorCard from "./ActorCard"; 
import FilmDetails from "./FilmDetails"; 
import ActorDetails from "./ActorDetails"; 
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react"; 
import "./App.css"; 
import "./FilmCard.css"; 
import "./ActorCard.css"; 
 
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
    <div>
    <div className="h1">
      Top 5 Rented Films
      </div>

    <div className="card-row">
      {films.map(film => (
        <FilmCard key={film.film_id} film={film}/>
      ))}
    </div>

      <div className="h1">
      Top 5 Actors
     </div>

     <div className="card-row">
      {actors.map(actor =>(
        <ActorCard key={actors.actor_id} actor={actor}/>
        ))}
      </div>
      </div>
  ); 
}

function App(){
  return(
    <div>
    <div className="body">
    <div className="header">
      Sakila Movies 
    </div>

    <Routes>
      <Route path="/" element = {<Landing />}/>
      <Route path="/films/:film_id" element={<FilmDetails />}/>
      <Route path="/actors/:actor_id" element={<ActorDetails />}/>
    </Routes>
        </div>
    </div>
  ); 
}

export default App; 