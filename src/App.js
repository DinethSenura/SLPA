import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/about';
import Ports from './pages/Ports/ports';
import Projects from './pages/Projects/projects';
import Procurement from './pages/Procurement/procurement';
import Contact from './pages/Contact/contact';
import Esystem from './pages/Esystem/esystem';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import Banner from './components/Banner/Banner';
import Colombo from './pages/Ports/Colombo/colombo';
import Galle from './pages/Ports/Galle/galle';


function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />
      {/* Show Banner only on the Home page */}
      {location.pathname === '/' && <Banner />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ports" element={<Ports />} />
          <Route path="projects" element={<Projects />} />
          <Route path="procurement" element={<Procurement />} />
          <Route path="contact" element={<Contact />} />
          <Route path="esystem" element={<Esystem />} />
          <Route path="colombo" element={<Colombo />}/>
          <Route path="galle" element={<Galle />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
