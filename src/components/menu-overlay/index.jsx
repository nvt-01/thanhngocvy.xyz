import PropTypes from "prop-types";

const MenuOverlay = ({ show }) => {
    return <div className={`overlay ${show ? "open" : ""}`}></div>;
};

MenuOverlay.propTypes = {
    show: PropTypes.bool,
};

export default MenuOverlay;
