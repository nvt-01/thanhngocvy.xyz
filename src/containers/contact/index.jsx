import ContactForm from "../../components/contact-form";

const ContactContainer = () => {
    return (
        <div className="section contact-section bg-dark">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-12">
                        <div className="contact-section-wrapper">
                            <div className="contact-info" data-aos="fade-up">
                                <span className="mail">
                                    <a href="mailto:hello@thanhngocvy.xyz">
                                        hello@thanhngocvy.xyz
                                    </a>
                                </span>
                                <span className="number">
                                    <a href="tel:(+84) 936 193 048">
                                        (+84) 936 193 048
                                    </a>
                                </span>
                            </div>

                            <div
                                className="contact-form"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                <ContactForm />
                            </div>

                            <div
                                className="contact-social"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                <ul>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="behance"
                                            href="https://www.facebook.com/ngocvy.thanh"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="behance"
                                            href="https://www.behance.net/ngcvythnh"
                                        >
                                            Behance
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;
