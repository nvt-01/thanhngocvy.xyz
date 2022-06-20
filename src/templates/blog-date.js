import PropTypes from "prop-types";
import React from "react";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import BlogData from "../data/blog.json";
import { slugify } from "../utils";
import PageTitleContainer from "../containers/global/page-title";
import BlogItemContainer from "../containers/blog/blog-item";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogDate = ({
    match: {
        params: { date },
    },
}) => {
    const data = BlogData.filter((blog) => slugify(blog.date) === date);
    const title = data[0].date;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Blog Date" />
                <div className="main-wrapper">
                    <Header />
                    <PageTitleContainer title={title} />
                    <BlogItemContainer data={data} />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

BlogDate.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            date: PropTypes.string,
        }),
    }),
};

export default BlogDate;
