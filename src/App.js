
import './css/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './core-pages/Home';
import Menu from './core-pages/Menu';
import OurCoffee from './core-pages/OurCoffee';
import AboutUs from './core-pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/coffee" element={<OurCoffee/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
