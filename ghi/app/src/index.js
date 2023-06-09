import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function fetchData() {
  try {
    const [manufacturersResponse, modelsResponse, automobilesResponse, techniciansResponse, appointmentsResponse] = await Promise.all([
      fetch('http://localhost:8100/api/manufacturers/'),
      fetch('http://localhost:8100/api/models/'),
      fetch('http://localhost:8100/api/automobiles/'),
      fetch('http://localhost:8080/api/technicians/'),
      fetch('http://localhost:8080/api/appointments/'),
    ]);

    if (!manufacturersResponse.ok || !modelsResponse.ok || !automobilesResponse.ok || !techniciansResponse.ok || !appointmentsResponse.ok) {
      throw new Error('Failed to fetch data');
    }

    const [manufacturersData, modelsData, automobilesData, techniciansData, appointmentsData] = await Promise.all([
      manufacturersResponse.json(),
      modelsResponse.json(),
      automobilesResponse.json(),
      techniciansResponse.json(),
      appointmentsResponse.json(),
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
        />
      </React.StrictMode>
    );
  } catch (error) {
    console.error(error);
  }
}

fetchData();
