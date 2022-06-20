import PropTypes from "prop-types";
import React from "react";
import PageTitleContainer from "../containers/global/page-title";
import ProjectDetailsContainer from "../containers/project-details";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import ProjectData from "../data/project.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const ProjectDetails = ({
    match: {
        params: { id },
    },
}) => {
    const projectId = parseInt(id, 10);
    const data = ProjectData.filter((project) => project.id === projectId);
    const title = data[0].title;
    const cate = data[0].categories.map((value, idx) => {
        return (
            <span className="d-inline" key={idx}>
                {value}
                {idx !== data[0].categories.length - 1 && " , "}
            </span>
        );
    });
    console.log(cate);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Project Details" />
                <div className="main-wrapper">
                    <Header />
                    <PageTitleContainer title={title} subTitle={cate} />
                    <ProjectDetailsContainer data={data[0]} />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

ProjectDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default ProjectDetails;
