
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Routes/Home/Home.route';

import SnacksIOT from './Routes/SnacksIOT/SnacksIOT.route';
import FanIOT from './Routes/FanIOT/FanIOT.route';
import DrinksIOT from './Routes/DrinksIOT/DrinksIOT.route';
import LightsIOT from './Routes/LightsIOT/LightsIOT.route';
import ProductivityIOT from './Routes/ProductivityIOT/ProductivityIOT.route';


import NavigationPanel from './components/Navigation/Navigation.components';

function App() {
  return (
    <div className="App">

      <NavigationPanel />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/stusnacks" index element={<SnacksIOT />} />
          <Route path="/studrinks" index element={<DrinksIOT />} />
          <Route path="/stumaticfan" index element={<FanIOT />} />
          <Route path="/studiolights" index element={<LightsIOT />} />
          <Route path="/productivitytimer" index element={<ProductivityIOT />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
