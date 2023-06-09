import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-">
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" color="black" data-bs-toggle="dropdown" aria-expanded="false">
                Inventory
              </button>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/manufacturers"> Manufacturers </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/manufacturers/create/">Create a manufacturer</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/models">Vehicle models</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/models/create/">Create a model</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/automobiles/create">Create automobile</NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" color="white" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </button>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/customers">Customers</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/customers/create">Add customer</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales">Sales</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales/create">Add a sale</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales/history">Salesperson history</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/salespeople">Salespeople list</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/salespeople/create">Add salesperson</NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" color="white" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </button>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/technicians">Technicians</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/technicians/create">Add technician</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/technicians/delete/">Delete technician</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/appointments">Service Appointments</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/appointments/create">Create Appointment</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/service-history">Service history</NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
