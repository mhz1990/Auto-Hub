import React from 'react';

class AutomobileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      year: '',
      vin: '',
      model_id: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      color: this.state.color,
      year: this.state.year,
      vin: this.state.vin,
      model_id: this.state.model_id
    };

    const automobileUrl = 'http://localhost:8100/api/automobiles/';
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(automobileUrl, fetchConfig)
      .then(response => response.json())
      .then(newAutomobile => {
        console.log(newAutomobile);
        const cleared = {
          color: '',
          year: '',
          vin: '',
          model_id: ''
        };
        this.setState(cleared);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { models } = this.props;

    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new automobile</h1>
            <form onSubmit={this.handleSubmit} id="create-automobile-form">
              <div className="form-floating mb-3">
                <input
                  value={this.state.color}
                  onChange={this.handleInputChange}
                  placeholder="Color"
                  required
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.year}
                  onChange={this.handleInputChange}
                  placeholder="Year"
                  required
                  type="number"
                  name="year"
                  id="year"
                  className="form-control"
                />
                <label htmlFor="year">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.vin}
                  onChange={this.handleInputChange}
                  placeholder="VIN"
                  required
                  type="text"
                  name="vin"
                  id="vin"
                  className="form-control"
                />
                <label htmlFor="vin">VIN</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  value={this.state.model_id}
                  onChange={this.handleInputChange}
                  required
                  name="model_id"
                  id="model_id"
                  className="form-select"
                >
                  <option value="">Select Model</option>
                  {models.map(model => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="model_id">Model</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AutomobileForm;
