import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import teams from '../../../data/teams';
import './style.css';

export function SwiperTeamsMobile() {
  return (
    <div className="mx-auto w-80">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        grabCursor={true}
        initialSlide={1}
        centeredSlides={true}
        speed={1500}
        slidesPerView={'1'}
        slideToClickedSlide={true}
        breakpoints={{
          320: {
            spaceBetween: 40
          },
          430: {
            spaceBetween: 50
          },
          580: {
            spaceBetween: 70
          },
          640: {
            spaceBetween: 30
          }
        }}
      >
        {teams.map((team, index) => (
          // eslint-disable-next-line tailwindcss/no-custom-classname
          <SwiperSlide key={index} className={`swiper-slide  slide-${index}`}>
            <div className="title">
              <h2>{team.name}</h2>
              <p className="text-xl font-bold">{team.role}</p>
            </div>
            <div className="content">
              <div className="text">
                <h3>{team.name}</h3>
                <p>{team.description}</p>
              </div>
              <div className="genre">
                <span style={{ '--i': 1 }}>speciality</span>
                <span style={{ '--i': 2 }}>speciality</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
