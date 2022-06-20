import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import FaqContainer from "../containers/global/faq";
import TestimonialContainer from "../containers/global/testimonial";
import PricingBannerContainer from "../containers/pricing/pricing-banner";
import PricingContainer from "../containers/pricing/pricing-plan";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const PricingPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Pricing" />
                <div className="main-wrapper">
                    <Header />
                    <PricingBannerContainer />
                    <PricingContainer />
                    <FaqContainer />
                    <TestimonialContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default PricingPage;
