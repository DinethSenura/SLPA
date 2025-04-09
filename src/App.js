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
import Visionmission from './pages/About/Visionmission/visionmission';
import Boardofdirectors from './pages/About/Boardofdirectors/boardofdirectors';
import Act from './pages/About/Act/act';
import Procedures from './pages/About/Procedures/procedures';
import Circulars from './pages/About/Circulars/circulars';
import Awards from './pages/About/Awards/awards';
import Annualreports from './pages/About/Annualreports/annualreports';
import Tariff from './pages/About/Tariff/tariff';
import Righttoinformation from './pages/About/Righttoinformation/righttoinformation';
import Ministry from './pages/Contact/Ministry/Ministry';
import Mahapolaacademy from './pages/Contact/Mahapolaacademy/Mahapolaacadem';
import Helpdesk from './pages/Contact/Helpdesk/helpdesk';
import Isps from './pages/Contact/ISPS/Isps';

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
          <Route path="colombolocation" element={<ColomboLocation/>}/>
          <Route path="colomboabout" element={<ColomboAbout/>}/>
          <Route path="colomboterminals" element={<ColomboTerminals/>}/>
          <Route path="colombofacilities" element={<ColomboFacilities/>}/>
          <Route path="colombocargo" element={<ColomboCargo/>}/>
          <Route path="colomboentrance" element={<ColomboEntrance/>}/>
          <Route path="colombocompliance" element={<ColomboCompliance/>}/>
          <Route path="colombomahapola" element={<ColomboMahapola/>}/>
          <Route path="slpa" element={<Slpa />}/>
          <Route path="visionmission" element={<Visionmission />}/>
          <Route path="act" element={<Act />}/>
          <Route path="procedures" element={<Procedures />}/>
          <Route path="circulars" element={<Circulars />}/>
          <Route path="awards" element={<Awards />}/>
          <Route path="annualreports" element={<Annualreports />}/>
          <Route path="tariff" element={<Tariff />}/>
          <Route path="righttoinformation" element={<Righttoinformation />}/>
          <Route path="boardofdirectors" element={<Boardofdirectors />}/>
          <Route path="ministry" element={<Ministry />}/>
          <Route path="mahapolaacademy" element={<Mahapolaacademy />}/>
          <Route path="helpdesk" element={<Helpdesk />}/>
          <Route path="isps" element={<Isps />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
