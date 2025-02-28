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
          title: response.data.title, // Adding title from API
          description: decodedDescription, // Decoded description
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
          <h1>{timeline.title}</h1> {/* API title */}
          <p>
            <span className="breadcrumb">HOME &gt; PROJECT &gt; DEVELOPMENT &gt; PROGRESS</span>
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button className="btn btn-left">COLOMBO ECTTT</button>
        <button className="btn btn-right">COLOMBO JCT</button>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>{timeline.title}</h2> {/* API title */}
        {timeline.description}
      </div>

      {/* Timeline Section */}
      <div className="timeline">
        <VerticalTimeline>
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
