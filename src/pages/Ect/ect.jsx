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

const API_URL = "https://www.slpa.lk/Exchange/time_line.php";

const EctPage = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    axios.get(API_URL)
      .then(response => {
        setTimelineData(response.data);
      })
      .catch(error => {
        console.error("Error fetching timeline data:", error);
      });
  }, []);

  return (
    <div className="project-development-progress">
      <div className="hero-section">
        <img className="background-image" src={ectImage} alt="Project Background" />
        <div className="hero-content">
          <h1>PROJECT DEVELOPMENT PROGRESS</h1>
          <p>
            <span className="breadcrumb">HOME &gt; PROJECT &gt; DEVELOPMENT &gt; PROGRESS</span>
          </p>
        </div>
      </div>

      <div className="navigation-buttons">
        <button className="btn btn-left">COLOMBO ECT</button>
        <button className="btn btn-right">COLOMBO JCT</button>
      </div>

      <div className="content-section">
        <h2>Pictorial Diary of ECT</h2>
        <p>Construction of the terminal, which will be conducted in three phases, is scheduled to be completed in 2024...</p>
      </div>
      
      <div className="timeline">
        {isClient && (
          <VerticalTimeline>
            {timelineData.map((item, index) => (
              <VerticalTimelineElement key={index} contentStyle={{ background: "#fff", color: "#000" }}>
                <h3 className="vertical-timeline-element-title">{item.year}</h3>
                <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop className="timeline-swiper">
                  {item.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img src={image} alt={`Slide ${imgIndex + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        )}
      </div>
    </div>
  );
};

export default EctPage;
