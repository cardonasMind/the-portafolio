import react from "react";

import "./index.css";

export default function WorkCard({ changeLightboxContent, toggleShowLightbox, image, title, short, children }) {
    return (
        <div className="worked-on__card" style={{ backgroundImage: `url(${image})` }}>
            <h2>{title}</h2>
            <p>{short}</p>
            
            <div className="worked-on__buttons">
                <a className="see-it__button" href="https://www.google.com" target="_blank">
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
        </div>
    )
}