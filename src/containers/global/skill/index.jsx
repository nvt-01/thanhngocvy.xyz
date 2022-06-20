import { Progress } from "reactstrap";

const SkillContainer = () => {
    return (
        <div className="section">
            <div className="container">
                <div
                    className="skills-wrapper section-padding wow fadeInUp"
                    data-wow-delay="0.3s"
                    data-wow-duration="1.5s"
                >
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="section-title-2">
                                <h2 className="title">Skills</h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div
                                className="skill-bar-wrapper"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div className="single-skills-bar">
                                    <span className="title">Web Design</span>

                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <Progress
                                                barClassName="bar progress-line"
                                                value="90"
                                            >
                                                <div className="skill-percentage">
                                                    <div className="count-box">
                                                        <span className="count-text">
                                                            90%
                                                        </span>
                                                    </div>
                                                </div>
                                            </Progress>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-skills-bar">
                                    <span className="title">branding</span>

                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <Progress
                                                barClassName="bar progress-line"
                                                value="70"
                                            >
                                                <div className="skill-percentage">
                                                    <div className="count-box">
                                                        <span className="count-text">
                                                            70%
                                                        </span>
                                                    </div>
                                                </div>
                                            </Progress>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-skills-bar">
                                    <span className="title">
                                        animation / motion
                                    </span>

                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <Progress
                                                barClassName="bar progress-line"
                                                value="85"
                                            >
                                                <div className="skill-percentage">
                                                    <div className="count-box">
                                                        <span className="count-text">
                                                            85%
                                                        </span>
                                                    </div>
                                                </div>
                                            </Progress>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillContainer;
