import "./Display.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/data";
import About from "./About";


export function Display({ selectedCategory }) {
    if (selectedCategory === "") {
        return (
            <div className="display justify-content-center">
                <div>Please select a category to view projects.</div>
            </div>
        );
    }

    if (selectedCategory === "Experience") return <div className="display"><About/></div>;

    const [project, setProject] = useState(null);

    const filteredProjects = selectedCategory
        ? projects.filter((project) => project.category === selectedCategory)
        : [];

    return (
        <div className="display">
            <div className="project-list">
                {filteredProjects.map((project, index) => (
                    <button
                        key={index}
                        className="project-btn"
                        onClick={() => setProject(project)}
                    // onClick={() => handleProjectClick(project)}
                    // onMouseEnter={() => setProject(project)}
                    // onMouseLeave={() => setProject(null)}
                    >
                        {project.title}
                    </button>
                ))}
            </div>

            <div className="thumbnail-container" key={project ? project.title : ""}>
                {project && (
                    <Link to={`/projects/${project.slug}`}>
                        <img className="thumbnail" src={project.thumbnail} alt={project.title} />
                    </Link>
                )}
            </div>
        </div>
    )
}