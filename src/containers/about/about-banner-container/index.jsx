import React from "react";
import AboutBannerContent from "../../../components/about-banner-content";
import SocialIcon from "../../../components/social-icon";
import AboutData from "../../../data/about.json";

const AboutBannerContainer = () => {
    return (
        <div className="section about-banner-section overflow-hidden">
            <div className="about-banner d-flex align-items-center">
                <div className="container">
                    <AboutBannerContent data={AboutData[1]} />
                </div>

                <div className="about-banner-image">
                    <img src="/images/about-images-2.jpg" alt="andle" />
                </div>
            </div>

            <ul className="social">
                <li>
                    <SocialIcon
                        path="https://twitter.com/"
                        icon="fab fa-twitter"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.facebook.com/"
                        icon="fab fa-facebook-f"
                    />
                </li>
                <li>
                    <SocialIcon
                        path="https://www.behance.net/"
                        icon="fab fa-behance"
                    />
                </li>
            </ul>
        </div>
    );
};

export default AboutBannerContainer;
