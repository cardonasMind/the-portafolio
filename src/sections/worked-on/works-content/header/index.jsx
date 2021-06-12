import react from "react";

import "./index.css";

export default function Header({ toggleShowLightbox, repo, thanks }) {
    const projectHeaderBackground = { backgroundImage: `url(${"/static/images/sections/worked-on/header.jpg"})` };
    
    return (
        <div id="project-header" style={projectHeaderBackground}>
            <div id="project-header__content">
                <a id="project-header__repo" href={repo} target="_blank">
                    <img src="/static/icons/github.svg" /> Repo
                </a>

                <div id="project-header__technologies-container">
                    Thanks to 
                    <div id="project-header__technologies">
                        { thanks.map(technology => <img src={`/static/icons/skills/${technology}.svg`} />) }
                    </div>
                </div>
            </div>
            
            <div id="project-header__back-button" onClick={toggleShowLightbox}>
                <img src="/static/icons/enter.svg" /> <b>back</b>
            </div>
        </div>
    )
}