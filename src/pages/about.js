import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutAward from "../containers/about/about-awards";
import SkillContainer from "../containers/global/skill";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import HomeAbout from "../containers/home/about";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Thanh Ngoc Vy - About" />
                <div className="main-wrapper">
                    <Header />
                    <HomeAbout />
                    <AboutAward />
                    <SkillContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
