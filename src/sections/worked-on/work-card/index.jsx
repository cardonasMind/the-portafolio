import react from "react";

import "./index.css";

export default function WorkCard({ changeLightboxContent, toggleShowLightbox, image, title, short, children }) {
    return (
        <div className="worked-on__card" style={{ backgroundImage: `url(${image})` }}>
            <h2>{title}</h2>
            <p>{short}</p>
            
            <div className="worked-on__button"
                onClick={() => {
                    changeLightboxContent(children);
                    toggleShowLightbox();
                }}
            >
                <b>See it</b>
            </div>
        </div>
    )
}