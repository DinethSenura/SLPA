import "../Ect/ect.css";
import ect from "../../assets/images/Ports/PortColomboHero.jpg";
//import ect1_1 from "../../assets/images/ect/ect 1.1.jpg"; // Import the images
//import ect2_1 from "../../assets/images/ect/ect 2.1.jpg"; // Import the images
//import ect3_1 from "../../assets/images/ect/ect 3.1.jpg"; // Import the images
//import ect4_1 from "../../assets/images/ect/ect 4.1.jpg"; // Import the images


const Ect1 = () => {

  return (
    <div className="project-development-progress">
      {/* Hero Section */}
      <div className="hero-section">
        <img className="background-image" src={ect} alt="Project Background" />
        <div className="hero-content">
          <h1>PROJECT DEVELOPMENT PROGRESS</h1>
          <p>
            <span className="breadcrumb">HOME</span> › PROJECT DEVELOPMENT
            PROGRESS
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="btn btn-left">COLOMBO ECT</button>
        <button className="btn btn-right">COLOMBO JCT STAGE V</button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>Pictorial Diary of ECT</h2>
        <p>
          Construction of the terminal, which will be conducted in three phases,
          is scheduled to be completed in 2024.
        </p>
        <p>
          The terminal, which is spread over an area of 75 hectares, is 1,320
          meters long. Once completed, the Sri Lanka Ports Authority (SLPA) will
          inherit a fully-fledged terminal equipped with 12 STC cranes that
          handle operations from ships to the land and 40 Rail Mounted Gantry
          (RMG) Cranes.
        </p>
      </div>
 
    </div>
  );
};

export default Ect1;