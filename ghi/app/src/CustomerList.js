import React from 'react';

function CustomerList(props) {
    return (
        <div>
            <h1>Customer List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Customer ID</th>
                    </tr>
                </thead>
                <tbody>
                    {props.customers.map((customer) => (
                        <tr key={customer.first_name}>
                            <td>{customer.last_name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phone_number}</td>
                            <td>{customer.customer_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerList;
