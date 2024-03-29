import React, { cloneElement } from "react";

import { IProjectCardProps } from "../../../interfaces/sections/projects-showcase"; 

const ProjectCard = ({ id, image, title, short, link, breathing, toggleShowLightbox, changeLightboxData }: IProjectCardProps) => {
	const handleLightboxButton = () => {
		changeLightboxData(id);
        toggleShowLightbox();
	}
	
	return (
		<div className="relative h-80vw md:h-40vw border border-black" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
			<div className="absolute inset-0 grid place-content-end justify-center text-center bg-gradient-to-b from-transparent to-black">
				{breathing && <div className="absolute top-0 ml-4 bg-white font-bold py-1 px-2" >v{breathing}</div>}
				
				<h2 className="text-2xl text-white font-bold">{title}</h2>
				<p className="text-white">{short}</p>
			
				<div className="flex gap-4 my-4 justify-center">
					<a href={link} target="_blank" className="border border-black bg-white hover:bg-gray-100 py-1 px-4 flex gap-2 items-center">
						<b>See it</b> <img src="/static/icons/external-link.svg" className="w-5" />
					</a>
					<button onClick={handleLightboxButton} className="border border-black bg-blue-200 hover:bg-blue-300 py-1 px-4 flex gap-2 items-center">
						<p>About it</p>
						<img src="/static/icons/enter.svg" className="w-4" />
					</button>
				</div>
			</div>
        </div>
	);
}

export default ProjectCard;