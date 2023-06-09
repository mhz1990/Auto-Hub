import React from 'react';

function AppointmentList(props) {
  return (
    <div>
      <h1>Appointment List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date/Time</th>
            <th>Reason</th>
            <th>Status</th>
            <th>VIN</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
          {props.appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.date_time}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.status}</td>
              <td>{appointment.vin}</td>
              <td>{appointment.customer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
