
import './ScssVariables/Variables.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SnacksIOT from './Routes/SnacksIOT/SnacksIOT.route';
import FanIOT from './Routes/FanIOT/FanIOT.route';
// import DrinksIOT from './Routes/DrinksIOT/DrinksIOT.route';
import DrinksIOT from './Routes/DrinksIOT/DrinksIOT';
import LightsIOT from './Routes/LightsIOT/LightsIOT.route';
import ProductivityIOT from './Routes/ProductivityIOT/ProductivityIOT.route';
import SignUp from './Routes/SignUp/SignUp.route';
import RightNavigation from './components/RightNavigation/RightNavigation.component';

import BubbleChart from './components/BubbleChart/BubbleChart';
import MainDashboardPage from './Routes/MainPage/MainPage';

function App() {
  return (
    <div className={"App"}>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<MainDashboardPage />} />
          {/* <Route path="/SignUp" index element={<SignUp />} />
          <Route path="/stusnacks" index element={<SnacksIOT />} />
          <Route path="/studrinks" index element={<DrinksIOT />} />
          <Route path="/stumaticfan" index element={<FanIOT />} />
          <Route path="/studiolights" index element={<LightsIOT />} />
          <Route path="/productivitytimer" index element={<ProductivityIOT />} />
          <Route path="/bubbles" index element={<BubbleChart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
