import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function fetchData() {
  try {
    const [manufacturersResponse, modelsResponse, automobilesResponse, techniciansResponse, appointmentsResponse, salespeopleResponse, customersResponse] = await Promise.all([
      fetch('http://localhost:8100/api/manufacturers/'),
      fetch('http://localhost:8100/api/models/'),
      fetch('http://localhost:8100/api/automobiles/'),
      fetch('http://localhost:8080/api/technicians/'),
      fetch('http://localhost:8080/api/appointments/'),
      fetch('http://localhost:8090/api/salespeople/'),
      fetch('http://localhost:8090/api/customers/'),
    ]);

    if (!manufacturersResponse.ok || !modelsResponse.ok || !automobilesResponse.ok || !techniciansResponse.ok || !appointmentsResponse.ok || !salespeopleResponse.ok || !customersResponse.ok) {
      throw new Error('Failed to fetch data');
    }

    const [manufacturersData, modelsData, automobilesData, techniciansData, appointmentsData, salespeopleData, customersData] = await Promise.all([
      manufacturersResponse.json(),
      modelsResponse.json(),
      automobilesResponse.json(),
      techniciansResponse.json(),
      appointmentsResponse.json(),
      salespeopleResponse.json(),
      customersResponse.json(),
    ]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App
          manufacturers={manufacturersData.manufacturers}
          models={modelsData.models}
          autos={automobilesData.autos}
          technicians={techniciansData.technicians}
          appointments={appointmentsData.appointments}
          salespeople={salespeopleData.salespeople}
          customers={customersData.customers}
        />
      </React.StrictMode>
    );
  } catch (error) {

  }
}

fetchData();
