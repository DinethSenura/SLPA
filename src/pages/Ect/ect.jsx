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

const IMAGE_API_URL = "https://www.slpa.lk/Exchange/time_line.php";

const EctPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [images, setImages] = useState([]);

  // Fetch images from API
  useEffect(() => {
    axios
      .get(IMAGE_API_URL)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  useEffect(() => {
    setIsClient(true);
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
        <p>
          Construction of the terminal, which will be conducted in three phases, is scheduled to be completed in 2024.
          The terminal, which is spread over an area of 75 hectares, is 1,320 meters long. Once completed, the Sri Lanka
          Ports Authority (SLPA) will inherit a fully-fledged terminal equipped with 12 STC cranes that handle operations
          from ships to the land and 40 Rail Mounted Gantry (RMG) Cranes.
        </p>
      </div>

      <div className="timeline">
        {isClient && (
          <VerticalTimeline>
            <VerticalTimelineElement className="vertical-timeline-element" contentStyle={{ background: "#fff", color: "#fff" }}>
              <h3 className="vertical-timeline-element-title">Project Timeline</h3>

              {/* Swiper Slider for API Images */}
              {images.length > 0 ? (
                <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} loop={true} className="timeline-swiper">
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img.image_url} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <p>Loading images...</p>
              )}
            </VerticalTimelineElement>
          </VerticalTimeline>
        )}
      </div>
    </div>
  );
};

export default EctPage;
