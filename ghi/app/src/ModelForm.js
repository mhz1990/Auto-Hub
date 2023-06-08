import React from 'react';

class ModelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pictureUrl: '',
      manufacturer: '',
      manufacturers: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePictureUrl = this.handleChangePictureUrl.bind(this);
    this.handleChangeManufacturer = this.handleChangeManufacturer.bind(this);
  }

  async componentDidMount() {
    const url = 'http://localhost:8100/api/manufacturers/';

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ manufacturers: data.manufacturers });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = { ...this.state };
    delete data.manufacturers;

    const manufacturerUrl = 'http://localhost:8100/api/manufacturers/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(manufacturerUrl, fetchConfig);
    if (response.ok) {
      const newModel = await response.json();
      console.log(newModel);
      this.setState({
        name: '',
        pictureUrl: '',
        manufacturer: '',
      });
    }
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangePictureUrl(event) {
    const value = event.target.value;
    this.setState({ pictureUrl: value });
  }

  handleChangeManufacturer(event) {
    const value = event.target.value;
    this.setState({ manufacturer: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new vehicle model</h1>
            <form onSubmit={this.handleSubmit} id="create-automobile-form">
              <div className="form-floating mb-3">
                <input onChange={this.handleChangeName} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={this.handleChangePictureUrl} placeholder="Picture URL" required type="pictureUrl" name="pictureUrl" id="pictureUrl" className="form-control" />
                <label htmlFor="pictureUrl">Picture URL</label>
              </div>
              <div className="mb-3">
                <select onChange={this.handleChangeManufacturer} required name="manufacturer" id="manufacturer" className="form-select">
                  <option value="">Choose a manufacturer</option>
                  {this.state.manufacturers.map(manufacturer => {
                    return (
                      <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
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

export default ModelForm;



// import React from 'react';

// class ModelForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       pictureUrl: '',
//       manufacturer: '',
//       manufacturers: [],
//     };

//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handlePictureUrlChange = this.handlePictureUrlChange.bind(this);
//     this.handleManufacturerChange = this.handleManufacturerChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   async componentDidMount() {
//     const manufacturersUrl = 'http://localhost:8100/api/manufacturers/';
//     const response = await fetch(manufacturersUrl);
//     if (response.ok) {
//       const data = await response.json();
//       this.setState({ manufacturers: data.manufacturers });
//     }
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     const data = {
//       name: this.state.name,
//       picture_url: this.state.pictureUrl,
//       manufacturer: this.state.manufacturer,
//     };

//     const vehicleModelUrl = 'http://localhost:8100/api/models';
//     const fetchConfig = {
//       method: 'post',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
//     const response = await fetch(vehicleModelUrl, fetchConfig);
//     if (response.ok) {
//       const newVehicleModel = await response.json();
//       console.log(newVehicleModel);

//       const cleared = {
//         name: '',
//         pictureUrl: '',
//         manufacturer: '',
//       };
//       this.setState(cleared);
//     }
//   }

//   handleNameChange(event) {
//     const value = event.target.value;
//     this.setState({ name: value });
//   }

//   handlePictureUrlChange(event) {
//     const value = event.target.value;
//     this.setState({ pictureUrl: value });
//   }

//   handleManufacturerChange(event) {
//     const value = event.target.value;
//     this.setState({ manufacturer: value });
//   }

//   render() {
//     return (
//       <div className="row">
//         <div className="offset-3 col-6">
//           <div className="shadow p-4 mt-4">
//             <h1>Create a new vehicle model</h1>
//             <form onSubmit={this.handleSubmit} id="create-vehicle-model-form">
//               <div className="form-floating mb-3">
//                 <input
//                   value={this.state.name}
//                   onChange={this.handleNameChange}
//                   placeholder="Name"
//                   required
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="form-control"
//                 />
//                 <label htmlFor="name">Name</label>
//               </div>
//               <div className="form-floating mb-3">
//                 <input
//                   value={this.state.pictureUrl}
//                   onChange={this.handlePictureUrlChange}
//                   placeholder="Picture URL"
//                   required
//                   type="url"
//                   name="picture_url"
//                   id="picture_url"
//                   className="form-control"
//                 />
//                 <label htmlFor="picture_url">Picture URL</label>
//               </div>
//               <div className="form-floating mb-3">
//                 <select
//                   value={this.state.manufacturer}
//                   onChange={this.handleManufacturerChange}
//                   required
//                   name="manufacturer"
//                   id="manufacturer"
//                   className="form-select"
//                 >
//                   <option value="">Choose a manufacturer</option>
//                   {this.state.manufacturers.map(manufacturer => (
//                     <option key={manufacturer.id} value={manufacturer.id}>
//                       {manufacturer.name}
//                     </option>
//                   ))}
//                 </select>
//                 <label htmlFor="manufacturer">Manufacturer</label>
//               </div>
//               <button className="btn btn-primary">Create</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ModelForm;
