import React from 'react';

function TechnicianList(props) {
  return (
    <div>
      <h1>Technician List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {props.technicians.map((technician) => (
            <tr key={technician.employee_id}>
              <td>{technician.first_name}</td>
              <td>{technician.last_name}</td>
              <td>{technician.employee_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TechnicianList;
