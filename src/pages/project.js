import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ProjectContainer from "../containers/project";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const ProjectPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Project" />
                <div className="main-wrapper">
                    <Header />
                    <ProjectContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default ProjectPage;
