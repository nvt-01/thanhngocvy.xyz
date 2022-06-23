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

const BlogTag = ({
    match: {
        params: { slug },
    },
}) => {
    const data = BlogData.map((blog) => {
        return {
            ...blog,
            tags: blog.tags.filter((tag) => slugify(tag) === slug),
        };
    }).filter((blog) => blog.tags.length > 0);
    const title = data[0].tags[0];
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Thanh Ngoc Vy - Blog Tag" />
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

BlogTag.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string,
        }),
    }),
};

export default BlogTag;
