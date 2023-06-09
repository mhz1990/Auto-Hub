import React from 'react';

class ModelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      picture_url: '',
      manufacturer_id: '',
      manufacturers: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {

    const manufacturersUrl = 'http://localhost:8100/api/manufacturers/';
    const response = await fetch(manufacturersUrl);
    if (response.ok) {
      const data = await response.json();
      this.setState({ manufacturers: data.manufacturers });
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
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={this.state.picture_url}
                  onChange={this.handleInputChange}
                  placeholder="Picture URL"
                  required
                  type="url"
                  name="picture_url"
                  id="picture_url"
                  className="form-control"
                />
                <label htmlFor="picture_url">Picture URL</label>
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

export default ModelForm;
