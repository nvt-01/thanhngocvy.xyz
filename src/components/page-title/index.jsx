import PropTypes from "prop-types";

const PageTitle = ({ title, subTitle }) => {
    return (
        <div className="page-banner-title" data-aos="fade-up">
            <h2 className="title">{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.array,
};

export default PageTitle;
