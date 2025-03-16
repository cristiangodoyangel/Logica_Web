import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function TechCarousel() {
  return (
    <section className="tech-carousel-container">
      <h2 className="tech-carousel-title">Tecnologías que usamos</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        className="swiper-container"
      >
        <SwiperSlide><img src="/tech/react_logo.svg" className="tech-icon" alt="React" /></SwiperSlide>
        <SwiperSlide><img src="/tech/nodejs.svg" className="tech-icon" alt="Node.js" /></SwiperSlide>
        <SwiperSlide><img src="/tech/java.svg" className="tech-icon" alt="Java" /></SwiperSlide>
        <SwiperSlide><img src="/tech/javascript.svg" className="tech-icon" alt="JavaScript" /></SwiperSlide>
        <SwiperSlide><img src="/tech/spring.svg" className="tech-icon" alt="Spring Boot" /></SwiperSlide>
        <SwiperSlide><img src="/tech/docker.svg" className="tech-icon" alt="Docker" /></SwiperSlide>
        <SwiperSlide><img src="/tech/mysql.svg" className="tech-icon" alt="MySQL" /></SwiperSlide>
        <SwiperSlide><img src="/tech/mongodb.svg" className="tech-icon" alt="MongoDB" /></SwiperSlide>
        <SwiperSlide><img src="/tech/bootstrap.svg" className="tech-icon" alt="Bootstrap" /></SwiperSlide>
        <SwiperSlide><img src="/tech/csharp.svg" className="tech-icon" alt="C#" /></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default TechCarousel;
