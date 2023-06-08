import React from 'react'

function AutomobileList(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Color</th>
          <th>Year</th>
          <th>VIN</th>
          <th>Sold</th>
        </tr>
      </thead>
      <tbody>
        {props.automobiles.map((automobile) => {
          return (
            <tr key={automobile.id}>
              <td>{automobile.color}</td>
              <td>{automobile.year}</td>
              <td>{automobile.vin}</td>
              <td>{automobile.sold}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default AutomobileList;
