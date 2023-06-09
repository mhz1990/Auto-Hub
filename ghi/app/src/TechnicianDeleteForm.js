import React from 'react';

class TechnicianDeleteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeId: '',
      successMessage: '',
      errorMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ employeeId: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { employeeId } = this.state;

    try {
      const deleteUrl = `http://localhost:8080/api/technicians/${employeeId}`;
      const response = await fetch(deleteUrl, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete technician.');
      }

      this.setState({ successMessage: 'Technician deleted successfully.', errorMessage: '' });
    } catch (error) {
      this.setState({ errorMessage: error.message, successMessage: '' });
    }
  }

  render() {
    const { employeeId, successMessage, errorMessage } = this.state;

    return (
      <div>
        <h1>Delete Technician</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="employeeId">Employee ID:</label>
            <input
              type="number"
              id="employeeId"
              value={employeeId}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Delete</button>
          </div>
        </form>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  }
}

export default TechnicianDeleteForm;
