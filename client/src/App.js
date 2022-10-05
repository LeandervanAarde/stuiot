
import { Route, Routes } from "react-router-dom";
import RightNavigation from "./Components/RightNavigation/RightNavigation.component";
import Home from './Routes/Home/Home.route';
import "./ScssVariables/Variables.scss"

function App() {
  return (
    <div className={"App"}>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
