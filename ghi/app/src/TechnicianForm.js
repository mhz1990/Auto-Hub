import React from 'react';

class TechnicianForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      employee_id: 0
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmployeeIdChange = this.handleEmployeeIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    const value = event.target.value;
    this.setState({ first_name: value });
  }

  handleLastNameChange(event) {
    const value = event.target.value;
    this.setState({ last_name: value });
  }

  handleEmployeeIdChange(event) {
    const value = parseInt(event.target.value, 10);
    this.setState({ employee_id: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      employee_id: this.state.employee_id
    };

    try {
      const techniciansUrl = 'http://localhost:8080/api/technicians/';
      const response = await fetch(techniciansUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create technician.');
      }

      console.log('Technician created:', data);

      const cleared = { first_name: '', last_name: '', employee_id: 0 };
      this.setState(cleared);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new technician</h1>
            <form onSubmit={this.handleSubmit} id="create-technician-form">
              <div className="form-floating mb-3">
                <input
                  value={this.state.first_name}
                  onChange={this.handleFirstNameChange}
                  placeholder="First Name"
                  required
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="form-control"
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.last_name}
                  onChange={this.handleLastNameChange}
                  placeholder="Last Name"
                  required
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="form-control"
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.employee_id}
                  onChange={this.handleEmployeeIdChange}
                  placeholder="Employee ID"
                  required
                  type="number"
                  name="employee_id"
                  id="employee_id"
                  className="form-control"
                />
                <label htmlFor="employee_id">Employee ID</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnicianForm;
