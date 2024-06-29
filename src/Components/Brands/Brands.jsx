import React from 'react';
import './Brands.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// Import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

const Brands = () => {
  return (
    <div className='BrandWrapper'>
      <div className="container">
       
        <div className="Brands-Swipper-flex">
        <h2 className="brands-title">BRANDS</h2>
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slidebrand'>
              <div className="box"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brands;
