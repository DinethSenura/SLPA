import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./services.css";

import service_1 from "../../assets/images/terminal.jpg";
import service_2 from "../../assets/images/facilities.jpg";
import service_3 from "../../assets/images/logistics.jpg";

const Services = () => {
  const services = [
    {
      img: service_1,
      title: "Terminals",
      description: `The SLPA is fully equipped with state-of-the-art facilities 
                    in all its terminals for container handling operations.`,
    },
    {
      img: service_2,
      title: "Facilities",
      description: `The modern infrastructure facilities in SLPA-owned CFS 
                    support rising business transportation needs in Sri Lanka.`,
    },
    {
      img: service_3,
      title: "Logistics",
      description: `SLPA Terminals equipped with tomorrow's technology 
                    are geared for handling the rising demand in cargo transportation.`,
    },
    {
      img: service_1,
      title: "Terminals",
      description: `The SLPA is fully equipped with state-of-the-art facilities 
                    in all its terminals for container handling operations.`,
    },
    {
      img: service_2,
      title: "Facilities",
      description: `The modern infrastructure facilities in SLPA-owned CFS 
                    support rising business transportation needs in Sri Lanka.`,
    },
    // {
    //   img: service_3,
    //   title: "Logistics",
    //   description: `SLPA Terminals equipped with tomorrow's technology 
    //                 are geared for handling the rising demand in cargo transportation.`,
    // },
  ];

  return (
    <div className="services">
      <h2>Our Valued Services</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="services-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service">
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button>Read More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
