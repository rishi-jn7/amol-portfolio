import { useParams } from "react-router-dom";
import { projects } from "../../data/data";
import Flipbook from "../../components/Flipbook/Flipbook";
import "./Project.css"

function Project() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <h1>Project not found</h1>;
    }

    return (
        <div className="project-page">
            <div className="project-title">{project.title}</div>

            {project.tags &&
                <div className="project-tags">
                    {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                    ))}
                </div>
            }

            {
                project.description &&
                <div className="project-description">{project.description}</div>
            }


            <Flipbook />
        </div>
    );
}

export default Project;