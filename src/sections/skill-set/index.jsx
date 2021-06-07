import react from "react";

import "./index.css";

export default function SkillSet() {
    return (
        <div id="skill-set">
            <div id="skill-set__info">
                <div className="skill-set__info-item">
                    <div className="skill-set__info-color skill-set__info-color_basic" /> <b>Basic</b>
                </div>
                <div className="skill-set__info-item">
                    <div className="skill-set__info-color skill-set__info-color_intermedium" /> <b>Intermedium</b>
                </div>
                <div className="skill-set__info-item">
                    <div className="skill-set__info-color skill-set__info-color_advanced" /> <b>Advanced</b>
                </div>
            </div>
            
            <div id="skill-set__cards">
                <div className="skill-set__cards-group">
                    <p>Design</p>
                    
                    <div className="skill-set__group-items">
                        <div className="skill-set__item skill-set__item_intermedium">
                            <img src="/static/icons/skills/figma.svg" /> Figma
                        </div>
                        <div className="skill-set__item skill-set__item_intermedium">
                            <img src="/static/icons/skills/framer.svg" /> Framer
                        </div>
                    </div>
                </div>
                
                <div className="skill-set__cards-group">
                    <p>Base</p>
                    
                    <div className="skill-set__group-items">
                        <div className="skill-set__item skill-set__item_advanced">
                            <img src="/static/icons/skills/html5.svg" /> HTML5
                        </div>
                        <div className="skill-set__item skill-set__item_advanced">
                            <img src="/static/icons/skills/css3.svg" /> CSS3
                        </div>
                    </div>
                </div>
                
                <div className="skill-set__cards-group">
                    <p>Programming languages</p>
                    
                    <div className="skill-set__group-items">
                        <div className="skill-set__item skill-set__item_advanced">
                            <img src="/static/icons/skills/javascript.svg" /> JavaScript
                        </div>
                        <div className="skill-set__item skill-set__item_basic">
                            <img src="/static/icons/skills/python.svg" /> Python
                        </div>
                    </div>
                </div>
                
                <div className="skill-set__cards-group">
                    <p>Frameworks</p>
                    
                    <div className="skill-set__group-items">
                        <div className="skill-set__item skill-set__item_intermedium">
                            <img src="/static/icons/skills/nextjs.svg" /> NextJS
                        </div>
                        <div className="skill-set__item skill-set__item_intermedium">
                            <img src="/static/icons/skills/reactjs.svg" /> ReactJS
                        </div>
                    </div>
                </div>
                
                <div className="skill-set__cards-group">
                    <p>Version control</p>
                    
                    <div className="skill-set__group-items">
                        <div className="skill-set__item skill-set__item_advanced">
                            <img src="/static/icons/github.svg" /> Git & GitHub
                        </div>
                    </div>
                </div>
                
                <div className="skill-set__cards-group">
                    <p>Utilities</p>
                    
                    <div className="skill-set__group-items">
                        <div className="skill-set__item skill-set__item_basic">
                            <img src="/static/icons/skills/nodejs.svg" /> NodeJS
                        </div>
                        <div className="skill-set__item skill-set__item_basic">
                            <img src="/static/icons/skills/npm.svg" /> NPM
                        </div>
                        <div className="skill-set__item skill-set__item_basic">
                            <img src="/static/icons/skills/webpack.svg" /> Webpack
                        </div>
                        <div className="skill-set__item skill-set__item_basic">
                            <img src="/static/icons/skills/sass.svg" /> Sass
                        </div>
                        <div className="skill-set__item skill-set__item_intermedium">
                            <img src="/static/icons/skills/firebase.svg" /> Firebase
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}