import react from "react";

import "./index.css";

import WorkCardLightBox from "./lightbox"

export default function WorkCard({ image, title, description, children }) {
    return (
        <div className="work-card">
            <div className="work-card__image" style={{ backgroundImage: `url(${image})` }} />
            <div className="work-card__content">
                <h2>{title}</h2>
                
                <p className="work-card__content-description">{description}</p>
                
                <WorkCardLightBox>
                    {children}
                </WorkCardLightBox>
            </div>
        </div>
    )
}