import React from "react";

interface IProjectCardProps {
	image: string
	title: string
	short: string 
	link: string 
}

const ProjectCard = ({ image, title, short, link }: IProjectCardProps) => {
	return (
		<div className="relative h-40 border border-black" style={{ backgroundImage: `url(${image})` }}>
			<div className="absolute inset-0 grid place-content-end justify-center text-center bg-gradient-to-b from-transparent to-black">
				<h2 className="text-2xl text-white font-bold">{title}</h2>
				<p className="text-white">{short}</p>
			
				<div className="flex gap-4 my-4 justify-center">
					<a href={link} target="_blank" className="bg-white py-1 px-4 flex gap-2 items-center">
						<b>See it</b> <img src="/static/icons/external-link.svg" className="w-5" />
					</a>
					<button className="bg-yellow-400 py-1 px-4 flex gap-2 items-center">
						<p>About it</p>
						<img src="/static/icons/enter.svg" className="w-4" />
					</button>
				</div>
			</div>
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