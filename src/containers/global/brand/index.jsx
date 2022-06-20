import { Swiper, SwiperSlide } from "swiper/react";
import Brand from "../../../components/brand";
import HomeData from "../../../data/home.json";

const BrandContainer = () => {
    const swiperOption = {
        slidesPerView: 5,
        loop: true,
        speed: 1000,
        spaceBetween: 40,
        autoplay: false,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },
    };
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="client-section">
                <div className="container">
                    <div
                        className="client-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <Swiper className="client-active" {...swiperOption}>
                            {HomeData[1].brand &&
                                HomeData[1].brand.map((single, key) => {
                                    return (
                                        <SwiperSlide key={key}>
                                            <Brand key={key} data={single} />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandContainer;
