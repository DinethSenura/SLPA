import React, { useEffect } from "react";
import "../Ect/ect.css";
import ect from "../../assets/images/Ports/PortColomboHero.jpg";
import intro1 from "../../assets/images/terminal.jpg"; // Import the images

const timelineData = [
  { year: "2023 - August", image: intro1 },
  { year: "2023 - June", image: intro1 },
  { year: "2023 - March", image: intro1 },
  { year: "2022", discovery: "Electromagnetic Induction", scientist: "Michael Faraday" },
  { year: "2022", discovery: "Dynamite", scientist: "Alfred Nobel" },
  { year: "2022", discovery: "X Rays", scientist: "Roentgen" },
  { year: "2021", discovery: "Electron", scientist: "J.J. Thomson" },
  { year: "2021", discovery: "Radium", scientist: "Madam Curie" },
  { year: "2021", discovery: "Quantum Theory", scientist: "Max Planck" },
  { year: "2020", discovery: "Principle of Relativity", scientist: "Albert Einstein" },
  { year: "2020", discovery: "Photoelectric Effect", scientist: "Albert Einstein" },
  { year: "2020", discovery: "Nuclear Reactor", scientist: "Enrico Fermi" },
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
                {event.image ? (
                  <div className="discovery">
                    <img src={event.image} alt={`Event in ${event.year}`} />
                  </div>
                ) : (
                  <div className="discovery">
                    <p>
                      {event.discovery} by {event.scientist}
                    </p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Ect1;
