import React from 'react';

class SaleForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: '',
            automobile: '',
            automobiles: [],
            salesperson: '',
            salespeople: [],
            employee: '',
            employees: [],
            customer: '',
            customers: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.fetchAutomobiles();
        this.fetchSalespeople();
        this.fetchEmployees();
        this.fetchCustomers();
    }

    async fetchAutomobiles() {
        try {
            const automobilesUrl = 'http://localhost:8100/api/automobiles/';
            const response = await fetch(automobilesUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch automobiles.');
            }
            const data = await response.json();
            this.setState({
                automobiles: data.autos,
            });
        } catch (error) {
            console.error(error);
        }
    }

    async fetchSalespeople() {
        try {
            const salespeopleUrl = 'http://localhost:8090/api/salespeople/'
            const response = await fetch(salespeopleUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch salespeople.');
            }
            const data = await response.json();
            this.setState({
                salespeople: data.salespeople,
            });
        } catch (error) {
            console.error(error);
        }
    }

    async fetchEmployees() {
        try {
            const employeesUrl = 'http://localhost:8090/api/salespeople/';
            const response = await fetch(employeesUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch employees.');
            }
            const data = await response.json();
            this.setState({
                employees: data.salespeople,
            });
        } catch (error) {
            console.error(error);
        }
    }

    async fetchCustomers() {
        try {
            const customersUrl = 'http://localhost:8090/api/customers/';
            const response = await fetch(customersUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch customers.');
            }
            const data = await response.json();
            this.setState({
                customers: data.customers,
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {
            price: this.state.price,
            automobile: this.state.automobile,
            salesperson: this.state.salesperson,
            employee: this.state.employee,
            customer: this.state.customer,
        };

        try {
            const salesUrl = 'http://localhost:8090/api/sales/';
            const response = await fetch(salesUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to create sale.');
            }

            console.log('Sale created: ', data);

            const cleared = {
                price: '',
                automobile: '',
                salespeople: '',
                employees: '',
                customers: '',
            };
            this.setState(cleared)
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { automobiles } = this.state;
        const { salespeople } = this.state;
        const { employees } = this.state;
        const { customers } = this.state;

        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new sale</h1>
                        <form onSubmit={this.handleSubmit} id="create-sale-form">
                            <div className="form-floating mb-3">
                                <input
                                    value={this.state.price}
                                    onChange={this.handleInputChange}
                                    placeholder="Price"
                                    required
                                    type="text"
                                    name="price"
                                    id="price"
                                    className="form-control"
                                />
                                <label htmlFor="price">Price</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    value={this.state.automobile}
                                    onChange={this.handleInputChange}
                                    required
                                    name="automobile"
                                    id="automobile"
                                    className="form-select"
                                >
                                    <option value="">Select automobile</option>
                                    {automobiles.map((automobile) => (
                                        <option key={automobile.id} value={automobile.id}>
                                            {automobile.vin}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="automobile">Automobile</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    value={this.state.salesperson}
                                    onChange={this.handleInputChange}
                                    required
                                    name="salesperson"
                                    id="salesperson"
                                    className="form-select"
                                    >
                                    <option value="">Select salesperson</option>
                                    {salespeople.map((salesperson) => (
                                        <option key={salesperson.id} value={salesperson.id}>
                                            {salesperson.last_name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="salesperson">Salesperson</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    value={this.state.employee}
                                    onChange={this.handleInputChange}
                                    required
                                    name="employee"
                                    id="employee"
                                    className="form-select"
                                    >
                                    <option value="">Select employee ID</option>
                                    {employees.map((employees) => (
                                        <option key={employees.id} value={employees.id}>
                                            {employees.employee_id}
                                            </option>
                                            ))}
                                </select>
                                <label htmlFor="employee">Employee ID</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    value={this.state.customer}
                                    onChange={this.handleInputChange}
                                    required
                                    name="customer"
                                    id="customer"
                                    className="form-select"
                                    >
                                    <option value="">Select customer</option>
                                    {customers.map(customer => (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.first_name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="customer">Customer</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default SaleForm;
