import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { flatDeep, slugify, containsObject } from "../../../utils";

const BlogTag = ({ data }) => {
    const tags = data.map((item) => {
        return item.tags;
    });
    let singleTagArray = flatDeep(tags);
    let allTags = [];
    singleTagArray.forEach((tag) => {
        const obj = {
            title: tag.trim(),
            slug: slugify(tag),
        };
        const objIndex = containsObject(obj, allTags);
        if (objIndex !== -1) {
            allTags[objIndex] = {
                title: tag.trim(),
                slug: slugify(tag),
            };
        } else {
            allTags.push(obj);
        }
    });
    console.log(allTags);
    return (
        <div className="post-tags">
            <h6 className="label">Tags :</h6>
            <ul className="tags">
                {allTags.map((single, i) => {
                    return (
                        <li key={i}>
                            <Link
                                to={
                                    process.env.PUBLIC_URL +
                                    `/tag/${single.slug}`
                                }
                            >
                                {single.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

BlogTag.propTypes = {
    data: PropTypes.array,
};

export default BlogTag;
