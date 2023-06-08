import React from 'react'

function ModelList(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Model Name</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        {props.models.map((model) => (
          <tr key={model.id}>
            <td>{model.name}</td>
            <td>
              <img src={model.picture_url} alt={model.name} style={{ height: '50px' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ModelList;
