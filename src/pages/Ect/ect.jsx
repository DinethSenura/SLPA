import React from 'react'
import '../Ect/ect.css'
import ect from "../../../assets/images/Ports/PortColomboHero.jpg";

const ect = () => {
  return (
    <div className="project-development-progress">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          className="background-image"
          src={ect}
          alt="Project Background"
        />
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
      <div className="timeline-container">
        <h2>Project Milestones</h2>
        <Timeline position="alternate">
          {/* Timeline Item 1 */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h4>Eat</h4>
                <img
                  src={eatImage}
                  alt="Eating"
                  style={{ width: "100%", height: "auto", maxWidth: "200px" }}
                />
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Timeline Item 2 */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h4>Code</h4>
                <img
                  src={eatImage}
                  alt="Coding"
                  style={{ width: "100%", height: "auto", maxWidth: "200px" }}
                />
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Timeline Item 3 */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h4>Sleep</h4>
                <img
                  src={eatImage}
                  alt="Sleeping"
                  style={{ width: "100%", height: "auto", maxWidth: "200px" }}
                />
              </div>
            </TimelineContent>
          </TimelineItem>

          {/* Timeline Item 4 */}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h4>Repeat</h4>
                <img
                  src={eatImage}
                  alt="Repeating"
                  style={{ width: "100%", height: "auto", maxWidth: "200px" }}
                />
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}

export default ect
