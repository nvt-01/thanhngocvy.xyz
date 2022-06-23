import PropTypes from "prop-types";
import SocialIcon from "../../components/social-icon";
import { Link } from "react-router-dom";
import ProjectForm from "../../components/project-form";

const ProjectDetailsContainer = ({ data }) => {
    return (
        <div className="section project-details-section">
            <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
            >
                <div className="details-images section-padding-01 mt-n2">
                    <img
                        src={`${process.env.PUBLIC_URL}/${data.gallery.imageThree}`}
                        alt="Project Details"
                    />
                </div>

                <div className="reservation-form-wrapper section-padding-02 section-padding-03">
                    <h3
                        className="title"
                        data-aos="fade-up"
                        data-aos-duration="600"
                    >
                        Let’s start work together
                    </h3>

                    <div
                        className="reservation-form"
                        data-aos="fade-up"
                        data-aos-duration="900"
                    >
                        <ProjectForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

ProjectDetailsContainer.propTypes = {
    data: PropTypes.object,
};

export default ProjectDetailsContainer;
