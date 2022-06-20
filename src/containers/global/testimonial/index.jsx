import React from "react";
import SectionTitle from "../../../components/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import HomeData from "../../../data/home.json";
import Testimonial from "../../../components/testimonial";

SwiperCore.use([Navigation]);
const TestimonialContainer = () => {
    const swiperOption = {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
        navigation: {
            nextEl: ".testimonial-carousel .swiper-button-next",
            prevEl: ".testimonial-carousel .swiper-button-prev",
        },
    };
    return (
        <div className="section">
            <div className="container">
                <div className="testimonial-wrapper section-padding">
                    <SectionTitle
                        classOption="section-title-2"
                        title="Testimonial"
                    />
                    <div
                        className="testimonial-carousel"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <Swiper {...swiperOption}>
                            {HomeData[4].testimonial &&
                                HomeData[4].testimonial.map((single, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Testimonial
                                                key={i}
                                                data={single}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                        <div className="swiper-button-prev">
                            <i className="icofont-thin-left"></i>
                        </div>
                        <div className="swiper-button-next">
                            <i className="icofont-thin-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialContainer;
