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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/create">Create a manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">Vehicle models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/create">Create a model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/create">Create automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers">Customers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/add">Add customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales">Sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sales/add">Add a sale</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople">Salespeople list</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/add">Add salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salespeople/history">Salesperson history</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians">Technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/add/">Add technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/delete/">Delete technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments">Service Appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/create">Create Appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service-history">Service history</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
