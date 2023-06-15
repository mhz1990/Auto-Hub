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
            salesperson_id_id: '',
            salespeople_id: [],
            customer_id: '',
            customers: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this);
        this.handleSalespersonChange = this.handleSalespersonChange.bind(this);
        this.handleSalespersonIdChange = this.handleSalespersonIdChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

        const automobilesUrl = 'http://localhost:8100/api/automobiles/';
        const salespeopleUrl = 'http://localhost:8090/api/salespeople/'
        const customersUrl = 'http://localhost:8090/api/customers/';
        const response = await fetch(automobilesUrl, salespeopleUrl, customersUrl);
        if (response.ok) {
            const data = await response.json();
            this.setState({
                automobiles: data.automobiles,
                salespeople: data.salespeople,
                customers: data.customers,
            });
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };

        const salesUrl = 'http://localhost:8100/api/sales/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(salesUrl, fetchConfig);
        if (response.ok) {
            const newSale = await response.json();
            console.log(newSale);

            const cleared = { name: '' };
            this.setState(cleared);
        }
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handlePriceChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleAutomobileChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSalespersonChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSalespersonIdChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleCustomerChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { automobiles } = this.state;
        const { salespeople } = this.state;
        const { customers } = this.state;

        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new sale</h1>
                        <form onSubmit={this.handleSubmit} id="create-vehicle-model-form">
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
                                    {automobiles.map((automobile) => (
                                        <option key={automobile.vin} value={automobile.vin}>
                                            {automobile.vin}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="manufacturer_id">Automobile</label>
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
                                            {salesperson.name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="salesperson_id">Salesperson</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    value={this.state.salesperson_id_id}
                                    onChange={this.handleInputChange}
                                    required
                                    name="salesperson_id_id"
                                    id="salesperson_id_id"
                                    className="form-select"
                                >
                                    <option value="">Select salesperson ID</option>
                                    {salespeople_id.map((salesperson_id) => (
                                        <option key={salesperson_id.id} value={salesperson_id.id}>
                                            {salesperson_id.name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="salesperson_id_id">Salesperson ID</label>
                            </div>
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
                                    {customers.map((customer) => (
                                        <option key={customer.id} value={customer.id}>
                                            {customer.name}
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
