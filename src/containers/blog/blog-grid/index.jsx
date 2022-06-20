import React from "react";
import { Link } from "react-router-dom";
import BlogData from "../../../data/blog.json";
import PageTitle from "../../../components/page-title";
import BlogFilter from "../../../components/blog/blog-filter";
import BlogItem from "../../../components/blog/blog-item";
import { slugify } from "../../../utils";
import useMasonry from "../../../hooks/use-masonry";

const BlogContainer = () => {
    const { categories } = useMasonry(
        BlogData,
        ".blog-list",
        ".masonry-grid",
        ".messonry-button",
        ".messonry-button li"
    );
    return (
        <div className="section section-padding-03">
            <div className="container">
                <PageTitle title="Time to write, share &amp; discuss" />

                <div
                    className="messonry-button"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    <BlogFilter categories={categories} />
                </div>
            </div>

            <div className="container">
                <div className="blog-section mt-n4">
                    <div className="row grid blog-list gx-10">
                        {BlogData &&
                            BlogData.map((project) => (
                                <BlogItem
                                    classOption={`masonry-grid ${project.categories
                                        .map((cat) => slugify(cat))
                                        .join(" ")}`}
                                    key={project.id}
                                    data={project}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogContainer;
