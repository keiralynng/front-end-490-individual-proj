import { Link, useParams } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import "./CustomerDetails.css"; 

function CustomerDetails(){
    const {customer_id } = useParams();
    const [customer, setCustomer] = useState(null);
    const [rentals, setRentals] = useState([]); 

    useEffect(() => {
        fetch(`http://localhost:5000/api/customers/${customer_id}`)
          .then(res => res.json())
          .then((data) => {
            setCustomer(data.customer);
            setRentals(data.rentals); 
          }) 
          .catch(err => console.error(err)); 
    }, [customer_id]); 

    if (!customer){
        return <div style={{ padding: "20px" }}>Loading.</div>
    }

    return (
    <div> 
        <h1> 
            {customer.first_name} {customer.last_name}
        </h1>
        <p>{customer.email}</p>

        <h2>Rental History</h2>
        {rentals.length === 0 ? (
            <p>No rentals found.</p>
        ) : ( 
            rentals.map((r) => (
                <div key={r.rental_id}>
                    {r.title} - {r.return_date ? "Returned" : "OUT"}
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