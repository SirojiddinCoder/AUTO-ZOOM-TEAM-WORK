  import React, { useEffect, useState } from 'react';
  import './Brands.css';
  import LogoBrand from '../../assets/BRAND1.webp'

  import 'swiper/css';
  import 'swiper/css/grid';
  import 'swiper/css/pagination';

  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Grid, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
  

  const Brands = () => {
    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };
    handleChange
    const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz';
    const [brands, setBrands] = useState([]); 
    useEffect(() => {
      const fetchData = async () => {
        try {
          console.log('Fetching data from API...');
          const response = await fetch(`${base_URL}/api/brands`);
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();

          if (Array.isArray(data.data)) {
            setBrands(data.data); 
            console.log(data.data);
          } else {
            console.error('Unexpected data format:', data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);
    return (
      <div className='BrandWrapper'>
        <div className="container">
          <div className="Brands-Swipper-flex">
            <h2 className="brands-title">{t("BRANDS")}</h2>
            <Swiper
              slidesPerView={4}
              grid={{
                rows: 3,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  grid: {
                    rows: 1,
                  },
                },
                768: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                1024: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                  },
                },
              }}
            >
              {brands.length > 0 ? (
                brands.map((brand) => (
                  <SwiperSlide key={brand.id} className='swiper-slidebrand'>
                    <div className="box">
                      <img  className='brandsLogo'
                        src={`${base_URL}/api/uploads/images/${brand.image_src}`} 
                        // src={LogoBrand} 
                        alt={brand.title} 
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = 'https://via.placeholder.com/150'; 
                        }}
                      />
                        <h5>{brand.title}</h5>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide className='swiper-slidebrand'>
                  <div className="box">
                    <h5>No Brands Available</h5>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    );
  };

  export default Brands;
