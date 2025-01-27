import React, { useEffect } from "react";
import "../Ect/ect.css";
import ect from "../../assets/images/Ports/PortColomboHero.jpg";
import ect1_1 from "../../assets/images/ect/ect 1.1.jpg"; // Import the images
import ect2_1 from "../../assets/images/ect/ect 2.1.jpg"; // Import the images
import ect3_1 from "../../assets/images/ect/ect 3.1.jpg"; // Import the images
import ect4_1 from "../../assets/images/ect/ect 4.1.jpg"; // Import the images


const timelineData = [
  { year: "2023 - August", image: ect1_1 },
  { year: "2023 - June", image: ect2_1 },
  { year: "2023 - March", image: ect3_1 },
  { year: "2022 - December", image: ect4_1 },
  { year: "2022 - August", image: ect1_1 },
  { year: "2022 - May", image: ect2_1 },
  { year: "2021 - November", image: ect3_1 },
  { year: "2021 - September", image: ect4_1 },
  { year: "2021 - April", image: ect1_1 },
  { year: "2020 - July", image: ect2_1 },
  { year: "2020 - March", image: ect3_1 },
  { year: "2020 - January", image: ect4_1 },
];

const Ect1 = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline li");

    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const callbackFunc = () => {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          if (!items[i].classList.contains("in-view")) {
            items[i].classList.add("in-view");
          }
        } else if (items[i].classList.contains("in-view")) {
          items[i].classList.remove("in-view");
        }
      }
    };

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("load", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

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

      {/* Timeline Section */}
      <section className="timeline">
        <ul>
          {timelineData.map((event, index) => (
            <li key={index}>
              <div>
                <time>{event.year}</time>
                
                  <div className="timeline_image">
                    <img src={event.image} alt={`Event in ${event.year}`} />
                  </div>
               
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Ect1;
