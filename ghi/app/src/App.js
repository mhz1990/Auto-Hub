import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturerList from "./ManufacturerList";
import ModelList from "./ModelList";
import AutomobileList from './AutomobileList';
import ManufacturerForm from './ManufacturerForm';
import ModelForm from './ModelForm';

function App(props) {
  const { manufacturers = [], models = [], autos = [] } = props;

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/manufacturers"
            index
            element={<ManufacturerList manufacturers={manufacturers} />}
          />
          <Route path="/models" index element={<ModelList models={models} />} />
          <Route
            path="/automobiles"
            index
            element={<AutomobileList automobiles={autos} />}
          />
          <Route path="/manufacturers/create" element={<ManufacturerForm />} />
          <Route path="/models/create" element={<ModelForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
