import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import FilmList from "./FilmList";
import "./FilmPage.css"
import FilmPopup from "./FilmPopup"

function FilmsPage(){
    const [films, setFilms] = useState([]);
    const [pages, setPages] = useState(1);
    const [selectedFilm, setSelectedFilm] = useState(null);
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        const param = new URLSearchParams();
        param.append("page", pages);

        if (search) {
            param.append("search", search);
        }

        fetch(`http://localhost:5000/api/films?${param.toString()}`)
            .then(res => res.json())
            .then(data => setFilms(data));
    }, [pages, search]);

    function pageSearch() {
        setPages(1);
        setSearch(input);
    }

    return (
        <div className="films-page">
            <h1 className="title"> Film Catalog </h1>
            <div className="search-overlay">
                <input className="search-bar" type="text" placeholder="Search by title, genre, or actor"
                        value = {input} onChange={(e) => setInput(e.target.value)}>
                </input>
                <button className="searchBtn" onClick={pageSearch}>Search</button>
            </div>
            <FilmList films={films} onFilmClick={setSelectedFilm} />
            
            <div className="page-template">
            <button className="page-button" onClick={() => setPages(prev => prev - 1)} disabled={pages === 1}>
                Previous
            </button>

            <button className="page-button" onClick={() => setPages(prev => prev + 1)}>
                Next
            </button>
            </div>

            {selectedFilm && (
                <FilmPopup film={selectedFilm} 
                    onClose={() => setSelectedFilm(null)}>
                </FilmPopup>
            )}
               
            <span className="page-number">
                Current Page: {pages}
            </span>
            
            <nav>
                <Link to="/">Back to Home</Link>
            </nav>
        </div>      
    );
}

export default FilmsPage;