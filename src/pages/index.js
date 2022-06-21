import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutAward from "../containers/about/about-awards";
import HomeAbout from "../containers/home/about";
import SkillContainer from "../containers/global/skill";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Personal Portfolio React JS Template" />
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

export default HomePage;
