import PropTypes from "prop-types";
import React from "react";
import BlogItem from "../../../components/blog/blog-item";

const BlogItemContainer = ({ data }) => {
    console.log(data);
    return (
        <div className="section section-padding-03">
            <div className="container">
                <div className="blog-section mt-n4">
                    <div className="row grid blog-list gx-10">
                        {data &&
                            data.map((single) => (
                                <BlogItem key={single.id} data={single} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogItemContainer.propTypes = {
    data: PropTypes.array,
};

export default BlogItemContainer;
