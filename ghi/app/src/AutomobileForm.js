import React from 'react';

class AutomobileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            year: '',
            vin: '',
            // model: '',
            // models: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.handleChangeYear = this.handleChangeYear.bind(this);
        this.handleChangeVin = this.handleChangeVin.bind(this);
        // this.handleChangeModel = this.handleChangeModel.bind(this);
    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/models/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({ models: data.models });
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.models;

        const modelUrl = 'http://localhost:8100/api/models/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(modelUrl, fetchConfig);
        if (response.ok) {
            const newAutomobile = await response.json();
            console.log(newAutomobile);
            this.setState({
                color: '',
                year: '',
                vin: '',
                model: '',
            });
        }
    }

    handleChangeColor(event) {
        const value = event.target.value;
        this.setState({ color: value });
    }

    handleChangeYear(event) {
        const value = event.target.value;
        this.setState({ year: value });
    }

    handleChangeVin(event) {
        const value = event.target.value;
        this.setState({ vin: value });
    }

    handleChangeModel(event) {
        const value = event.target.value;
        this.setState({ model: value });
    }

    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new automobile</h1>
                        <form onSubmit={this.handleSubmit} id="create-automobile-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeColor} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
                                <label htmlFor="name">Color</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeYear} placeholder="Year" required type="number" name="year" id="year" className="form-control" />
                                <label htmlFor="year">Year</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeVin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleChangeModel} required name="model" id="model" className="form-select">
                                    <option value="">Choose a model</option>
                                    {this.state.model.map(model => {
                                        return (
                                            <option key={model.id} value={model.id}>{model.name}</option>
                                        )
                                    })}
                                </select>
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
