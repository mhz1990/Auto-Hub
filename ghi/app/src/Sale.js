import React from 'react';

class SaleForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: '',
            automobile_id: '',
            automobile: [],
            salesperson_id: '',
            salesperson: [],
            customer_id: '',
            customer: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

        const automobileUrl = 'http://localhost:8100/api/automobiles/';
        const salespersonUrl = 'http://localhost:8090/api/salespeople/'
        const customerUrl = 'http://localhost:8090/api/customers/';
        const response = await fetch(automobileUrl, salespersonUrl, customerUrl);
        if (response.ok) {
            const data = await response.json();
            this.setState({
                automobiles: data.automobiles,
                salespeople: data.salespeople,
                customers: data.customers
            });
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: this.state.name,
            picture_url: this.state.picture_url,
            manufacturer_id: this.state.manufacturer_id
        };

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newModel = await response.json();
            console.log(newModel);

            const cleared = { name: '', picture_url: '', manufacturer_id: '' };
            this.setState(cleared);
        }
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { manufacturers } = this.state;

        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new vehicle model</h1>
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
                                    value={this.state.manufacturer_id}
                                    onChange={this.handleInputChange}
                                    required
                                    name="manufacturer_id"
                                    id="manufacturer_id"
                                    className="form-select"
                                >
                                    <option value="">Select a manufacturer</option>
                                    {manufacturers.map((manufacturer) => (
                                        <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="manufacturer_id">Manufacturer</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    value={this.state.manufacturer_id}
                                    onChange={this.handleInputChange}
                                    required
                                    name="manufacturer_id"
                                    id="manufacturer_id"
                                    className="form-select"
                                >
                                    <option value="">Select a manufacturer</option>
                                    {manufacturers.map((manufacturer) => (
                                        <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="manufacturer_id">Manufacturer</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select
                                    value={this.state.manufacturer_id}
                                    onChange={this.handleInputChange}
                                    required
                                    name="manufacturer_id"
                                    id="manufacturer_id"
                                    className="form-select"
                                >
                                    <option value="">Select a manufacturer</option>
                                    {manufacturers.map((manufacturer) => (
                                        <option key={manufacturer.id} value={manufacturer.id}>
                                            {manufacturer.name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="manufacturer_id">Manufacturer</label>
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
