import React from 'react'

function ManufacturerList(props) {
  return (
    <div>
      <h1>Manufacturer List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          {props.manufacturers.map((manufacturer) => (
            <tr key={manufacturer.id}>
              <td>{manufacturer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManufacturerList;
