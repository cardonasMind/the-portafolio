import react from "react";

import "./index.css";

export default function SkillSet() {
    return (
        <div className="skill-set">
            <div className="skill-set__info">
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
            
            <div className="skill-set__cards">
                <div className="skill-set__card skill-set__card_advanced">
                    <img src="/images/icons/skills/javascript.svg" /> JavaScript
                </div>
                <div className="skill-set__card skill-set__card_advanced">
                    <img src="/images/icons/skills/html5.svg" /> HTML5
                </div>
                <div className="skill-set__card skill-set__card_advanced">
                    <img src="/images/icons/skills/css3.svg" /> CSS3
                </div>
                <div className="skill-set__card skill-set__card_intermedium">
                    <img src="/images/icons/skills/reactjs.svg" /> ReactJS
                </div>
                <div className="skill-set__card skill-set__card_basic">
                    <img src="/images/icons/skills/npm.svg" /> NPM
                </div>
                <div className="skill-set__card skill-set__card_intermedium">
                    <img src="/images/icons/github.svg" /> Git & GitHub
                </div>
                <div className="skill-set__card skill-set__card_intermedium">
                    <img src="/images/icons/skills/nextjs.png" width="80px" />
                </div>
                <div className="skill-set__card skill-set__card_basic">
                    <img src="/images/icons/skills/webpack.svg" /> Webpack
                </div>
                <div className="skill-set__card skill-set__card_intermedium">
                    <img src="/images/icons/skills/firebase.svg" /> Firebase
                </div>
                <div className="skill-set__card skill-set__card_basic">
                    <img src="/images/icons/skills/nodejs.svg" /> NodeJS
                </div>
                <div className="skill-set__card skill-set__card_intermedium">
                    <img src="/images/icons/skills/sass.svg" /> SASS
                </div>
            </div>
        </div>
    )
}