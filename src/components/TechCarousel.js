import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const TechCarousel = () => {
  const technologies = [
    { name: 'React', icon: '/tech/react.svg' },
    { name: 'Node.js', icon: '/tech/nodejs.svg' },
    { name: 'MongoDB', icon: '/tech/mongodb.svg' },
    { name: 'Express', icon: '/tech/express.svg' },
    { name: 'Next.js', icon: '/tech/nextjs.svg' },
    { name: 'Vue.js', icon: '/tech/vuejs.svg' },
    { name: 'Bootstrap', icon: '/tech/bootstrap.svg' },
    { name: 'Tailwind', icon: '/tech/tailwind.svg' },
  ];

  return (
    <section className="tech-carousel-container">
      <h2 className="tech-carousel-title">Tecnologías que usamos</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
      >
        {technologies.map((tech, index) => (
          <SwiperSlide key={index}>
            <img
              src={tech.icon}
              alt={tech.name}
              className="tech-icon"
              title={tech.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TechCarousel;
