import PropTypes from "prop-types";
import { slugify } from "../../../utils";

const ProjectFilter = ({ categories }) => {
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

ProjectFilter.propTypes = {
    categories: PropTypes.array,
};

export default ProjectFilter;
