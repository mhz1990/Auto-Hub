import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function fetchData() {
  try {
    const [manufacturersResponse, modelsResponse, automobilesResponse, techniciansResponse, salespeopleResponse, customersResponse] = await Promise.all([
      fetch('http://localhost:8100/api/manufacturers/'),
      fetch('http://localhost:8100/api/models/'),
      fetch('http://localhost:8100/api/automobiles/'),
      fetch('http://localhost:8080/api/technicians/'),
      fetch('http://localhost:8090/api/salespeople/'),
      fetch('http://localhost:8090/api/customers/'),



    ]);

    if (!manufacturersResponse.ok || !modelsResponse.ok || !automobilesResponse.ok || !techniciansResponse.ok || !salespeopleResponse.ok || !customersResponse.ok) {
      throw new Error('Failed to fetch data');
    }

    const [manufacturersData, modelsData, automobilesData, techniciansData, salespeopleData, customersData] = await Promise.all([
      manufacturersResponse.json(),
      modelsResponse.json(),
      automobilesResponse.json(),
      techniciansResponse.json(),
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
          salespeople={salespeopleData.salespeople}
          customers={customersData.customers}
        />
      </React.StrictMode>
    );
  } catch (error) {
    // console.error(error);
  }
}

fetchData();
