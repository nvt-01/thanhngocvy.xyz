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
                                    <span className="title">Branding</span>

                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <Progress
                                                barClassName="bar progress-line"
                                                value="80"
                                            >
                                                <div className="skill-percentage">
                                                    <div className="count-box">
                                                        <span className="count-text">
                                                            80%
                                                        </span>
                                                    </div>
                                                </div>
                                            </Progress>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-skills-bar">
                                    <span className="title">
                                        Marketing Design
                                    </span>

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
                                    <span className="title">UX/UI Design</span>

                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <Progress
                                                barClassName="bar progress-line"
                                                value="50"
                                            >
                                                <div className="skill-percentage">
                                                    <div className="count-box">
                                                        <span className="count-text">
                                                            50%
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
