import PropTypes from "prop-types";

const PricingBanner = ({ title, subtitle }) => {
    return (
        <div className="pricing-banner-content">
            <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <p>{subtitle}</p>
        </div>
    );
};

PricingBanner.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default PricingBanner;
