import PropTypes from "prop-types";
import React from "react";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import BlogData from "../data/blog.json";
import { slugify } from "../utils";
import BlogItemContainer from "../containers/blog/blog-item";
import PageTitleContainer from "../containers/global/page-title";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogCategory = ({
    match: {
        params: { slug },
    },
}) => {
    const data = BlogData.map((blog) => {
        return {
            ...blog,
            categories: blog.categories.filter((cat) => slugify(cat) === slug),
        };
    }).filter((blog) => blog.categories.length > 0);
    const title = data[0].categories[0];
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Blog Category" />
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

BlogCategory.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string,
        }),
    }),
};

export default BlogCategory;
