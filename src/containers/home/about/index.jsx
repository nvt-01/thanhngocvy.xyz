const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section section-padding mt-n3 mb-n1">
                <div
                    className="about-images"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-images.png)`,
                    }}
                ></div>

                <div className="container">
                    <div
                        className="row justify-content-end"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h3 className="title">Andle Brewster</h3>
                                <p className="about-text">
                                    Founded in Lebanon in 1967, Archo
                                    Architecture Company (KCC) has grown to
                                    become one of the Middle East`s leading
                                    construction contractors.
                                </p>
                                <p>
                                    We specialise in complex and prestigious
                                    construction and infrastruc <br /> <br />{" "}
                                    ture projects. Our portfolio includes some
                                    of the region’s most iconic landmarks, from
                                    super high-rise luxury developments, to five
                                    star hotels, hospitals and intricately
                                    sophisticated smart buildings.{" "}
                                </p>
                                <p>
                                    We have compiled an extensive list of other
                                    area clinics and health resources, so that
                                    when someone calls
                                </p>
                                <img
                                    className="signechar"
                                    src="./images/signechar.png"
                                    alt=""
                                />
                                <h6 className="name">Daniel Jr</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
