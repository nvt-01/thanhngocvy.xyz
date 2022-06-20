import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BlogContainer from "../containers/blog/blog-grid";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const BlogPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andle - Blog" />
                <div className="main-wrapper">
                    <Header />
                    <BlogContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default BlogPage;
