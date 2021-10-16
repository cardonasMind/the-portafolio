import React from "react";

import { IPrintProjectsProps } from "../../interfaces/sections/projects-showcase";

import ProjectCard from "./ProjectCard";

const PrintProjects = (props: IPrintProjectsProps) => {
    const { projectsData, toggleShowLightbox, changeLightboxData } = props;

    return (
        <div className="m-4 grid md:grid-cols-projectsShowcase gap-4">
            {
                projectsData.map((project, index) => 
					<ProjectCard key={index} id={index} {...project} toggleShowLightbox={toggleShowLightbox} changeLightboxData={changeLightboxData} />
                )
            }
        </div>
    )
}

export default PrintProjects;