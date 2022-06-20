import PropTypes from "prop-types";

const SectionTitle = ({ title, classOption }) => {
    return (
        <div className={`section-title ${classOption}`} data-aos="fade-up">
            <h2 className="title">{title}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string,
    classOption: PropTypes.string,
};

SectionTitle.defaultProps = {
    classOption: "section-title",
};

export default SectionTitle;
