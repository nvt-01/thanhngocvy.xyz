import PropTypes from "prop-types";
import { slugify } from "../../../utils";

const BlogFilter = ({ categories }) => {
    return (
        <div className="filter-menu">
            <ul className="menu-list">
                <li data-filter="*" className="active">
                    all
                </li>
                {categories?.map((cat, idx) => (
                    <li key={idx} data-filter={`.${slugify(cat)}`}>
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

BlogFilter.propTypes = {
    categories: PropTypes.array,
};

export default BlogFilter;
