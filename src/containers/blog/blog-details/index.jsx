import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BlogTag from "../../../components/blog/blog-tag";
import SocialIcon from "../../../components/social-icon";
import BlogData from "../../../data/blog.json";
import { slugify } from "../../../utils";
import BlogItem from "../../../components/blog/blog-item";
import Comment from "../../../components/comment";

const BlogDetailsContainer = ({ data }) => {
    const cate = data.categories.map((value, i) => {
        return (
            <Link
                to={process.env.PUBLIC_URL + `/category/${slugify(value)}`}
                key={i}
            >
                {value}
                {i !== data.categories.length - 1 && ","}
            </Link>
        );
    });
    return (
        <div className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12">
                        <div className="page-banner-title" data-aos="fade-up">
                            <h2 className="title">{data.title}</h2>
                            <ul className="meta">
                                <li>{cate}</li>
                                <li>
                                    <Link
                                        to={
                                            process.env.PUBLIC_URL +
                                            `/date/${slugify(data.date)}`
                                        }
                                    >
                                        {data.date}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={
                                            process.env.PUBLIC_URL +
                                            `/author/${slugify(data.author)}`
                                        }
                                    >
                                        {data.author}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="blog-details section-padding-02 mt-n2"
                data-aos="fade-up"
                data-aos-duration="600"
            >
                <img
                    src={`${process.env.PUBLIC_URL}/${data.media.largeImage}`}
                    alt=""
                />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="blog-details-content">
                            <div
                                className="blog-desc"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                {data.body.map((value, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="desc"
                                            dangerouslySetInnerHTML={{
                                                __html: value,
                                            }}
                                        />
                                    );
                                })}
                            </div>

                            <div
                                className="post-tags-share text-center"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <BlogTag data={BlogData} />
                                <div className="post-share">
                                    <h6 className="label">Share :</h6>
                                    <ul className="social">
                                        <li>
                                            <SocialIcon
                                                icon="icofont-facebook"
                                                path="https://www.facebook.com/"
                                            />
                                        </li>
                                        <li>
                                            <SocialIcon
                                                icon="icofont-twitter"
                                                path="https://twitter.com/"
                                            />
                                        </li>
                                        <li>
                                            <SocialIcon
                                                icon="icofont-pinterest"
                                                path="https://www.pinterest.com/"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="related-post" data-aos="fade-up">
                                <h3 className="blog-label">Related Posts</h3>

                                <div className="related-post-wrapper">
                                    <div className="row">
                                        {BlogData &&
                                            BlogData.slice(1, 3).map(
                                                (single, key) => {
                                                    return (
                                                        <BlogItem
                                                            data={single}
                                                            key={key}
                                                        />
                                                    );
                                                }
                                            )}
                                    </div>
                                </div>
                            </div>

                            <div className="comment-form">
                                <h3
                                    className="blog-label"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                >
                                    Leave A Comment
                                </h3>

                                <div
                                    className="comment-form-wrapper"
                                    data-aos="fade-up"
                                    data-aos-duration="900"
                                >
                                    <Comment
                                        url=""
                                        id={data.id}
                                        title={data.title}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default BlogDetailsContainer;
