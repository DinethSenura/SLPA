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
import GalleAbout from './pages/Ports/Galle/GalleAbout/galleabout';
import GalleLocation from './pages/Ports/Galle/GalleLocation/gallelocation';
import GalleCompliance from './pages/Ports/Galle/GalleCompliance/gallecompliane';
import TrincoAbout from './pages/Ports/Trincomalee/TrincoAbout/trincoabout';
import TrincoLocation from './pages/Ports/Trincomalee/TrincoLocation/trincolocation';
import TrincoCompliance from './pages/Ports/Trincomalee/TrincoCompliance/trincocompliane';
import TrincoTerminal from './pages/Ports/Trincomalee/TrincoTerminal/trincoterminal';
import Trinco from './pages/Ports/Trincomalee/trincomalee';
import HIP from './pages/Ports/HIP/hip';
import HIPAbout from './pages/Ports/HIP/HIPAbout/hipabout';
import HIPLocation from './pages/Ports/HIP/HIPLocation/hiplocation';
import Oluvil from './pages/Ports/Oluvil/oluvil';
import OluvilAbout from './pages/Ports/Oluvil/OluvilAbout/oluvilabout';
import OluvilLocation from './pages/Ports/Oluvil/OluvilLocation/oluvillocation';
import Kankasanthurai from './pages/Ports/Kankesanthurai/kankesanthurai';
import KankasanthuraiAbout from './pages/Ports/Kankesanthurai/KankasanthuraiAbout/kankasanthuraiabout';
import KankasanthuraiLocation from './pages/Ports/Kankesanthurai/KankasanthuraiLocation/kankasanthurailocation';
import KankasanthuraiCompliance from './pages/Ports/Kankesanthurai/KankasanthuraiCompliance/kankasanthuraicompliance';
import ChairmanDirectors from './pages/Contact/ChairmanDirectors/chairmananddirectors';
import ManagementTeam from './pages/Contact/ManagementTeam/managementteam';
import EducationalVisit from './pages/Contact/EducationalVisit/educationalvisit';
import GeneralInformation from './pages/Procurement/GeneralInformation/generalinformation';


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
          <Route path="gallelocation" element={<GalleLocation/>}/>
          <Route path="galleabout" element={<GalleAbout/>}/>
          <Route path="gallecompliane" element={<GalleCompliance/>}/>
          <Route path="trincolocation" element={<TrincoLocation/>}/>
          <Route path="trincoabout" element={<TrincoAbout/>}/>
          <Route path="trincocompliane" element={<TrincoCompliance/>}/>
          <Route path="trincoterminal" element={<TrincoTerminal/>}/>
          <Route path="trincomalee" element={<Trinco/>}/>
          <Route path="hiplocation" element={<HIPLocation/>}/>
          <Route path="hipabout" element={<HIPAbout/>}/>
          <Route path="hip" element={<HIP/>}/>
          <Route path="oluvillocation" element={<OluvilLocation/>}/>
          <Route path="oluvilabout" element={<OluvilAbout/>}/>
          <Route path="oluvil" element={<Oluvil/>}/>
          <Route path="kankesanthurai" element={<Kankasanthurai />}/>
          <Route path="kankasanthuraiabout" element={<KankasanthuraiAbout />}/>
          <Route path="kankasanthurailocation" element={<KankasanthuraiLocation />}/>
          <Route path="kankasanthuraicompliane" element={<KankasanthuraiCompliance />}/>
          <Route path="chairmananddirectors" element={<ChairmanDirectors />}/>
          <Route path="managementteam" element={<ManagementTeam />}/>
          <Route path="educationalvisit" element={<EducationalVisit />}/>
          <Route path="generalinformation" element={<GeneralInformation />}/>

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
