import React from 'react'

function AutomobileList(props) {
  console.log(props.automobiles)
  return (
    <div>
      <h1>Automobile List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Color</th>
            <th>Year</th>
            <th>VIN</th>
            <th>Available</th>
            <th>Model</th>
          </tr>
        </thead>
        <tbody>
          {props.automobiles.map((automobile) => (
            <tr key={automobile.id}>
              <td>{automobile.color}</td>
              <td>{automobile.year}</td>
              <td>{automobile.vin}</td>
              {/* <td>{automobile.sold ? "\u274c" : "\u2705"}</td> */}
              {/* <td>{automobile.sold ? "sold" : "available"}</td> */}
              <td>{automobile.sold.toString()}</td>
              <td>{automobile.model.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AutomobileList;
