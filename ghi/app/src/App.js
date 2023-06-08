import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route index element={<ManufacturerList manufacturers={props.manufacturers} />} />
          <Route index element={<ModelList models={props.models} />} />
          <Route index element={<AutomobileList automobiles={props.automobiles} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
