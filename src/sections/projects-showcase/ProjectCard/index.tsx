import React from "react";

interface IProjectCardProps {
	image: string
	title: string
	short: string 
	link: string 
}

const ProjectCard = ({ image, title, short, link }: IProjectCardProps) => {
	return (
		<div className="h-80 border border-black" style={{ backgroundImage: `url(${image})` }}>
            <h2>{title}</h2>
            <p>{short}</p>
        </div>
	);
}

export default ProjectCard;



/*function WorkCard({ changeLightboxContent, toggleShowLightbox, image, title, short, link, children }) {
    return (
        <div className="worked-on__buttons">
                <a className="see-it__button" href={link} target="_blank">
                    <b>See it</b> <img src="/static/icons/external-link.svg" />
                </a>
                <div className="about-it__button"
                    onClick={() => {
                        changeLightboxContent(children);
                        toggleShowLightbox();
                    }}
                >
                    <p>About it</p> <img src="/static/icons/enter.svg" />
                </div>
            </div>
    )
}*/