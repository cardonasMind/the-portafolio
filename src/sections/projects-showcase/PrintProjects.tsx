import React from "react";

import ProjectCard from "./ProjectCard";

interface IPrintProjectsProps {
    projectsData: { 
        image: string
		title: string
		short: string 
		link: string 
    }[]
}

const PrintProjects = (props: IPrintProjectsProps) => {
    const { projectsData } = props;

    return (
        <div className="m-4 grid grid-cols-2 gap-4">
            {
                projectsData.map((project, index) => 
					<ProjectCard key={index} {...project} />
                )
            }
        </div>
    )
}

export default PrintProjects;