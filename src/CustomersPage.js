import { Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import "./CustomersPage.css"; 

function CustomersPage(){
    const [customers, setCustomers] = useState([]); 

    useEffect(() => {
        fetch(`http://localhost:5000/api/customers`)
          .then(res => res.json())
          .then(data => setCustomers(data))
          .catch(err => console.error(err)); 
    }, []); 

    return ( 
        <div> 
            <h1>Customer List</h1>
    {
        customers.map((customer) => (
            <div key = {customer.customer_id}> 
            <Link to ={`/customers/${customer.customer_id}`}> 
                {customer.first_name} {customer.last_name}
                </Link> 
            </div>
        ))}
        </div> 
    ); 
} 

export default CustomersPage;
