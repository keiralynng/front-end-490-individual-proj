import { useEffect, useState } from "react";
import "./CustomersPage.css"; 
import CustomerList from "./CustomerList"
import { Link } from "react-router-dom"

function CustomersPage(){
    const [customers, setCustomers] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");
    const [newCustomer, setNewCustomer] = useState({first_name: "", last_name: "", email: ""}); 
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const param = new URLSearchParams();
        param.append("page", page);
        
        if(search) {
            param.append("search", search)
        }

        fetch(`http://localhost:5000/api/customers?${param.toString()}`)
          .then(res => res.json())
          .then(data => {
            setCustomers(data.customers);    
            setPages(data.pages || 1); })
          .catch(err => console.error(err)); 
    }, [page, search]); 

    function pageSearch() {
        setPage(1);
        setSearch(input);
    }

    function addNewCustomer() {
        fetch('http://localhost:5000/api/customers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCustomer),
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log("error");
                } else {
                    console.log("Created: ", data);
                }
                
                setModal(false);
                setPage(1);
                setSearch("");
                setInput("");
                
                setNewCustomer({
                    first_name: "",
                    last_name: "",
                    email: "",
                });
            })     
    }

    return ( 
        <div> 
            <div className="customer-header">
                Customer List
            </div>
            <div className="search-overlay">
                <input className="search-bar" type="text" placeholder="Search by Id, First Name, or Last Name"
                    value = {input} onChange={(e) => setInput(e.target.value)}></input>

                <button className="searchBtn" onClick={pageSearch}>Search</button>
                <button className="searchBtn" onClick={() => setModal(true)}>Add Customer</button>
            </div>
            <CustomerList customers={customers} onCustomerClick={setSelectedCustomer}></CustomerList>

            <div className="page-template">
                <button className="page-button" onClick={() => setPage(prev => prev - 1)} disabled={page === 1}>
                    Previous
                </button>

                <span className="counter">Page {page} of {pages}</span>

                <button className="page-button" onClick={() => setPage(prev => prev + 1)} disabled={page === pages}>
                    Next
                </button>
            </div>
            
            <nav>
                <Link to="/">Back to Home</Link>
            </nav>

        {modal && (
            <div className="add-modal">
                <div className="add-modal-content">
                    <h2>Add Customer</h2>

                    <input placeholder="Input First Name Here" value={newCustomer.first_name}
                    onChange={(e) => setNewCustomer({ ...newCustomer, first_name: e.target.value })
                    }>
                    </input>

                    <input placeholder="Input Last Name Here" value={newCustomer.last_name}
                    onChange={(e) => setNewCustomer({ ...newCustomer, last_name: e.target.value })
                    }>
                    </input>

                    <input placeholder="Input Email Here" value={newCustomer.email}
                    onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })
                    }>
                    </input>

                    <div className="add-modal-buttons">
                        <button onClick={addNewCustomer}>Confirm</button>

                        <button onClick={() => setModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        )}
        
        </div> 

        
    ); 
} 

export default CustomersPage;
