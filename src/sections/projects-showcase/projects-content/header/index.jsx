import react from "react";

export default function Header({ toggleShowLightbox, repo, thanks }) {
    const projectHeaderBackground = { backgroundImage: `url(${"/static/images/sections/projects/header.jpg"})` };
    
    return (
        <div style={projectHeaderBackground} className="p-4 space-y-4">
			<div className="flex justify-center">
				<div className="border border-black p-4">
					<a className="bg-red-300 hover:bg-red-400 p-2 flex gap-2 justify-center mb-4" href={repo} target="_blank">
						<img src="/static/icons/github.svg" /> Repo
					</a>

					<div id="project-header__technologies-container">
						Thanks to 
						<div className="flex gap-4">
							{ thanks.map((technology, index) => <img key={index} src={`/static/icons/skills/${technology}.svg`} className="w-8" />) }
						</div>
					</div>
				</div>
			</div>
            
            <button onClick={toggleShowLightbox} className="border border-black bg-blue-200 hover:bg-blue-300 py-1 px-4 flex gap-2 items-center">
                <img src="/static/icons/enter.svg" className="w-4 transform rotate-180" /> <b>back</b>
            </button>
        </div>
    )
}