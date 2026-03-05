import {useEffect, useState} from "react"
import "./CustomerDetails.css"


function EditCustomerModal({ customer, onClose, onSave }) {
    const[form, setForm] = useState({
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email,
        address_id: customer.address_id
    });

    function editDetail(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    return (
        <div className="edit-modal">
            <div className="edit-modal-content">
            <h2>Edit Customer</h2>

            <input
                name="first_name"
                value={form.first_name}
                onChange={editDetail}>
            </input>

            <input
                name="last_name"
                value={form.last_name}
                onChange={editDetail}>
            </input>

            <input
                name="email"
                value={form.email}
                onChange={editDetail}>
            </input>

                <div className="edit-modal-buttons">
                    <button onClick={() => onSave({ ...customer, ...form })}>Save</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>


        </div>
    );
}

export default EditCustomerModal;