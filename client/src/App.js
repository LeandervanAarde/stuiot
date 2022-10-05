
import './App.scss';
import { Route, Routes } from "react-router-dom";
import Home from './Routes/Home/Home.route';

function App() {
  return (
    <Routes>
    <Route path="/" index element={<Home/>} />
    </Routes>
  );
}

export default App;
