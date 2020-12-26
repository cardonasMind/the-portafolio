import react from "react";

import "./index.css";

export default function WorkCard({ image, title, description }) {
    return (
        <div className="work-card">
            <div className="work-card__image" style={{ backgroundImage: `url(${"/images/works/santiamen.png"})` }} />
            <div className="work-card__content">
                <h2>Santiamén</h2>
                
                <p>Santiamén was a fast-food delivery platform where business owners of my location can upload their shit thii wuuehri ehreiqi sadia idhaidh ia Santiamén was a fast-food delivery platform where business owners of my location can upload their shit thii wuuehri ehreiqi sadia idhaidh ia Santiamén was a fast-food delivery platform where b</p>
                
                <div className="work-card__content-button"><p>See it</p></div>
            </div>
        </div>
    )
}