import { Link } from "react-router-dom";
import { slugify } from "../../../utils";
import PropTypes from "prop-types";

const BlogItem = ({ data, classOption }) => {
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
        <div className={`${data.className} ${classOption}`}>
            <div className="single-blog">
                <div className="blog-images">
                    <Link
                        to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/${data.media.thumb}`}
                            alt="Blog"
                        />
                    </Link>
                </div>
                <div className="blog-content">
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
                    <h3 className="title">
                        <Link
                            to={
                                process.env.PUBLIC_URL +
                                `/blog-details/${data.id}`
                            }
                        >
                            {data.title}
                        </Link>
                    </h3>
                    <p>{data.excerpt}</p>
                </div>
            </div>
        </div>
    );
};

BlogItem.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string,
};

export default BlogItem;
