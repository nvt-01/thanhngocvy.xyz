import React from "react";
import AwardItem from "../../../components/award-item";
import SectionTitle from "../../../components/section-title";
import AboutData from "../../../data/about.json";

const AboutAward = () => {
    return (
        <div className="section section-padding mt-n1 mb-n2">
            <div className="container">
                <SectionTitle
                    classOption="section-title-2"
                    title="award achieved"
                />

                <div className="achieved-year">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="year-text">
                                <p>{AboutData[0].yearOne}</p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {AboutData[0].awardItem &&
                                AboutData[0].awardItem
                                    .slice(0, 3)
                                    .map((single, key) => {
                                        return (
                                            <AwardItem
                                                key={key}
                                                data={single}
                                            />
                                        );
                                    })}
                        </div>
                    </div>
                </div>

                <div className="achieved-year">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="year-text">
                                <p>{AboutData[0].yearTwo}</p>
                            </div>
                        </div>
                        <div
                            className="col-lg-9"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            {AboutData[0].awardItem &&
                                AboutData[0].awardItem
                                    .slice(3, 5)
                                    .map((single, key) => {
                                        return (
                                            <AwardItem
                                                key={key}
                                                data={single}
                                            />
                                        );
                                    })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAward;
