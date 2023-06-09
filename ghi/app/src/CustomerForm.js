import React from 'react';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            full_name: '',
            address: '',
            phone_number: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { name: this.state.name };

        const customerUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
            const newCustomer = await response.json();
            console.log(newCustomer);

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
    handleFullNameChange(event) {
        const value = event.target.value;
        this.setState({ full_name: value });
    }
    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({ address: value });
    }
    handlePhoneNumberChange(event) {
        const value = event.target.value;
        this.setState({ phone_number: value });
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new customer</h1>
                        <form onSubmit={this.handleSubmit} id="create-customer-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleFirstNameChange} placeholder="FirstName" required type="text" name="firstName" id="firstName" className="form-control" />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleLastNameChange} placeholder="LastName" required type="text" name="lastName" id="lastName" className="form-control" />
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleFullNameChange} placeholder="FullName" required type="text" name="fullName" id="fullName" className="form-control" />
                                <label htmlFor="fullName">Full Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleAddressChange} placeholder="Address" required type="text" name="address" id="address" className="form-control" />
                                <label htmlFor="address">Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handlePhoneNumberChange} placeholder="PhoneNumber" required type="text" name="phoneNumber" id="phoneNumber" className="form-control" />
                                <label htmlFor="phoneNumber">Phone Number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerForm;
