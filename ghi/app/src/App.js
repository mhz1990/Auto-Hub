import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from "./ManufacturerList";
import ManufacturerForm from './ManufacturerForm';
import ModelList from "./ModelList";
import ModelForm from './ModelForm';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import TechnicianList from './TechnicianList';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import AppointmentList from './AppointmentList';
import TechnicianForm from './TechnicianForm';
import TechnicianDeleteForm from './TechnicianDeleteForm';
import SalespeopleList from './SalespeopleList';
import SalespeopleForm from './SalespeopleForm';
import SalesList from './SalesList';


function App(props) {
  const { manufacturers = [], models = [], autos = [], technicians = [], appointments = [], salespeople = [], customers = [], sales = [] } = props;

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" index element={<ManufacturerList manufacturers={manufacturers} />} />
          <Route path="/manufacturers/create/" element={<ManufacturerForm />} />
          <Route path="/models" index element={<ModelList models={models} />} />
          <Route path="/models/create/" element={<ModelForm />} />
          <Route path="/automobiles" index element={<AutomobileList automobiles={autos} />} />
          <Route path="/automobiles/create/" element={<AutomobileForm models={models} />} />
          <Route path="/customers" index element={<CustomerList customers={customers} />} />
          <Route path="/customers/create/" element={<CustomerForm />} />
          <Route path="/salespeople" index element={<SalespeopleList salespeople={salespeople} />} />
          <Route path="/salespeople/create" index element={<SalespeopleForm salespeople={salespeople} />} />
          <Route path="/technicians" index element={<TechnicianList technicians={technicians} />} />
          <Route path="/technicians/create/" element={<TechnicianForm />} />
          <Route path="/technicians/delete/" element={<TechnicianDeleteForm />} />
          <Route path="/appointments" index element={<AppointmentList appointments={appointments} />} />
          <Route path="/sales" index element={<SalesList sales={sales} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
