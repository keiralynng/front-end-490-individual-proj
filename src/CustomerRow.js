import "./CustomersPage.css"
import { Link } from "react-router-dom"

function CustomerRow({ customer, onClick }) {
    return(
        <Link to={`/customers/${customer.customer_id}`} className="link-details">
            <div className="customer-row" onClick={onClick}>
                <h2>{customer.last_name}, {customer.first_name}</h2>
            </div>
        </Link>
    )
}

export default CustomerRow;