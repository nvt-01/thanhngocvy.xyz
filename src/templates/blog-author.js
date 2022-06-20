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

const BlogAuthor = ({
    match: {
        params: { author },
    },
}) => {
    const data = BlogData.filter((blog) => slugify(blog.author) === author);
    const title = data[0].author;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Blog Author" />
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

BlogAuthor.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            author: PropTypes.string,
        }),
    }),
};

export default BlogAuthor;
