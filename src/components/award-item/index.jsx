import PropTypes from "prop-types";

const AwardItem = ({ data }) => {
    return (
        <div className="achieved-item">
            <span className={`sub-title ${data.className}`}>{data.cate}</span>
            <h2
                className="title"
                dangerouslySetInnerHTML={{
                    __html: data.title,
                }}
            ></h2>
        </div>
    );
};

AwardItem.propTypes = {
    data: PropTypes.object,
};

export default AwardItem;
