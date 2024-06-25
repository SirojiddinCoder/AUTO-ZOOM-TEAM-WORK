import styles from "../Cars/CarsComponent.module.css";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CarsComponent = () => {
    const [cars, setCars] = useState([]);

    const getCars = () => {
        fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/cars`)
            .then(res => res.json())
            .then(data => {
                setCars(data?.data || []);
            }).catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCars();
    }, []);
    const { t, i18n } = useTranslation();

    const handleChange = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
    };
    handleChange
    return (
        <div className={styles.carsContainer}>
            <div className={styles.budget}>
                <div className={styles.top}>
                    <h2 className={styles.title}>{t("BUDGET CARS RENTAL DUBAI")}</h2>
                    <Link to="/cars" className={styles.btnSee}>{t("SEE ALL")}<IoMdArrowDroprightCircle className={styles.icon} /></Link>
                </div>
                <Swiper
                    className={styles.swiper}
                    spaceBetween={40}
                    slidesPerView={3} // Default to 3 slides per view for desktop
                    breakpoints={{
                        // 768: {
                        //     slidesPerView: 2,
                        //     spaceBetween: 30,
                        // }
                    //     640: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //     },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {cars?.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.box}>
                                <a href="#">
                                    <div className={styles.swiperSlideChild}>
                                        <img
                                            className={styles.img}
                                            src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item?.car_images[0]?.image.src}`}
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <h3 className={styles.slide_car_title}>{item?.model?.name}</h3>
                                <div className={styles.line}></div>
                                <h4 className={styles.slide_car_price}>
                                    <span className={styles.slide_car_price_aed}>{item?.price_in_aed}</span>
                                    <span className={styles.slide_car_price_usd}> / $ {item?.price_in_usd}</span>
                                </h4>
                                <p className={styles.renta_type}>{t("per day")}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.sports}>
                <div className={styles.top}>
                    <h2 className={styles.title}>{t("SPORTS CARS RENTAL DUBAI")}</h2>
                    <a href="#" className={styles.btnSee}>{t("SEE ALL")} <IoMdArrowDroprightCircle className={styles.icon} /></a>
                </div>
                <Swiper
                    className={styles.swiper}
                    spaceBetween={40}
                    slidesPerView={3} // Default to 3 slides per view for desktop
                    // breakpoints={{
                    //     950: {
                    //         slidesPerView: 2,
                    //         spaceBetween: 30,
                    //     },
                    //     640: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //     },
                    // }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {cars?.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.box}>
                                <a href="#">
                                    <div className={styles.swiperSlideChild}>
                                        <img
                                            className={styles.img}
                                            src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item?.car_images[1]?.image.src}`}
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <h3 className={styles.slide_car_title}>{item?.model?.name}</h3>
                                <div className={styles.line}></div>
                                <h4 className={styles.slide_car_price}>
                                    <span className={styles.slide_car_price_aed}>{item?.price_in_aed}</span>
                                    <span className={styles.slide_car_price_usd}> / $ {item?.price_in_usd}</span>
                                </h4>
                                <p className={styles.renta_type}>{t("per day")}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.luxury}>
                <div className={styles.top}>
                    <h2 className={styles.title}>{t("LUXURY CARS RENTAL DUBAI")}</h2>
                    <a href="#" className={styles.btnSee}>{t("SEE ALL")} <IoMdArrowDroprightCircle className={styles.icon} /></a>
                </div>
                <Swiper
                    className={styles.swiper}
                    spaceBetween={40}
                    slidesPerView={3} // Default to 3 slides per view for desktop
                    // breakpoints={{
                    //     950: {
                    //         slidesPerView: 2,
                    //         spaceBetween: 30,
                    //     },
                    //     640: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //     },
                    // }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {cars?.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.box}>
                                <a href="#">
                                    <div className={styles.swiperSlideChild}>
                                        <img
                                            className={styles.img}
                                            src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item?.car_images[2]?.image.src}`}
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <h3 className={styles.slide_car_title}>{item?.model?.name}</h3>
                                <div className={styles.line}></div>
                                <h4 className={styles.slide_car_price}>
                                    <span className={styles.slide_car_price_aed}>{item?.price_in_aed}</span>
                                    <span className={styles.slide_car_price_usd}> / $ {item?.price_in_usd}</span>
                                </h4>
                                <p className={styles.renta_type}>{t("per day")}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.convertible}>
                <div className={styles.top}>
                    <h2 className={styles.title}>{t("CONVERTIBLE CARS RENTAL DUBAI")}</h2>
                    <a href="#" className={styles.btnSee}>{t("SEE ALL")} <IoMdArrowDroprightCircle className={styles.icon} /></a>
                </div>
                <Swiper
                    className={styles.swiper}
                    spaceBetween={40}
                    slidesPerView={3} // Default to 3 slides per view for desktop
                    // breakpoints={{
                    //     950: {
                    //         slidesPerView: 2,
                    //         spaceBetween: 30,
                    //     },
                    //     640: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //     },
                    // }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {cars?.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.box}>
                                <a href="#">
                                    <div className={styles.swiperSlideChild}>
                                        <img
                                            className={styles.img}
                                            src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item?.car_images[0]?.image.src}`}
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <h3 className={styles.slide_car_title}>{item?.model?.name}</h3>
                                <div className={styles.line}></div>
                                <h4 className={styles.slide_car_price}>
                                    <span className={styles.slide_car_price_aed}>{item?.price_in_aed}</span>
                                    <span className={styles.slide_car_price_usd}> / $ {item?.price_in_usd}</span>
                                </h4>
                                <p className={styles.renta_type}>{t("per day")}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.suv}>
                <div className={styles.top}>
                    <h2 className={styles.title}>{t("SUV RENTAL DUBAI")}</h2>
                    <a href="#" className={styles.btnSee}>{t("SEE ALL")} <IoMdArrowDroprightCircle className={styles.icon} /></a>
                </div>
                <Swiper
                    className={styles.swiper}
                    spaceBetween={40}
                    slidesPerView={3} // Default to 3 slides per view for desktop
                    // breakpoints={{
                    //     1400: {
                    //         slidesPerView: 3,
                    //     },
                    //     900: {
                    //         slidesPerView: 2,
                    //         // spaceBetween: 30,
                    //     },
                    // }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {cars?.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.box}>
                                <a href="#">
                                    <div className={styles.swiperSlideChild}>
                                        <img
                                            className={styles.img}
                                            src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item?.car_images[0]?.image.src}`}
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <h3 className={styles.slide_car_title}>{item?.model?.name}</h3>
                                <div className={styles.line}></div>
                                <h4 className={styles.slide_car_price}>
                                    <span className={styles.slide_car_price_aed}>{item?.price_in_aed}</span>
                                    <span className={styles.slide_car_price_usd}> / $ {item?.price_in_usd}</span>
                                </h4>
                                <p className={styles.renta_type}>{t("per day")}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.american}>
                <div className={styles.top}>
                    <h2 className={styles.title}>{t("AMERICAN BRANDS RENTAL DUBAI")}</h2>
                    <a href="#" className={styles.btnSee}>{t("SEE ALL")} <IoMdArrowDroprightCircle className={styles.icon} /></a>
                </div>
                <Swiper
                    className={styles.swiper}
                    spaceBetween={40}
                    slidesPerView={3} // Default to 3 slides per view for desktop
                    // breakpoints={{
                    //     950: {
                    //         slidesPerView: 2,
                    //         spaceBetween: 30,
                    //     },
                    //     640: {
                    //         slidesPerView: 1,
                    //         // spaceBetween: 20,
                    //     },
                    // }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {cars?.map((item, index) => (
                        <SwiperSlide key={index} className={styles.swiperSlide}>
                            <div className={styles.box}>
                                <a href="#">
                                    <div className={styles.swiperSlideChild}>
                                        <img
                                            className={styles.img}
                                            src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item?.car_images[0]?.image.src}`}
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <h3 className={styles.slide_car_title}>{item?.model?.name}</h3>
                                <div className={styles.line}></div>
                                <h4 className={styles.slide_car_price}>
                                    <span className={styles.slide_car_price_aed}>{item?.price_in_aed}</span>
                                    <span className={styles.slide_car_price_usd}> / $ {item?.price_in_usd}</span>
                                </h4>
                                <p className={styles.renta_type}>{t("per day")}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
