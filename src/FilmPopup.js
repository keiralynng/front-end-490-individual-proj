import "./FilmPage.css"
import { useState } from "react"

function FilmPopup({ film, onClose}) {
    const[customerId, setCustomerId] = useState("");
    const[error, setError] = useState("");
    const[success, setSuccess] = useState("");
    
    function rentFilm() {
        setError("");
        setSuccess("");

        if(!customerId) {
            setError("Please enter a Customer Id.")
            return;
        }

        fetch(`http://localhost:5000/api/rent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                film_id: film.film_id,
                customer_id: Number(customerId)
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    setSuccess(data.message);
                    setCustomerId("");
                }
            })
            .catch(err => { setError(err.message); });
    }


    return (
        <div className="popup-overlay">
            <div className="popup-info">
                <h2>{film.title}</h2>
                <div className="popup-details">
                    <div><strong>Genre:{" "}</strong>{film.name}</div>
                    <div><strong>Description:{" "}</strong>{film.description}</div>
                    <div><strong>Rating:{" "}</strong>{film.rating}</div>
                    <div><strong>Release Year:{" "}</strong>{film.release_year}</div>
                    <div><strong>Length:{" "}</strong>{film.length}</div>
                    <div><strong>Rental Duration:{" "}</strong>{film.rental_duration}</div>
                    <div><strong>Rental Rate:{" "}</strong>{film.rental_rate}</div>
                    <div><strong>Replacement Cost:{" "}</strong>{film.replacement_cost}</div>    
                </div>

                <div className="rent-options">
                <input className="input" type="number" placeholder="Enter Customer Id"
                    value={customerId} onChange={(e) => setCustomerId(e.target.value)}>    
                </input>
                <button className="rentBtn" onClick={rentFilm}>Rent</button>
                </div>

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <div>
                <button className="closeBtn" onClick={onClose}><strong>Close</strong></button>
                </div>
            </div>
        </div>
    );
}

export default FilmPopup;