import React from "react";

import ProjectCard from "./ProjectCard";

interface IPrintProjectsProps {
    projectsData: { 
        image: string
		title: string
		short: string 
		link: string,
		content: JSX.Element,
		breathing?: string
    }[]
}

const PrintProjects = (props: IPrintProjectsProps) => {
    const { projectsData, toggleShowLightbox, changeLightboxContent } = props;

    return (
        <div className="m-4 grid md:grid-cols-projectsShowcase gap-4">
            {
                projectsData.map((project, index) => 
					<ProjectCard key={index} {...project} toggleShowLightbox={toggleShowLightbox} changeLightboxContent={changeLightboxContent} />
                )
            }
        </div>
    )
}

export default PrintProjects;