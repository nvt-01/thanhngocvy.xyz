import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Work = ({ data }) => {
    const cate = data.categories.map((value, idx) => {
        return (
            <span className="d-inline" key={idx}>
                {value}
                {idx !== data.categories.length - 1 && " , "}
            </span>
        );
    });
    return (
        <div className="single-project-slide">
            <div className="thumb">
                <Link
                    to={process.env.PUBLIC_URL + "/project-detalis/1"}
                    className="image"
                >
                    <img
                        className="fit-image"
                        src={process.env.PUBLIC_URL + data.media.thumb}
                        alt="Product"
                    />
                </Link>
            </div>

            <div className="content">
                <h4 className="subtitle">{cate}</h4>
                <h3 className="title">
                    <Link to={process.env.PUBLIC_URL + "/project-detalis/1"}>
                        {data.title}
                    </Link>
                </h3>
            </div>
        </div>
    );
};

Work.propTypes = {
    data: PropTypes.object,
};

export default Work;
