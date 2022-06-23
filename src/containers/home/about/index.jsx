import { Autoplay } from "swiper";

const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section section-padding mt-n3 mb-n1">
                <div className="container">
                    <div
                        className="row justify-content-start"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-7">
                            <div className="about-content">
                                <h3 className="title">Thanh Ngoc Vy</h3>
                                <p className="about-text">
                                    A 21-year-old student at British University
                                    Vietnam.
                                </p>
                                <p>
                                    She is a creative practitioner, who likes to
                                    work with design and solve problems. She
                                    orients herself to be a designer specific in
                                    designing logos, branding, packaging,
                                    advertising, designing for campaigns, and so
                                    on…
                                </p>
                                <p>
                                    She is curious, fascinated by people and
                                    things, and always keeps herself busy. She
                                    cares about social issues like the
                                    environment or human rights.
                                </p>
                                <img
                                    className="signechar"
                                    src="./images/signechar.png"
                                    alt=""
                                />
                                <h6 className="name">Thanh Ngoc Vy</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
