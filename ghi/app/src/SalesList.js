import React from 'react';

function SalesList(props) {
    return (
        <div>
            <h1>Sales List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Salesperson</th>
                        <th>Salesperson ID</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.sales.map((sales) => (
                        <tr key={sales.sales}>
                            <td>{sales.customer.full_name}</td>
                            <td>{sales.salesperson.last_name}</td>
                            <td>{sales.salesperson.employee_id}</td>
                            <td>{sales.automobile.vin}</td>
                            <td>{sales.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SalesList;
