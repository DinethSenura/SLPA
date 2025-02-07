import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../Ect/ect.css";
import ectImage from "../../assets/images/Ports/PortColomboHero.jpg";

// Import Slider Images
import ect2023_1 from "../../assets/images/ect/ect 1.1.jpg";
import ect2023_2 from "../../assets/images/ect/ect 1.2.jpg";
import ect2023_3 from "../../assets/images/ect/ect 1.3.jpg";
import ect2023_4 from "../../assets/images/ect/ect 1.4.jpg";
import ect2023_5 from "../../assets/images/ect/ect 1.5.jpg";
import ect2023_6 from "../../assets/images/ect/ect 2.1.jpg";
import ect2023_7 from "../../assets/images/ect/ect 2.2.jpg";
import ect2023_8 from "../../assets/images/ect/ect 2.3.jpg";
import ect2023_9 from "../../assets/images/ect/ect 2.4.jpg";
import ect2023_10 from "../../assets/images/ect/ect 2.5.jpg";
import ect2023_11 from "../../assets/images/ect/ect 3.1.jpg";
import ect2023_12 from "../../assets/images/ect/ect 3.2.jpg";
import ect2023_13 from "../../assets/images/ect/ect 3.3.jpg";
import ect2023_14 from "../../assets/images/ect/ect 3.4.jpg";
import ect2023_15 from "../../assets/images/ect/ect 3.5.jpg";
import ect2023_16 from "../../assets/images/ect/ect 4.1.jpg";
import ect2023_17 from "../../assets/images/ect/ect 4.2.jpg";
import ect2023_18 from "../../assets/images/ect/ect 4.3.jpg";
import ect2023_19 from "../../assets/images/ect/ect 4.4.jpg";
import ect2023_20 from "../../assets/images/ect/ect 4.5.jpg";


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
        <p>Construction of the terminal, which will be conducted in three phases, is scheduled to be completed in 2024. The terminal, which is spread over an area of 75 hectares, is 1,320 meters long. Once completed, the Sri Lanka Ports Authority (SLPA) will inherit a fully-fledged terminal equipped with 12 STC cranes that handle operations from ships to the land and 40 Rail Mounted Gantry (RMG) Cranes.</p>
      </div>
      <div className="timeline">
      {isClient && (
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#221F45", color: "#fff" }}
            // contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            // date="2011 - present"
            // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={<img src={AnchorIcon} alt="Anchor Icon" width="60" height="60" style={{ borderRadius: "50%" }} /> }
            // icon={<AnchorIcon />}
          >
            <h3 className="vertical-timeline-element-title">2023</h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            
            {/* Swiper Slider inside Timeline */}
            <Swiper
              // modules={[Navigation, Pagination, Autoplay]}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              // autoplay={{ delay: 3000 }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={ect2023_1} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_2} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_3} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_4} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_5} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#221F45", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">2022</h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={ect2023_6} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_7} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_8} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_9} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_10} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-elemen"
            contentStyle={{ background: "#221F45", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">2021</h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={ect2023_11} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_12} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_13} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_14} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_15} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#221F45", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">2020</h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={ect2023_16} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_17} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_18} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_19} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_20} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#221F45", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">2020</h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={ect2023_16} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_17} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_18} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_19} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_20} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#221F45", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">2020</h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={ect2023_16} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_17} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_18} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_19} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_20} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>



          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#221F45", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">2020</h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={ect2023_16} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_17} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_18} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_19} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_20} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: "#221F45", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">2020</h3>
            {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
            
            {/* Another Swiper inside Timeline */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="timeline-swiper"
            >
              <SwiperSlide><img src={ect2023_16} alt="Slide 1" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_17} alt="Slide 2" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_18} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_19} alt="Slide 3" /></SwiperSlide>
              <SwiperSlide><img src={ect2023_20} alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </VerticalTimelineElement>

        </VerticalTimeline>
      )}
      </div>
    </div>
  );
};

export default EctPage;