import React from 'react';

function SalespeopleList(props) {
    return (
        <div>
            <h1>Salespeople List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Employee ID</th>
                    </tr>
                </thead>
                <tbody>
                    {props.salespeople.map((salespeople) => (
                        <tr key={salespeople.employee_id}>
                            <td>{salespeople.first_name}</td>
                            <td>{salespeople.last_name}</td>
                            <td>{salespeople.employee_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SalespeopleList;
