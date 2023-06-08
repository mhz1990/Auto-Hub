import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function fetchData() {
  try {
    const [manufacturersResponse, modelsResponse, automobilesResponse] = await Promise.all([
      fetch('http://localhost:8100/api/manufacturers/'),
      fetch('http://localhost:8100/api/models/'),
      fetch('http://localhost:8100/api/automobiles/'),
    ]);

    if (!manufacturersResponse.ok || !modelsResponse.ok || !automobilesResponse.ok) {
      throw new Error('Failed to fetch data');
    }

    const [manufacturersData, modelsData, automobilesData] = await Promise.all([
      manufacturersResponse.json(),
      modelsResponse.json(),
      automobilesResponse.json(),
    ]);

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App
          manufacturers={manufacturersData.manufacturers}
          models={modelsData.models}
          automobiles={automobilesData.automobiles}
        />
      </React.StrictMode>
    );
  } catch (error) {
    console.error(error);
  }
}

fetchData();
