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
        <div id="worked-on__cards">
            {
                projectsData.map((project, index) => 
					<ProjectCard key={index} {...project}>
					
                    </ProjectCard>
                )
            }
        </div>
    )
}

export default PrintProjects;