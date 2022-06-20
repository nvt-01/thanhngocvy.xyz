import { Link } from "react-router-dom";
import PageTitle from "../../components/page-title";
import ProjectFilter from "../../components/project/project-filter";
import ProjectItem from "../../components/project/project-item";
import ProjectData from "../../data/project.json";
import useMasonry from "../../hooks/use-masonry";
import { slugify } from "../../utils";

const ProjectContainer = () => {
    const { categories } = useMasonry(
        ProjectData,
        ".project-list",
        ".masonry-grid",
        ".messonry-button",
        ".messonry-button li"
    );
    return (
        <div className="section section-padding-03">
            <div className="container">
                <PageTitle title="Latest Projects" />
                <div
                    className="messonry-button"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                >
                    <ProjectFilter categories={categories} />
                </div>
            </div>

            <div className="custom-container container-fluid">
                <div className="project-section mt-n4">
                    <div className="row grid project-list">
                        {ProjectData &&
                            ProjectData.map((project) => (
                                <div
                                    key={project.id}
                                    className={`col-xl-4 col-md-6 masonry-grid ${project.categories
                                        .map((cat) => slugify(cat))
                                        .join(" ")}`}
                                >
                                    <ProjectItem data={project} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectContainer;
