
import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Routes/Home/Home.route';
import NavigationPanel from './components/Navigation/Navigation.components';

function App() {
  return (
    <div className="App">

      <NavigationPanel />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
