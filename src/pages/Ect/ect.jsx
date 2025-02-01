import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../Ect/ect.css";
import ectImage from "../../assets/images/Ports/PortColomboHero.jpg";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

// Import Slider Images
import slider1 from "../../assets/images/services/terminal.jpg";
import slider2 from "../../assets/images/services/logistics.jpg";
import slider3 from "../../assets/images/services/facilities.jpg";

const EctPage = () => {
  const [isClient, setIsClient] = useState(false);

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
        <button className="btn btn-right">COLOMBO JCT </button>
      </div>

      <div className="content-section">
        <h2>Pictorial Diary of ECT</h2>
        <p>Construction of the terminal, which will be conducted in three phases, is scheduled to be completed in 2024.

The terminal, which is spread over an area of 75 hectares, is 1,320 meters long. Once completed, the Sri Lanka Ports Authority (SLPA) will inherit a fully-fledged terminal equipped with 12 STC cranes that handle operations from ships to the land and 40 Rail Mounted Gantry (RMG) Cranes.</p>
      </div>

      {isClient && (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            // date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">2023</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            
            {/* Swiper Slider inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={slider1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={slider2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={slider3} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">2022</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={slider1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={slider2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={slider3} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">2021</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={slider1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={slider2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={slider3} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            // date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">2020</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={slider1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={slider2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={slider3} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>

        </VerticalTimeline>
      )}
    </div>
  );
};

export default EctPage;