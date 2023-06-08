import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function fetchData() {
  try {
    const [manufacturersResponse, modelsResponse, automobilesResponse, customersResponse, salespeopleResponse, salesResponse, salespersonHistoryResponse] = await Promise.all([
      fetch('http://localhost:8100/api/manufacturers/'),
      fetch('http://localhost:8100/api/models/'),
      fetch('http://localhost:8100/api/automobiles/'),
      fetch('http://localhost:8090/api/customers/'),
      fetch('http://localhost:8090/api/sales/'),
      fetch('http://localhost:8090/api/salespeople/'),
      fetch('http://localhost:8090/api/salespersonHistory/'),


    ]);

    if (!manufacturersResponse.ok || !modelsResponse.ok || !automobilesResponse.ok || !customersResponse.ok || !salespeopleResponse.ok || !salesResponse.ok || !salespersonHistoryResponse) {
      throw new Error('Failed to fetch data');
    }

    const [manufacturersData, modelsData, automobilesData, customersData, salespersonsData, salesData, salespersonHistoryData] = await Promise.all([
      manufacturersResponse.json(),
      modelsResponse.json(),
      automobilesResponse.json(),
      customersResponse.json(),
      salespersonsResponse.json(),
      salesResponse.json(),
      salespersonHistoryResponse.json(),
    ]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App
          manufacturers={manufacturersData.manufacturers}
          models={modelsData.models}
          autos={automobilesData.autos}
          customers={customersData.customers}
          salespersons={salespersonsData.salespersons}
          sales={salesData.sales}
          salespersonHistory={salespersonHistoryData.salespersonHistoryData}
        />
      </React.StrictMode>
    );
  } catch (error) {
    console.error(error);
  }
}

fetchData();
