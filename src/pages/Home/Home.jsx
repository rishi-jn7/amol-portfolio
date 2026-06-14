import { categories } from "../../data/data";
import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Display } from "../../components/Display/Display";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("");
    // const [project, setProject] = useState(null);

    // const filteredProjects = selectedCategory
    //     ? projects.filter((project) => project.category === selectedCategory)
    //     : [];

    return (
        <>
            <div className="categories">
                {
                    categories.map((category, index) => (
                        <button key={index} className="btn category-btn" onClick={() => setSelectedCategory(category)}>
                            {category}
                        </button>
                    ))}
            </div>

            <Display selectedCategory={selectedCategory} />


        </>
    )
}