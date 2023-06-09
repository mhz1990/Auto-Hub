import React from 'react';

class SalespeopleForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            employee_id: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmployeeIdChange = this.handleEmployeeIdChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { name: this.state.name };

        const salespeopleUrl = 'http://localhost:8090/api/salespeople/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(salespeopleUrl, fetchConfig);
        if (response.ok) {
            const newSalesperson = await response.json();
            console.log(newSalesperson);

            const cleared = { name: '' };
            this.setState(cleared);
        }
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
        const value = event.target.value;
        this.setState({ employee_id: value });
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new salesperson</h1>
                        <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleFirstNameChange} placeholder="FirstName" required type="text" name="firstName" id="firstName" className="form-control" />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleLastNameChange} placeholder="LastName" required type="text" name="lastName" id="lastName" className="form-control" />
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleEmployeeIdChange} placeholder="EmployeeId" required type="text" name="employeeId" id="employeeId" className="form-control" />
                                <label htmlFor="employeeId">Employee ID</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SalespeopleForm;
