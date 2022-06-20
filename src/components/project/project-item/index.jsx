import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectItem = ({ data }) => {
    const cate = data.categories.map((value, idx) => {
        return (
            <span className="d-inline" key={idx}>
                {value}
                {idx !== data.categories.length - 1 && " , "}
            </span>
        );
    });
    return (
        <div className="single-project">
            <div className="project-images">
                <Link
                    to={process.env.PUBLIC_URL + `/project-detalis/${data.id}`}
                >
                    <img
                        src={process.env.PUBLIC_URL + data.media.thumb}
                        alt="Project"
                    />
                </Link>
            </div>
            <div className="project-content">
                <h4 className="title">
                    <Link
                        to={
                            process.env.PUBLIC_URL +
                            `/project-detalis/${data.id}`
                        }
                    >
                        {data.title}
                    </Link>
                </h4>
                <p className="category">{cate}</p>
            </div>
        </div>
    );
};

ProjectItem.propTypes = {
    data: PropTypes.object,
};

export default ProjectItem;
