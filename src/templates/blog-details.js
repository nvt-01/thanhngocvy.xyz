import PropTypes from "prop-types";
import React from "react";
import BlogDetailsContainer from "../containers/blog/blog-details";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogDetails = ({
    match: {
        params: { id },
    },
}) => {
    const blogId = parseInt(id, 10);
    const data = BlogData.filter((blog) => blog.id === blogId);
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Blog Details" />
                <div className="main-wrapper">
                    <Header />
                    <BlogDetailsContainer data={data[0]} />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

BlogDetails.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default BlogDetails;
