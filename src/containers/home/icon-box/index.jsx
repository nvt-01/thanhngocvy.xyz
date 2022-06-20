import React from "react";
import IconBox from "../../../components/icon-box";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";

const IconBoxContainer = () => {
    return (
        <div className="section section-padding-02">
            <div className="container">
                <div className="why-choose-section mt-n3">
                    <SectionTitle title="why choose me" />

                    <div
                        className="why-choose-wrapper"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gx-0">
                            {HomeData[2].iconBox &&
                                HomeData[2].iconBox.map((single, key) => {
                                    return (
                                        <div key={key} className="col">
                                            <IconBox key={key} data={single} />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconBoxContainer;
