import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import Layout from "../layouts";
import Header from "../layouts/header";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Contact Us" />
                <div className="main-wrapper">
                    <Header />
                    <ContactContainer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
