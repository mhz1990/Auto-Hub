import React from 'react';

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_time: '',
      reason: '',
      status: '',
      vin: '',
      customer: '',
      technician: '',
      technicianList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchTechnicians();
  }

  async fetchTechnicians() {
    try {
      const techniciansUrl = 'http://localhost:8080/api/technicians/';
      const response = await fetch(techniciansUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch technicians.');
      }
      const data = await response.json();
      this.setState({ technicianList: data.technicians });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = {
      date_time: this.state.date_time,
      reason: this.state.reason,
      status: this.state.status,
      vin: this.state.vin,
      customer: this.state.customer,
      technician: this.state.technician,
    };

    try {
      const appointmentsUrl = 'http://localhost:8080/api/appointments/';
      const response = await fetch(appointmentsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create appointment.');
      }

      console.log('Appointment created:', data);

      const cleared = {
        date_time: '',
        reason: '',
        status: '',
        vin: '',
        customer: '',
        technician: '',
      };
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
            <h1>Create a new appointment</h1>
            <form onSubmit={this.handleSubmit} id="create-appointment-form">
              <div className="form-floating mb-3">
                <input
                  value={this.state.date_time}
                  onChange={this.handleChange}
                  placeholder="Date and Time"
                  required
                  type="datetime-local"
                  name="date_time"
                  id="date_time"
                  className="form-control"
                />
                <label htmlFor="date_time">Date and Time</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.reason}
                  onChange={this.handleChange}
                  placeholder="Reason"
                  required
                  type="text"
                  name="reason"
                  id="reason"
                  className="form-control"
                />
                <label htmlFor="reason">Reason</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.status}
                  onChange={this.handleChange}
                  placeholder="Status"
                  required
                  type="text"
                  name="status"
                  id="status"
                  className="form-control"
                />
                <label htmlFor="status">Status</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.vin}
                  onChange={this.handleChange}
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
                <input
                  value={this.state.customer}
                  onChange={this.handleChange}
                  placeholder="Customer"
                  required
                  type="text"
                  name="customer"
                  id="customer"
                  className="form-control"
                />
                <label htmlFor="customer">Customer</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  value={this.state.technician}
                  onChange={this.handleChange}
                  required
                  name="technician"
                  id="technician"
                  className="form-select"
                >
                  <option value="">Select a Technician</option>
                  {this.state.technicianList.map((technician) => (
                    <option key={technician.employee_id} value={technician.employee_id}>
                      {technician.employee_id} - {technician.first_name}
                    </option>
                  ))}
                </select>
                <label htmlFor="technician">Technician</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AppointmentForm;
