import CustomerRow from "./CustomerRow";
import "./CustomersPage.css"

function CustomerList({ customers = [], onCustomerClick }) {
    console.log("customers:", customers);
    return (
        <div className = "customer-list">
            {customers.map(customer => (
                <CustomerRow key={customer.customer_id} customer={customer}
                    onClick={() => onCustomerClick(customer)}/>
            ))}
        </div>
    );
}

export default CustomerList;