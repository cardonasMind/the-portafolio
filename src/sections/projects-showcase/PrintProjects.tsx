import React from "react";

import { IPrintProjectsProps } from "../../interfaces/sections/projects-showcase";

import ProjectCard from "./ProjectCard";

const PrintProjects = ({ projectsData, toggleShowLightbox, changeLightboxData }: IPrintProjectsProps) => {
    return (
        <div className="m-4 grid md:grid-cols-projectsShowcase gap-4">
            {
                projectsData.map((project, index) => {
					const id = index;
					const projectDataProps = {...project, id};
					
					console.log(projectDataProps);
					
					
					return <ProjectCard key={index} {...projectDataProps} toggleShowLightbox={toggleShowLightbox} changeLightboxData={changeLightboxData} />
				})
            }
        </div>
    )
}

export default PrintProjects;