import { Link, useParams, useNavigate} from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import "./CustomerDetails.css"; 

function CustomerDetails(){
    const {customer_id } = useParams();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState(null);
    const [rentals, setRentals] = useState([]); 

    // fetches details again
    const loadCustomer = () => {
        fetch(`http://localhost:5000/api/customers/${customer_id}`)
          .then(res => res.json())
          .then((data) => {
            setCustomer(data.customer);
            setRentals(data.rentals); 
          }) 
          .catch(err => console.error(err)); 
    }; 

    useEffect(() => { 
        loadCustomer(); 
    }, [customer_id]); 

    const deleteCustomer = () => {
        const check = window.confirm("Delete this customer?"); 
        if(!check) return; 
        
        fetch(`http://localhost:5000/api/customers/${customer_id}`, {
            method: "DELETE", 
        })
            .then((res) => {
                if (res.ok){
                    alert("Customer deleted"); 
                    navigate("/customers");
                } else { 
                    alert("Delete failed"); 
                }
            })
            .catch((err) => console.error(err)); 
    }; 

    const markReturned = (rental_id) => {
        fetch(`http://localhost:5000/api/rentals/${rental_id}/return`, { 
            method: "PATCH", 
        })
         .then((res) => {
            if (res.ok) {
                loadCustomer(); 
            } 
         })
         .catch((err) => console.error(err));
    }; 

    if (!customer){
        return <div style={{ padding: "20px" }}>Loading.</div>
    }

    return (
    <div> 
        <h1> 
            {customer.first_name} {customer.last_name}
        </h1>
        <p>{customer.email}</p>

        <button onClick={deleteCustomer}>Delete Customer</button>

        <h2>Rental History</h2>
        {rentals.length === 0 ? (
            <p>No rentals found.</p>
        ) : ( 
            rentals.map((r) => (
                <div key={r.rental_id}>
                    {r.title} - {r.return_date ? "Returned" : "OUT"}

                    {!r.return_date && (
                        <button 
                            style={{ marginLeft: "10px" }}
                            onClick={() => markReturned(r.rental_id)}
                            >
                                Mark Returned
                            </button>
                        )}
                </div>
            ))
        )}
        <nav>
            <Link className="details-link" to="/customers">Back to Customers</Link>
            {" | "}
            <Link className="details-link" to="/">Back to Home</Link>
        </nav>
        </div>
);
}

export default CustomerDetails;