import React from 'react';

class SaleForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: '',
            automobile_id: '',
            automobiles: [],
            salesperson_id: '',
            salespeople: [],
            // employee_id_id: '',
            // employee_id: [],
            customer_id: '',
            customers: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handlePriceChange = this.handlePriceChange.bind(this);
        // this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        // this.handleSalespersonChange = this.handleSalespersonChange.bind(this);
        // this.handleEmployeeIdChange = this.handleEmployeeIdChange.bind(this);
        // this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

        const automobilesUrl = 'http://localhost:8100/api/automobiles/';
        // const salespeopleUrl = 'http://localhost:8090/api/salespeople/'
        // const customersUrl = 'http://localhost:8090/api/customers/';
        // const response = await fetch(automobilesUrl, salespeopleUrl, customersUrl);
        // const response = await fetch(customersUrl);
        // const response = await fetch(salespeopleUrl);
        const response = await fetch(automobilesUrl);
        if (response.ok) {
            const data = await response.json();
            this.setState({
                automobiles: data.automobiles,
                salespeople: data.salespeople,
                // customers: data.customers,
            });
        }

    }

    // async handleSubmit(event) {
    //     event.preventDefault();
    //     const data = { ...this.state };

    //     const salesUrl = 'http://localhost:8100/api/sales/';
    //     const fetchConfig = {
    //         method: 'POST',
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     };
    //     const response = await fetch(salesUrl, fetchConfig);
    //     if (response.ok) {
    //         const newSale = await response.json();
    //         console.log(newSale);

    //         const cleared = { name: '' };
    //         this.setState(cleared);
    //     }
    // }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            price: this.state.price,
            automobile_id: this.state.automobile_id,
            employee_id: this.state.employee_id,
            customer_id: this.state.customer_id,
        };

        const saleUrl = 'http://localhost:8090/api/sales/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        fetch(saleUrl, fetchConfig)
            .then(response => response.json())
            .then(newSale => {
                console.log(newSale);
                const cleared = {
                    price: '',
                    automobile_id: '',
                    salesperson_id: '',
                    customer_id: '',
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
    // handlePriceChange(event) {
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }
    // handleAutomobileChange(event) {
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }
    // handleSalespersonChange(event) {
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }
    // handleEmployeeIdChange(event) {
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }
    // handleCustomerChange(event) {
    //     const { name, value } = event.target;
    //     this.setState({ [name]: value });
    // }
    render() {
        const { automobiles } = this.state;
        const { salespeople } = this.state;
        // const { employee_id } = this.state;
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
                                    value={this.state.automobile_id}
                                    onChange={this.handleInputChange}
                                    required
                                    name="automobile_id"
                                    id="automobile_id"
                                    className="form-select"
                                >
                                    <option value="">Select automobile</option>
                                    {automobiles.map(automobile => (
                                        <option key={automobile.id} value={automobile.id}>
                                            {automobile.vin}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="automobile_id">Automobile</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    value={this.state.salesperson_id}
                                    onChange={this.handleInputChange}
                                    required
                                    name="salesperson_id"
                                    id="salesperson_id"
                                    className="form-select"
                                >
                                    <option value="">Select salesperson</option>
                                    {salespeople.map((salesperson) => (
                                        <option key={salesperson.id} value={salesperson.id}>
                                            {salesperson.last_name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="salesperson_id">Salesperson</label>
                            </div>
                            {/* <div className="form-floating mb-3">
                                <select
                                    value={this.state.employee_id_id}
                                    onChange={this.handleInputChange}
                                    required
                                    name="employee_id_id"
                                    id="employee_id_id"
                                    className="form-select"
                                >
                                    <option value="">Select employee ID</option>
                                    {employee_id.map((employees_id) => (
                                        <option key={employees_id.id} value={employees_id.id}>
                                            {employees_id.employee_id}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="employee_id_id">Employee ID</label>
                            </div> */}
                            <div className="form-floating mb-3">
                                <select
                                    value={this.state.customer_id}
                                    onChange={this.handleInputChange}
                                    required
                                    name="customer_id"
                                    id="customer_id"
                                    className="form-select"
                                >
                                    <option value="">Select customer</option>
                                    {customers.map(customer => (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.first_name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="customer_id">Customer</label>
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
