import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../Ect/ect.css";
import ectImage from "../../assets/images/Ports/PortColomboHero.jpg";

const EctPage = () => {
  const [timeline, setTimeline] = useState(null);

  useEffect(() => {
    axios.get("https://www.slpa.lk/Exchange/time_line.php")
      .then(response => {
        console.log("API Response:", response.data);
        const decodedDescription = atob(response.data.description);
        setTimeline({
          ...response.data,
          description: decodedDescription,
        });
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  if (!timeline) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="project-development-progress">
      {/* Hero Section */}
      <div className="hero-section">
        <img className="background-image" src={ectImage} alt="Project Background" />
        <div className="hero-content">
          <h1>PROJECT DEVELOPMENT PROGRESS</h1>
          <p>
            <span className="breadcrumb">HOME &gt; PROJECT &gt; DEVELOPMENT &gt; PROGRESS</span>
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="btn btn-left">COLOMBO ECT</button>
        <button className="btn btn-right">COLOMBO JCT</button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>Pictorial Diary of ECT</h2>
        <p>
          Construction of the terminal, which will be conducted in three phases, is scheduled to be completed in 2024. The terminal, which is spread over an area of 75 hectares, is 1,320 meters long. Once completed, the Sri Lanka Ports Authority (SLPA) will inherit a fully-fledged terminal equipped with 12 STC cranes that handle operations from ships to the land and 40 Rail Mounted Gantry (RMG) Cranes.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="timeline">
        <VerticalTimeline>
          {/* <p>{timeline.ID}</p>  */}
          {Array.isArray(timeline.properties) && timeline.properties.map((item, index) => (
            <VerticalTimelineElement key={index}>
              <h3>{item.date}</h3>
              <Swiper 
                modules={[Navigation, Pagination]} 
                navigation 
                pagination={{ clickable: true }} 
                loop
                className="timeline-swiper"
              >
                {item.images && item.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img 
                      src={img} 
                      alt={`Slide ${i}`} 
                      style={{ 
                        width: "100%", 
                        height: "300px",
                        objectFit: "cover", 
                        borderRadius: "10px" 
                      }} 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EctPage;
