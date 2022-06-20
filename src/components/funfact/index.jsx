import PropTypes from "prop-types";
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Funfact = ({ data }) => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);

    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };
    return (
        <div className="counter-box">
            <div className="counter-count">
                <span className="count odometer">
                    <VisibilitySensor
                        onChange={onVisibilityChange}
                        offset={{ top: 10 }}
                        delayedCall
                    >
                        <CountUp end={didViewCountUp ? data.number : 0} />
                    </VisibilitySensor>
                </span>
            </div>
            <div className="counter-content">
                <p dangerouslySetInnerHTML={{ __html: data.title }}></p>
            </div>
        </div>
    );
};

Funfact.propTypes = {
    data: PropTypes.object,
};

export default Funfact;
