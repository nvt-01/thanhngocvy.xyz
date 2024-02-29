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
                                    A creative practitioner.
                                </p>
                                <p>
                                    Driven by a passion for design and
                                    creativity, I graduated with honors from the
                                    British University Vietnam (BUV) with a
                                    degree in Contemporary Creative Arts. I have
                                    4 years of experience in design across
                                    various fields.
                                </p>
                                <p>
                                    I manage nmy team effectively, researching
                                    and understanding the latest trends in the
                                    creative field. With a strong foundation in
                                    specialized knowledge of logo design, brand
                                    identity, and media design, along with
                                    proficient English skills and sound
                                    marketing - branding thinking, I know that
                                    the Creative team is the most effective in
                                    communicating a brand&apos;s uniqueness and
                                    prominence.
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
