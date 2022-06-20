import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useHover from "../../hooks/use-hover";

const IconBox = ({ data }) => {
    const [hoverRef, isHovered] = useHover();

    return (
        <div
            ref={hoverRef}
            className={`service-box ${isHovered ? "active" : " "}`}
        >
            <div className="box-content">
                <h4 className="title">
                    <Link to="/">{data.title}</Link>
                </h4>
                <p>{data.excerpt}</p>
            </div>
            <div className="box-icon">
                <i className={data.icon}></i>
                <Link to={process.env.PUBLIC_URL + "/about"} className="more">
                    More
                </Link>
            </div>
        </div>
    );
};

IconBox.propTypes = {
    data: PropTypes.object,
};

export default IconBox;
