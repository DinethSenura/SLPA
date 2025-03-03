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
import Ect from './pages/Ect/ect';
import Birthingprogram from './components/BirthingProgram/Birthingprogram';
import Berthingprogramme from './pages/Esystem/Esystempage/Berthingprogramme/berthingprogramme';
import Tms from './pages/Esystem/Esystempage/Tms/tms';
import Import from './pages/Esystem/Esystempage/Import/import';
import Export from './pages/Esystem/Esystempage/Export/export';
import Roro from './pages/Esystem/Esystempage/Ro-ro/ro-ro';
import Bulkbreakbulk from './pages/Esystem/Esystempage/Bulk&breakbulk/bulk&breakbulk';
import Fclcutoffinfo from './pages/Esystem/Esystempage/Fclcutoffinfo/fclcutoffinfo';
import Destuffinfo from './pages/Esystem/Esystempage/Destuffinfo/destuffinfo';
import Emptycontainers from './pages/Esystem/Esystempage/Emptycontainers/emptycontainers';
import Onlineentrypermits from './pages/Esystem/Esystempage/Onlineentrypermits/onlineentrypermits';
import Vesselsinport from './pages/Esystem/Esystempage/Vesselsinport/vesselsinport';
import Clearingpasses from './pages/Esystem/Esystempage/Clearingpasses/clearingpasses';
import Bungalowbooking from './pages/Esystem/Esystempage/Bungalowbooking/bungalowbooking';
import Hris from './pages/Esystem/Esystempage/Hris/hris';
import ColomboLocation from './pages/Ports/Colombo/ColomboLocation/colombolocation';
import ColomboAbout from './pages/Ports/Colombo/ColomboAbout/colomboabout';
import ColomboTerminals from './pages/Ports/Colombo/ColomboTerminals/colomboterminals';
import ColomboFacilities from './pages/Ports/Colombo/ColomboFacilities/colombofacilities';
import ColomboCargo from './pages/Ports/Colombo/ColomboCargo/colombocargo';
import ColomboEntrance from './pages/Ports/Colombo/ColomboEntrance/colomboentrance';
import ColomboCompliance from './pages/Ports/Colombo/ColomboCompliance/colombocompliance';
import ColomboMahapola from './pages/Ports/Colombo/ColomboMahapola/colombomahapola';
import Slpa from './pages/About/Slpa/slpa';

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
          <Route path="ect" element={<Ect />}/>
          <Route path="birthinprogram" element={<Birthingprogram />}/>
          <Route path="berthingprogramme" element={<Berthingprogramme />}/>
          <Route path="tms" element={<Tms />}/>
          <Route path="import" element={<Import />}/>
          <Route path="export" element={<Export />}/>
          <Route path="ro-ro" element={<Roro />}/>
          <Route path="bulk&breakbulk" element={<Bulkbreakbulk />}/>
          <Route path="fclcutoffinfo" element={<Fclcutoffinfo />}/>
          <Route path="destuffinfo" element={<Destuffinfo />}/>
          <Route path="emptycontainers" element={<Emptycontainers />}/>
          <Route path="onlineentrypermits" element={<Onlineentrypermits />}/>
          <Route path="vesselsinport" element={<Vesselsinport />}/>
          <Route path="clearingpasses" element={<Clearingpasses />}/>
          <Route path="bungalowbooking" element={<Bungalowbooking />}/>
          <Route path="hris" element={<Hris />}/>
<<<<<<< HEAD
=======
          <Route path="colombolocation" element={<ColomboLocation/>}/>
          <Route path="colomboabout" element={<ColomboAbout/>}/>
          <Route path="colomboterminals" element={<ColomboTerminals/>}/>
          <Route path="colombofacilities" element={<ColomboFacilities/>}/>
          <Route path="colombocargo" element={<ColomboCargo/>}/>
          <Route path="colomboentrance" element={<ColomboEntrance/>}/>
          <Route path="colombocompliance" element={<ColomboCompliance/>}/>
          <Route path="colombomahapola" element={<ColomboMahapola/>}/>
>>>>>>> 0e1394189dc4be64c6ff538ff100e6c8a0b9d661
          <Route path="slpa" element={<Slpa />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
